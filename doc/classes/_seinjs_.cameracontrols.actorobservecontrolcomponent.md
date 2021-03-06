[seinjs-camera-controls](../README.md) > ["seinjs"](../modules/_seinjs_.md) > [CameraControls](../modules/_seinjs_.cameracontrols.md) > [ActorObserveControlComponent](../classes/_seinjs_.cameracontrols.actorobservecontrolcomponent.md)

# Class: ActorObserveControlComponent

## Hierarchy

↳  [ActorObserveControlComponent](actorobservecontrolcomponent.md)

**↳ ActorObserveControlComponent**

## Index

### Constructors

* [constructor](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#constructor)

### Properties

* [STATE_TYPE](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#state_type)
* [canBeRemoved](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#canberemoved)
* [className](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#classname)
* [classType](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#classtype)
* [dampingFactor](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#dampingfactor)
* [enableDamping](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#enabledamping)
* [event](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#event)
* [isComponent](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#iscomponent)
* [isEnabled](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#isenabled)
* [isLockMove](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#islockmove)
* [isLockRotate](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#islockrotate)
* [isLockScale](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#islockscale)
* [isLockX](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#islockx)
* [isLockY](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#islocky)
* [isRoot](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#isroot)
* [isSObject](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#issobject)
* [name](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#name)
* [needUpdateAndDestroy](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#needupdateanddestroy)
* [panSpeed](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#panspeed)
* [parent](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#parent)
* [reverseRotateAndPan](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#reverserotateandpan)
* [rotateSpeed](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#rotatespeed)
* [updateOnEverTick](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#updateonevertick)
* [uuid](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#uuid)
* [zoomMax](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#zoommax)
* [zoomMin](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#zoommin)
* [CLASS_NAME](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#class_name)
* [CLASS_TYPE](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#class_type)

### Accessors

* [active](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#active)
* [damping](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#damping)

### Methods

* [clone](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#clone)
* [deserialize](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#deserialize)
* [disable](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#disable)
* [enable](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#enable)
* [getGame](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#getgame)
* [getLevel](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#getlevel)
* [getOwner](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#getowner)
* [getPhysicWorld](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#getphysicworld)
* [getRoot](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#getroot)
* [getWorld](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#getworld)
* [onAdd](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#onadd)
* [onDestroy](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#ondestroy)
* [onError](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#onerror)
* [onInit](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#oninit)
* [onUpdate](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#onupdate)
* [removeFromParent](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#removefromparent)
* [rename](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#rename)
* [serialize](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#serialize)
* [setQuat](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#setquat)
* [verifyAdding](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#verifyadding)
* [verifyRemoving](_seinjs_.cameracontrols.actorobservecontrolcomponent.md#verifyremoving)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ActorObserveControlComponent**(name: *`string`*, actor: *`Actor`*, initState?: *[IActorObserveControlComponentState](../interfaces/iactorobservecontrolcomponentstate.md)*): [ActorObserveControlComponent](_seinjs_.cameracontrols.actorobservecontrolcomponent.md)

*Inherited from Component.__constructor*

*Overrides SObject.__constructor*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1251*

构造Component，**不可自行构造！！！**请参见`actor.addComponent`方法。

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| actor | `Actor` |
| `Optional` initState | [IActorObserveControlComponentState](../interfaces/iactorobservecontrolcomponentstate.md) |

**Returns:** [ActorObserveControlComponent](_seinjs_.cameracontrols.actorobservecontrolcomponent.md)

___

## Properties

<a id="state_type"></a>

###  STATE_TYPE

**● STATE_TYPE**: *[IActorObserveControlComponentState](../interfaces/iactorobservecontrolcomponentstate.md)*

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

*Inherited from [ActorObserveControlComponent](actorobservecontrolcomponent.md).[dampingFactor](actorobservecontrolcomponent.md#dampingfactor)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:190*

阻尼系数。

___
<a id="enabledamping"></a>

###  enableDamping

**● enableDamping**: *`boolean`*

*Inherited from [ActorObserveControlComponent](actorobservecontrolcomponent.md).[enableDamping](actorobservecontrolcomponent.md#enabledamping)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:186*

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

*Inherited from [ActorObserveControlComponent](actorobservecontrolcomponent.md).[isEnabled](actorobservecontrolcomponent.md#isenabled)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:166*

是否已经开启。

___
<a id="islockmove"></a>

###  isLockMove

**● isLockMove**: *`boolean`*

*Inherited from [ActorObserveControlComponent](actorobservecontrolcomponent.md).[isLockMove](actorobservecontrolcomponent.md#islockmove)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:162*

是否锁定移动。

___
<a id="islockrotate"></a>

###  isLockRotate

**● isLockRotate**: *`boolean`*

*Inherited from [ActorObserveControlComponent](actorobservecontrolcomponent.md).[isLockRotate](actorobservecontrolcomponent.md#islockrotate)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:158*

是否锁定旋转。

___
<a id="islockscale"></a>

###  isLockScale

**● isLockScale**: *`boolean`*

*Inherited from [ActorObserveControlComponent](actorobservecontrolcomponent.md).[isLockScale](actorobservecontrolcomponent.md#islockscale)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:154*

是否锁定缩放。

___
<a id="islockx"></a>

###  isLockX

**● isLockX**: *`boolean`*

*Inherited from [ActorObserveControlComponent](actorobservecontrolcomponent.md).[isLockX](actorobservecontrolcomponent.md#islockx)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:146*

是否锁定横向旋转。

___
<a id="islocky"></a>

###  isLockY

**● isLockY**: *`boolean`*

*Inherited from [ActorObserveControlComponent](actorobservecontrolcomponent.md).[isLockY](actorobservecontrolcomponent.md#islocky)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:150*

是否锁定纵向旋转。

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
<a id="panspeed"></a>

###  panSpeed

**● panSpeed**: *`number`*

*Inherited from [ActorObserveControlComponent](actorobservecontrolcomponent.md).[panSpeed](actorobservecontrolcomponent.md#panspeed)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:178*

平移速度。

___
<a id="parent"></a>

###  parent

**● parent**: *`Actor` \| `Component`*

*Inherited from Component.parent*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1259*

获取自身的父级实例，根据情况不同可能有不同的类型，一般不需要自己使用。

___
<a id="reverserotateandpan"></a>

###  reverseRotateAndPan

**● reverseRotateAndPan**: *`boolean`*

*Inherited from [ActorObserveControlComponent](actorobservecontrolcomponent.md).[reverseRotateAndPan](actorobservecontrolcomponent.md#reverserotateandpan)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:194*

在鼠标状态下，反转旋转和平移的行为，改为左键平移，右键旋转。

___
<a id="rotatespeed"></a>

###  rotateSpeed

**● rotateSpeed**: *`number`*

*Inherited from [ActorObserveControlComponent](actorobservecontrolcomponent.md).[rotateSpeed](actorobservecontrolcomponent.md#rotatespeed)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:182*

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

*Inherited from [ActorObserveControlComponent](actorobservecontrolcomponent.md).[zoomMax](actorobservecontrolcomponent.md#zoommax)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:170*

允许的最大缩放值。

___
<a id="zoommin"></a>

###  zoomMin

**● zoomMin**: *`number`*

*Inherited from [ActorObserveControlComponent](actorobservecontrolcomponent.md).[zoomMin](actorobservecontrolcomponent.md#zoommin)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:174*

允许的最小缩放值。

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

*Inherited from [ActorObserveControlComponent](actorobservecontrolcomponent.md).[active](actorobservecontrolcomponent.md#active)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:201*

当前是否正在控制。

**Returns:** `boolean`

___
<a id="damping"></a>

###  damping

getdamping(): `boolean`

*Inherited from [ActorObserveControlComponent](actorobservecontrolcomponent.md).[damping](actorobservecontrolcomponent.md#damping)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:208*

当前是否正在缓动。

**Returns:** `boolean`

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

*Inherited from [ActorObserveControlComponent](actorobservecontrolcomponent.md).[disable](actorobservecontrolcomponent.md#disable)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:311*

关闭控制器。

**Returns:** `void`

___
<a id="enable"></a>

###  enable

▸ **enable**(): `void`

*Inherited from [ActorObserveControlComponent](actorobservecontrolcomponent.md).[enable](actorobservecontrolcomponent.md#enable)*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:277*

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

*Inherited from [ActorObserveControlComponent](actorobservecontrolcomponent.md).[onAdd](actorobservecontrolcomponent.md#onadd)*

*Overrides Component.onAdd*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:243*

添加到世界，继承请先`super.onAdd()`。

**Returns:** `void`

___
<a id="ondestroy"></a>

###  onDestroy

▸ **onDestroy**(): `void`

*Inherited from [ActorObserveControlComponent](actorobservecontrolcomponent.md).[onDestroy](actorobservecontrolcomponent.md#ondestroy)*

*Overrides Component.onDestroy*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:257*

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

▸ **onInit**(options?: *[IActorObserveControlComponentState](../interfaces/iactorobservecontrolcomponentstate.md)*): `void`

*Inherited from [ActorObserveControlComponent](actorobservecontrolcomponent.md).[onInit](actorobservecontrolcomponent.md#oninit)*

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

*Inherited from [ActorObserveControlComponent](actorobservecontrolcomponent.md).[onUpdate](actorobservecontrolcomponent.md#onupdate)*

*Overrides Component.onUpdate*

*Defined in ActorObserveControlComponent/ActorObserveControlComponent.ts:250*

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
<a id="setquat"></a>

###  setQuat

▸ **setQuat**(x: *`number`*, y: *`number`*, z: *`number`*, w: *`number`*): `void`

*Inherited from [ActorObserveControlComponent](actorobservecontrolcomponent.md).[setQuat](actorobservecontrolcomponent.md#setquat)*

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
<a id="verifyadding"></a>

###  verifyAdding

▸ **verifyAdding**(initState: *[IActorObserveControlComponentState](../interfaces/iactorobservecontrolcomponentstate.md)*): `void`

*Inherited from Component.verifyAdding*

*Defined in /Users/dtysky/Projects/Sein.js/lib/seinjs.d.ts:1269*

用于验证一个该组件在当前状态是否可被添加，一般用于防止重复添加不可重复的组件。 你可以重写此方法来达成验证，如果验证不通过请抛出异常。 注意，此验证仅会在`development`环境下被执行！

**Parameters:**

| Name | Type |
| ------ | ------ |
| initState | [IActorObserveControlComponentState](../interfaces/iactorobservecontrolcomponentstate.md) |

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

