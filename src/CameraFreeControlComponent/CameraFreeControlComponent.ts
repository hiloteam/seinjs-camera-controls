/**
 * @File   : CameraFreeControlComponent.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/1/2018, 5:20:10 PM
 * @Description:
 */
import * as Sein from 'seinjs';

/**
 * @hidden
 */
let tempScaleDelta = 0;
/**
 * @hidden
 */
const tempEulerXYDelta = new Sein.Vector2(0, 0);
/**
 * @hidden
 */
const tempQuat = new Sein.Quaternion();
/**
 * @hidden
 */
const tempPanDelta = new Sein.Vector2(0, 0);
/**
 * @hidden
 */
const tempUp = new Sein.Vector3(0, 1, 0);

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
 * `CameraFreeControlComponent`的初始化参数类型。
 */
export interface ICameraFreeControlComponentState {
  /**
   * Actor下摄像机组件的名称，默认为根组件。
   * 
   * @default 'root'
   */
  cameraComponentName?: string;
  /**
   * 是否锁定绕X轴旋转。
   * 
   * @default false
   */
  isLockX?: boolean;
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
   * 允许的最大X平移边界。
   *
   * @default Infinity
   */
  panXMax?: number;
  /**
   * 允许的最小X平移边界。
   *
   * @default -Infinity
   */
  panXMin?: number;
  /**
   * 允许的最大Y平移边界。
   *
   * @default Infinity
   */
  panYMax?: number;
  /**
   * 允许的最小Y平移边界。
   *
   * @default -Infinity
   */
  panYMin?: number;
  /**
   * 允许的最大X旋转边界，为和X轴正向夹角的弧度值。
   * 
   * @range 0 ~ PI / 2
   */
  rotateXMax?: number;
  /**
   * 允许的最小X旋转边界，为和X轴负向夹角的弧度值。
   * 
   * @range 0 ~ PI / 2
   */
  rotateXMin?: number;
  /**
   * 是否使用Z轴的平移来取代Y轴平移。
   *
   * @default false
   */
  useZBounding?: boolean;
  /**
   * 平移速度。
   * 
   * @default 1
   */
  panSpeed?: number;
  /**
   * X轴旋转速度。
   * 
   * @default 1
   */
  rotateXSpeed?: number;
  /**
   * X轴旋转速度。
   * 
   * @default 1
   */
  rotateYSpeed?: number;
  /**
   * 缩放。
   * 
   * @default 1
   */
  zoomSpeed?: number;
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
  /**
   * 在鼠标状态下，反转旋转和平移的行为，改为左键平移，右键旋转。
   * 
   * @default false
   */
  reverseRotateAndPan?: boolean;
  /**
   * 自定义X轴的平移控制方向，用于标准的正交坐标系满足不了需求的时候。
   * 
   * @default null
   */
  customMovingX?: Sein.Vector3;
  /**
   * 自定义Y轴的平移控制方向，用于标准的正交坐标系满足不了需求的时候。
   * 
   * @default null
   */
  customMovingY?: Sein.Vector3;
}

/**
 * 自由摄像机控制器，用于为指定的Actor下挂载的摄相机组件提供添加**标准鼠标或触摸**控制。
 * 此控制器将会使得摄像机在世界中自由得**漫游**，若想让摄像机绕某个Actor或一点转动，请用[CameraOrbitControlComponent](../cameraorbitcontrolcomponent)。
 * 
 * @noInheritDoc
 */
@Sein.SClass({className: 'CameraFreeControlComponent'})
export default class CameraFreeControlComponent extends Sein.Component<ICameraFreeControlComponentState> {
  /**
   * 是否锁定绕X轴旋转。
   */
  public isLockX: boolean;
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
   * 允许的最大X平移边界。
   */
  public panXMax: number;
  /**
   * 允许的最小X平移边界。
   */
  public panXMin: number;
  /**
   * 允许的最大Y平移边界。
   */
  public panYMax: number;
  /**
   * 允许的最小Y平移边界。
   */
  public panYMin: number;
  /**
   * 允许的最大X旋转边界，为和Y轴正向夹角的余弦值。
   * 
   * @range 0 ~ 1
   */
  public rotateXMax: number;
  /**
   * 允许的最小X旋转边界，为和Y轴正向夹角的余弦值。
   * 
   * @range 0 ~ -1
   */
  public rotateXMin: number;
  /**
   * 平移速度。
   */
  public panSpeed: number;
  /**
   * X轴旋转速度。
   */
  public rotateXSpeed: number;
  /**
   * Y轴旋转速度。
   */
  public rotateYSpeed: number;
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
  /**
   * 在鼠标状态下，反转旋转和平移的行为，改为左键平移，右键旋转。
   */
  public reverseRotateAndPan: boolean;
  /**
   * 自定义X轴的平移控制方向，用于标准的正交坐标系满足不了需求的时候。
   */
  public customMovingX: Sein.Vector3;
  /**
   * 自定义Y轴的平移控制方向，用于标准的正交坐标系满足不了需求的时候。
   */
  public customMovingY: Sein.Vector3;
  /**
   * 是否使用Z轴的平移来取代Y轴平移。
   */
  public useZBounding: boolean;

