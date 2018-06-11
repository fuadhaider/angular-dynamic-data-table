import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssumptionComponent } from './assumption.component';

describe('AssumptionComponent', () => {
  let component: AssumptionComponent;
  let fixture: ComponentFixture<AssumptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssumptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
