import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RouteListNew } from "./route-list-new.component";

describe("ActualRouteOptionsComponent", () => {
  let component: RouteListNew;
  let fixture: ComponentFixture<RouteListNew>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouteListNew],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteListNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
