import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Step1RoutingModule } from './step1-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { Step1Component } from './step1.component';
import { NgSelectModule } from '@ng-select/ng-select';

const MODULES = [
  CommonModule,
  FormsModule,
  SharedModule,
  Step1RoutingModule,
  NgSelectModule,
  FormsModule,
];

@NgModule({
  imports: [...MODULES],
  declarations: [Step1Component],
  bootstrap: [Step1Component],
})
export class Step1Module {}
