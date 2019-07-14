import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualRouteMapComponent } from './actual-route-map.component';

describe('ActualRouteMapComponent', () => {
  let component: ActualRouteMapComponent;
  let fixture: ComponentFixture<ActualRouteMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualRouteMapComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualRouteMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
