import { TestBed } from '@angular/core/testing';

import { SohoVersionInitializerService } from './version-initializer.service';

describe('SunSystemsI18nInitialiserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
    ],
     providers: [
    ]
  }));

  it('should be created', () => {
    const service: SohoVersionInitializerService = TestBed.get(SohoVersionInitializerService);
    expect(service).toBeTruthy();
  });
});
