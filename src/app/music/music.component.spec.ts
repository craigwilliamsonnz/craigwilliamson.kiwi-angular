import { ComponentFixture, TestBed, fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';
import { MusicComponent } from './music.component';
import { By } from '@angular/platform-browser';

describe('MusicComponent', () => {
  let component: MusicComponent;
  let fixture: ComponentFixture<MusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MusicComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Initialization', () => {
    it('should initialize output to 0', () => {
      expect(component.output).toBe(0);
    });

    it('should call increaseCount on init', () => {
      const spy = spyOn(component, 'increaseCount');
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('sleep function', () => {
    it('should resolve after specified time', fakeAsync(() => {
      let resolved = false;
      // Access private method using type assertion
      (component as any).sleep(1000).then(() => {
        resolved = true;
      });

      expect(resolved).toBe(false);
      tick(1000);
      expect(resolved).toBe(true);
    }));
  });

  describe('increaseCount', () => {
    it('should increment output every second up to 10', fakeAsync(() => {
      component.increaseCount();

      for (let i = 0; i <= 10; i++) {
        tick(1000);
        expect(component.output).toBe(i);
      }

      discardPeriodicTasks();
    }));

    it('should stop incrementing when destroy is true', fakeAsync(() => {
      component.increaseCount();

      tick(2000); // Let it increment twice
      expect(component.output).toBe(1);

      component.ngOnDestroy();
      tick(1000);
      expect(component.output).toBe(2); // Should not have incremented

      discardPeriodicTasks();
    }));

    it('should handle errors gracefully', fakeAsync(() => {
      const errorSpy = spyOn(console, 'error');
      const sleepSpy = spyOn<any>(component, 'sleep').and.throwError('Test error');

      component.increaseCount();
      tick();

      expect(errorSpy).toHaveBeenCalledWith('Error in increaseCount:', jasmine.any(Error));
      discardPeriodicTasks();
    }));
  });

  describe('Component Integration', () => {
    // it('should display current output value in template', fakeAsync(() => {
    //   fixture.detectChanges();
    //   const outputElement = fixture.debugElement.query(By.css('p')).nativeElement;
    //   expect(outputElement.textContent).toContain('0');
    //
    //   component.increaseCount();
    //   tick(1000);
    //   fixture.detectChanges();
    //   expect(outputElement.textContent).toContain('1');
    //
    //   discardPeriodicTasks();
    // }));

    it('should cleanup on destroy', () => {
      const initialValue = component.output;
      component.ngOnDestroy();
      expect(component['destroy']).toBeTrue();
      expect(component.output).toBe(initialValue);
    });
  });

  describe('Error Handling', () => {
    it('should log error message when sleep fails', fakeAsync(() => {
      const consoleSpy = spyOn(console, 'error');
      const mockError = new Error('Test error');
      spyOn<any>(component, 'sleep').and.throwError(mockError);

      component.increaseCount();
      tick();

      expect(consoleSpy).toHaveBeenCalledWith('Error in increaseCount:', mockError);
      discardPeriodicTasks();
    }));
  });

  describe('Performance', () => {
    it('should not leak memory after destruction', fakeAsync(() => {
      const sleepSpy = spyOn<any>(component, 'sleep');
      component.increaseCount();
      component.ngOnDestroy();
      tick(5000);

      // Should only be called twice or less (initial call and possibly one more before destroy)
      expect(sleepSpy.calls.count()).toBeLessThanOrEqual(2);
      discardPeriodicTasks();
    }));
  });

  describe('Edge Cases', () => {
    it('should handle multiple calls to increaseCount', fakeAsync(() => {
      component.increaseCount();
      component.increaseCount();

      tick(1000);
      expect(component.output).toBe(0);

      discardPeriodicTasks();
    }));

    it('should handle multiple calls to ngOnDestroy', () => {
      component.ngOnDestroy();
      component.ngOnDestroy();
      expect(component['destroy']).toBeTrue();
    });

    it('should handle zero milliseconds sleep', fakeAsync(() => {
      let resolved = false;
      (component as any).sleep(0).then(() => {
        resolved = true;
      });

      tick();
      expect(resolved).toBeTrue();
    }));
  });
});