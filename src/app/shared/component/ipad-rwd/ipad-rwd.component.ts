import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ipad-rwd',
  templateUrl: './ipad-rwd.component.html',
})
export class IpadRwdComponent implements OnInit {

  constructor() { }
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

  ngOnInit() {
    this.isMobile = this.getIsMobile();
    window.onresize = () => {
    this.isMobile = this.getIsMobile();
    };
  }

}
