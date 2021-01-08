import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }
p
  // tslint:disable-next-line: variable-name
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
  ngOnInit() {}

 }

