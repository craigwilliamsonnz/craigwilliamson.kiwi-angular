import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {
  faBlog,
  faCamera,
  faContactCard,
  faExplosion,
  faHome,
  faKiwiBird,
  faMotorcycle,
  faMusic
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    FaIconComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: 'navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  readonly faCamera = faCamera;
  readonly faBlog = faBlog;
  readonly faHome = faHome;
  readonly faExplosion = faExplosion;
  readonly faMusic = faMusic;
  readonly faKiwiBird = faKiwiBird;
  readonly faMotorcycle = faMotorcycle;
  readonly faContactCard = faContactCard;
}
