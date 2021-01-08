import { IconRejectComponent } from './../../shared/svg/icon-reject/icon-reject.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuService } from '../../shared/services/menu.service';
import { ReasonComponent } from '../../shared/component/dialog/reason/reason.component';
import {
  DialogComponent,
  DialogConfigData,
} from 'src/app/shared/component/dialog/dialog.component';
import { RejectComponent } from 'src/app/shared/component/dialog/reject/reject.component';
import { IconIssueComponent } from 'src/app/shared/svg/icon-issue/icon-issue.component';
@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component implements OnInit {
  userDate1Edit = false;
  userDate2Edit = false;
  userDate3Edit = false;
  selectedReasons: any;

  reasons = [
    '身分證經比對不符',
    '身分證影像模糊無法辨識',
    '身分證反光影像無法辨識',
    '誤上傳非證件影像',
  ];

  reviewReasons: [];
  isMobile = false;

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

  // str.split(" ", 3);

  // tslint:disable-next-line: variable-name
  constructor(private menuService: MenuService, private _NgbModal: NgbModal) {}

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

  editUserData1() {
    this.userDate1Edit = !this.userDate1Edit;
  }
  editUserData2() {
    this.userDate2Edit = !this.userDate2Edit;
  }
  editUserData3() {
    this.userDate3Edit = !this.userDate3Edit;
  }
  show = false;
  buttonName = '修改';
  hide: any;

  toggle() {
    this.show = !this.show;

    if (this.show) {
      this.buttonName = '確定';
      console.log(this.show);
    } else {
      this.buttonName = '修改';
    }
  }
}
