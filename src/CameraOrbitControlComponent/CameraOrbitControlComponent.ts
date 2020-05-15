/**
 * @File   : CameraOrbitControlComponent.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 5:52:40 PM
 * @Description:
 */
import * as Sein from 'seinjs';

/**
 * @hidden
 */
const MOUSE = {
  LEFT: 0,
  MID: 1,
  RIGHT: 2
};

/**
 * @hidden
 */
const STATE = {
  NONE: -1,
  MOVE: 0,
  ZOOM: 1,
  PAN: 2
};

/**
 * @hidden
 */
const deltaEye = new Sein.Vector3();
/**
 * @hidden
 */
const deltaSpherical = new Sein.Spherical();

/**
 * @hidden
 */
function isSceneActor(value: any): value is Sein.SceneActor {
  return (value as Sein.SceneActor).isSceneActor;
}

/**
 * @hidden
 */
function isSceneComponent(value: any): value is Sein.SceneComponent {
  return (value as Sein.SceneComponent).isSceneComponent;
}

/**
 * `CameraOrbitControlComponent`的初始化参数类型。
 */
export interface ICameraOrbitControlComponentState {
  cameraComponentName?: string;
  /**
   * 是否锁定横向旋转。
   * 
   * @default false
   */
  isLockX?: boolean;
  /**
   * 是否锁定纵向旋转。
   * 
   * @default false
   */
  isLockY?: boolean;
  /**
   * 是否锁定缩放。
   * 
   * @default false
   */
  isLockZoom?: boolean;
  /**
   * 是否锁定旋转。
   * 
   * @default false
   */
  isLockRotate?: boolean;
  /**
   * 是否锁定移动。
   * 
   * @default false
   */
  isLockMove?: boolean;
  /**
   * 允许的最大缩放值。
   * 
   * @default Infinity
   */
  zoomMax?: number;
  /**
   * 允许的最小缩放值。
   *
   * @default -Infinity
   */
  zoomMin?: number;
  /**
   * 平移的最大边界。
   *
   * @default [Infinity,Infinity,Infinity]
   */
  panMax?: Sein.Vector3;
  /**
   * 平移的最小边界。
   *
   * @default [-Infinity,-Infinity,-Infinity]
   */
  panMin?: Sein.Vector3;
  /**
   * 平移速度。
   * 
   * @default 1
   */
  panSpeed?: number;
  /**
   * 旋转速度。
   * 
   * @default 1
   */
  rotateSpeed?: number;
  /**
   * 缩放。
   * 
   * @default 1
   */
  zoomSpeed?: number;
  /**
   * 相机控制器朝向的目标，也是整个轨迹球的中点。
   * 
   * @todo: if actor or component, following it
   */
  target: Sein.Vector3 | Sein.SceneActor | Sein.SceneComponent;
  /**
   * 开启阻尼缓动。
   * 
   * @default true
   */
  enableDamping?: boolean;
  /**
   * 阻尼系数。
   * 
   * @default 1
   */
  dampingFactor?: number;
}

/**
 * 绕轨摄像机控制器，用于为指定的Actor下挂载的摄相机组件提供添加**标准鼠标或触摸**控制。
 * 此控制器将会使得摄像机在绕着世界中一点或者Actor的轨迹上运动，若想让摄像机自有得运动，请用[CameraFreeControlComponent](../camerafreecontrolcomponent)。
 * 
 * @noInheritDoc
 */
