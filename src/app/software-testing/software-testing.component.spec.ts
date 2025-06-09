import { TestBed } from '@angular/core/testing';
import { SoftwareTestingComponent } from './software-testing.component';
import {AppComponent} from "../app.component";

describe('SoftwareTestingComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareTestingComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SoftwareTestingComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});