import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { MotorcyclingComponent } from './motorcycling/motorcycling.component';
import { MusicComponent } from './music/music.component';
import { PhotographyComponent } from './photography/photography.component';
import { SoftwareTestingComponent } from './software-testing/software-testing.component';
import { ErrorComponent } from './error/error.component';

describe('App Routes', () => {
    it('should contain correct number of routes', () => {
        expect(routes.length).toBe(10);
    });

    describe('route configurations', () => {
        it('should have correct default route configuration', async () => {
            const homeRoute = routes.find(route => route.path === '');
            expect(homeRoute).toBeTruthy();
            expect(homeRoute?.title).toBe('Home');

            const component = await homeRoute?.loadComponent?.();
            expect(component).toBeDefined();
            expect(component).toBe(HomeComponent);
        });

        it('should have correct home route configuration', async () => {
            const homeRoute = routes.find(route => route.path === 'home');
            expect(homeRoute).toBeTruthy();
            expect(homeRoute?.title).toBe('Home');

            const component = await homeRoute?.loadComponent?.();
            expect(component).toBeDefined();
            expect(component).toBe(HomeComponent);
        });

        it('should have correct about route configuration', async () => {
            const aboutRoute = routes.find(route => route.path === 'about');
            expect(aboutRoute).toBeTruthy();
            expect(aboutRoute?.title).toBe('About');

            const component = await aboutRoute?.loadComponent?.();
            expect(component).toBeDefined();
            expect(component).toBe(AboutComponent);
        });

        it('should have correct blog route configuration', async () => {
            const blogRoute = routes.find(route => route.path === 'blog');
            expect(blogRoute).toBeTruthy();
            expect(blogRoute?.title).toBe('Blog');

            const component = await blogRoute?.loadComponent?.();
            expect(component).toBeDefined();
            expect(component).toBe(BlogComponent);
        });

        it('should have correct contact route configuration', async () => {
            const contactRoute = routes.find(route => route.path === 'contact');
            expect(contactRoute).toBeTruthy();
            expect(contactRoute?.title).toBe('Contact');

            const component = await contactRoute?.loadComponent?.();
            expect(component).toBeDefined();
            expect(component).toBe(ContactComponent);
        });

        it('should have correct motorcycling route configuration', async () => {
            const motorcyclingRoute = routes.find(route => route.path === 'motorcycling');
            expect(motorcyclingRoute).toBeTruthy();
            expect(motorcyclingRoute?.title).toBe('Motorcycling');

            const component = await motorcyclingRoute?.loadComponent?.();
            expect(component).toBeDefined();
            expect(component).toBe(MotorcyclingComponent);
        });

        it('should have correct music route configuration', async () => {
            const musicRoute = routes.find(route => route.path === 'music');
            expect(musicRoute).toBeTruthy();
            expect(musicRoute?.title).toBe('Music');

            const component = await musicRoute?.loadComponent?.();
            expect(component).toBeDefined();
            expect(component).toBe(MusicComponent);
        });

        it('should have correct photography route configuration', async () => {
            const photographyRoute = routes.find(route => route.path === 'photography');
            expect(photographyRoute).toBeTruthy();
            expect(photographyRoute?.title).toBe('Photography');

            const component = await photographyRoute?.loadComponent?.();
            expect(component).toBeDefined();
            expect(component).toBe(PhotographyComponent);
        });

        it('should have correct software-testing route configuration', async () => {
            const testingRoute = routes.find(route => route.path === 'software-testing');
            expect(testingRoute).toBeTruthy();
            expect(testingRoute?.title).toBe('Software Testing');

            const component = await testingRoute?.loadComponent?.();
            expect(component).toBeDefined();
            expect(component).toBe(SoftwareTestingComponent);
        });

        it('should have correct wildcard route configuration', async () => {
            const wildcardRoute = routes.find(route => route.path === '**');
            expect(wildcardRoute).toBeTruthy();
            expect(wildcardRoute?.title).toBe('404 - Page Not Found');

            const component = await wildcardRoute?.loadComponent?.();
            expect(component).toBeDefined();
            expect(component).toBe(ErrorComponent);
        });
    });

    describe('route order', () => {
        it('should have wildcard route as the last route', () => {
            const lastRoute = routes[routes.length - 1];
            expect(lastRoute.path).toBe('**');
        });

        it('should have home route as the first route', () => {
            const firstRoute = routes[0];
            expect(firstRoute.path).toBe('');
        });
    });

    describe('route titles', () => {
        it('should have title defined for all routes', () => {
            routes.forEach(route => {
                expect(route.title).toBeDefined();
                expect(typeof route.title).toBe('string');
            });
        });
    });

    describe('route lazy loading', () => {
        it('should have loadComponent defined for all routes', () => {
            routes.forEach(route => {
                expect(route.loadComponent).toBeDefined();
                expect(typeof route.loadComponent).toBe('function');
            });
        });

        it('should return a promise for each loadComponent', () => {
            routes.forEach(route => {
                const result = route.loadComponent?.();
                expect(result).toBeInstanceOf(Promise);
            });
        });
    });
});
