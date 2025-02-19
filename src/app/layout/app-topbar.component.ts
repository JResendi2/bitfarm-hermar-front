import { Component } from '@angular/core';
import { LayoutService } from './service/layout.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [],
  templateUrl: './app-topbar.component.html',
  styleUrl: './app-topbar.component.scss',
})
export class AppTopbarComponent {
  constructor(private layoutService: LayoutService) {}

  toggleSidebar() {
    if (this.isMobile()) {
      this.layoutService.sidebarMobileActive.update((value) => !value);
    } else {
      this.layoutService.sidebarDesktopInactive.update((value) => !value);
    }
  }

  private isMobile(): boolean {
    return window.innerWidth < 992;
  }
}
