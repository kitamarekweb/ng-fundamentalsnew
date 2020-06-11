// ng-fundamentalsnew\src\app\common\toastr.service.ts START
import {InjectionToken} from '@angular/core';

export let TOASTR_TOKEN = new InjectionToken<ToastrService>('toastr');

export class ToastrService {
  // @ts-ignore
  success(msg: string, title?: string): void;
  // @ts-ignore
  info(msg: string, title?: string): void;
  // @ts-ignore
  warning(msg: string, title?: string): void;
  // @ts-ignore
  error(msg: string, title?: string): void;
}

// ng-fundamentalsnew\src\app\common\toastr.service.ts END
