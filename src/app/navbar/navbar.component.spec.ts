import { ComponentFixture, TestBed } from '@angular/core/testing';
import {NavbarComponent} from "./navbar.component";
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
import {provideRouter} from "@angular/router";

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NavbarComponent],
            providers: [provideRouter([])],
        }).compileComponents();

        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('Font Awesome icons', () => {
        it('should have faHome icon defined', () => {
            expect(component.faHome).toBeTruthy();
            expect(component.faHome).toEqual(faHome);
        });

        it('should have faContactCard icon defined', () => {
            expect(component.faContactCard).toBeTruthy();
            expect(component.faContactCard).toEqual(faContactCard);
        });

        it('should have faKiwiBird icon defined', () => {
            expect(component.faKiwiBird).toBeTruthy();
            expect(component.faKiwiBird).toEqual(faKiwiBird);
        });

        it('should have faExplosion icon defined', () => {
            expect(component.faExplosion).toBeTruthy();
            expect(component.faExplosion).toEqual(faExplosion);
        });

        it('should have faCamera icon defined', () => {
            expect(component.faCamera).toBeTruthy();
            expect(component.faCamera).toEqual(faCamera);
        });

        it('should have faBlog icon defined', () => {
            expect(component.faBlog).toBeTruthy();
            expect(component.faBlog).toEqual(faBlog);
        });

        it('should have faMotorcycle icon defined', () => {
            expect(component.faMotorcycle).toBeTruthy();
            expect(component.faMotorcycle).toEqual(faMotorcycle);
        });

        it('should have faMusic icon defined', () => {
            expect(component.faMusic).toBeTruthy();
            expect(component.faMusic).toEqual(faMusic);
        });
    });
});
