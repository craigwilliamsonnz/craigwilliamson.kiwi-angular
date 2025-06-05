import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faAmazon, faAngular, faBootstrap, faFontAwesome} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-about',
  imports: [FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  protected readonly faAngular = faAngular;
  protected readonly faAmazon = faAmazon;
  protected readonly faBootstrap = faBootstrap;
  protected readonly faFontAwesome = faFontAwesome;
}
