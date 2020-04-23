[seinjs-camera-controls](../README.md) > [CameraFreeControlComponent](../classes/camerafreecontrolcomponent.md)

# Class: CameraFreeControlComponent

自由摄像机控制器，用于为指定的Actor下挂载的摄相机组件提供添加**标准鼠标或触摸**控制。 此控制器将会使得摄像机在世界中自由得**漫游**，若想让摄像机绕某个Actor或一点转动，请用[CameraOrbitControlComponent](../cameraorbitcontrolcomponent)。

## Hierarchy

 `Component`<[ICameraFreeControlComponentState](../interfaces/icamerafreecontrolcomponentstate.md)>

**↳ CameraFreeControlComponent**

↳  [CameraFreeControlComponent](_seinjs_.cameracontrols.camerafreecontrolcomponent.md)

## Index

### Properties

* [customMovingX](camerafreecontrolcomponent.md#custommovingx)
* [customMovingY](camerafreecontrolcomponent.md#custommovingy)
* [dampingFactor](camerafreecontrolcomponent.md#dampingfactor)
* [enableDamping](camerafreecontrolcomponent.md#enabledamping)
* [isEnabled](camerafreecontrolcomponent.md#isenabled)
* [isLockMove](camerafreecontrolcomponent.md#islockmove)
* [isLockRotate](camerafreecontrolcomponent.md#islockrotate)
* [isLockX](camerafreecontrolcomponent.md#islockx)
* [isLockZoom](camerafreecontrolcomponent.md#islockzoom)
* [panSpeed](camerafreecontrolcomponent.md#panspeed)
* [panXMax](camerafreecontrolcomponent.md#panxmax)
* [panXMin](camerafreecontrolcomponent.md#panxmin)
* [panYMax](camerafreecontrolcomponent.md#panymax)
* [panYMin](camerafreecontrolcomponent.md#panymin)
* [reverseRotateAndPan](camerafreecontrolcomponent.md#reverserotateandpan)
* [rotateSpeed](camerafreecontrolcomponent.md#rotatespeed)
* [useZBounding](camerafreecontrolcomponent.md#usezbounding)
* [zoomMax](camerafreecontrolcomponent.md#zoommax)
* [zoomMin](camerafreecontrolcomponent.md#zoommin)
* [zoomSpeed](camerafreecontrolcomponent.md#zoomspeed)

### Accessors

* [active](camerafreecontrolcomponent.md#active)
* [damping](camerafreecontrolcomponent.md#damping)

### Methods

* [disable](camerafreecontrolcomponent.md#disable)
* [enable](camerafreecontrolcomponent.md#enable)
* [onAdd](camerafreecontrolcomponent.md#onadd)
* [onContextMenu](camerafreecontrolcomponent.md#oncontextmenu)
* [onDestroy](camerafreecontrolcomponent.md#ondestroy)
* [onInit](camerafreecontrolcomponent.md#oninit)
* [onUpdate](camerafreecontrolcomponent.md#onupdate)
* [switchCamera](camerafreecontrolcomponent.md#switchcamera)

---

## Properties

<a id="custommovingx"></a>

###  customMovingX

**● customMovingX**: *`Vector3`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:257*

自定义X轴的平移控制方向，用于标准的正交坐标系满足不了需求的时候。

___
<a id="custommovingy"></a>

###  customMovingY

**● customMovingY**: *`Vector3`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:261*

自定义Y轴的平移控制方向，用于标准的正交坐标系满足不了需求的时候。

___
<a id="dampingfactor"></a>

###  dampingFactor

**● dampingFactor**: *`number`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:249*

阻尼系数。

___
<a id="enabledamping"></a>

###  enableDamping

**● enableDamping**: *`boolean`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:245*

开启阻尼缓动。

___
<a id="isenabled"></a>

###  isEnabled

**● isEnabled**: *`boolean`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:205*

是否已经开启。

___
<a id="islockmove"></a>

###  isLockMove

**● isLockMove**: *`boolean`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:201*

是否锁定移动。

___
<a id="islockrotate"></a>

###  isLockRotate

**● isLockRotate**: *`boolean`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:197*

是否锁定旋转。

___
<a id="islockx"></a>

###  isLockX

**● isLockX**: *`boolean`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:189*

是否锁定横向旋转。

___
<a id="islockzoom"></a>

###  isLockZoom

**● isLockZoom**: *`boolean`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:193*

是否锁定缩放。

___
<a id="panspeed"></a>

###  panSpeed

**● panSpeed**: *`number`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:233*

平移速度。

___
<a id="panxmax"></a>

###  panXMax

**● panXMax**: *`number`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:217*

允许的最大X平移边界。

___
<a id="panxmin"></a>

###  panXMin

**● panXMin**: *`number`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:221*

允许的最小X平移边界。

___
<a id="panymax"></a>

###  panYMax

**● panYMax**: *`number`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:225*

允许的最大Y平移边界。

___
<a id="panymin"></a>

###  panYMin

**● panYMin**: *`number`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:229*

允许的最小Y平移边界。

___
<a id="reverserotateandpan"></a>

###  reverseRotateAndPan

**● reverseRotateAndPan**: *`boolean`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:253*

在鼠标状态下，反转旋转和平移的行为，改为左键平移，右键旋转。

___
<a id="rotatespeed"></a>

###  rotateSpeed

**● rotateSpeed**: *`number`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:237*

旋转速度。

___
<a id="usezbounding"></a>

###  useZBounding

**● useZBounding**: *`boolean`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:265*

是否使用Z轴的平移来取代Y轴平移。

___
<a id="zoommax"></a>

###  zoomMax

**● zoomMax**: *`number`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:209*

允许的最大缩放值。

___
<a id="zoommin"></a>

###  zoomMin

**● zoomMin**: *`number`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:213*

允许的最小缩放值。

___
<a id="zoomspeed"></a>

###  zoomSpeed

**● zoomSpeed**: *`number`*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:241*

缩放速度。

___

## Accessors

<a id="active"></a>

###  active

getactive(): `boolean`

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:274*

当前是否正在控制。

**Returns:** `boolean`

___
<a id="damping"></a>

###  damping

getdamping(): `boolean`

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:281*

当前是否正在缓动。

**Returns:** `boolean`

___

## Methods

<a id="disable"></a>

###  disable

▸ **disable**(): `void`

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:393*

关闭控制器。

**Returns:** `void`

___
<a id="enable"></a>

###  enable

▸ **enable**(): `void`

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:361*

启动控制器。

**Returns:** `void`

___
<a id="onadd"></a>

###  onAdd

▸ **onAdd**(): `void`

*Overrides Component.onAdd*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:325*

添加到世界，继承请先`super.onAdd()`。

**Returns:** `void`

___
<a id="oncontextmenu"></a>

###  onContextMenu

▸ **onContextMenu**(): `void`

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:599*

**Returns:** `void`

___
<a id="ondestroy"></a>

###  onDestroy

▸ **onDestroy**(): `void`

*Overrides Component.onDestroy*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:339*

销毁，继承请先`super.onUpdate()`。

**Returns:** `void`

___
<a id="oninit"></a>

###  onInit

▸ **onInit**(options?: *[ICameraFreeControlComponentState](../interfaces/icamerafreecontrolcomponentstate.md)*): `void`

*Overrides Component.onInit*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:292*

初始化，继承请先`super.onInit()`。

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` options | [ICameraFreeControlComponentState](../interfaces/icamerafreecontrolcomponentstate.md) |  {} |

**Returns:** `void`

___
<a id="onupdate"></a>

###  onUpdate

▸ **onUpdate**(): `void`

*Overrides Component.onUpdate*

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:332*

每一帧更新，继承请先`super.onUpdate()`。

**Returns:** `void`

___
<a id="switchcamera"></a>

###  switchCamera

▸ **switchCamera**(cameraComponentName?: *`string`*): `void`

*Defined in CameraFreeControlComponent/CameraFreeControlComponent.ts:346*

通过组件名称`cameraComponentName`来切换当前控制的摄相机。

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` cameraComponentName | `string` | &quot;root&quot; |

**Returns:** `void`

___

