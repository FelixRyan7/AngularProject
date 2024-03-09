import { TestBed } from '@angular/core/testing';

import { CrudFakeService } from './crud-fake.service';

describe('CrudFakeService', () => {
  let service: CrudFakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudFakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
