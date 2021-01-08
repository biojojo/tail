import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-agent1',
  templateUrl: './agent1.component.html',
  styleUrls: ['./agent1.component.scss']
})
export class Agent1Component implements OnInit {

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


  public onEditClick() {
    this.isEditable = true;
  }

  public onSaveClick() {
    this.isEditable = false;
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
