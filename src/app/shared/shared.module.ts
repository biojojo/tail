import { NgModule } from '@angular/core';
import { SvgShareModule } from './svg/svg-share.module';
import { ComponentShareModule } from './component/component-share.module';

const MODULES = [SvgShareModule, ComponentShareModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
  declarations: [],
})
export class SharedModule {}
