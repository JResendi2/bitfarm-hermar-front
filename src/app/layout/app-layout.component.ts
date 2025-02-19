import { Component, effect, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppSidebarComponent } from './app-sidebar.component';
import { AppTopbarComponent } from './app-topbar.component';
import { LayoutService } from './service/app-layout.service';
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
  @ViewChild(AppSidebarComponent) appSidebar!: AppSidebarComponent;
  @ViewChild(AppTopbarComponent) appTopbar!: AppTopbarComponent;

  constructor(public layoutService: LayoutService) {
    effect(() => {
      if (this.isSidebarOpen()) {
        this.layoutService.startListeningClickDocument(
          this.appSidebar.el.nativeElement,
          this.appTopbar.el.nativeElement
        );
      } else {
        this.layoutService.stopListeningClickDocument();
      }
    });
  }

  private isSidebarOpen(): boolean {
    return this.layoutService.configLayout().showSidebarOnMobile();
  }

  get containerClass() {
    console.log(this.layoutService.configLayout().showSidebarOnMobile());
    return {
      'layout-static-inactive': this.layoutService.configLayout().hideSidebar,
      'layout-mobile-active': this.layoutService
        .configLayout()
        .showSidebarOnMobile(),
    };
  }
}
