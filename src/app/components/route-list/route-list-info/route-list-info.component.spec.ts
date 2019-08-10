import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RouteInfoList } from "./route-list-info.component";

describe("ActualRouteOptionsComponent", () => {
  let component: RouteInfoList;
  let fixture: ComponentFixture<RouteInfoList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouteInfoList],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteInfoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
