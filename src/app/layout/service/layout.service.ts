import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  sidebarDesktopInactive = signal<boolean>(false);
  sidebarVertical = signal<boolean>(true);
  sidebarHorizontal = signal<boolean>(false);
  sidebarMobileActive = signal<boolean>(false);

  constructor() {}
}
