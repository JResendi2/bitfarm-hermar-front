import {
  ElementRef,
  Injectable,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { AppSidebarComponent } from '../app-sidebar.component';

interface ConfigLayout {
  hideSidebar: boolean;
  showSidebarOnMobile: WritableSignal<boolean>;
}

@Injectable({ providedIn: 'root' })
export class LayoutService {
  private clickSubscription: Subscription | null = null;
  @ViewChild(AppSidebarComponent) appSidebar!: AppSidebarComponent;

  configLayout: WritableSignal<ConfigLayout> = signal({
    hideSidebar: false,
    showSidebarOnMobile: signal(false),
  });

  constructor() {}

  startListeningClickDocument(
    elementSidebar: ElementRef,
    elementTopbar: ElementRef
  ) {
    this.clickSubscription = fromEvent(document, 'click').subscribe((event) => {
      const isOutsideClicked = !(
        elementSidebar.nativeElement.isSameNode(event.target) ||
        elementSidebar.nativeElement.contains(event.target) ||
        elementTopbar.nativeElement.isSameNode(event.target) ||
        elementTopbar.nativeElement.contains(event.target)
      );
      if (isOutsideClicked) {
        this.configLayout().showSidebarOnMobile.set(false);
      }
    });
  }

  stopListeningClickDocument() {
    this.clickSubscription?.unsubscribe();
    this.clickSubscription = null;
  }
}
