/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Get a reference to the button
const startButton = document.getElementById('startAngularButton');

if (startButton) {
    startButton.addEventListener('click', () => {
        // Remove the pre-Angular content
        const preAngularContent = document.getElementById('pre-angular-content');
        if (preAngularContent) {
            preAngularContent.remove();
        }

        // Create the app-root element dynamically
        const appRootElement = document.createElement('app-root');
        const angularAppContainer = document.getElementById('angular-app-container');
        if (angularAppContainer) {
            angularAppContainer.appendChild(appRootElement);
        }

        // Manually bootstrap the Angular application
        bootstrapApplication(AppComponent, appConfig)
        .catch((err) => console.error(err));
    });
}