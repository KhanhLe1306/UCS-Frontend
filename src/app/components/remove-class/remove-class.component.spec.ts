import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveClassComponent } from './remove-class.component';

describe('RemoveClassComponent', () => {
  let component: RemoveClassComponent;
  let fixture: ComponentFixture<RemoveClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
