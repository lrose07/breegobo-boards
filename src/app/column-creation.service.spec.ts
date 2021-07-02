import { TestBed } from '@angular/core/testing';

import { ColumnCreationService } from './column-creation.service';

describe('ColumnCreationService', () => {
  let service: ColumnCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColumnCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
