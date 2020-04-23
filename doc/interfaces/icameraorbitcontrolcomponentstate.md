[seinjs-camera-controls](../README.md) > [ICameraOrbitControlComponentState](../interfaces/icameraorbitcontrolcomponentstate.md)

# Interface: ICameraOrbitControlComponentState

`CameraOrbitControlComponent`的初始化参数类型。

## Hierarchy

**ICameraOrbitControlComponentState**

↳  [ICameraOrbitControlComponentState](_seinjs_.cameracontrols.icameraorbitcontrolcomponentstate.md)

## Index

### Properties

* [cameraComponentName](icameraorbitcontrolcomponentstate.md#cameracomponentname)
* [dampingFactor](icameraorbitcontrolcomponentstate.md#dampingfactor)
* [enableDamping](icameraorbitcontrolcomponentstate.md#enabledamping)
* [isLockMove](icameraorbitcontrolcomponentstate.md#islockmove)
* [isLockRotate](icameraorbitcontrolcomponentstate.md#islockrotate)
* [isLockX](icameraorbitcontrolcomponentstate.md#islockx)
* [isLockY](icameraorbitcontrolcomponentstate.md#islocky)
* [isLockZoom](icameraorbitcontrolcomponentstate.md#islockzoom)
* [panMax](icameraorbitcontrolcomponentstate.md#panmax)
* [panMin](icameraorbitcontrolcomponentstate.md#panmin)
* [panSpeed](icameraorbitcontrolcomponentstate.md#panspeed)
* [rotateSpeed](icameraorbitcontrolcomponentstate.md#rotatespeed)
* [target](icameraorbitcontrolcomponentstate.md#target)
* [zoomMax](icameraorbitcontrolcomponentstate.md#zoommax)
* [zoomMin](icameraorbitcontrolcomponentstate.md#zoommin)
* [zoomSpeed](icameraorbitcontrolcomponentstate.md#zoomspeed)

---

## Properties

<a id="cameracomponentname"></a>

### `<Optional>` cameraComponentName

**● cameraComponentName**: *`string`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:55*

___
<a id="dampingfactor"></a>

### `<Optional>` dampingFactor

**● dampingFactor**: *`number`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:145*

阻尼系数。

*__default__*: 1

___
<a id="enabledamping"></a>

### `<Optional>` enableDamping

**● enableDamping**: *`boolean`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:139*

开启阻尼缓动。

*__default__*: true

___
<a id="islockmove"></a>

### `<Optional>` isLockMove

**● isLockMove**: *`boolean`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:85*

是否锁定移动。

*__default__*: false

___
<a id="islockrotate"></a>

### `<Optional>` isLockRotate

**● isLockRotate**: *`boolean`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:79*

是否锁定旋转。

*__default__*: false

___
<a id="islockx"></a>

### `<Optional>` isLockX

**● isLockX**: *`boolean`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:61*

是否锁定横向旋转。

*__default__*: false

___
<a id="islocky"></a>

### `<Optional>` isLockY

**● isLockY**: *`boolean`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:67*

是否锁定纵向旋转。

*__default__*: false

___
<a id="islockzoom"></a>

### `<Optional>` isLockZoom

**● isLockZoom**: *`boolean`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:73*

是否锁定缩放。

*__default__*: false

___
<a id="panmax"></a>

### `<Optional>` panMax

**● panMax**: *`Vector3`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:103*

平移的最大边界。

*__default__*: \[Infinity,Infinity,Infinity\]

___
<a id="panmin"></a>

### `<Optional>` panMin

**● panMin**: *`Vector3`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:109*

平移的最小边界。

*__default__*: \[-Infinity,-Infinity,-Infinity\]

___
<a id="panspeed"></a>

### `<Optional>` panSpeed

**● panSpeed**: *`number`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:115*

平移速度。

*__default__*: 1

___
<a id="rotatespeed"></a>

### `<Optional>` rotateSpeed

**● rotateSpeed**: *`number`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:121*

旋转速度。

*__default__*: 1

___
<a id="target"></a>

###  target

**● target**: *`Vector3` \| `SceneActor` \| `SceneComponent`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:133*

相机控制器朝向的目标，也是整个轨迹球的中点。

*__todo:__*: if actor or component, following it

___
<a id="zoommax"></a>

### `<Optional>` zoomMax

**● zoomMax**: *`number`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:91*

允许的最大缩放值。

*__default__*: Infinity

___
<a id="zoommin"></a>

### `<Optional>` zoomMin

**● zoomMin**: *`number`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:97*

允许的最小缩放值。

*__default__*: \-Infinity

___
<a id="zoomspeed"></a>

### `<Optional>` zoomSpeed

**● zoomSpeed**: *`number`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:127*

缩放。

*__default__*: 1

___

