import { TestBed } from '@angular/core/testing';

import { MailmanagmentService } from './mailmanagment.service';

describe('MailmanagmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MailmanagmentService = TestBed.get(MailmanagmentService);
    expect(service).toBeTruthy();
  });
});
