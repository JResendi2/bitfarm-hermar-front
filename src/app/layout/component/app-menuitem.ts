import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../service/layout.service';

@Component({
  selector: '[app-menuitem]',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: ` @if(item.items){
    <div
      class="menuitem-link"
      [class]="{ 'width-down': item.items.length > 0 }"
      (click)="itemClick($event)"
    >
      <i *ngIf="item.icon" [class]="'menuitem-icon ' + item.icon"></i>
      <span>{{ item.label }}</span>
      <i
        *ngIf="item.items.length > 0"
        class="pi pi-fw pi-angle-down submenu-toggler"
        [class]="{ hidden: this.isSidebarHorizontal && this.lavel === 1 }"
      ></i>
    </div>
    @if(item.items.length > 0){
    <ul class="layout-menu" [@children]="submenuAnimation">
      @for (item of item.items; track $index) {
      <li app-menuitem [item]="item" class="layout-menuitem"></li>
      }
    </ul>
    } } @else if(!item.items) {
    <a
      class="menuitem-link"
      [class]="{ 'width-href': item.routerLink }"
      [routerLink]="item.routerLink"
    >
      <i *ngIf="item.icon" [class]="'menuitem-icon ' + item.icon"></i>
      <span>{{ item.label }}</span>
    </a>
    }`,
  animations: [
    trigger('children', [
      state(
        'collapsed',
        style({
          height: '0',
        })
      ),
      state(
        'expanded',
        style({
          height: '*',
        })
      ),
      transition(
        'collapsed <=> expanded',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
    ]),
  ],
})
export class AppMenuitem {
  @Input() item!: MenuItem;
  @Input() lavel: number = 2;
  activeSubmenu: boolean = false;

  constructor(private layoutService: LayoutService) {}

  itemClick(event: Event) {
    if (this.item.items) {
      this.activeSubmenu = !this.activeSubmenu;
    }
  }

  get submenuAnimation() {
    return this.activeSubmenu ? 'expanded' : 'collapsed';
  }

  get isSidebarHorizontal(): boolean {
    return this.layoutService.sidebarVertical() === false;
  }
}
