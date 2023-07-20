import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChartComponent } from './form-chart.component';

describe('FormChartComponent', () => {
  let component: FormChartComponent;
  let fixture: ComponentFixture<FormChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