@Sein.SClass({className: 'CameraOrbitControlComponent'})
export default class CameraOrbitControlComponent extends Sein.Component<ICameraOrbitControlComponentState>  {
  /**
   * 是否锁定横向旋转。
   */
  public isLockX: boolean;
  /**
   * 是否锁定纵向旋转。
   */
  public isLockY: boolean;
  /**
   * 是否锁定缩放。
   */
  public isLockZoom: boolean;
  /**
   * 是否锁定旋转。
   */
  public isLockRotate: boolean;
  /**
   * 是否锁定移动。
   */
  public isLockMove: boolean;
  /**
   * 是否已经开启。
   */
  public isEnabled: boolean;
  /**
   * 允许的最大缩放值。
   */
  public zoomMax: number;
  /**
   * 允许的最小缩放值。
   */
  public zoomMin: number;
  /**
   * 允许的最大平移边界。
   */
  public panMax: Sein.Vector3;
  /**
   * 允许的最小平移边界。
   */
  public panMin: Sein.Vector3;
  /**
   * 平移速度。
   */
  public panSpeed: number;
  /**
   * 旋转速度。
   */
  public rotateSpeed: number;
  /**
   * 缩放速度。
   */
  public zoomSpeed: number;
  /**
   * 开启阻尼缓动。
   */
  public enableDamping: boolean;
  /**
   * 阻尼系数。
   */
  public dampingFactor: number;

  private _camera: Sein.CameraComponent;
  private _target: Sein.Vector3;
  private _eye: Sein.Vector3 = new Sein.Vector3();
  private _spherical: Sein.Spherical = new Sein.Spherical();
  private _originSpherical: Sein.Spherical = new Sein.Spherical();
  private _radius: number;
  private _mouseInfo: {
    startX: number,
    startY: number,
    isDown: boolean,
    startPointerDistance: number,
    state: any,
    dampState: any
  } = null;
  private _tmpVec = new Sein.Vector3();
  private _tmpUp = new Sein.Vector3();
  private overBounding: boolean = false;

  /**
   * 当前是否正在控制。
   */
  get active() {
    return this._mouseInfo.state !== STATE.NONE;
  }

  /**
   * 当前是否正在缓动。
   */
  get damping() {
    return this.enableDamping && (
      Math.abs(deltaSpherical.radius) > 0.01 ||
      Math.abs(deltaSpherical.theta) > 0.01 ||
      Math.abs(deltaSpherical.phi) > 0.01 ||
      deltaEye.length() > 0.01
    );
  }

  /**
   * 获取当前目标。
   */
  get target() {
    return this._target;
  }

  /**
   * 初始化，继承请先`super.onInit()`。
   */
  public onInit(options: ICameraOrbitControlComponentState) {
    this.switchCamera(options.cameraComponentName);
    this.switchTarget(options.target);

    this.isLockY = !!options.isLockY;
    this.isLockX = !!options.isLockX;
    this.isLockZoom = !!options.isLockZoom;
    this.isLockRotate = !!options.isLockRotate;
    this.isLockMove = !!options.isLockMove;
    this.zoomMax = options.zoomMax || Infinity;
    this.zoomMin = options.zoomMin || -Infinity;
    this.panMax = options.panMax;
    this.panMin = options.panMin;
    this.panSpeed = options.panSpeed || 1;
    this.rotateSpeed = options.rotateSpeed || 1;
    this.zoomSpeed = options.zoomSpeed || 1;
    this.enableDamping = !!options.enableDamping;
    this.dampingFactor = options.dampingFactor || 1;
    this.isEnabled = false;
  }

  /**
   * 添加到世界，继承请先`super.onAdd()`。
   */
  public onAdd() {
    const {event} = this.getGame();

    event.add('Resize', this.onResize);

    this.onResize();
    this.enable();
  }

  /**
   * 每一帧更新，继承请先`super.onUpdate()`。
   */
  public onUpdate() {
    this.updateTransform();
  }

  /**
   * 继承请先`super.onUnLink()`。
   */
  public onUnLink() {
    this.disable();
  }

  /**
   * 继承请先`super.reUnLink()`。
   */
  public reUnLink() {
    this.enable();
  }

  /**
   * 销毁，继承请先`super.onUpdate()`。
   */
  public onDestroy() {
    const {event} = this.getGame();

    event.remove('Resize', this.onResize);

    this.disable();
  }

