import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import {FooterComponent} from "./footer.component";
import {faFacebook, faGithub, faXTwitter} from "@fortawesome/free-brands-svg-icons";

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return current year', () => {
    const currentYear = new Date().getFullYear();
    expect(component.getYear).toBe(currentYear);
  });

  describe('Font Awesome icons', () => {
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
