import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {BlogComponent} from "./blog/blog.component";
import {ContactComponent} from "./contact/contact.component";
import {MotorcyclingComponent} from "./motorcycling/motorcycling.component";
import {MusicComponent} from "./music/music.component";
import {SoftwareTestingComponent} from "./software-testing/software-testing.component";
import {PhotographyComponent} from "./photography/photography.component";
import {ErrorComponent} from "./error/error.component";

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'blog',
        component: BlogComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'motorcycling',
        component: MotorcyclingComponent,
    },
    {
        path: 'music',
        component: MusicComponent,
    },
    {
        path: 'photography',
        component: PhotographyComponent,
    },
    {
        path: 'software-testing',
        component: SoftwareTestingComponent,
    },
    {
        path: '**',
        component: ErrorComponent,
    }
];
