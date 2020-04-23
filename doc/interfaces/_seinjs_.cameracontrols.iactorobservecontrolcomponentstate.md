[seinjs-camera-controls](../README.md) > ["seinjs"](../modules/_seinjs_.md) > [CameraControls](../modules/_seinjs_.cameracontrols.md) > [IActorObserveControlComponentState](../interfaces/_seinjs_.cameracontrols.iactorobservecontrolcomponentstate.md)

# Interface: IActorObserveControlComponentState

## Hierarchy

 [IActorObserveControlComponentState](iactorobservecontrolcomponentstate.md)

**↳ IActorObserveControlComponentState**

## Index

### Properties

* [dampingFactor](_seinjs_.cameracontrols.iactorobservecontrolcomponentstate.md#dampingfactor)
* [enableDamping](_seinjs_.cameracontrols.iactorobservecontrolcomponentstate.md#enabledamping)
* [eulerOrder](_seinjs_.cameracontrols.iactorobservecontrolcomponentstate.md#eulerorder)
* [isLockMove](_seinjs_.cameracontrols.iactorobservecontrolcomponentstate.md#islockmove)
* [isLockRotate](_seinjs_.cameracontrols.iactorobservecontrolcomponentstate.md#islockrotate)
* [isLockScale](_seinjs_.cameracontrols.iactorobservecontrolcomponentstate.md#islockscale)
* [isLockX](_seinjs_.cameracontrols.iactorobservecontrolcomponentstate.md#islockx)
* [isLockY](_seinjs_.cameracontrols.iactorobservecontrolcomponentstate.md#islocky)
* [panSpeed](_seinjs_.cameracontrols.iactorobservecontrolcomponentstate.md#panspeed)
* [reverseRotateAndPan](_seinjs_.cameracontrols.iactorobservecontrolcomponentstate.md#reverserotateandpan)
* [rotateSpeed](_seinjs_.cameracontrols.iactorobservecontrolcomponentstate.md#rotatespeed)
* [zoomMax](_seinjs_.cameracontrols.iactorobservecontrolcomponentstate.md#zoommax)
* [zoomMin](_seinjs_.cameracontrols.iactorobservecontrolcomponentstate.md#zoommin)

---

## Properties

<a id="dampingfactor"></a>

### `<Optional>` dampingFactor

**● dampingFactor**: *`number`*

*Inherited from [IActorObserveControlComponentState](iactorobservecontrolcomponentstate.md).[dampingFactor](iactorobservecontrolcomponentstate.md#dampingfactor)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:126*

阻尼系数。

*__default__*: 1

___
<a id="enabledamping"></a>

### `<Optional>` enableDamping

**● enableDamping**: *`boolean`*

*Inherited from [IActorObserveControlComponentState](iactorobservecontrolcomponentstate.md).[enableDamping](iactorobservecontrolcomponentstate.md#enabledamping)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:120*

开启阻尼缓动。

*__default__*: true

___
<a id="eulerorder"></a>

### `<Optional>` eulerOrder

**● eulerOrder**: *`string`*

*Inherited from [IActorObserveControlComponentState](iactorobservecontrolcomponentstate.md).[eulerOrder](iactorobservecontrolcomponentstate.md#eulerorder)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:90*

欧拉旋转顺序。

*__default__*: 'XYZ'

___
<a id="islockmove"></a>

### `<Optional>` isLockMove

**● isLockMove**: *`boolean`*

*Inherited from [IActorObserveControlComponentState](iactorobservecontrolcomponentstate.md).[isLockMove](iactorobservecontrolcomponentstate.md#islockmove)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:84*

是否锁定移动。

*__default__*: false

___
<a id="islockrotate"></a>

### `<Optional>` isLockRotate

**● isLockRotate**: *`boolean`*

*Inherited from [IActorObserveControlComponentState](iactorobservecontrolcomponentstate.md).[isLockRotate](iactorobservecontrolcomponentstate.md#islockrotate)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:78*

是否锁定旋转。

*__default__*: false

___
<a id="islockscale"></a>

### `<Optional>` isLockScale

**● isLockScale**: *`boolean`*

*Inherited from [IActorObserveControlComponentState](iactorobservecontrolcomponentstate.md).[isLockScale](iactorobservecontrolcomponentstate.md#islockscale)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:72*

是否锁定缩放。

*__default__*: false

___
<a id="islockx"></a>

### `<Optional>` isLockX

**● isLockX**: *`boolean`*

*Inherited from [IActorObserveControlComponentState](iactorobservecontrolcomponentstate.md).[isLockX](iactorobservecontrolcomponentstate.md#islockx)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:60*

是否锁定横向旋转。

*__default__*: false

___
<a id="islocky"></a>

### `<Optional>` isLockY

**● isLockY**: *`boolean`*

*Inherited from [IActorObserveControlComponentState](iactorobservecontrolcomponentstate.md).[isLockY](iactorobservecontrolcomponentstate.md#islocky)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:66*

是否锁定纵向旋转。

*__default__*: false

___
<a id="panspeed"></a>

### `<Optional>` panSpeed

**● panSpeed**: *`number`*

*Inherited from [IActorObserveControlComponentState](iactorobservecontrolcomponentstate.md).[panSpeed](iactorobservecontrolcomponentstate.md#panspeed)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:108*

平移速度。

*__default__*: 1

___
<a id="reverserotateandpan"></a>

### `<Optional>` reverseRotateAndPan

**● reverseRotateAndPan**: *`boolean`*

*Inherited from [IActorObserveControlComponentState](iactorobservecontrolcomponentstate.md).[reverseRotateAndPan](iactorobservecontrolcomponentstate.md#reverserotateandpan)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:132*

在鼠标状态下，反转旋转和平移的行为，改为左键平移，右键旋转。

*__default__*: false

___
<a id="rotatespeed"></a>

### `<Optional>` rotateSpeed

**● rotateSpeed**: *`number`*

*Inherited from [IActorObserveControlComponentState](iactorobservecontrolcomponentstate.md).[rotateSpeed](iactorobservecontrolcomponentstate.md#rotatespeed)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:114*

旋转速度。

*__default__*: 1

___
<a id="zoommax"></a>

### `<Optional>` zoomMax

**● zoomMax**: *`number`*

*Inherited from [IActorObserveControlComponentState](iactorobservecontrolcomponentstate.md).[zoomMax](iactorobservecontrolcomponentstate.md#zoommax)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:96*

允许的最大缩放值。

*__default__*: Infinity

___
<a id="zoommin"></a>

### `<Optional>` zoomMin

**● zoomMin**: *`number`*

*Inherited from [IActorObserveControlComponentState](iactorobservecontrolcomponentstate.md).[zoomMin](iactorobservecontrolcomponentstate.md#zoommin)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:102*

允许的最小缩放值。

*__default__*: \-Infinity

___

