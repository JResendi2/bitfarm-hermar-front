import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppSidebarComponent } from './app-sidebar.component';
import { AppTopbarComponent } from './app-topbar.component';
import { LayoutService } from './service/layout.service';
import { SwitchLayoutComponent } from './switch-layuot.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    AppSidebarComponent,
    AppTopbarComponent,
    SwitchLayoutComponent,
  ],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss',
})
export class AppLayoutComponent {
  layoutService = inject(LayoutService);

  classList = computed(() => ({
    'layout-static': this.layoutService.sidebarVertical(),
    'layout-static-inactive': this.layoutService.sidebarDesktopInactive(),
    'layout-static-horizontal': this.layoutService.sidebarHorizontal(),
    'layout-mobile-active': this.layoutService.sidebarMobileActive(),
  }));
}
