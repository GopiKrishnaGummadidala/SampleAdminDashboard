import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrgChartComponent } from './my-org-chart.component';

describe('MyOrgChartComponent', () => {
  let component: MyOrgChartComponent;
  let fixture: ComponentFixture<MyOrgChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOrgChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrgChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
