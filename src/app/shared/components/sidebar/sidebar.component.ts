import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CurrentUserService } from '@core/services/current-user.service';
import { CurrentStepService } from '@shared/services/current-step.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public isOpen: boolean = false;
  public showMinimizedMenu: boolean = false;

  @Output() showMinimized = new EventEmitter();
  constructor(private _currentUser: CurrentUserService,private _step: CurrentStepService) {}

  ngOnInit(): void {}

  public toggleSidebar(reset?: boolean): void {
    this._step.addRouteNumber(1);
    this.isOpen = !this.isOpen;
    if (this.showMinimizedMenu) {
      this.showMinimized.emit(true);
    }
  }
  public minimizeMenu(): void {
    this.showMinimizedMenu = !this.showMinimizedMenu;
    this.showMinimized.emit(this.showMinimizedMenu);
  }

  public logout(): void {
    this._currentUser.logOut();
  }
}
