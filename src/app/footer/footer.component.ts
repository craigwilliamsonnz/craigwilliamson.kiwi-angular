import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {faBitbucket, faConfluence, faFacebook, faGithub, faJira, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FaIconComponent],
  templateUrl: 'footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  getYear = new Date().getFullYear();
  readonly faFacebook = faFacebook;
  readonly faXTwitter = faXTwitter;
  readonly faGithub = faGithub;
  readonly faBitbucket = faBitbucket;
  readonly faConfluence = faConfluence;
  readonly faJira = faJira;
}
