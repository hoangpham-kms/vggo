import { TestBed } from '@angular/core/testing';

import { VgLibService } from './vg-lib.service';

describe('VgLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VgLibService = TestBed.get(VgLibService);
    expect(service).toBeTruthy();
  });
});
