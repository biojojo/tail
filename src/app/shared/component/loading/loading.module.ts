import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingComponent } from './loading.component';

const MODULES = [
  CommonModule,
  NgxSpinnerModule,
];

@NgModule({
  imports: [...MODULES],
  declarations: [LoadingComponent],
  bootstrap: [LoadingComponent],
})
export class LoadingModule {}
