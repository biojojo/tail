import { Component, OnInit, NgModule } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuService } from '../../shared/services/menu.service';
import { ReasonComponent } from '../../shared/component/dialog/reason/reason.component';
import {
  DialogComponent,
  DialogConfigData,
} from 'src/app/shared/component/dialog/dialog.component';
import { RejectComponent } from 'src/app/shared/component/dialog/reject/reject.component';
import { IconIssueComponent } from 'src/app/shared/svg/icon-issue/icon-issue.component';
import { OkComponent } from 'src/app/shared/component/dialog/ok/ok.component';
import { ProblemComponent } from 'src/app/shared/component/dialog/problem/problem.component';
import { Agent1Component } from 'src/app/shared/component/dialog/agent1/agent1.component';
import { Agent2Component } from 'src/app/shared/component/dialog/agent2/agent2.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { interval, timer } from 'rxjs';
export class LoadingConfigData<D = any> {
  data: D | null;
  isOpeningMode?: boolean;
}
@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component<D = any> implements OnInit {
  isOpeningMode: boolean;
  loadingMsg: string;
  // str.split(" ", 3);

  // tslint:disable-next-line: variable-name
  constructor(private menuService: MenuService, private _NgbModal: NgbModal, private spinner: NgxSpinnerService, private router: Router ) {}
  get isLoading(): boolean {
    return this._isLoading;
  }

  set isLoading(value: boolean) {
      this._isLoading = value;
      if (this._isLoading) {
        this.spinner.show();
      } else {
        this.spinner.hide();
      }
  }
  selectedReasons: any;

  reasons = [
    '身分證經比對不符',
    '身分證影像模糊無法辨識',
    '身分證反光影像無法辨識',
    '誤上傳非證件影像',
  ];

  reviewReasons: [];
  isMobile = false;

  // tslint:disable-next-line: variable-name
  private _isLoading = false;
  getIsMobile(): boolean {
    const w = document.documentElement.clientWidth;
    const breakpoint = 991;
    console.log(w);
    if (w < breakpoint) {
    return true;
    } else {
    return false;
    }
  }


  showSpinner() {
  this.isLoading = true;
  setTimeout(() => {
    this.isLoading = false;
  }, 5000000);
  this.loadingMsg = '';
  }
  openOpening() {
    this.loadingMsg = '開戶中...';
    timer(5000).subscribe(() => {
      this.router.navigate([ '/step3' ]);
    });
    //interval(1000).subscribe(() => {
      // 5秒後將跳轉待審核之開戶案件
    //});
  }
  ngOnInit() {
    this.menuService.menuState$.next(false);
    this.isMobile = this.getIsMobile();
    window.onresize = () => {
    this.isMobile = this.getIsMobile();
    };
  }

  selectedReason() {
    if (this.selectedReasons) {
      this.reviewReasons = this.selectedReasons;
    }
  }

  // open modal
  openModal() {
    const modalRef = this._NgbModal.open(DialogComponent, {
      windowClass: 'modal-job-scrollable',
    });

    const dialogConfig = new DialogConfigData();
    dialogConfig.title = '最後審查狀態';
    dialogConfig.data = ReasonComponent;

    modalRef.componentInstance.dialogConfig = dialogConfig;
  }
  openRejectModal() {
    const modalRef = this._NgbModal.open(DialogComponent, {
      windowClass: 'modal-job-scrollable',
    });

    const dialogConfig = new DialogConfigData();
    dialogConfig.title = '拒絕開戶原因';
    dialogConfig.data = RejectComponent;

    modalRef.componentInstance.dialogConfig = dialogConfig;
  }
  openOkModal() {
    const modalRef = this._NgbModal.open(DialogComponent, {
      windowClass: 'modal-job-scrollable',
    });

    const dialogConfig = new DialogConfigData();
    dialogConfig.title = 'JCIC Z21 查詢結果無資料';
    dialogConfig.data = OkComponent;

    modalRef.componentInstance.dialogConfig = dialogConfig;
  }
  openProblemModal() {
    const modalRef = this._NgbModal.open(DialogComponent, {
      windowClass: 'modal-job-scrollable',
    });

    const dialogConfig = new DialogConfigData();
    dialogConfig.title = 'JCIC Z22 查詢結果有資料';
    dialogConfig.data = ProblemComponent;

    modalRef.componentInstance.dialogConfig = dialogConfig;
  }
  openAgent1Modal() {
    const modalRef = this._NgbModal.open(DialogComponent, {
      windowClass: 'modal-job-scrollable',
    });

    const dialogConfig = new DialogConfigData();
    dialogConfig.title = '法定代理人一資料審核';
    dialogConfig.data = Agent1Component;
    dialogConfig.isReviewMode = true;

    modalRef.componentInstance.dialogConfig = dialogConfig;
  }
  openAgent2Modal() {
    const modalRef = this._NgbModal.open(DialogComponent, {
      windowClass: 'modal-job-scrollable',
    });

    const dialogConfig = new DialogConfigData();
    dialogConfig.title = '法定代理人二資料審核';
    dialogConfig.data = Agent2Component;
    dialogConfig.isReviewMode = true;

    modalRef.componentInstance.dialogConfig = dialogConfig;
  }
}
