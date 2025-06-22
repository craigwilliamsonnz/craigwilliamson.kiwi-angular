import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {provideRouter, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {
  faHome,
  faContactCard,
  faKiwiBird,
  faExplosion,
  faCamera,
  faBlog,
  faMotorcycle,
  faMusic
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule,
        NgbModule,
        RouterOutlet,
        RouterLinkActive,
        RouterLink
      ],
      providers: [provideRouter([])],
      declarations: []
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'craigwilliamson.kiwi-angular' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('craigwilliamson.kiwi-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('The busy life of Craig');
  });
});