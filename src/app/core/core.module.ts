import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  providers: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModel: CoreModule) {
    if (parentModel) {
      throw new Error('只能被app module引用');
    }
  }
}
