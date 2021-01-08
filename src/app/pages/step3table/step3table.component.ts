import { Component, OnInit, NgModule, AfterViewInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuService } from '../../shared/services/menu.service';
import { ReasonComponent } from '../../shared/component/dialog/reason/reason.component';
import {
  DialogComponent,
  DialogConfigData,
} from 'src/app/shared/component/dialog/dialog.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RejectComponent } from 'src/app/shared/component/dialog/reject/reject.component';
import { OccupationComponent } from 'src/app/shared/component/dialog/occupation/occupation.component';
export class LoadingConfigData<D = any> {
  data: D | null;
  isOpeningMode?: boolean;
}
@Component({
  selector: 'app-step3table',
  templateUrl: './step3table.component.html',
  styleUrls: ['./step3table.component.scss']
})
export class Step3tableComponent<D = any> implements OnInit {
  isOpeningMode: boolean;
  loadingMsg: string;
  isFailed: boolean;
  isstartTimer: boolean;
  timeLeft = 5;
  interval: NodeJS.Timer;
  subscribeTimer: any;
  // str.split(" ", 3);
  @ViewChild('list', {static: false}) list: { nativeElement: { children: any; }; };
  deposit = 2;
  questions = [ { answer_option: 1 }, { answer_option: 2 }];


  // tslint:disable-next-line: variable-name
  constructor(private menuService: MenuService, private _NgbModal: NgbModal, private spinner: NgxSpinnerService, private router: Router) {}

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
  }, 5000);
  this.loadingMsg = '';
  this.router.navigate([ '/step3' ]); // 連到指向網址
  clearInterval ( this.interval ) ; // 清掉interval效果
  }
  openOpening() {
    this.loadingMsg = '開戶中...';
  }
  ngOnInit() {
    this.menuService.menuState$.next(false);
    this.isMobile = this.getIsMobile();
    window.onresize = () => {
    this.isMobile = this.getIsMobile();
    };
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

  openOccupationModal() {
    const modalRef = this._NgbModal.open(DialogComponent, {
      windowClass: 'modal-job-scrollable',
    });

    const dialogConfig = new DialogConfigData();
    dialogConfig.title = '敏感性行業/職業';
    dialogConfig.data = OccupationComponent;

    modalRef.componentInstance.dialogConfig = dialogConfig;
  }




  private getRandom(arr: string | any[], n: number) {
      // tslint:disable-next-line: one-variable-per-declaration
      let result = new Array(n),
          len = arr.length,
          taken = new Array(len);
      if (n > len) {
          throw new RangeError('getRandom: more elements taken than available');
      }
      while (n--) {
        let x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
      }
      return result;
  }
}
