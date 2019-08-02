import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ListOfRoutes } from "./list-of-routes.component";

describe("ActualRouteOptionsComponent", () => {
  let component: ListOfRoutes;
  let fixture: ComponentFixture<ListOfRoutes>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfRoutes],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfRoutes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
