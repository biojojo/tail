import { IpadRwdModule } from './ipad-rwd/ipad-rwd.module';
import { LoadingModule } from './loading/loading.module';
import { NgModule } from '@angular/core';
import { SvgShareModule } from '../svg/svg-share.module';
import { CardComponent } from './card/card.component';
import { PaginationComponent } from './pagination/pagination.component';
import { RemarksComponent } from './remarks/remarks.component';
import { CommonModule } from '@angular/common';
import { ImageCropperModule } from './image-cropper/image-cropper.module';
import { ImgUtilsComponent } from './img-utils/img-utils.component';
import { DialogModule } from './dialog/dialog.module';

const MODULES = [
  CommonModule,
  SvgShareModule,
  ImageCropperModule,
  DialogModule,
  LoadingModule,
  IpadRwdModule,
];

const COMPONENTS = [
  CardComponent,
  PaginationComponent,
  RemarksComponent,
  ImgUtilsComponent,
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class ComponentShareModule {}
