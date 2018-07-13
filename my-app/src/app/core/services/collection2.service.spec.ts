import { TestBed, inject } from '@angular/core/testing';

import { Collection2Service } from './collection2.service';

describe('Collection2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Collection2Service]
    });
  });

  it('should be created', inject([Collection2Service], (service: Collection2Service) => {
    expect(service).toBeTruthy();
  }));
});
