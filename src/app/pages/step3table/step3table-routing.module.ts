import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Step3tableComponent } from './step3table.component';

const routes: Routes = [{ path: '', component: Step3tableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Step3tableRoutingModule {}
