/**
 * @File   : ActorObserveControlComponent.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/1/2018, 5:20:10 PM
 * @Description:
 */
import * as Sein from 'seinjs';

/**
 * @hidden
 */
const tempEuler = new Sein.Euler();
tempEuler.order = 'XYZ';
/**
 * @hidden
 */
const tempQuat = new Sein.Quaternion();
/**
 * @hidden
 */
const tempVector = new Sein.Vector3();
let tempScaleDelta = 0;
/**
 * @hidden
 */
const tempEulerXYDelta = new Sein.Vector2(0, 0);
/**
 * @hidden
 */
const tempPanDelta = new Sein.Vector2(0, 0);

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
 * `ActorObserveControlComponent`的初始化参数类型。
 */
export interface IActorObserveControlComponentState {
  /**
   * 是否锁定绕X轴旋转。
   * 
   * @default false
   */
  isLockX?: boolean;
  /**
   * 是否锁定绕Y轴旋转。
   * 
   * @default false
   */
  isLockY?: boolean;
  /**
   * 是否锁定缩放。
   * 
   * @default false
   */
  isLockScale?: boolean;
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
   * 欧拉旋转顺序。
   * 
   * @default 'XYZ'
   */
  eulerOrder?: string;
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
}

/**
 * Actor观察期组件，用于挂载任意Actor上来对其进行观察。
 * 注意此控制器控制的不是摄像机！
 * 
 * @noInheritDoc
 */
@Sein.SClass({className: 'ActorObserveControlComponent'})
export default class ActorObserveControlComponent extends Sein.Component<IActorObserveControlComponentState> {
  /**
   * 是否锁定绕X轴旋转。
   */
  public isLockX: boolean;
  /**
   * 是否锁定绕Y轴旋转。
   */
  public isLockY: boolean;
  /**
   * 是否锁定缩放。
   */
  public isLockScale: boolean;
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
   * 平移速度。
   */
  public panSpeed: number;
  /**
   * 旋转速度。
   */
  public rotateSpeed: number;
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

  private _mouseInfo: any = {};

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
  public onInit(options: IActorObserveControlComponentState = {}) {
    this.isEnabled = false;

    this.isLockX = !!options.isLockX;
    this.isLockY = !!options.isLockY;
    this.isLockScale = !!options.isLockScale;
    this.isLockRotate = !!options.isLockRotate;
    this.isLockMove = !!options.isLockMove;
    this.zoomMax = options.zoomMax || Infinity;
    this.zoomMin = options.zoomMin || -Infinity;
    this.enableDamping = !!options.enableDamping;
    this.dampingFactor = options.dampingFactor || 1;
    this.panSpeed = options.panSpeed || 1;
    this.rotateSpeed = options.rotateSpeed || 1;
    this.reverseRotateAndPan = !!options.reverseRotateAndPan;

    if (options.eulerOrder) {
      tempEuler.order = options.eulerOrder;
    }
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
   * 手动设置四元数。
   */
  public setQuat(x: number, y: number, z: number, w: number) {
    tempQuat.x = x;
    tempQuat.y = y;
    tempQuat.z = z;
    tempQuat.w = w;
    tempEuler.fromQuat(tempQuat);

    this.getRoot<Sein.SceneComponent>().quaternion.copy(tempQuat);
  }

  /**
   * 启动控制器。
   */
  public enable() {
    if (this.isEnabled) {
      return;
    }

    const root = this.getRoot<Sein.SceneComponent>();

    tempEuler.x = root.rotation.x;
    tempEuler.y = root.rotation.y;
    tempEuler.z = root.rotation.z;

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

    if (!this.isLockY) {
      tempEulerXYDelta.y = y;
    } else {
      tempEulerXYDelta.y = 0;
    }

    if (!this.isLockX) {
      tempEulerXYDelta.x = x;
    } else {
      tempEulerXYDelta.x = 0;
    }
  }

  private scale(s: number) {
    if (this.isLockScale) {
      return;
    }

    const transform = this.getRoot<Sein.SceneComponent>();
    tempScaleDelta = transform.scale.x * s - transform.scale.x;
  };

  private move(x: number, y: number) {
    if (this.isLockMove) {
      return;
    }

    tempPanDelta.x = x * -.1;
    tempPanDelta.y = y * -.1;
  };

  private updateTransform() {
    if (!this.damping) {
      return;
    }

    const transform = this.getRoot<Sein.SceneComponent>();

    if (tempScaleDelta) {
      let scale = transform.scale.x + tempScaleDelta;

      if (scale > this.zoomMax) {
        scale = this.zoomMax;
      }

      if (scale < this.zoomMin) {
        scale = this.zoomMin;
      }

      transform.setScale(scale, scale, scale);
    }

    tempEuler.x += tempEulerXYDelta.x * this.rotateSpeed;
    tempEuler.y += tempEulerXYDelta.y * this.rotateSpeed;
    transform.quaternion.fromEuler(tempEuler);

    transform.position.x += tempPanDelta.x * this.panSpeed;
    transform.position.y += tempPanDelta.y * this.panSpeed;

    if (!this.enableDamping) {
      tempEulerXYDelta.set(0, 0);
      tempScaleDelta = 0;
      tempPanDelta.set(0, 0);
      return;
    }

    const factor = 1 - this.dampingFactor;

    tempEulerXYDelta.scale(factor);
    tempPanDelta.scale(factor);
    tempScaleDelta *= factor;
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

  private onContextMenu = () => {

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
    if (!this._mouseInfo.isDown || !event.touches[0]) {
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

    const s = deltaY * .001 + 1;
    this.scale(s);
  }

  private handleMousePan = (event: Sein.IMouseEvent) => {
    const distanceX = event.pageX - this._mouseInfo.startX;
    const distanceY = event.pageY - this._mouseInfo.startY;

    this._mouseInfo.startX = event.pageX;
    this._mouseInfo.startY = event.pageY;
    this.getRoot<Sein.SceneComponent>().worldMatrix.getScaling(tempVector);

    this.move(distanceX * .2 * tempVector.x, distanceY * .2 * tempVector.y);
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

    this.move(distanceX * .01, -distanceY * .01);
  }

  private handleToucheMove(event: TouchEvent) {
    this.handleMouseMove(event.touches[0]);
  }
}
