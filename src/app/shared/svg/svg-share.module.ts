import { NgModule } from '@angular/core';
import { IconCardHeaderComponent } from './icon-card-header/icon-card-header.component';
import { IconNavigatorComponent } from './icon-navigator/icon-navigator.component';
import { IconHeaderLogoComponent } from './icon-header-logo/icon-header-logo.component';
import { IconFooterLogoComponent } from './icon-footer-logo/icon-footer-logo.component';
import { IconRotateComponent } from './icon-rotate/icon-rotate.component';
import { IconZoomIncreaseComponent } from './icon-zoom-increase/icon-zoom-increase.component';
import { IconZoomDecreaseComponent } from './icon-zoom-decrease/icon-zoom-decrease.component';
import { IconEditComponent } from './icon-edit/icon-edit.component';
import { IconAlertComponent } from './icon-alert/icon-alert.component';
import { IconRejectComponent } from './icon-reject/icon-reject.component';
import { IconIssueComponent } from './icon-issue/icon-issue.component';
import { IconReasonComponent } from './icon-reason/icon-reason.component';
import { IconCheckedComponent } from './icon-checked/icon-checked.component';
import { IconReloadComponent } from './icon-reload/icon-reload.component';
import { IconRefreshComponent } from './icon-refresh/icon-refresh.component';
import { IconOkComponent } from './icon-ok/icon-ok.component';
import { IconProblemComponent } from './icon-problem/icon-problem.component';
import { IconReconectComponent } from './icon-reconect/icon-reconect.component';
import { IconCalendarComponent } from './icon-calendar/icon-calendar.component';
import { IconSearchlistComponent } from './icon-searchlist/icon-searchlist.component';
import { IconReturnComponent } from './icon-return/icon-return.component';
import { IconListComponent } from './icon-list/icon-list.component';

const COMPONENTS = [
  IconCardHeaderComponent,
  IconNavigatorComponent,
  IconHeaderLogoComponent,
  IconFooterLogoComponent,
  IconRotateComponent,
  IconZoomIncreaseComponent,
  IconZoomDecreaseComponent,
  IconEditComponent,
  IconAlertComponent,
  IconRejectComponent,
  IconEditComponent,
  IconIssueComponent,
  IconReasonComponent,
  IconCheckedComponent,
  IconReloadComponent,
  IconRefreshComponent,
  IconOkComponent,
  IconProblemComponent,
  IconReconectComponent,
  IconCalendarComponent,
  IconSearchlistComponent,
  IconReturnComponent,
  IconListComponent,
];

@NgModule({
  imports: [],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SvgShareModule {}