  /**
   * 通过组件名称`cameraComponentName`来切换当前控制的摄相机。
   */
  public switchCamera(cameraComponentName: string = 'root') {
    this._camera = this.getOwner().findComponentByName(cameraComponentName);

    if (!this._camera) {
      throw new Sein.UnmetRequireException(this, 'You muse give a valid component name !.')
    }

    if (!this._camera.isCameraComponent) {
      throw new Sein.TypeConflictException(this._camera, 'Camera', this);
    }

    if (this._target) {
      this.resetSpherical();
    }
  }

  /**
   * 切换当前的目标。
   */
  public switchTarget(target: ICameraOrbitControlComponentState['target']) {
    if (isSceneActor(target)) {
      this._target = target.transform.absolutePosition.clone();
    } else if (isSceneComponent(target)) {
      this._target = target.absolutePosition.clone();
    } else {
      this._target = target.clone();
    }

    if (this._camera) {
      this.resetSpherical();
    }
  }

  /**
   * 启动控制器。
   */
  public enable() {
    if (this.isEnabled) {
      return;
    }

    this._mouseInfo = {
      startX: 0,
      startY: 0,
      isDown: false,
      startPointerDistance: 0,
      state: STATE.NONE,
      dampState: STATE.NONE
    };

    const {hid, deviceInfo} = this.getGame();

    hid.add('Wheel', this.onWheel);

    if (deviceInfo.touchable) {
      hid.add('TouchStart', this.onTouchStart);
    } else {
      hid.add('ContextMenu', this.onContextMenu);
      hid.add('MouseDown', this.onMouseDown);
    }

    this.resetSpherical();
    this.isEnabled = true;
  }

  /**
   * 关闭控制器。
   */
  public disable() {
    if (!this.isEnabled) {
      return;
    }

    const {hid, deviceInfo} = this.getGame();

    hid.remove('Wheel', this.onWheel);

    if (deviceInfo.touchable) {
      hid.remove('TouchStart', this.onTouchStart);
      hid.remove('TouchMove', this.onTouchMove);
      hid.remove('TouchEnd', this.onTouchEnd);
    } else {
      hid.remove('ContextMenu', this.onContextMenu);
      hid.remove('MouseDown', this.onMouseDown);
      hid.remove('MouseMove', this.onMouseMove);
      hid.remove('MouseUp', this.onMouseUp);
      hid.remove('MouseOut', this.onMouseUp);
    }

    this.isEnabled = false;
  }

  private resetSpherical() {
    this._spherical.setFromVector3(this._eye.copy(this._camera.position).subtract(this._target));
    this._originSpherical.copy(this._spherical);
  }

  private rotate(x: number, y: number) {
    if (this.isLockRotate) {
      return;
    }

    const {startX, startY} = this._mouseInfo;

    let theta = (x - startX) / this._radius * -this.rotateSpeed;
    let phi = (y - startY) / this._radius * -this.rotateSpeed;

    if (Math.abs(theta) < .01 && Math.abs(phi) < .01) {
      return;
    }

    if (this.isLockX) {
      theta = 0;
    }

    if (this.isLockY) {
      phi = 0;
    }

    deltaSpherical.theta = theta;
    deltaSpherical.phi = phi;

    this._mouseInfo.startX = x;
    this._mouseInfo.startY = y;
    this._mouseInfo.dampState = STATE.MOVE;
  }

  private scale(s: number) {
    if (this.isLockZoom) {
      return;
    }

    const {radius} = this._spherical;
    const maxRadius = this.zoomMax;
    const minRadius = this.zoomMin;
    const newRadius = radius * s;

    if (newRadius > maxRadius) {
      deltaSpherical.radius = maxRadius - radius;
    } else if (newRadius < minRadius) {
      deltaSpherical.radius = minRadius - radius;
    } else {
      deltaSpherical.radius = (newRadius - radius) * this.zoomSpeed;
    }

    this._mouseInfo.dampState = STATE.ZOOM;
  };

