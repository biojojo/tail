import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-agent2',
  templateUrl: './agent2.component.html',
  styleUrls: ['./agent2.component.scss']
})
export class Agent2Component implements OnInit {

  constructor( private spinner: NgxSpinnerService ) { }
  isMobile = false;
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
  // tslint:disable-next-line: member-ordering
  public isEditable = false;
  // tslint:disable-next-line: member-ordering
  public isEdit2able = false;
  public onEditClick() {
    this.isEditable = true;
    this.isEdit2able = false;
  }

  public onEdit2Click() {
    this.isEdit2able = true;
    this.isEditable = false;
  }

  public onSaveClick() {
    this.isEditable = false;
    this.isEdit2able = false;
  }
  // tslint:disable-next-line: member-ordering
  private _isLoading = false;
  get isLoading(): boolean {
    return this._isLoading;
  }

  set isLoading(value: boolean) {
      this._isLoading = value;
      if (this._isLoading){
        this.spinner.show();
      } else {
        this.spinner.hide();
      }
  }


  showSpinner() {
  this.isLoading = true;
  setTimeout(() => {
    this.isLoading = false;
  }, 5000);
  }
  ngOnInit() {
    this.isMobile = this.getIsMobile();
    window.onresize = () => {
    this.isMobile = this.getIsMobile();
    };
  }


}
