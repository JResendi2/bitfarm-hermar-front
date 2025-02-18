import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppSidebarComponent } from './app-sidebar.component';
import { AppTopbarComponent } from './app-topbar.component';
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
export class AppLayoutComponent {}
