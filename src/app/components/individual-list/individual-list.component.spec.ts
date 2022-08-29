import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualListComponent } from './individual-list.component';

describe('IndividualListComponent', () => {
  let component: IndividualListComponent;
  let fixture: ComponentFixture<IndividualListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