  private move(x: number, y: number) {
    if (this.isLockMove) {
      return;
    }

    const camera = this._camera;
    const {position} = camera;
    const {panMax, panMin} = this;

    this._tmpVec.copy(camera.rightVector);
    this._tmpUp.copy(camera.upVector);

    const pan = this.setVector3Length(this._tmpVec, x);
    pan.add(this.setVector3Length(this._tmpUp, -y));
    pan.scale(this.panSpeed);

    if (panMax || panMin) {
      const res = this._tmpVec.copy(position).add(pan);

      if (res.x >= panMax.x) {
        pan.x = panMax.x - position.x;
        this.overBounding = true;
      } else if (res.x <= panMin.x) {
        pan.x = panMin.x - position.x;
        this.overBounding = true;
      }

      if (res.y >= panMax.y) {
        pan.y = panMax.y - position.y;
        this.overBounding = true;
      } else if (res.y <= panMin.y) {
        pan.y = panMin.y - position.y;
        this.overBounding = true;
      }

      if (res.z >= panMax.z) {
        pan.z = panMax.z - position.z;
        this.overBounding = true;
      } else if (res.x <= panMin.x) {
        pan.z = panMin.z - position.z;
        this.overBounding = true;
      }
    }

    deltaEye.copy(pan);

    this._mouseInfo.dampState = STATE.PAN;
  };

  private updateTransform() {
    if (!this.damping) {
      return;
    }

    this._eye.copy(this._camera.position).subtract(this._target);

    switch (this._mouseInfo.dampState) {
      case STATE.PAN:
        this._target.add(deltaEye);
        break;
      case STATE.MOVE:
        this._spherical.theta += deltaSpherical.theta;
        this._spherical.phi += deltaSpherical.phi;
        this._spherical.makeSafe();
        this._spherical.toVector3(this._eye);
        break;
      case STATE.ZOOM:
        this._spherical.radius += deltaSpherical.radius;
        this._spherical.makeSafe();
        this._spherical.toVector3(this._eye);
        break;
      default:
        break;
    }

    this._camera.position.copy(this._eye.add(this._target));
    this._camera.lookAt(this._target);

    if (!this.enableDamping) {
      deltaEye.set(0, 0, 0);
      deltaSpherical.theta = deltaSpherical.phi = 0;
      return;
    }

    const factor = 1 - this.dampingFactor;

    if (this.overBounding) {
      deltaEye.set(0, 0, 0);
      this.overBounding = false;
    } else {
      deltaEye.scale(factor);
    }

    deltaSpherical.theta *= factor;
    deltaSpherical.phi *= factor;

    const newRadius = (deltaSpherical.radius *= factor) + this._spherical.radius;
    if (newRadius > this.zoomMax || newRadius < this.zoomMin) {
      deltaSpherical.radius = 0;
    }
  }

  private onResize = () => {
    const {width, height} = this.getGame().bound;

    this._radius = (width + height) / 4;
  }

  private onMouseDown = (event: Sein.IMouseEvent) => {
    this._mouseInfo.isDown = true;

    switch (event.button) {
      case MOUSE.LEFT:
        this._mouseInfo.startX = event.pageX;
        this._mouseInfo.startY = event.pageY;
        this._mouseInfo.state = STATE.MOVE;
        break;
      case MOUSE.RIGHT:
        this._mouseInfo.startX = event.pageX;
        this._mouseInfo.startY = event.pageY;
        this._mouseInfo.state = STATE.PAN;
        break;
      default:
        break;
    }

    const {hid} = this.getGame();
    hid.add('MouseMove', this.onMouseMove);
    hid.add('MouseUp', this.onMouseUp);
    hid.add('MouseOut', this.onMouseUp);
    hid.remove('MouseDown', this.onMouseDown);
  }

  private onMouseMove = (event: Sein.IMouseEvent) => {
    if (!this._mouseInfo.isDown) {
      return;
    }

    switch (this._mouseInfo.state) {
      case STATE.MOVE:
        this.handleMouseMove(event);
        break;
      case STATE.PAN:
        this.handleMousePan(event);
        break;
      default:
        break;
    }
  }

