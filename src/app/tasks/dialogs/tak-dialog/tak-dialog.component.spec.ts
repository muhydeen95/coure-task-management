import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakDialogComponent } from './tak-dialog.component';

describe('TakDialogComponent', () => {
  let component: TakDialogComponent;
  let fixture: ComponentFixture<TakDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
