import { ComponentFixture, TestBed } from '@angular/core/testing';

import { coureSnackbarComponent } from './coure-snackbar.component';

describe('coureSnackbarComponent', () => {
  let component: coureSnackbarComponent;
  let fixture: ComponentFixture<coureSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ coureSnackbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(coureSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