  private _camera: Sein.CameraComponent;
  private _mouseInfo: any = {};
  private _currentScale = 1;
  private _rotateXMaxCos: number = 0;
  private _rotateXMinCos: number = 0;

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
    return Math.abs(tempEulerXYDelta.x) > 0.001
      || Math.abs(tempEulerXYDelta.y) > 0.001
      || Math.abs(tempScaleDelta) > 0.001
      || Math.abs(tempPanDelta.x) > 0.001
      || Math.abs(tempPanDelta.y) > 0.001;
  }

  /**
   * 初始化，继承请先`super.onInit()`。
   */
  public onInit(options: ICameraFreeControlComponentState = {}) {
    this.switchCamera(options.cameraComponentName);

    this.isLockX = !!options.isLockX;
    this.isLockZoom = !!options.isLockZoom;
    this.isLockRotate = !!options.isLockRotate;
    this.isLockMove = !!options.isLockMove;
    this.zoomMax = options.zoomMax || Infinity;
    this.zoomMin = options.zoomMin || -Infinity;
    this.panXMax = options.panXMax || Infinity;
    this.panXMin = options.panXMin || -Infinity;
    this.panYMax = options.panYMax || Infinity;
    this.panYMin = options.panYMin || -Infinity;
    this.rotateXMax = options.rotateXMax;
    this.rotateXMin = options.rotateXMin;
    this._rotateXMaxCos = options.rotateXMax ? Math.cos(Math.PI / 2 -options.rotateXMax) : 1;
    this._rotateXMinCos = options.rotateXMin ? Math.cos(Math.PI / 2 + options.rotateXMin) : -1;
    this.enableDamping = !!options.enableDamping;
    this.dampingFactor = options.dampingFactor || 1;
    this.panSpeed = options.panSpeed || 1;
    this.rotateXSpeed = options.rotateXSpeed || 1;
    this.rotateYSpeed = options.rotateYSpeed || 1;
    this.zoomSpeed = options.zoomSpeed || 1;
    this.reverseRotateAndPan = !!options.reverseRotateAndPan;
    this.customMovingX = options.customMovingX;
    this.customMovingY = options.customMovingY;
    this.useZBounding = !!options.useZBounding;

    this.isEnabled = false;
  }

  /**
   * 添加到世界，继承请先`super.onAdd()`。
   */
  public onAdd() {
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
      state: STATE.NONE
    };

    const {hid, deviceInfo} = this.getGame();

    hid.add('Wheel', this.onWheel);

    if (deviceInfo.touchable) {
      hid.add('TouchStart', this.onTouchStart);
    } else {
      hid.add('ContextMenu', this.onContextMenu);
      hid.add('MouseDown', this.onMouseDown);
    }

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

  private rotate(distanceX: number, distanceY: number) {
    if (this.isLockRotate) {
      return;
    }

    const x = distanceY / 100;
    const y = distanceX / 100;

    tempEulerXYDelta.y = y;

    if (this.isLockX) {
      tempEulerXYDelta.x = 0;
    } else {
      tempEulerXYDelta.x = x;
    }
  }

  private scale(s: number) {
    if (this.isLockZoom) {
      return;
    }

    tempScaleDelta = s;
    const scale = this._currentScale + tempScaleDelta;

    if (scale >= this.zoomMax) {
      tempScaleDelta = this.zoomMax - this._currentScale;
    }

    if (scale <= this.zoomMin) {
      tempScaleDelta = this.zoomMin - this._currentScale;
    }
  }

  private move(mx: number, my: number) {
    if (this.isLockMove) {
      return;
    }

    const {position} = this._camera;

    tempPanDelta.x = mx * -.1 * this.panSpeed;
    tempPanDelta.y = my * -.1 * this.panSpeed;

    const x = position.x;
    const y = this.useZBounding ? position.z : position.y;

    const resX = x + tempPanDelta.x;
    const resY = y + tempPanDelta.y;
    if (resX >= this.panXMax) {
      tempPanDelta.x = this.panXMax - position.x;
    } else if (resX <= this.panXMin) {
      tempPanDelta.x = this.panXMin - position.x;
    }

    if (resY >= this.panYMax) {
      tempPanDelta.y = this.panYMax - y;
    } else if (resY <= this.panYMin) {
      tempPanDelta.y = this.panYMin - y;
    }
  }

  private updateTransform() {
    if (!this.damping) {
      return;
    }

    const transform = this._camera;
    const {position} = transform;

    if (tempScaleDelta) {
      if (Sein.isOrthographicCameraComponent(transform)) {
        const {width, height} = this.getGame().bound;
        const deltaY = tempScaleDelta * height / width;

        transform.left -= tempScaleDelta;
        transform.right += tempScaleDelta;

        transform.bottom -= deltaY;
        transform.top += deltaY;
      } else {
        const {forwardVector} = transform;

        position.add(forwardVector.scale(tempScaleDelta));
      }

      this._currentScale += tempScaleDelta;
    }

    const rotateDeltaX = tempEulerXYDelta.x * this.rotateXSpeed;
    transform.quaternion.rotateX(rotateDeltaX);
    tempQuat.copy(transform.quaternion).invert();
    tempUp.set(0, 1, 0).transformQuat(tempQuat);
    transform.rotate(tempUp, -tempEulerXYDelta.y * this.rotateYSpeed);
    
    position.add(
      (this.customMovingX ? this.customMovingX.clone()  : transform.rightVector).scale(tempPanDelta.x)
    ).add(
      (this.customMovingY ? this.customMovingY.clone() : transform.upVector).scale(tempPanDelta.y)
    );

    if (!this.enableDamping) {
      tempEulerXYDelta.set(0, 0);
      tempScaleDelta = 0;
      tempPanDelta.set(0, 0);
      return;
    }

    const factor = 1 - this.dampingFactor;

    tempPanDelta.scale(factor);
    if (this.panXMax !== Infinity || this.panXMin !== -Infinity) {
      const x = position.x;
      const resX = x + tempPanDelta.x;
      if (resX >= this.panXMax || resX <= this.panXMin) {
        tempPanDelta.x = 0;
      }
    }
    
    if (this.panYMax !== Infinity || this.panYMin !== -Infinity) {
      const y = this.useZBounding ? position.z : position.y;
      const resY = y + tempPanDelta.y;
      if (resY >= this.panYMax || resY <= this.panYMin) {
        tempPanDelta.y = 0;
      }
    }

    if (this._currentScale < this.zoomMax && this._currentScale > this.zoomMin) {
      tempScaleDelta *= factor;
    } else {
      tempScaleDelta = 0;
    }

    tempEulerXYDelta.scale(factor);
    if (this.rotateXMax !== 1 || this.rotateXMin !== -1) {
      const {forwardVector} = this._camera;
      const cos = forwardVector.dot(Sein.World.UP);

      if (cos < this._rotateXMinCos) {
        tempEulerXYDelta.x = 0;
        transform.quaternion.rotateX(-rotateDeltaX);
      }

      if (cos > this._rotateXMaxCos) {
        tempEulerXYDelta.x = 0;
        transform.quaternion.rotateX(-rotateDeltaX);
      }
    }
  }

  private onMouseDown = (event: Sein.IMouseEvent) => {
    this._mouseInfo.isDown = true;

    switch (event.button) {
      case MOUSE.LEFT:
        this._mouseInfo.startX = event.pageX;
        this._mouseInfo.startY = event.pageY;
        this._mouseInfo.state = this.reverseRotateAndPan ? STATE.PAN : STATE.MOVE;
        break;
      case MOUSE.RIGHT:
        this._mouseInfo.startX = event.pageX;
        this._mouseInfo.startY = event.pageY;
        this._mouseInfo.state = this.reverseRotateAndPan ? STATE.MOVE : STATE.PAN;
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

    this._mouseInfo.startX = event.touches[0].pageX;
    this._mouseInfo.startY = event.touches[0].pageY;

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
        this.handleToucheMove(event);
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

  private onWheel = (event: Sein.IWheelEvent) => {
    let deltaY = event.deltaY;
    if (deltaY < -100) {
      deltaY = -100;
    } else if (deltaY > 100) {
      deltaY = 100;
    }

    const s = deltaY * .01 * this.zoomSpeed;
    this.scale(s);
  }

  private handleMousePan = (event: Sein.IMouseEvent) => {
    const distanceX = event.pageX - this._mouseInfo.startX;
    const distanceY = event.pageY - this._mouseInfo.startY;

    this._mouseInfo.startX = event.pageX;
    this._mouseInfo.startY = event.pageY;

    this.move(distanceX * .1, distanceY * .1);
  }

  private handleMouseMove = (event: Sein.IMouseEvent | Sein.ITouch) => {
    const distanceX = event.pageX - this._mouseInfo.startX;
    const distanceY = event.pageY - this._mouseInfo.startY;
    this._mouseInfo.startX = event.pageX;
    this._mouseInfo.startY = event.pageY;

    this.rotate(distanceX, distanceY);
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

    this.move(distanceX * .1, -distanceY * .1);
  }

  private handleToucheMove(event: TouchEvent) {
    this.handleMouseMove(event.touches[0]);
  }
}
