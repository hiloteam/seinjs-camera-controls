[seinjs-camera-controls](../README.md) > ["seinjs"](../modules/_seinjs_.md) > [CameraControls](../modules/_seinjs_.cameracontrols.md) > [ICameraFreeControlComponentState](../interfaces/_seinjs_.cameracontrols.icamerafreecontrolcomponentstate.md)

# Interface: ICameraFreeControlComponentState

## Hierarchy

 [ICameraFreeControlComponentState](icamerafreecontrolcomponentstate.md)

**↳ ICameraFreeControlComponentState**

## Index

### Properties

* [cameraComponentName](_seinjs_.cameracontrols.icamerafreecontrolcomponentstate.md#cameracomponentname)
* [customMovingX](_seinjs_.cameracontrols.icamerafreecontrolcomponentstate.md#custommovingx)
* [customMovingY](_seinjs_.cameracontrols.icamerafreecontrolcomponentstate.md#custommovingy)
* [dampingFactor](_seinjs_.cameracontrols.icamerafreecontrolcomponentstate.md#dampingfactor)
* [enableDamping](_seinjs_.cameracontrols.icamerafreecontrolcomponentstate.md#enabledamping)
* [eulerOrder](_seinjs_.cameracontrols.icamerafreecontrolcomponentstate.md#eulerorder)
* [isLockMove](_seinjs_.cameracontrols.icamerafreecontrolcomponentstate.md#islockmove)
* [isLockRotate](_seinjs_.cameracontrols.icamerafreecontrolcomponentstate.md#islockrotate)
* [isLockX](_seinjs_.cameracontrols.icamerafreecontrolcomponentstate.md#islockx)
* [isLockZoom](_seinjs_.cameracontrols.icamerafreecontrolcomponentstate.md#islockzoom)
* [panSpeed](_seinjs_.cameracontrols.icamerafreecontrolcomponentstate.md#panspeed)
* [panXMax](_seinjs_.cameracontrols.icamerafreecontrolcomponentstate.md#panxmax)
* [panXMin](_seinjs_.cameracontrols.icamerafreecontrolcomponentstate.md#panxmin)
* [panYMax](_seinjs_.cameracontrols.icamerafreecontrolcomponentstate.md#panymax)
* [panYMin](_seinjs_.cameracontrols.icamerafreecontrolcomponentstate.md#panymin)
* [reverseRotateAndPan](_seinjs_.cameracontrols.icamerafreecontrolcomponentstate.md#reverserotateandpan)
* [rotateSpeed](_seinjs_.cameracontrols.icamerafreecontrolcomponentstate.md#rotatespeed)
* [useZBounding](_seinjs_.cameracontrols.icamerafreecontrolcomponentstate.md#usezbounding)
* [zoomMax](_seinjs_.cameracontrols.icamerafreecontrolcomponentstate.md#zoommax)
* [zoomMin](_seinjs_.cameracontrols.icamerafreecontrolcomponentstate.md#zoommin)
* [zoomSpeed](_seinjs_.cameracontrols.icamerafreecontrolcomponentstate.md#zoomspeed)

---

## Properties

<a id="cameracomponentname"></a>

### `<Optional>` cameraComponentName

**● cameraComponentName**: *`string`*

*Inherited from [ICameraFreeControlComponentState](icamerafreecontrolcomponentstate.md).[cameraComponentName](icamerafreecontrolcomponentstate.md#cameracomponentname)*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:55*

Actor下摄像机组件的名称，默认为根组件。

*__default__*: 'root'

___
<a id="custommovingx"></a>

### `<Optional>` customMovingX

**● customMovingX**: *`Vector3`*

*Inherited from [ICameraFreeControlComponentState](icamerafreecontrolcomponentstate.md).[customMovingX](icamerafreecontrolcomponentstate.md#custommovingx)*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:169*

自定义X轴的平移控制方向，用于标准的正交坐标系满足不了需求的时候。

*__default__*: null

___
<a id="custommovingy"></a>

### `<Optional>` customMovingY

**● customMovingY**: *`Vector3`*

*Inherited from [ICameraFreeControlComponentState](icamerafreecontrolcomponentstate.md).[customMovingY](icamerafreecontrolcomponentstate.md#custommovingy)*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:175*

自定义Y轴的平移控制方向，用于标准的正交坐标系满足不了需求的时候。

*__default__*: null

___
<a id="dampingfactor"></a>

### `<Optional>` dampingFactor

**● dampingFactor**: *`number`*

*Inherited from [ICameraFreeControlComponentState](icamerafreecontrolcomponentstate.md).[dampingFactor](icamerafreecontrolcomponentstate.md#dampingfactor)*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:157*

阻尼系数。

*__default__*: 1

___
<a id="enabledamping"></a>

### `<Optional>` enableDamping

**● enableDamping**: *`boolean`*

*Inherited from [ICameraFreeControlComponentState](icamerafreecontrolcomponentstate.md).[enableDamping](icamerafreecontrolcomponentstate.md#enabledamping)*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:151*

开启阻尼缓动。

*__default__*: true

___
<a id="eulerorder"></a>

### `<Optional>` eulerOrder

**● eulerOrder**: *`string`*

*Inherited from [ICameraFreeControlComponentState](icamerafreecontrolcomponentstate.md).[eulerOrder](icamerafreecontrolcomponentstate.md#eulerorder)*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:85*

欧拉旋转顺序。

*__default__*: 'XYZ'

___
<a id="islockmove"></a>

### `<Optional>` isLockMove

**● isLockMove**: *`boolean`*

*Inherited from [ICameraFreeControlComponentState](icamerafreecontrolcomponentstate.md).[isLockMove](icamerafreecontrolcomponentstate.md#islockmove)*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:79*

是否锁定移动。

*__default__*: false

___
<a id="islockrotate"></a>

### `<Optional>` isLockRotate

**● isLockRotate**: *`boolean`*

*Inherited from [ICameraFreeControlComponentState](icamerafreecontrolcomponentstate.md).[isLockRotate](icamerafreecontrolcomponentstate.md#islockrotate)*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:73*

是否锁定旋转。

*__default__*: false

___
<a id="islockx"></a>

### `<Optional>` isLockX

**● isLockX**: *`boolean`*

*Inherited from [ICameraFreeControlComponentState](icamerafreecontrolcomponentstate.md).[isLockX](icamerafreecontrolcomponentstate.md#islockx)*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:61*

是否锁定横向旋转。

*__default__*: false

___
<a id="islockzoom"></a>

### `<Optional>` isLockZoom

**● isLockZoom**: *`boolean`*

*Inherited from [ICameraFreeControlComponentState](icamerafreecontrolcomponentstate.md).[isLockZoom](icamerafreecontrolcomponentstate.md#islockzoom)*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:67*

是否锁定缩放。

*__default__*: false

___
<a id="panspeed"></a>

### `<Optional>` panSpeed

**● panSpeed**: *`number`*

*Inherited from [ICameraFreeControlComponentState](icamerafreecontrolcomponentstate.md).[panSpeed](icamerafreecontrolcomponentstate.md#panspeed)*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:133*

平移速度。

*__default__*: 1

___
<a id="panxmax"></a>

### `<Optional>` panXMax

**● panXMax**: *`number`*

*Inherited from [ICameraFreeControlComponentState](icamerafreecontrolcomponentstate.md).[panXMax](icamerafreecontrolcomponentstate.md#panxmax)*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:103*

允许的最大X平移边界。

*__default__*: Infinity

___
<a id="panxmin"></a>

### `<Optional>` panXMin

**● panXMin**: *`number`*

*Inherited from [ICameraFreeControlComponentState](icamerafreecontrolcomponentstate.md).[panXMin](icamerafreecontrolcomponentstate.md#panxmin)*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:109*

允许的最小X平移边界。

*__default__*: \-Infinity

___
<a id="panymax"></a>

### `<Optional>` panYMax

**● panYMax**: *`number`*

*Inherited from [ICameraFreeControlComponentState](icamerafreecontrolcomponentstate.md).[panYMax](icamerafreecontrolcomponentstate.md#panymax)*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:115*

允许的最大Y平移边界。

*__default__*: Infinity

___
<a id="panymin"></a>

### `<Optional>` panYMin

**● panYMin**: *`number`*

*Inherited from [ICameraFreeControlComponentState](icamerafreecontrolcomponentstate.md).[panYMin](icamerafreecontrolcomponentstate.md#panymin)*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:121*

允许的最小Y平移边界。

*__default__*: \-Infinity

___
<a id="reverserotateandpan"></a>

### `<Optional>` reverseRotateAndPan

**● reverseRotateAndPan**: *`boolean`*

*Inherited from [ICameraFreeControlComponentState](icamerafreecontrolcomponentstate.md).[reverseRotateAndPan](icamerafreecontrolcomponentstate.md#reverserotateandpan)*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:163*

在鼠标状态下，反转旋转和平移的行为，改为左键平移，右键旋转。

*__default__*: false

___
<a id="rotatespeed"></a>

### `<Optional>` rotateSpeed

**● rotateSpeed**: *`number`*

*Inherited from [ICameraFreeControlComponentState](icamerafreecontrolcomponentstate.md).[rotateSpeed](icamerafreecontrolcomponentstate.md#rotatespeed)*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:139*

旋转速度。

*__default__*: 1

___
<a id="usezbounding"></a>

### `<Optional>` useZBounding

**● useZBounding**: *`boolean`*

*Inherited from [ICameraFreeControlComponentState](icamerafreecontrolcomponentstate.md).[useZBounding](icamerafreecontrolcomponentstate.md#usezbounding)*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:127*

是否使用Z轴的平移来取代Y轴平移。

*__default__*: false

___
<a id="zoommax"></a>

### `<Optional>` zoomMax

**● zoomMax**: *`number`*

*Inherited from [ICameraFreeControlComponentState](icamerafreecontrolcomponentstate.md).[zoomMax](icamerafreecontrolcomponentstate.md#zoommax)*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:91*

允许的最大缩放值。

*__default__*: Infinity

___
<a id="zoommin"></a>

### `<Optional>` zoomMin

**● zoomMin**: *`number`*

*Inherited from [ICameraFreeControlComponentState](icamerafreecontrolcomponentstate.md).[zoomMin](icamerafreecontrolcomponentstate.md#zoommin)*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:97*

允许的最小缩放值。

*__default__*: \-Infinity

___
<a id="zoomspeed"></a>

### `<Optional>` zoomSpeed

**● zoomSpeed**: *`number`*

*Inherited from [ICameraFreeControlComponentState](icamerafreecontrolcomponentstate.md).[zoomSpeed](icamerafreecontrolcomponentstate.md#zoomspeed)*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:145*

缩放。

*__default__*: 1

___

