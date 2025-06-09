import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBlog,
  faCamera,
  faContactCard,
  faExplosion,
  faHome,
  faMotorcycle,
  faMusic,
  faKiwiBird
} from '@fortawesome/free-solid-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {
  faFacebook,
  faGithub,
  faXTwitter
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-root',
  imports: [FontAwesomeModule, RouterOutlet, NgbModule, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'craigwilliamson.kiwi-angular';
  protected readonly faHome = faHome;
  protected readonly faContactCard = faContactCard;
  protected readonly faKiwiBird = faKiwiBird;
  protected readonly faExplosion = faExplosion;
  protected readonly faCamera = faCamera;
  protected readonly faBlog = faBlog;
  protected readonly faMotorcycle = faMotorcycle;
  protected readonly faMusic = faMusic;
  protected readonly faFacebook = faFacebook;
  protected readonly faGithub = faGithub;
  protected readonly faXTwitter = faXTwitter;

  getYear = new Date().getFullYear();
}
