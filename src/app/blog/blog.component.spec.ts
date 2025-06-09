import { TestBed } from '@angular/core/testing';
import { BlogComponent } from './blog.component';

describe('BlogComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BlogComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});