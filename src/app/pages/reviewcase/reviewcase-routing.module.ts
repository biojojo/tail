import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewcaseComponent } from './reviewcase.component';

const routes: Routes = [{ path: '', component: ReviewcaseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewCaseRoutingModule {}
