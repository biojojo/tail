import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { ReasonComponent } from './reason/reason.component';
import { SvgShareModule } from '../../svg/svg-share.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { QaAppComponent } from './reject/qaapp/qaapp.component';
import { RejectComponent } from './reject/reject.component';
import { OkComponent } from './ok/ok.component';
import { ProblemComponent } from './problem/problem.component';
import { Agent1Component } from './agent1/agent1.component';
import { Agent2Component } from './agent2/agent2.component';
import { AgentBasicComponent } from './agent-basic/agent-basic.component';
import { OccupationComponent } from './occupation/occupation.component';

const COMPONENTS = [
  DialogComponent,
  ReasonComponent,
  RejectComponent,
  QaAppComponent,
  OkComponent,
  ProblemComponent,
  Agent1Component,
  Agent2Component,
  AgentBasicComponent,
  OccupationComponent,
];

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  FormlyModule.forRoot(),
  FormlyBootstrapModule,
  SvgShareModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  entryComponents: [...COMPONENTS],
})
export class DialogModule {}
