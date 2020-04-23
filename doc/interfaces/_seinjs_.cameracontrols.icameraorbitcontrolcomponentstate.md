[seinjs-camera-controls](../README.md) > ["seinjs"](../modules/_seinjs_.md) > [CameraControls](../modules/_seinjs_.cameracontrols.md) > [ICameraOrbitControlComponentState](../interfaces/_seinjs_.cameracontrols.icameraorbitcontrolcomponentstate.md)

# Interface: ICameraOrbitControlComponentState

## Hierarchy

 [ICameraOrbitControlComponentState](icameraorbitcontrolcomponentstate.md)

**↳ ICameraOrbitControlComponentState**

## Index

### Properties

* [cameraComponentName](_seinjs_.cameracontrols.icameraorbitcontrolcomponentstate.md#cameracomponentname)
* [dampingFactor](_seinjs_.cameracontrols.icameraorbitcontrolcomponentstate.md#dampingfactor)
* [enableDamping](_seinjs_.cameracontrols.icameraorbitcontrolcomponentstate.md#enabledamping)
* [isLockMove](_seinjs_.cameracontrols.icameraorbitcontrolcomponentstate.md#islockmove)
* [isLockRotate](_seinjs_.cameracontrols.icameraorbitcontrolcomponentstate.md#islockrotate)
* [isLockX](_seinjs_.cameracontrols.icameraorbitcontrolcomponentstate.md#islockx)
* [isLockY](_seinjs_.cameracontrols.icameraorbitcontrolcomponentstate.md#islocky)
* [isLockZoom](_seinjs_.cameracontrols.icameraorbitcontrolcomponentstate.md#islockzoom)
* [panMax](_seinjs_.cameracontrols.icameraorbitcontrolcomponentstate.md#panmax)
* [panMin](_seinjs_.cameracontrols.icameraorbitcontrolcomponentstate.md#panmin)
* [panSpeed](_seinjs_.cameracontrols.icameraorbitcontrolcomponentstate.md#panspeed)
* [rotateSpeed](_seinjs_.cameracontrols.icameraorbitcontrolcomponentstate.md#rotatespeed)
* [target](_seinjs_.cameracontrols.icameraorbitcontrolcomponentstate.md#target)
* [zoomMax](_seinjs_.cameracontrols.icameraorbitcontrolcomponentstate.md#zoommax)
* [zoomMin](_seinjs_.cameracontrols.icameraorbitcontrolcomponentstate.md#zoommin)
* [zoomSpeed](_seinjs_.cameracontrols.icameraorbitcontrolcomponentstate.md#zoomspeed)

---

## Properties

<a id="cameracomponentname"></a>

### `<Optional>` cameraComponentName

**● cameraComponentName**: *`string`*

*Inherited from [ICameraOrbitControlComponentState](icameraorbitcontrolcomponentstate.md).[cameraComponentName](icameraorbitcontrolcomponentstate.md#cameracomponentname)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:55*

___
<a id="dampingfactor"></a>

### `<Optional>` dampingFactor

**● dampingFactor**: *`number`*

*Inherited from [ICameraOrbitControlComponentState](icameraorbitcontrolcomponentstate.md).[dampingFactor](icameraorbitcontrolcomponentstate.md#dampingfactor)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:145*

阻尼系数。

*__default__*: 1

___
<a id="enabledamping"></a>

### `<Optional>` enableDamping

**● enableDamping**: *`boolean`*

*Inherited from [ICameraOrbitControlComponentState](icameraorbitcontrolcomponentstate.md).[enableDamping](icameraorbitcontrolcomponentstate.md#enabledamping)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:139*

开启阻尼缓动。

*__default__*: true

___
<a id="islockmove"></a>

### `<Optional>` isLockMove

**● isLockMove**: *`boolean`*

*Inherited from [ICameraOrbitControlComponentState](icameraorbitcontrolcomponentstate.md).[isLockMove](icameraorbitcontrolcomponentstate.md#islockmove)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:85*

是否锁定移动。

*__default__*: false

___
<a id="islockrotate"></a>

### `<Optional>` isLockRotate

**● isLockRotate**: *`boolean`*

*Inherited from [ICameraOrbitControlComponentState](icameraorbitcontrolcomponentstate.md).[isLockRotate](icameraorbitcontrolcomponentstate.md#islockrotate)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:79*

是否锁定旋转。

*__default__*: false

___
<a id="islockx"></a>

### `<Optional>` isLockX

**● isLockX**: *`boolean`*

*Inherited from [ICameraOrbitControlComponentState](icameraorbitcontrolcomponentstate.md).[isLockX](icameraorbitcontrolcomponentstate.md#islockx)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:61*

是否锁定横向旋转。

*__default__*: false

___
<a id="islocky"></a>

### `<Optional>` isLockY

**● isLockY**: *`boolean`*

*Inherited from [ICameraOrbitControlComponentState](icameraorbitcontrolcomponentstate.md).[isLockY](icameraorbitcontrolcomponentstate.md#islocky)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:67*

是否锁定纵向旋转。

*__default__*: false

___
<a id="islockzoom"></a>

### `<Optional>` isLockZoom

**● isLockZoom**: *`boolean`*

*Inherited from [ICameraOrbitControlComponentState](icameraorbitcontrolcomponentstate.md).[isLockZoom](icameraorbitcontrolcomponentstate.md#islockzoom)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:73*

是否锁定缩放。

*__default__*: false

___
<a id="panmax"></a>

### `<Optional>` panMax

**● panMax**: *`Vector3`*

*Inherited from [ICameraOrbitControlComponentState](icameraorbitcontrolcomponentstate.md).[panMax](icameraorbitcontrolcomponentstate.md#panmax)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:103*

平移的最大边界。

*__default__*: \[Infinity,Infinity,Infinity\]

___
<a id="panmin"></a>

### `<Optional>` panMin

**● panMin**: *`Vector3`*

*Inherited from [ICameraOrbitControlComponentState](icameraorbitcontrolcomponentstate.md).[panMin](icameraorbitcontrolcomponentstate.md#panmin)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:109*

平移的最小边界。

*__default__*: \[-Infinity,-Infinity,-Infinity\]

___
<a id="panspeed"></a>

### `<Optional>` panSpeed

**● panSpeed**: *`number`*

*Inherited from [ICameraOrbitControlComponentState](icameraorbitcontrolcomponentstate.md).[panSpeed](icameraorbitcontrolcomponentstate.md#panspeed)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:115*

平移速度。

*__default__*: 1

___
<a id="rotatespeed"></a>

### `<Optional>` rotateSpeed

**● rotateSpeed**: *`number`*

*Inherited from [ICameraOrbitControlComponentState](icameraorbitcontrolcomponentstate.md).[rotateSpeed](icameraorbitcontrolcomponentstate.md#rotatespeed)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:121*

旋转速度。

*__default__*: 1

___
<a id="target"></a>

###  target

**● target**: *`Vector3` \| `SceneActor` \| `SceneComponent`*

*Inherited from [ICameraOrbitControlComponentState](icameraorbitcontrolcomponentstate.md).[target](icameraorbitcontrolcomponentstate.md#target)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:133*

相机控制器朝向的目标，也是整个轨迹球的中点。

*__todo:__*: if actor or component, following it

___
<a id="zoommax"></a>

### `<Optional>` zoomMax

**● zoomMax**: *`number`*

*Inherited from [ICameraOrbitControlComponentState](icameraorbitcontrolcomponentstate.md).[zoomMax](icameraorbitcontrolcomponentstate.md#zoommax)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:91*

允许的最大缩放值。

*__default__*: Infinity

___
<a id="zoommin"></a>

### `<Optional>` zoomMin

**● zoomMin**: *`number`*

*Inherited from [ICameraOrbitControlComponentState](icameraorbitcontrolcomponentstate.md).[zoomMin](icameraorbitcontrolcomponentstate.md#zoommin)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:97*

允许的最小缩放值。

*__default__*: \-Infinity

___
<a id="zoomspeed"></a>

### `<Optional>` zoomSpeed

**● zoomSpeed**: *`number`*

*Inherited from [ICameraOrbitControlComponentState](icameraorbitcontrolcomponentstate.md).[zoomSpeed](icameraorbitcontrolcomponentstate.md#zoomspeed)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:127*

缩放。

*__default__*: 1

___

