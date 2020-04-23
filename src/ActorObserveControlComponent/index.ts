/**
 * @File   : index.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/1/2018, 5:20:06 PM
 * @Description:
 */
import * as Sein from 'seinjs';

import IActorObserveControlComponent, {
  IActorObserveControlComponentState as IActorObserveControlComponentStateTypes
} from './ActorObserveControlComponent';

declare module 'seinjs' {
  export namespace CameraControls {
    export class ActorObserveControlComponent extends IActorObserveControlComponent {}
    export interface IActorObserveControlComponentState extends IActorObserveControlComponentStateTypes {}
  }
}

(Sein as any).CameraControls = (Sein as any).CameraControls || {};
(Sein as any).CameraControls.ActorObserveControlComponent = IActorObserveControlComponent;

export {
  IActorObserveControlComponent as ActorObserveControlComponent,
  IActorObserveControlComponentStateTypes as IActorObserveControlComponentState
};
