import { TestBed } from '@angular/core/testing';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appConfig } from './app.config';
import { routes } from './app.routes';

describe('AppConfig', () => {
    let config: ApplicationConfig;

    beforeEach(() => {
        config = appConfig;
    });

    it('should create app configuration', () => {
        expect(config).toBeTruthy();
    });

    it('should have providers array', () => {
        expect(config.providers).toBeDefined();
        expect(Array.isArray(config.providers)).toBeTruthy();
    });

    it('should have exactly 2 providers', () => {
        expect(config.providers.length).toBe(2);
    });
});
