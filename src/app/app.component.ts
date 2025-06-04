import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faAnchorCircleCheck} from "@fortawesome/free-solid-svg-icons/faAnchorCircleCheck";
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  imports: [FontAwesomeModule, RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'craigwilliamson.kiwi-angular';
  faCoffee = faCoffee;
  faAnchorCircleCheck = faAnchorCircleCheck;
}
