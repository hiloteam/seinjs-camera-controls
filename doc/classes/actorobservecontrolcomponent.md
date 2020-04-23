[seinjs-camera-controls](../README.md) > [ActorObserveControlComponent](../classes/actorobservecontrolcomponent.md)

# Class: ActorObserveControlComponent

Actor观察期组件，用于挂载任意Actor上来对其进行观察。 注意此控制器控制的不是摄像机！

## Hierarchy

 `Component`<[IActorObserveControlComponentState](../interfaces/iactorobservecontrolcomponentstate.md)>

**↳ ActorObserveControlComponent**

↳  [ActorObserveControlComponent](_seinjs_.cameracontrols.actorobservecontrolcomponent.md)

## Index

### Properties

* [dampingFactor](actorobservecontrolcomponent.md#dampingfactor)
* [enableDamping](actorobservecontrolcomponent.md#enabledamping)
* [isEnabled](actorobservecontrolcomponent.md#isenabled)
* [isLockMove](actorobservecontrolcomponent.md#islockmove)
* [isLockRotate](actorobservecontrolcomponent.md#islockrotate)
* [isLockScale](actorobservecontrolcomponent.md#islockscale)
* [isLockX](actorobservecontrolcomponent.md#islockx)
* [isLockY](actorobservecontrolcomponent.md#islocky)
* [panSpeed](actorobservecontrolcomponent.md#panspeed)
* [reverseRotateAndPan](actorobservecontrolcomponent.md#reverserotateandpan)
* [rotateSpeed](actorobservecontrolcomponent.md#rotatespeed)
* [zoomMax](actorobservecontrolcomponent.md#zoommax)
* [zoomMin](actorobservecontrolcomponent.md#zoommin)

### Accessors

* [active](actorobservecontrolcomponent.md#active)
* [damping](actorobservecontrolcomponent.md#damping)

### Methods

* [disable](actorobservecontrolcomponent.md#disable)
* [enable](actorobservecontrolcomponent.md#enable)
* [onAdd](actorobservecontrolcomponent.md#onadd)
* [onDestroy](actorobservecontrolcomponent.md#ondestroy)
* [onInit](actorobservecontrolcomponent.md#oninit)
* [onUpdate](actorobservecontrolcomponent.md#onupdate)
* [setQuat](actorobservecontrolcomponent.md#setquat)

---

## Properties

<a id="dampingfactor"></a>

###  dampingFactor

**● dampingFactor**: *`number`*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:190*

阻尼系数。

___
<a id="enabledamping"></a>

###  enableDamping

**● enableDamping**: *`boolean`*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:186*

开启阻尼缓动。

___
<a id="isenabled"></a>

###  isEnabled

**● isEnabled**: *`boolean`*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:166*

是否已经开启。

___
<a id="islockmove"></a>

###  isLockMove

**● isLockMove**: *`boolean`*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:162*

是否锁定移动。

___
<a id="islockrotate"></a>

###  isLockRotate

**● isLockRotate**: *`boolean`*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:158*

是否锁定旋转。

___
<a id="islockscale"></a>

###  isLockScale

**● isLockScale**: *`boolean`*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:154*

是否锁定缩放。

___
<a id="islockx"></a>

###  isLockX

**● isLockX**: *`boolean`*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:146*

是否锁定横向旋转。

___
<a id="islocky"></a>

###  isLockY

**● isLockY**: *`boolean`*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:150*

是否锁定纵向旋转。

___
<a id="panspeed"></a>

###  panSpeed

**● panSpeed**: *`number`*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:178*

平移速度。

___
<a id="reverserotateandpan"></a>

###  reverseRotateAndPan

**● reverseRotateAndPan**: *`boolean`*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:194*

在鼠标状态下，反转旋转和平移的行为，改为左键平移，右键旋转。

___
<a id="rotatespeed"></a>

###  rotateSpeed

**● rotateSpeed**: *`number`*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:182*

旋转速度。

___
<a id="zoommax"></a>

###  zoomMax

**● zoomMax**: *`number`*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:170*

允许的最大缩放值。

___
<a id="zoommin"></a>

###  zoomMin

**● zoomMin**: *`number`*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:174*

允许的最小缩放值。

___

## Accessors

<a id="active"></a>

###  active

getactive(): `boolean`

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:201*

当前是否正在控制。

**Returns:** `boolean`

___
<a id="damping"></a>

###  damping

getdamping(): `boolean`

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:208*

当前是否正在缓动。

**Returns:** `boolean`

___

## Methods

<a id="disable"></a>

###  disable

▸ **disable**(): `void`

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:311*

关闭控制器。

**Returns:** `void`

___
<a id="enable"></a>

###  enable

▸ **enable**(): `void`

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:277*

启动控制器。

**Returns:** `void`

___
<a id="onadd"></a>

###  onAdd

▸ **onAdd**(): `void`

*Overrides Component.onAdd*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:243*

添加到世界，继承请先`super.onAdd()`。

**Returns:** `void`

___
<a id="ondestroy"></a>

###  onDestroy

▸ **onDestroy**(): `void`

*Overrides Component.onDestroy*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:257*

销毁，继承请先`super.onUpdate()`。

**Returns:** `void`

___
<a id="oninit"></a>

###  onInit

▸ **onInit**(options?: *[IActorObserveControlComponentState](../interfaces/iactorobservecontrolcomponentstate.md)*): `void`

*Overrides Component.onInit*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:219*

初始化，继承请先`super.onInit()`。

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` options | [IActorObserveControlComponentState](../interfaces/iactorobservecontrolcomponentstate.md) |  {} |

**Returns:** `void`

___
<a id="onupdate"></a>

###  onUpdate

▸ **onUpdate**(): `void`

*Overrides Component.onUpdate*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:250*

每一帧更新，继承请先`super.onUpdate()`。

**Returns:** `void`

___
<a id="setquat"></a>

###  setQuat

▸ **setQuat**(x: *`number`*, y: *`number`*, z: *`number`*, w: *`number`*): `void`

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:264*

手动设置四元数。

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |
| z | `number` |
| w | `number` |

**Returns:** `void`

___

