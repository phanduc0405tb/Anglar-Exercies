import { TestBed } from '@angular/core/testing';

import { MusicstoreService } from './musicstore.service';

describe('MusicstoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusicstoreService = TestBed.get(MusicstoreService);
    expect(service).toBeTruthy();
  });
});
