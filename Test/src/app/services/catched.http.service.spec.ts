import { TestBed } from '@angular/core/testing';

import { Catched.HttpService } from './catched.http.service';

describe('Catched.HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Catched.HttpService = TestBed.get(Catched.HttpService);
    expect(service).toBeTruthy();
  });
});
