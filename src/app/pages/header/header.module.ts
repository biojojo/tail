import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
})
export class HeaderModule {}
