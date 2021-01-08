import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-agent-basic',
  templateUrl: './agent-basic.component.html',
  styleUrls: ['./agent-basic.component.scss']
})
export class AgentBasicComponent implements OnInit {

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
