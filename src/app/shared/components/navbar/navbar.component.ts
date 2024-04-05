import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '@core/services/current-user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public username!: string;

  constructor(
    private _current: CurrentUserService
  ) { }

  ngOnInit(): void {
    this.username = this._current.getUser().username;
  }

}
