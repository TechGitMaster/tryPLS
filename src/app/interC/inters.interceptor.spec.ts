import { TestBed } from '@angular/core/testing';

import { IntersInterceptor } from './inters.interceptor';

describe('IntersInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      IntersInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: IntersInterceptor = TestBed.inject(IntersInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
