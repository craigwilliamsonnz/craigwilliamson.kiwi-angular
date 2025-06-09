import { TestBed } from '@angular/core/testing';
import { MusicComponent } from './music.component';
import {AppComponent} from "../app.component";

describe('MusicComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MusicComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});