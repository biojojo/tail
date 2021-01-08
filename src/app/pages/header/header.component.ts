import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from '../../shared/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isShowMenu = false;

  constructor(private menuService: MenuService) {
    this.menuService.menuState$.subscribe((res) => {
      this.isShowMenu = res;
    });
  }

  ngOnInit() {}

  showMenu() {
    this.isShowMenu = !this.isShowMenu;
  }

  hideMenu(event) {
    this.menuService.menuState$.next(false);
  }
}
