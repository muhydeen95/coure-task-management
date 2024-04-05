import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaksListComponent } from './taks-list.component';

describe('TaksListComponent', () => {
  let component: TaksListComponent;
  let fixture: ComponentFixture<TaksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaksListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
