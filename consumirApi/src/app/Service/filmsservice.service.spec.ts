import { TestBed } from '@angular/core/testing';

import { FilmsserviceService } from './filmsservice.service';

describe('FilmsserviceService', () => {
  let service: FilmsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
