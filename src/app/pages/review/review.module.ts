import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewRoutingModule } from './review-routing.module';
import { ReviewComponent } from './review.component';
import { SharedModule } from '../../shared/shared.module';
import { IgxDatePickerModule } from 'igniteui-angular';

const MODULES = [
  CommonModule,
  SharedModule,
  ReviewRoutingModule,
  IgxDatePickerModule,
];

@NgModule({
  imports: [...MODULES],
  declarations: [ReviewComponent],
})
export class ReviewModule {}
