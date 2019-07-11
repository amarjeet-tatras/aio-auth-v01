import { TestBed } from '@angular/core/testing';

import { AioAuthV01Service } from './aio-auth-v01.service';

describe('AioAuthV01Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AioAuthV01Service = TestBed.get(AioAuthV01Service);
    expect(service).toBeTruthy();
  });
});
