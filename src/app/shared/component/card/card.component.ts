import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() stepNum?: string;

  showStep = false;

  constructor() {}

  ngOnInit(): void {
    if (this.stepNum) {
      this.showStep = true;
    }
  }
}
