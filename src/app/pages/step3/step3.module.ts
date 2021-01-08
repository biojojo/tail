import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Step3RoutingModule } from './step3-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { Step3Component } from './step3.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSpinnerModule } from 'ngx-spinner';

const MODULES = [
  CommonModule,
  FormsModule,
  SharedModule,
  Step3RoutingModule,
  NgSelectModule,
  FormsModule,
  NgxSpinnerModule,
];

@NgModule({
  imports: [...MODULES],
  declarations: [Step3Component],
  bootstrap: [Step3Component],
})
export class Step3Module {}
