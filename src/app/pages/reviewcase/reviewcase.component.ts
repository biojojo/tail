import { DOCUMENT } from '@angular/common';
import { Inject, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../shared/services/menu.service';

@Component({
  selector: 'app-reviewcase',
  templateUrl: './reviewcase.component.html',
  styleUrls: ['./reviewcase.component.scss'],
})
export class ReviewcaseComponent implements OnInit {
  guarantees = false;
  reviewcase = false;
  today = false;
  range = false;
  isMobile = false;
  distance = 150;

  @ViewChild('topScroll', { static: true }) topScroll: ElementRef;
  @ViewChild('bottomScroll', { static: true }) bottomScroll: ElementRef;
  @ViewChild('rightArrow', { static: true }) rightArrow: ElementRef;
  @ViewChild('leftArrow', { static: true }) leftArrow: ElementRef;

  getIsMobile(): boolean {
    const w = document.documentElement.clientWidth;
    const breakpoint = 1200;
    console.log(w);
    if (w < breakpoint) {
    return true;
    } else {
    return false;
    }
  }
  // tslint:disable-next-line: member-ordering
  private _isLoading = false;
  get isLoading(): boolean {
    return this._isLoading;
  }

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private menuService: MenuService
  ) {}

  ngOnInit() {
    this.menuService.menuState$.next(false);
    this.isMobile = this.getIsMobile();
    window.onresize = () => {
    this.isMobile = this.getIsMobile();
    };
    this.today = false;
    this.range = false;
  }

  changeToday() {
    this.today = !this.today;
    this.range = false;
  }

  changeRangeDate() {
    this.today = false;
    this.range = !this.range;
  }

  dateDefault() {
    this.today = false;
    this.range = false;
  }

  showGuaranteesCase() {
    this.guarantees = !this.guarantees;
  }

  showReviewCase() {
    this.reviewcase = !this.reviewcase;
  }

  counter(i: number) {
    return new Array(i);
  }

  topScrollHandler(event: any) {
    this.bottomScroll.nativeElement.scrollLeft = this.topScroll.nativeElement.scrollLeft;
  }

  bottomScrollHandler(event: any) {
    console.log(
      'this.bottomScroll.nativeElement.scrollLeft :>> ',
      this.bottomScroll.nativeElement.scrollLeft
    );
    this.topScroll.nativeElement.scrollLeft = this.bottomScroll.nativeElement.scrollLeft;
  }

  public onClickScrollRight() {
    this.scrollTo('+');
  }

  public onClickScrollLeft() {
    this.scrollTo('-');
  }

  private scrollTo(operator: string) {
    const bodyWith = this.doc.body.getBoundingClientRect().width / 4;
    console.log('bodyWith :>> ', bodyWith);

    if (operator === '+') {
      this.bottomScroll.nativeElement.scrollLeft += bodyWith / 4;
    }
    if (operator === '-') {
      this.bottomScroll.nativeElement.scrollLeft -= bodyWith / 4;
    }

    if (this.bottomScroll.nativeElement.scrollLeft < 0) {
      this.bottomScroll.nativeElement.scrollLeft = 0;
    }
  }
}
