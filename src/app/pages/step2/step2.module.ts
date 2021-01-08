import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Step2RoutingModule } from './step2-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { Step2Component } from './step2.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSpinnerModule } from "ngx-spinner";

const MODULES = [
  CommonModule,
  FormsModule,
  SharedModule,
  Step2RoutingModule,
  NgSelectModule,
  FormsModule,
  NgxSpinnerModule,
];

@NgModule({
  imports: [...MODULES],
  declarations: [Step2Component],
  bootstrap: [Step2Component],
})
export class Step2Module {}
