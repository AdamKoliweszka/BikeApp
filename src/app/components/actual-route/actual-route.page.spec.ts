import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ActualRoute } from "./actual-route.page";

describe("ActualRoutePage", () => {
  let component: ActualRoute;
  let fixture: ComponentFixture<ActualRoute>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActualRoute],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
