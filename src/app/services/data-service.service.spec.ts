import { HttpModule } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { DataServiceService } from './data-service.service';

describe('DataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule],
      providers: [DataServiceService]
    });
  });

  it('should be created', inject([DataServiceService], (service: DataServiceService) => {
    expect(service).toBeTruthy();
  }));

  it('should have getAll function', inject([DataServiceService], (service: DataServiceService) => {
    expect(service.getAll).toBeTruthy();
  }));
});
