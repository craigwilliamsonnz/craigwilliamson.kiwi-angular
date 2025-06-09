import { TestBed } from '@angular/core/testing';
import { PhotographyComponent } from './photography.component';
import {AppComponent} from "../app.component";

describe('PhotographyComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotographyComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PhotographyComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});