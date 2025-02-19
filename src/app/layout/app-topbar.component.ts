import { Component, ElementRef } from '@angular/core';
import { LayoutService } from './service/app-layout.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [],
  templateUrl: './app-topbar.component.html',
  styleUrl: './app-topbar.component.scss',
})
export class AppTopbarComponent {
  constructor(private layoutService: LayoutService, public el: ElementRef) {}

  hideSidebar() {
    if (this.isMobile()) {
      this.layoutService
        .configLayout()
        .showSidebarOnMobile.update((value) => !value);
      // console.log(this.layoutService.configLayout().showSidebarOnMobile());
    } else {
      this.layoutService.configLayout().hideSidebar =
        !this.layoutService.configLayout().hideSidebar;
    }
  }

  private isMobile(): boolean {
    return window.innerWidth < 992;
  }
}
