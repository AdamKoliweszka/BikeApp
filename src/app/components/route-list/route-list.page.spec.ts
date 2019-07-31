import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RouteList } from "./route-list.page";

describe("RouteListPage", () => {
  let component: RouteList;
  let fixture: ComponentFixture<RouteList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouteList],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
