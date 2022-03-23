import { TestBed } from '@angular/core/testing';
import { avatarService } from './avatar.service';

describe('avatarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: avatarService = TestBed.get(avatarService);
    expect(service).toBeTruthy();
  });
});