  private onMouseUp = (event: Sein.IMouseEvent) => {
    this._mouseInfo.isDown = false;
    this._mouseInfo.state = STATE.NONE;

    const {hid} = this.getGame();
    hid.add('MouseDown', this.onMouseDown);
    hid.remove('MouseMove', this.onMouseMove);
    hid.remove('MouseUp', this.onMouseUp);
    hid.remove('MouseOut', this.onMouseUp);
  }

  public onContextMenu = () => {

  }

  private onTouchStart = (event: Sein.ITouchEvent) => {
    this._mouseInfo.isDown = true;

    const touch0 = event.touches[0];

    this._mouseInfo.startX = touch0.pageX;
    this._mouseInfo.startY = touch0.pageY;

    switch (event.touches.length) {
      case 1:
        this._mouseInfo.state = STATE.MOVE;
        break;
      case 2:
        this._mouseInfo.state = STATE.ZOOM;
        break;
      case 3:
        this._mouseInfo.state = STATE.PAN;
        break;
      default:
        break;
    }

    const {hid} = this.getGame();
    hid.add('TouchMove', this.onTouchMove);
    hid.add('TouchEnd', this.onTouchEnd);
    hid.remove('TouchStart', this.onTouchStart);
  }

  private onTouchMove = (event: Sein.ITouchEvent) => {
    if (!this._mouseInfo.isDown) {
      return;
    }

    switch (this._mouseInfo.state) {
      case STATE.MOVE:
        if (event.touches.length === 1) {
          this.handleToucheMove(event);
        }
        break;
      case STATE.ZOOM:
        if (event.touches.length === 2) {
          this.handleToucheZoom(event);
        }
        break;
      case STATE.PAN:
        if (event.touches.length === 3) {
          this.handleTouchePan(event);
        }
        break;
      default:
        break;
    }
  }

  private onTouchEnd = (event: Sein.ITouchEvent) => {
    this._mouseInfo.isDown = false;
    this._mouseInfo.state = STATE.NONE;

    const {hid} = this.getGame();
    hid.add('TouchStart', this.onTouchStart);
    hid.remove('TouchMove', this.onTouchMove);
    hid.remove('TouchEnd', this.onTouchEnd);
  }

  private handleMousePan = (event: MouseEvent) => {
    const distanceX = event.pageX - this._mouseInfo.startX;
    const distanceY = event.pageY - this._mouseInfo.startY;
    this._mouseInfo.startX = event.pageX;
    this._mouseInfo.startY = event.pageY;

    this.move(distanceX * .1, distanceY * .1);
  }

  private handleMouseMove = (event: MouseEvent | Touch) => {
    this.rotate(event.pageX, event.pageY);
  }

  private handleToucheZoom = (evt: TouchEvent) => {
    const event = evt.touches[0];
    let delta = event.pageY - this._mouseInfo.startY;
    this._mouseInfo.startX = event.pageX;
    this._mouseInfo.startY = event.pageY;

    if (delta < -25) {
      delta = -25;
    } else if (delta > 25) {
      delta = 25;
    }

    const s = delta * .004 + 1;
    this.scale(s);
  }

  private handleTouchePan = (evt: TouchEvent) => {
    const event = evt.touches[0];
    const distanceX = event.pageX - this._mouseInfo.startX;
    const distanceY = event.pageY - this._mouseInfo.startY;

    this._mouseInfo.startX = event.pageX;
    this._mouseInfo.startY = event.pageY;

    this.move(distanceX * .01, -distanceY * .01);
  }

  private handleToucheMove(event: TouchEvent) {
    this.handleMouseMove(event.touches[0]);
  }

  private onWheel = (event: MouseWheelEvent) => {
    let deltaY = event.deltaY;
    if (deltaY < -100) {
      deltaY = -100;
    } else if (deltaY > 100) {
      deltaY = 100;
    }

    const s = deltaY * .001 + 1;
    this.scale(s);
  }

  private setVector3Length(vector: Sein.Vector3, length: number) {
    return vector.normalize().scale(length);
  }
}
