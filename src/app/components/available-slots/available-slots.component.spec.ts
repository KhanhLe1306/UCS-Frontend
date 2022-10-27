import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableSlotsComponent } from './available-slots.component';

describe('AvailableSlotsComponent', () => {
  let component: AvailableSlotsComponent;
  let fixture: ComponentFixture<AvailableSlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableSlotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
