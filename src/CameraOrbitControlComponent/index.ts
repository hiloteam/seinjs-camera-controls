/**
 * @File   : index.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 5:52:44 PM
 * @Description:
 */
import * as Sein from 'seinjs';

import ICameraOrbitControlComponent, {
  ICameraOrbitControlComponentState as ICameraOrbitControlComponentStateTypes
} from './CameraOrbitControlComponent';

declare module 'seinjs' {
  export namespace CameraControls {
    export class CameraOrbitControlComponent extends ICameraOrbitControlComponent {}
    export interface ICameraOrbitControlComponentState extends ICameraOrbitControlComponentStateTypes {}
  }
}

(Sein as any).CameraControls = (Sein as any).CameraControls || {};
(Sein as any).CameraControls.CameraOrbitControlComponent = ICameraOrbitControlComponent;

export {
  ICameraOrbitControlComponent as CameraOrbitControlComponent,
  ICameraOrbitControlComponentStateTypes as ICameraOrbitControlComponentState
};
