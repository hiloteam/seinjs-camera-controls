/**
 * @File   : index.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/1/2018, 5:20:06 PM
 * @Description:
 */
import * as Sein from 'seinjs';

import ICameraFreeControlComponent, {
  ICameraFreeControlComponentState as ICameraFreeControlComponentStateTypes
} from './CameraFreeControlComponent';

declare module 'seinjs' {
  export namespace CameraControls {
    export class CameraFreeControlComponent extends ICameraFreeControlComponent {}
    export interface ICameraFreeControlComponentState extends ICameraFreeControlComponentStateTypes {}
  }
}

(Sein as any).CameraControls = (Sein as any).CameraControls || {};
(Sein as any).CameraControls.CameraFreeControlComponent = ICameraFreeControlComponent;

export {
  ICameraFreeControlComponent as CameraFreeControlComponent,
  ICameraFreeControlComponentStateTypes as ICameraFreeControlComponentState
};
