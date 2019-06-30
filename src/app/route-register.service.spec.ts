import { TestBed } from '@angular/core/testing';

import { RouteRegisterService } from './route-register.service';

describe('RouteRegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteRegisterService = TestBed.get(RouteRegisterService);
    expect(service).toBeTruthy();
  });
});
