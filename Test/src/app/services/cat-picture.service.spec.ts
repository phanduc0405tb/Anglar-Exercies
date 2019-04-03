import { TestBed } from '@angular/core/testing';

import { CatPictureService } from './cat-picture.service';

describe('CatPictureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatPictureService = TestBed.get(CatPictureService);
    expect(service).toBeTruthy();
  });
});
