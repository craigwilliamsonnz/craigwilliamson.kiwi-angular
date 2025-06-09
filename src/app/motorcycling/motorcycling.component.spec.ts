import { TestBed } from '@angular/core/testing';
import { MotorcyclingComponent } from './motorcycling.component';

describe('MotorcyclingComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorcyclingComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MotorcyclingComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});