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
    this.layoutService.sidebarDesktopInactive.update((value) => !value);
  }
}
