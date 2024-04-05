import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasKListComponent } from './task-list.component';

describe('TasKListComponent', () => {
  let component: TasKListComponent;
  let fixture: ComponentFixture<TasKListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasKListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasKListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
