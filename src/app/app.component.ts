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
  faConfluence,
  faFacebook,
  faGithub, faJira,
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
  readonly faHome = faHome;
  readonly faContactCard = faContactCard;
  readonly faKiwiBird = faKiwiBird;
  readonly faExplosion = faExplosion;
  readonly faCamera = faCamera;
  readonly faBlog = faBlog;
  readonly faMotorcycle = faMotorcycle;
  readonly faMusic = faMusic;
  readonly faFacebook = faFacebook;
  readonly faGithub = faGithub;
  readonly faXTwitter = faXTwitter;

  getYear = new Date().getFullYear();
    protected readonly faConfluence = faConfluence;
  protected readonly faJira = faJira;
}
