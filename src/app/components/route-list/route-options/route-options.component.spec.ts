import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RouteOptions } from "./route-options.component";

describe("ActualRouteOptionsComponent", () => {
  let component: RouteOptions;
  let fixture: ComponentFixture<RouteOptions>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouteOptions],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
