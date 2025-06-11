import { TestBed } from '@angular/core/testing';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

describe('Location Strategy Configuration', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: LocationStrategy, useClass: HashLocationStrategy }
            ]
        });
    });

    it('should provide HashLocationStrategy', () => {
        const locationStrategy = TestBed.inject(LocationStrategy);
        expect(locationStrategy instanceof HashLocationStrategy).toBeTruthy();
    });

    it('should create correct hash prefix', () => {
        const locationStrategy = TestBed.inject(LocationStrategy) as HashLocationStrategy;
        expect(locationStrategy.path()).toBe('');
    });

    it('should properly format paths with hash', () => {
        const locationStrategy = TestBed.inject(LocationStrategy);
        const testPath = '/test-path';
        expect(locationStrategy.prepareExternalUrl(testPath)).toBe('#' + testPath);
    });

    it('should handle empty path correctly', () => {
        const locationStrategy = TestBed.inject(LocationStrategy);
        expect(locationStrategy.prepareExternalUrl('')).toBe('');
    });
});
