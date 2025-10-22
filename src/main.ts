import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Set document direction by locale (assumes 'ar' builds via Angular localize)
const isArabic = document.documentElement.lang?.startsWith('ar');
document.documentElement.setAttribute('dir', isArabic ? 'rtl' : 'ltr');

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
