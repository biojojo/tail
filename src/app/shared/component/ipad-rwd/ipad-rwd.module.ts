import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpadRwdComponent } from './ipad-rwd.component';

const MODULES = [
  CommonModule,
];

@NgModule({
  imports: [...MODULES],
  declarations: [IpadRwdComponent],
  bootstrap: [IpadRwdComponent],
})
export class IpadRwdModule {}
