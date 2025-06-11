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

  it('should return current year', () => {
    const currentYear = new Date().getFullYear();
    expect(component.getYear).toBe(currentYear);
  });

  describe('Font Awesome icons', () => {
    it('should have faHome icon defined', () => {
      expect(component.faHome).toBeTruthy();
      expect(component.faHome).toEqual(faHome);
    });

    it('should have faContactCard icon defined', () => {
      expect(component.faContactCard).toBeTruthy();
      expect(component.faContactCard).toEqual(faContactCard);
    });

    it('should have faKiwiBird icon defined', () => {
      expect(component.faKiwiBird).toBeTruthy();
      expect(component.faKiwiBird).toEqual(faKiwiBird);
    });

    it('should have faExplosion icon defined', () => {
      expect(component.faExplosion).toBeTruthy();
      expect(component.faExplosion).toEqual(faExplosion);
    });

    it('should have faCamera icon defined', () => {
      expect(component.faCamera).toBeTruthy();
      expect(component.faCamera).toEqual(faCamera);
    });

    it('should have faBlog icon defined', () => {
      expect(component.faBlog).toBeTruthy();
      expect(component.faBlog).toEqual(faBlog);
    });

    it('should have faMotorcycle icon defined', () => {
      expect(component.faMotorcycle).toBeTruthy();
      expect(component.faMotorcycle).toEqual(faMotorcycle);
    });

    it('should have faMusic icon defined', () => {
      expect(component.faMusic).toBeTruthy();
      expect(component.faMusic).toEqual(faMusic);
    });

    it('should have faFacebook icon defined', () => {
      expect(component.faFacebook).toBeTruthy();
      expect(component.faFacebook).toEqual(faFacebook);
    });

    it('should have faGithub icon defined', () => {
      expect(component.faGithub).toBeTruthy();
      expect(component.faGithub).toEqual(faGithub);
    });

    it('should have faXTwitter icon defined', () => {
      expect(component.faXTwitter).toBeTruthy();
      expect(component.faXTwitter).toEqual(faXTwitter);
    });
  });
});