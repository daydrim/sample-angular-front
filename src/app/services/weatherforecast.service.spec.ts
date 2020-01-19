import { TestBed } from '@angular/core/testing';

import { WeatherforecastService } from './weatherforecast.service';

describe('WeatherforecastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherforecastService = TestBed.get(WeatherforecastService);
    expect(service).toBeTruthy();
  });
});
