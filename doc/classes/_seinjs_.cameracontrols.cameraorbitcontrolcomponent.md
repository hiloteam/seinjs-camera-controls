[seinjs-camera-controls](../README.md) > ["seinjs"](../modules/_seinjs_.md) > [CameraControls](../modules/_seinjs_.cameracontrols.md) > [CameraOrbitControlComponent](../classes/_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md)

# Class: CameraOrbitControlComponent

## Hierarchy

↳  [CameraOrbitControlComponent](cameraorbitcontrolcomponent.md)

**↳ CameraOrbitControlComponent**

## Index

### Constructors

* [constructor](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#constructor)

### Properties

* [STATE_TYPE](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#state_type)
* [canBeRemoved](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#canberemoved)
* [className](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#classname)
* [classType](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#classtype)
* [dampingFactor](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#dampingfactor)
* [enableDamping](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#enabledamping)
* [event](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#event)
* [isComponent](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#iscomponent)
* [isEnabled](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#isenabled)
* [isLockMove](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#islockmove)
* [isLockRotate](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#islockrotate)
* [isLockX](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#islockx)
* [isLockY](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#islocky)
* [isLockZoom](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#islockzoom)
* [isRoot](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#isroot)
* [isSObject](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#issobject)
* [name](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#name)
* [needUpdateAndDestroy](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#needupdateanddestroy)
* [panMax](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#panmax)
* [panMin](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#panmin)
* [panSpeed](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#panspeed)
* [parent](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#parent)
* [rotateSpeed](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#rotatespeed)
* [updateOnEverTick](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#updateonevertick)
* [uuid](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#uuid)
* [zoomMax](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#zoommax)
* [zoomMin](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#zoommin)
* [zoomSpeed](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#zoomspeed)
* [CLASS_NAME](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#class_name)
* [CLASS_TYPE](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#class_type)

### Accessors

* [active](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#active)
* [damping](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#damping)
* [target](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#target)

### Methods

* [clone](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#clone)
* [deserialize](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#deserialize)
* [disable](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#disable)
* [enable](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#enable)
* [getGame](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#getgame)
* [getLevel](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#getlevel)
* [getOwner](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#getowner)
* [getPhysicWorld](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#getphysicworld)
* [getRoot](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#getroot)
* [getWorld](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#getworld)
* [onAdd](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#onadd)
* [onContextMenu](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#oncontextmenu)
* [onDestroy](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#ondestroy)
* [onError](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#onerror)
* [onInit](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#oninit)
* [onUpdate](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#onupdate)
* [removeFromParent](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#removefromparent)
* [rename](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#rename)
* [serialize](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#serialize)
* [switchCamera](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#switchcamera)
* [switchTarget](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#switchtarget)
* [verifyAdding](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#verifyadding)
* [verifyRemoving](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md#verifyremoving)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CameraOrbitControlComponent**(name: *`string`*, actor: *`Actor`*, initState?: *[ICameraOrbitControlComponentState](../interfaces/icameraorbitcontrolcomponentstate.md)*): [CameraOrbitControlComponent](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md)

*Inherited from Component.__constructor*

*Overrides SObject.__constructor*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1251*

构造Component，**不可自行构造！！！**请参见`actor.addComponent`方法。

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| actor | `Actor` |
| `Optional` initState | [ICameraOrbitControlComponentState](../interfaces/icameraorbitcontrolcomponentstate.md) |

**Returns:** [CameraOrbitControlComponent](_seinjs_.cameracontrols.cameraorbitcontrolcomponent.md)

___

## Properties

<a id="state_type"></a>

###  STATE_TYPE

**● STATE_TYPE**: *[ICameraOrbitControlComponentState](../interfaces/icameraorbitcontrolcomponentstate.md)*

*Inherited from Component.STATE_TYPE*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1248*

___
<a id="canberemoved"></a>

###  canBeRemoved

**● canBeRemoved**: *`boolean`*

*Inherited from Component.canBeRemoved*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1247*

是否允许自身在运行时被动态移除，用于保护某些特殊Component，比如根组件默认不可移除。

___
<a id="classname"></a>

###  className

**● className**: *`SName`*

*Inherited from SObject.className*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:951*

实例的类名，代理到类的静态属性`CLASS_NAME`。

___
<a id="classtype"></a>

###  classType

**● classType**: *`SName`*

*Inherited from SObject.classType*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:956*

实例的类型，代理到类的静态属性`CLASS_NAME`。 预留，暂时没啥用。

___
<a id="dampingfactor"></a>

###  dampingFactor

**● dampingFactor**: *`number`*

*Inherited from [CameraOrbitControlComponent](cameraorbitcontrolcomponent.md).[dampingFactor](cameraorbitcontrolcomponent.md#dampingfactor)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:215*

阻尼系数。

___
<a id="enabledamping"></a>

###  enableDamping

**● enableDamping**: *`boolean`*

*Inherited from [CameraOrbitControlComponent](cameraorbitcontrolcomponent.md).[enableDamping](cameraorbitcontrolcomponent.md#enabledamping)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:211*

开启阻尼缓动。

___
<a id="event"></a>

###  event

**● event**: *`EventManager`<`__type`>*

*Inherited from Component.event*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1263*

获取自身的事件系统管理器。

___
<a id="iscomponent"></a>

###  isComponent

**● isComponent**: *`boolean`*

*Inherited from Component.isComponent*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1228*

___
<a id="isenabled"></a>

###  isEnabled

**● isEnabled**: *`boolean`*

*Inherited from [CameraOrbitControlComponent](cameraorbitcontrolcomponent.md).[isEnabled](cameraorbitcontrolcomponent.md#isenabled)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:179*

是否已经开启。

___
<a id="islockmove"></a>

###  isLockMove

**● isLockMove**: *`boolean`*

*Inherited from [CameraOrbitControlComponent](cameraorbitcontrolcomponent.md).[isLockMove](cameraorbitcontrolcomponent.md#islockmove)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:175*

是否锁定移动。

___
<a id="islockrotate"></a>

###  isLockRotate

**● isLockRotate**: *`boolean`*

*Inherited from [CameraOrbitControlComponent](cameraorbitcontrolcomponent.md).[isLockRotate](cameraorbitcontrolcomponent.md#islockrotate)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:171*

是否锁定旋转。

___
<a id="islockx"></a>

###  isLockX

**● isLockX**: *`boolean`*

*Inherited from [CameraOrbitControlComponent](cameraorbitcontrolcomponent.md).[isLockX](cameraorbitcontrolcomponent.md#islockx)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:159*

是否锁定横向旋转。

___
<a id="islocky"></a>

###  isLockY

**● isLockY**: *`boolean`*

*Inherited from [CameraOrbitControlComponent](cameraorbitcontrolcomponent.md).[isLockY](cameraorbitcontrolcomponent.md#islocky)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:163*

是否锁定纵向旋转。

___
<a id="islockzoom"></a>

###  isLockZoom

**● isLockZoom**: *`boolean`*

*Inherited from [CameraOrbitControlComponent](cameraorbitcontrolcomponent.md).[isLockZoom](cameraorbitcontrolcomponent.md#islockzoom)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:167*

是否锁定缩放。

___
<a id="isroot"></a>

###  isRoot

**● isRoot**: *`boolean`*

*Inherited from Component.isRoot*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1232*

自身是否为根组件。

___
<a id="issobject"></a>

###  isSObject

**● isSObject**: *`boolean`*

*Inherited from SObject.isSObject*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:932*

一个实例是否为SObject的判据。

___
<a id="name"></a>

###  name

**● name**: *`SName`*

*Inherited from SObject.name*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:936*

实例的名字。

___
<a id="needupdateanddestroy"></a>

###  needUpdateAndDestroy

**● needUpdateAndDestroy**: *`boolean`*

*Inherited from Component.needUpdateAndDestroy*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1243*

是否要将自身加入其挂载的Actor的更新队列中，同时决定自身是否要跟随Actor销毁。 如果为`false`，则说明此Component是一个纯静态组件（比如单纯的图元组件，没有逻辑）。 用于性能优化。

___
<a id="panmax"></a>

###  panMax

**● panMax**: *`Vector3`*

*Inherited from [CameraOrbitControlComponent](cameraorbitcontrolcomponent.md).[panMax](cameraorbitcontrolcomponent.md#panmax)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:191*

允许的最大平移边界。

___
<a id="panmin"></a>

###  panMin

**● panMin**: *`Vector3`*

*Inherited from [CameraOrbitControlComponent](cameraorbitcontrolcomponent.md).[panMin](cameraorbitcontrolcomponent.md#panmin)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:195*

允许的最小平移边界。

___
<a id="panspeed"></a>

###  panSpeed

**● panSpeed**: *`number`*

*Inherited from [CameraOrbitControlComponent](cameraorbitcontrolcomponent.md).[panSpeed](cameraorbitcontrolcomponent.md#panspeed)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:199*

平移速度。

___
<a id="parent"></a>

###  parent

**● parent**: *`Actor` \| `Component`*

*Inherited from Component.parent*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1259*

获取自身的父级实例，根据情况不同可能有不同的类型，一般不需要自己使用。

___
<a id="rotatespeed"></a>

###  rotateSpeed

**● rotateSpeed**: *`number`*

*Inherited from [CameraOrbitControlComponent](cameraorbitcontrolcomponent.md).[rotateSpeed](cameraorbitcontrolcomponent.md#rotatespeed)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:203*

旋转速度。

___
<a id="updateonevertick"></a>

###  updateOnEverTick

**● updateOnEverTick**: *`boolean`*

*Inherited from Component.updateOnEverTick*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1237*

Component是否需要在每一帧进行进行`update`调用，如果为`false`，则将不会触发`onUpdate`生命周期（包括挂载在其下的所有Component）。 用于性能优化。

___
<a id="uuid"></a>

###  uuid

**● uuid**: *`number`*

*Inherited from SObject.uuid*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:947*

所有继承自`SObject`的类的实例的唯一ID。

___
<a id="zoommax"></a>

###  zoomMax

**● zoomMax**: *`number`*

*Inherited from [CameraOrbitControlComponent](cameraorbitcontrolcomponent.md).[zoomMax](cameraorbitcontrolcomponent.md#zoommax)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:183*

允许的最大缩放值。

___
<a id="zoommin"></a>

###  zoomMin

**● zoomMin**: *`number`*

*Inherited from [CameraOrbitControlComponent](cameraorbitcontrolcomponent.md).[zoomMin](cameraorbitcontrolcomponent.md#zoommin)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:187*

允许的最小缩放值。

___
<a id="zoomspeed"></a>

###  zoomSpeed

**● zoomSpeed**: *`number`*

*Inherited from [CameraOrbitControlComponent](cameraorbitcontrolcomponent.md).[zoomSpeed](cameraorbitcontrolcomponent.md#zoomspeed)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:207*

缩放速度。

___
<a id="class_name"></a>

### `<Static>` CLASS_NAME

**● CLASS_NAME**: *`SName`*

*Inherited from SObject.CLASS_NAME*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:922*

实例的类名，用于反射，在类被实例化后有`object.className`作为代理。

___
<a id="class_type"></a>

### `<Static>` CLASS_TYPE

**● CLASS_TYPE**: *`SName`*

*Inherited from SObject.CLASS_TYPE*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:927*

实例的类型用于反射，在类被实例化后有`object.classType`作为代理。 预留，暂时没用。

___

## Accessors

<a id="active"></a>

###  active

getactive(): `boolean`

*Inherited from [CameraOrbitControlComponent](cameraorbitcontrolcomponent.md).[active](cameraorbitcontrolcomponent.md#active)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:238*

当前是否正在控制。

**Returns:** `boolean`

___
<a id="damping"></a>

###  damping

getdamping(): `boolean`

*Inherited from [CameraOrbitControlComponent](cameraorbitcontrolcomponent.md).[damping](cameraorbitcontrolcomponent.md#damping)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:245*

当前是否正在缓动。

**Returns:** `boolean`

___
<a id="target"></a>

###  target

gettarget(): `Vector3`

*Inherited from [CameraOrbitControlComponent](cameraorbitcontrolcomponent.md).[target](cameraorbitcontrolcomponent.md#target)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:257*

获取当前目标。

**Returns:** `Vector3`

___

## Methods

<a id="clone"></a>

###  clone

▸ **clone**(object: *`this`*): `this`

*Inherited from SObject.clone*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:964*

克隆一个实例，交由子类实现。

**Parameters:**

| Name | Type |
| ------ | ------ |
| object | `this` |

**Returns:** `this`

___
<a id="deserialize"></a>

###  deserialize

▸ **deserialize**(json: *`any`*): `void`

*Inherited from SObject.deserialize*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:976*

从一个json序列反序列化，交由子类实现。

*__todo:__*: 暂未实现，预留。

**Parameters:**

| Name | Type |
| ------ | ------ |
| json | `any` |

**Returns:** `void`

___
<a id="disable"></a>

###  disable

▸ **disable**(): `void`

*Inherited from [CameraOrbitControlComponent](cameraorbitcontrolcomponent.md).[disable](cameraorbitcontrolcomponent.md#disable)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:382*

关闭控制器。

**Returns:** `void`

___
<a id="enable"></a>

###  enable

▸ **enable**(): `void`

*Inherited from [CameraOrbitControlComponent](cameraorbitcontrolcomponent.md).[enable](cameraorbitcontrolcomponent.md#enable)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:350*

启动控制器。

**Returns:** `void`

___
<a id="getgame"></a>

###  getGame

▸ **getGame**<`IGameState`>(): `Game`<`IGameState`>

*Inherited from Component.getGame*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1327*

获取当前`Game`实例。

*__template__*: IGameState 当前游戏状态管理器的类型。

**Type parameters:**

#### IGameState :  `StateActor`

**Returns:** `Game`<`IGameState`>

___
<a id="getlevel"></a>

###  getLevel

▸ **getLevel**<`ILevelState`>(): `Level`<`ILevelState`>

*Inherited from Component.getLevel*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1339*

获取当前`Level`实例。

*__template__*: ILevelState 当前关卡状态管理器的类型。

**Type parameters:**

#### ILevelState :  `StateActor`

**Returns:** `Level`<`ILevelState`>

___
<a id="getowner"></a>

###  getOwner

▸ **getOwner**<`TOwner`>(): `TOwner`

*Inherited from Component.getOwner*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1350*

获取当前拥有自己的`Actor`。

*__template__*: TOwner Actor的类型。

**Type parameters:**

#### TOwner :  `Actor`

**Returns:** `TOwner`

___
<a id="getphysicworld"></a>

###  getPhysicWorld

▸ **getPhysicWorld**(): `IPhysicWorld`

*Inherited from Component.getPhysicWorld*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1344*

仅在初始化了物理引擎之后，用于获取当前物理世界`PhysicWorld`实例。 如何使用物理引擎请见**Guide**和**Demo**。

**Returns:** `IPhysicWorld`

___
<a id="getroot"></a>

###  getRoot

▸ **getRoot**<`TRoot`>(): `TRoot`

*Inherited from Component.getRoot*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1356*

获取当前拥有自己的`Actor`的根组件。

*__template__*: TRoot 根组件的类型。

**Type parameters:**

#### TRoot :  `Component`

**Returns:** `TRoot`

___
<a id="getworld"></a>

###  getWorld

▸ **getWorld**<`IWorldState`>(): `World`<`IWorldState`>

*Inherited from Component.getWorld*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1333*

获取当前`World`实例。

*__template__*: IWorldState 当前世界状态管理器的类型。

**Type parameters:**

#### IWorldState :  `StateActor`

**Returns:** `World`<`IWorldState`>

___
<a id="onadd"></a>

###  onAdd

▸ **onAdd**(): `void`

*Inherited from [CameraOrbitControlComponent](cameraorbitcontrolcomponent.md).[onAdd](cameraorbitcontrolcomponent.md#onadd)*

*Overrides Component.onAdd*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:288*

添加到世界，继承请先`super.onAdd()`。

**Returns:** `void`

___
<a id="oncontextmenu"></a>

###  onContextMenu

▸ **onContextMenu**(): `void`

*Inherited from [CameraOrbitControlComponent](cameraorbitcontrolcomponent.md).[onContextMenu](cameraorbitcontrolcomponent.md#oncontextmenu)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:619*

**Returns:** `void`

___
<a id="ondestroy"></a>

###  onDestroy

▸ **onDestroy**(): `void`

*Inherited from [CameraOrbitControlComponent](cameraorbitcontrolcomponent.md).[onDestroy](cameraorbitcontrolcomponent.md#ondestroy)*

*Overrides Component.onDestroy*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:307*

销毁，继承请先`super.onUpdate()`。

**Returns:** `void`

___
<a id="onerror"></a>

###  onError

▸ **onError**(error: *`BaseException`*, details?: *`any`*): `boolean` \| `void`

*Inherited from Component.onError*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1293*

生命周期，用于错误边界处理。将在游戏中大部分可预知错误发生时被调用（通常是生命周期中的非异步错误）。 错误将会根据一定的路径向上传递，一直到`Engine`的层次，你可以在确保完美处理了问题后返回`true`来通知引擎不再向上传递。 当然你也可以将自定义的一些错误加入错误边界机制中，详见[Exception](../../guide/exception)。

**Parameters:**

| Name | Type |
| ------ | ------ |
| error | `BaseException` |
| `Optional` details | `any` |

**Returns:** `boolean` \| `void`

___
<a id="oninit"></a>

###  onInit

▸ **onInit**(options: *[ICameraOrbitControlComponentState](../interfaces/icameraorbitcontrolcomponentstate.md)*): `void`

*Inherited from [CameraOrbitControlComponent](cameraorbitcontrolcomponent.md).[onInit](cameraorbitcontrolcomponent.md#oninit)*

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

*Inherited from [CameraOrbitControlComponent](cameraorbitcontrolcomponent.md).[onUpdate](cameraorbitcontrolcomponent.md#onupdate)*

*Overrides Component.onUpdate*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:300*

每一帧更新，继承请先`super.onUpdate()`。

**Returns:** `void`

___
<a id="removefromparent"></a>

###  removeFromParent

▸ **removeFromParent**(): `void`

*Inherited from Component.removeFromParent*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1360*

将自己从父级移除，基本等同于`destroy`方法，从Owner中销毁自身。

**Returns:** `void`

___
<a id="rename"></a>

###  rename

▸ **rename**(name: *`string`*): `void`

*Inherited from SObject.rename*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:960*

通过字符串修改实例名字。

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `void`

___
<a id="serialize"></a>

###  serialize

▸ **serialize**(): `any`

*Inherited from SObject.serialize*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:970*

实例序列化，交由子类实现。

*__todo:__*: 暂未实现，预留。

**Returns:** `any`

___
<a id="switchcamera"></a>

###  switchCamera

▸ **switchCamera**(cameraComponentName?: *`string`*): `void`

*Inherited from [CameraOrbitControlComponent](cameraorbitcontrolcomponent.md).[switchCamera](cameraorbitcontrolcomponent.md#switchcamera)*

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

*Inherited from [CameraOrbitControlComponent](cameraorbitcontrolcomponent.md).[switchTarget](cameraorbitcontrolcomponent.md#switchtarget)*

*Defined in CameraOrbitControlComponent/CameraOrbitControlComponent.ts:333*

切换当前的目标。

**Parameters:**

| Name | Type |
| ------ | ------ |
| target | `Vector3` \| `SceneComponent`<`ISceneComponentState`> \| `SceneActor`<`ISceneComponentState`, `SceneComponent`<`ISceneComponentState`>> |

**Returns:** `void`

___
<a id="verifyadding"></a>

###  verifyAdding

▸ **verifyAdding**(initState: *[ICameraOrbitControlComponentState](../interfaces/icameraorbitcontrolcomponentstate.md)*): `void`

*Inherited from Component.verifyAdding*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1269*

用于验证一个该组件在当前状态是否可被添加，一般用于防止重复添加不可重复的组件。 你可以重写此方法来达成验证，如果验证不通过请抛出异常。 注意，此验证仅会在`development`环境下被执行！

**Parameters:**

| Name | Type |
| ------ | ------ |
| initState | [ICameraOrbitControlComponentState](../interfaces/icameraorbitcontrolcomponentstate.md) |

**Returns:** `void`

___
<a id="verifyremoving"></a>

###  verifyRemoving

▸ **verifyRemoving**(): `void`

*Inherited from Component.verifyRemoving*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1275*

用于验证一个该组件在当前状态是否可被移除。 你可以重写此方法来达成验证，如果验证不通过请抛出异常。 注意，此验证仅会在`development`环境下被执行！

**Returns:** `void`

___

