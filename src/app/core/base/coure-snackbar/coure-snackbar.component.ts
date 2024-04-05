import { Component, Inject, OnInit } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
import { SnackType } from '@core/models/snack.model';

@Component({
  selector: 'app-coure-snackbar',
  templateUrl: './coure-snackbar.component.html',
  styleUrls: ['./coure-snackbar.component.scss'],
})
export class coureSnackbarComponent implements OnInit {
  public snackType = SnackType;
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private _snackRef: MatSnackBarRef<coureSnackbarComponent>
  ) {}

  ngOnInit(): void {}

  public dismiss(): void {
    this._snackRef.dismiss();
  }
}
