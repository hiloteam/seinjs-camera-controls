[seinjs-camera-controls](../README.md) > [CameraOrbitControlComponent](../classes/cameraorbitcontrolcomponent.md)

# Class: CameraOrbitControlComponent

绕轨摄像机控制器，用于为指定的Actor下挂载的摄相机组件提供添加**标准鼠标或触摸**控制。 此控制器将会使得摄像机在绕着世界中一点或者Actor的轨迹上运动，若想让摄像机自有得运动，请用[CameraFreeControlComponent](../camerafreecontrolcomponent)。

## Hierarchy

 `Component`<[ICameraOrbitControlComponentState](../interfaces/icameraorbitcontrolcomponentstate.md)>

**↳ CameraOrbitControlComponent**

↳  [CameraOrbitControlComponent](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md)

## Index

### Properties

* [dampingFactor](cameraorbitcontrolcomponent.md#dampingfactor)
* [enableDamping](cameraorbitcontrolcomponent.md#enabledamping)
* [isEnabled](cameraorbitcontrolcomponent.md#isenabled)
* [isLockMove](cameraorbitcontrolcomponent.md#islockmove)
* [isLockRotate](cameraorbitcontrolcomponent.md#islockrotate)
* [isLockX](cameraorbitcontrolcomponent.md#islockx)
* [isLockY](cameraorbitcontrolcomponent.md#islocky)
* [isLockZoom](cameraorbitcontrolcomponent.md#islockzoom)
* [panMax](cameraorbitcontrolcomponent.md#panmax)
* [panMin](cameraorbitcontrolcomponent.md#panmin)
* [panSpeed](cameraorbitcontrolcomponent.md#panspeed)
* [rotateSpeed](cameraorbitcontrolcomponent.md#rotatespeed)
* [zoomMax](cameraorbitcontrolcomponent.md#zoommax)
* [zoomMin](cameraorbitcontrolcomponent.md#zoommin)
* [zoomSpeed](cameraorbitcontrolcomponent.md#zoomspeed)

### Accessors

* [active](cameraorbitcontrolcomponent.md#active)
* [damping](cameraorbitcontrolcomponent.md#damping)
* [target](cameraorbitcontrolcomponent.md#target)

### Methods

* [disable](cameraorbitcontrolcomponent.md#disable)
* [enable](cameraorbitcontrolcomponent.md#enable)
* [onAdd](cameraorbitcontrolcomponent.md#onadd)
* [onContextMenu](cameraorbitcontrolcomponent.md#oncontextmenu)
* [onDestroy](cameraorbitcontrolcomponent.md#ondestroy)
* [onInit](cameraorbitcontrolcomponent.md#oninit)
* [onUpdate](cameraorbitcontrolcomponent.md#onupdate)
* [switchCamera](cameraorbitcontrolcomponent.md#switchcamera)
* [switchTarget](cameraorbitcontrolcomponent.md#switchtarget)

---

## Properties

<a id="dampingfactor"></a>

###  dampingFactor

**● dampingFactor**: *`number`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:215*

阻尼系数。

___
<a id="enabledamping"></a>

###  enableDamping

**● enableDamping**: *`boolean`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:211*

开启阻尼缓动。

___
<a id="isenabled"></a>

###  isEnabled

**● isEnabled**: *`boolean`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:179*

是否已经开启。

___
<a id="islockmove"></a>

###  isLockMove

**● isLockMove**: *`boolean`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:175*

是否锁定移动。

___
<a id="islockrotate"></a>

###  isLockRotate

**● isLockRotate**: *`boolean`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:171*

是否锁定旋转。

___
<a id="islockx"></a>

###  isLockX

**● isLockX**: *`boolean`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:159*

是否锁定横向旋转。

___
<a id="islocky"></a>

###  isLockY

**● isLockY**: *`boolean`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:163*

是否锁定纵向旋转。

___
<a id="islockzoom"></a>

###  isLockZoom

**● isLockZoom**: *`boolean`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:167*

是否锁定缩放。

___
<a id="panmax"></a>

###  panMax

**● panMax**: *`Vector3`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:191*

允许的最大平移边界。

___
<a id="panmin"></a>

###  panMin

**● panMin**: *`Vector3`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:195*

允许的最小平移边界。

___
<a id="panspeed"></a>

###  panSpeed

**● panSpeed**: *`number`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:199*

平移速度。

___
<a id="rotatespeed"></a>

###  rotateSpeed

**● rotateSpeed**: *`number`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:203*

旋转速度。

___
<a id="zoommax"></a>

###  zoomMax

**● zoomMax**: *`number`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:183*

允许的最大缩放值。

___
<a id="zoommin"></a>

###  zoomMin

**● zoomMin**: *`number`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:187*

允许的最小缩放值。

___
<a id="zoomspeed"></a>

###  zoomSpeed

**● zoomSpeed**: *`number`*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:207*

缩放速度。

___

## Accessors

<a id="active"></a>

###  active

getactive(): `boolean`

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:238*

当前是否正在控制。

**Returns:** `boolean`

___
<a id="damping"></a>

###  damping

getdamping(): `boolean`

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:245*

当前是否正在缓动。

**Returns:** `boolean`

___
<a id="target"></a>

###  target

gettarget(): `Vector3`

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:257*

获取当前目标。

**Returns:** `Vector3`

___

## Methods

<a id="disable"></a>

###  disable

▸ **disable**(): `void`

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:382*

关闭控制器。

**Returns:** `void`

___
<a id="enable"></a>

###  enable

▸ **enable**(): `void`

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:350*

启动控制器。

**Returns:** `void`

___
<a id="onadd"></a>

###  onAdd

▸ **onAdd**(): `void`

*Overrides Component.onAdd*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:288*

添加到世界，继承请先`super.onAdd()`。

**Returns:** `void`

___
<a id="oncontextmenu"></a>

###  onContextMenu

▸ **onContextMenu**(): `void`

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:619*

**Returns:** `void`

___
<a id="ondestroy"></a>

###  onDestroy

▸ **onDestroy**(): `void`

*Overrides Component.onDestroy*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:307*

销毁，继承请先`super.onUpdate()`。

**Returns:** `void`

___
<a id="oninit"></a>

###  onInit

▸ **onInit**(options: *[ICameraOrbitControlComponentState](../interfaces/icameraorbitcontrolcomponentstate.md)*): `void`

*Overrides Component.onInit*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:264*

初始化，继承请先`super.onInit()`。

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [ICameraOrbitControlComponentState](../interfaces/icameraorbitcontrolcomponentstate.md) |

**Returns:** `void`

___
<a id="onupdate"></a>

###  onUpdate

▸ **onUpdate**(): `void`

*Overrides Component.onUpdate*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:300*

每一帧更新，继承请先`super.onUpdate()`。

**Returns:** `void`

___
<a id="switchcamera"></a>

###  switchCamera

▸ **switchCamera**(cameraComponentName?: *`string`*): `void`

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:314*

通过组件名称`cameraComponentName`来切换当前控制的摄相机。

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` cameraComponentName | `string` | &quot;root&quot; |

**Returns:** `void`

___
<a id="switchtarget"></a>

###  switchTarget

▸ **switchTarget**(target: *`Vector3` \| `SceneComponent`<`ISceneComponentState`> \| `SceneActor`<`ISceneComponentState`, `SceneComponent`<`ISceneComponentState`>>*): `void`

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:333*

切换当前的目标。

**Parameters:**

| Name | Type |
| ------ | ------ |
| target | `Vector3` \| `SceneComponent`<`ISceneComponentState`> \| `SceneActor`<`ISceneComponentState`, `SceneComponent`<`ISceneComponentState`>> |

**Returns:** `void`

___

