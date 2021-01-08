import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step3tableRoutingModule } from './step3table-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { Step3tableComponent } from './step3table.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSpinnerModule } from 'ngx-spinner';
import { QacommonComponent } from './qacommon/qacommon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { Qa001Component } from './qa001/qa001.component';
import { Qa002Component } from './qa002/qa002.component';
import { Qa004Component } from './qa004/qa004.component';
import { Qa005Component } from './qa005/qa005.component';
import { QatrueComponent } from './qatrue/qatrue.component';
import { QacorrectComponent } from './qacorrect/qacorrect.component';
import { QaokComponent } from './qaok/qaok.component';
import { Qa014Component } from './qa014/qa014.component';
import { Qa015Component } from './qa015/qa015.component';
import { Qa018Component } from './qa018/qa018.component';
import { Qa019Component } from './qa019/qa019.component';
import { Qa020Component } from './qa020/qa020.component';
import { Qa021Component } from './qa021/qa021.component';
import { Qa022Component } from './qa022/qa022.component';
import { Qa023Component } from './qa023/qa023.component';
import { Qa024Component } from './qa024/qa024.component';
import { Qa025Component } from './qa025/qa025.component';
import { Qa026Component } from './qa026/qa026.component';
import { Qa009Component } from './qa009/qa009.component';
import { OptionsDrawerComponent } from './options-drawer/options-drawer.component';

const COMPONENTS = [
  Step3tableComponent,
  QacommonComponent,
  Qa001Component,
  Qa002Component,
  Qa004Component,
  Qa005Component,
  Qa009Component,
  Qa014Component,
  Qa015Component,
  Qa018Component,
  Qa019Component,
  Qa020Component,
  Qa021Component,
  Qa022Component,
  Qa023Component,
  Qa024Component,
  Qa025Component,
  Qa026Component,
  QatrueComponent,
  QacorrectComponent,
  QaokComponent,
  OptionsDrawerComponent
];

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  FormlyModule,
  FormlyModule.forRoot(),
  FormlyBootstrapModule,
  SharedModule,
  Step3tableRoutingModule,
  NgSelectModule,
  NgxSpinnerModule,
];

@NgModule({
  imports: [...MODULES],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS, ]
})

export class Step3tableModule {}
