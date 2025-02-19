import { Component, ElementRef, ViewChild } from '@angular/core';
import { LayoutService } from './service/layout.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [],
  templateUrl: './app-topbar.component.html',
  styleUrl: './app-topbar.component.scss',
})
export class AppTopbarComponent {
  @ViewChild('buttonToggle') buttonToggle!: any;

  constructor(private layoutService: LayoutService, public el: ElementRef) {}

  toggleSidebar() {
    if (this.layoutService.isMobile()) {
      this.layoutService.sidebarMobileActive.update((value) => !value);
    } else {
      this.layoutService.sidebarDesktopInactive.update((value) => !value);
    }
  }
}
