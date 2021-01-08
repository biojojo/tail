import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewCaseRoutingModule } from './reviewcase-routing.module';
import { ReviewcaseComponent } from './reviewcase.component';
import { SharedModule } from '../../shared/shared.module';
import { IgxDatePickerModule } from 'igniteui-angular';

const MODULES = [
  CommonModule,
  SharedModule,
  ReviewCaseRoutingModule,
  IgxDatePickerModule,
];

@NgModule({
  imports: [...MODULES],
  declarations: [ReviewcaseComponent],
})
export class ReviewCaseModule {}
