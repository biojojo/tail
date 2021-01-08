import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'review',
    loadChildren: () =>
      import('./pages/review/review.module').then((m) => m.ReviewModule),
  },
  {
    path: 'step1',
    loadChildren: () =>
      import('./pages/step1/step1.module').then((m) => m.Step1Module),
  },
  {
    path: 'step2',
    loadChildren: () =>
      import('./pages/step2/step2.module').then((m) => m.Step2Module),
  },
  {
    path: 'step3',
    loadChildren: () =>
      import('./pages/step3/step3.module').then((m) => m.Step3Module),
  },
  {
    path: 'step3table',
    loadChildren: () =>
      import('./pages/step3table/step3table.module').then((m) => m.Step3tableModule),
  },
  {
    path: 'reviewcase',
    loadChildren: () =>
      import('./pages/reviewcase/reviewcase.module').then(
        (m) => m.ReviewCaseModule
      ),
  },
  {
    path: '',
    redirectTo: 'review',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'reviewcase',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
