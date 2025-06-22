import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
        title: 'Home'
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about.component').then(m => m.AboutComponent),
        title: 'About'
    },
    {
        path: 'blog',
        loadComponent: () => import('./blog/blog.component').then(m => m.BlogComponent),
        title: 'Blog'
    },
    {
        path: 'contact',
        loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent),
        title: 'Contact'
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
        title: 'Home'
    },
    {
        path: 'motorcycling',
        loadComponent: () => import('./motorcycling/motorcycling.component').then(m => m.MotorcyclingComponent),
        title: 'Motorcycling'
    },
    {
        path: 'music',
        loadComponent: () => import('./music/music.component').then(m => m.MusicComponent),
        title: 'Music'
    },
    {
        path: 'photography',
        loadComponent: () => import('./photography/photography.component').then(m => m.PhotographyComponent),
        title: 'Photography'
    },
    {
        path: 'software-testing',
        loadComponent: () => import('./software-testing/software-testing.component').then(m => m.SoftwareTestingComponent),
        title: 'Software Testing'
    },
    {
        path: '**',
        loadComponent: () => import('./error/error.component').then(m => m.ErrorComponent),
        title: '404 - Page Not Found'
    }
];
