import { Routes } from '@angular/router';
import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { MotorcyclingComponent } from './motorcycling/motorcycling.component';
import { MusicComponent } from './music/music.component';
import { SoftwareTestingComponent } from './software-testing/software-testing.component';
import { PhotographyComponent } from './photography/photography.component';
import { ErrorComponent } from './error/error.component';

describe('App Routes', () => {
    it('should contain route for home page', () => {
        const route = routes.find(r => r.path === '');
        expect(route).toBeTruthy();
        expect(route?.component).toBe(HomeComponent);
    });

    it('should contain route for about page', () => {
        const route = routes.find(r => r.path === 'about');
        expect(route).toBeTruthy();
        expect(route?.component).toBe(AboutComponent);
    });

    it('should contain route for blog page', () => {
        const route = routes.find(r => r.path === 'blog');
        expect(route).toBeTruthy();
        expect(route?.component).toBe(BlogComponent);
    });

    it('should contain route for contact page', () => {
        const route = routes.find(r => r.path === 'contact');
        expect(route).toBeTruthy();
        expect(route?.component).toBe(ContactComponent);
    });

    it('should contain route for motorcycling page', () => {
        const route = routes.find(r => r.path === 'motorcycling');
        expect(route).toBeTruthy();
        expect(route?.component).toBe(MotorcyclingComponent);
    });

    it('should contain route for music page', () => {
        const route = routes.find(r => r.path === 'music');
        expect(route).toBeTruthy();
        expect(route?.component).toBe(MusicComponent);
    });

    it('should contain route for photography page', () => {
        const route = routes.find(r => r.path === 'photography');
        expect(route).toBeTruthy();
        expect(route?.component).toBe(PhotographyComponent);
    });

    it('should contain route for software testing page', () => {
        const route = routes.find(r => r.path === 'software-testing');
        expect(route).toBeTruthy();
        expect(route?.component).toBe(SoftwareTestingComponent);
    });

    it('should contain wildcard route for error page', () => {
        const route = routes.find(r => r.path === '**');
        expect(route).toBeTruthy();
        expect(route?.component).toBe(ErrorComponent);
    });

    it('should have correct number of routes', () => {
        expect(routes.length).toBe(9);
    });
});
