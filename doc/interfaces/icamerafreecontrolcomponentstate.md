[seinjs-camera-controls](../README.md) > [ICameraFreeControlComponentState](../interfaces/icamerafreecontrolcomponentstate.md)

# Interface: ICameraFreeControlComponentState

`CameraFreeControlComponent`的初始化参数类型。

## Hierarchy

**ICameraFreeControlComponentState**

↳  [ICameraFreeControlComponentState](_seinjs_.cameracontrols.icamerafreecontrolcomponentstate.md)

## Index

### Properties

* [cameraComponentName](icamerafreecontrolcomponentstate.md#cameracomponentname)
* [customMovingX](icamerafreecontrolcomponentstate.md#custommovingx)
* [customMovingY](icamerafreecontrolcomponentstate.md#custommovingy)
* [dampingFactor](icamerafreecontrolcomponentstate.md#dampingfactor)
* [enableDamping](icamerafreecontrolcomponentstate.md#enabledamping)
* [eulerOrder](icamerafreecontrolcomponentstate.md#eulerorder)
* [isLockMove](icamerafreecontrolcomponentstate.md#islockmove)
* [isLockRotate](icamerafreecontrolcomponentstate.md#islockrotate)
* [isLockX](icamerafreecontrolcomponentstate.md#islockx)
* [isLockZoom](icamerafreecontrolcomponentstate.md#islockzoom)
* [panSpeed](icamerafreecontrolcomponentstate.md#panspeed)
* [panXMax](icamerafreecontrolcomponentstate.md#panxmax)
* [panXMin](icamerafreecontrolcomponentstate.md#panxmin)
* [panYMax](icamerafreecontrolcomponentstate.md#panymax)
* [panYMin](icamerafreecontrolcomponentstate.md#panymin)
* [reverseRotateAndPan](icamerafreecontrolcomponentstate.md#reverserotateandpan)
* [rotateSpeed](icamerafreecontrolcomponentstate.md#rotatespeed)
* [useZBounding](icamerafreecontrolcomponentstate.md#usezbounding)
* [zoomMax](icamerafreecontrolcomponentstate.md#zoommax)
* [zoomMin](icamerafreecontrolcomponentstate.md#zoommin)
* [zoomSpeed](icamerafreecontrolcomponentstate.md#zoomspeed)

---

## Properties

<a id="cameracomponentname"></a>

### `<Optional>` cameraComponentName

**● cameraComponentName**: *`string`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:55*

Actor下摄像机组件的名称，默认为根组件。

*__default__*: 'root'

___
<a id="custommovingx"></a>

### `<Optional>` customMovingX

**● customMovingX**: *`Vector3`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:169*

自定义X轴的平移控制方向，用于标准的正交坐标系满足不了需求的时候。

*__default__*: null

___
<a id="custommovingy"></a>

### `<Optional>` customMovingY

**● customMovingY**: *`Vector3`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:175*

自定义Y轴的平移控制方向，用于标准的正交坐标系满足不了需求的时候。

*__default__*: null

___
<a id="dampingfactor"></a>

### `<Optional>` dampingFactor

**● dampingFactor**: *`number`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:157*

阻尼系数。

*__default__*: 1

___
<a id="enabledamping"></a>

### `<Optional>` enableDamping

**● enableDamping**: *`boolean`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:151*

开启阻尼缓动。

*__default__*: true

___
<a id="eulerorder"></a>

### `<Optional>` eulerOrder

**● eulerOrder**: *`string`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:85*

欧拉旋转顺序。

*__default__*: 'XYZ'

___
<a id="islockmove"></a>

### `<Optional>` isLockMove

**● isLockMove**: *`boolean`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:79*

是否锁定移动。

*__default__*: false

___
<a id="islockrotate"></a>

### `<Optional>` isLockRotate

**● isLockRotate**: *`boolean`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:73*

是否锁定旋转。

*__default__*: false

___
<a id="islockx"></a>

### `<Optional>` isLockX

**● isLockX**: *`boolean`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:61*

是否锁定横向旋转。

*__default__*: false

___
<a id="islockzoom"></a>

### `<Optional>` isLockZoom

**● isLockZoom**: *`boolean`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:67*

是否锁定缩放。

*__default__*: false

___
<a id="panspeed"></a>

### `<Optional>` panSpeed

**● panSpeed**: *`number`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:133*

平移速度。

*__default__*: 1

___
<a id="panxmax"></a>

### `<Optional>` panXMax

**● panXMax**: *`number`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:103*

允许的最大X平移边界。

*__default__*: Infinity

___
<a id="panxmin"></a>

### `<Optional>` panXMin

**● panXMin**: *`number`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:109*

允许的最小X平移边界。

*__default__*: \-Infinity

___
<a id="panymax"></a>

### `<Optional>` panYMax

**● panYMax**: *`number`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:115*

允许的最大Y平移边界。

*__default__*: Infinity

___
<a id="panymin"></a>

### `<Optional>` panYMin

**● panYMin**: *`number`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:121*

允许的最小Y平移边界。

*__default__*: \-Infinity

___
<a id="reverserotateandpan"></a>

### `<Optional>` reverseRotateAndPan

**● reverseRotateAndPan**: *`boolean`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:163*

在鼠标状态下，反转旋转和平移的行为，改为左键平移，右键旋转。

*__default__*: false

___
<a id="rotatespeed"></a>

### `<Optional>` rotateSpeed

**● rotateSpeed**: *`number`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:139*

旋转速度。

*__default__*: 1

___
<a id="usezbounding"></a>

### `<Optional>` useZBounding

**● useZBounding**: *`boolean`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:127*

是否使用Z轴的平移来取代Y轴平移。

*__default__*: false

___
<a id="zoommax"></a>

### `<Optional>` zoomMax

**● zoomMax**: *`number`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:91*

允许的最大缩放值。

*__default__*: Infinity

___
<a id="zoommin"></a>

### `<Optional>` zoomMin

**● zoomMin**: *`number`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:97*

允许的最小缩放值。

*__default__*: \-Infinity

___
<a id="zoomspeed"></a>

### `<Optional>` zoomSpeed

**● zoomSpeed**: *`number`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:145*

缩放。

*__default__*: 1

___

