import { TestBed } from '@angular/core/testing';

import { RegisterationServiceService } from './authentication.service';

describe('RegisterationServiceService', () => {
  let service: RegisterationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
