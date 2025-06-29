import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//اي حاجه عايزه اضيفها ف المشروع بعملها export ,import هنا
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),FormsModule]
};
