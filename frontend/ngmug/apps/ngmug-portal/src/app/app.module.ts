import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeatureShellNgmugModule } from '@ngmug/ngmug/feature-shell-ngmug';

import { TwBreakpointsComponent } from '@ngmug/shared/gh-utils';
import {
  AppConfigService,
  TranslationManagementService,
} from '@ngmug/shared/ngmug-utils';
import { FeatureShellTcModule } from '@ngmug/trip-calendar/feature-shell-tc';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';

export const environment = {
  settingsFile: `assets/customization/settings.json?version=${Date.now()}`,
  languagesFolder: 'assets/languages/',
  languagesCustomizationFolder: 'assets/customization/languages/',
  languagesSuffix: `.json?version=${Date.now()}`,
};

export function AppInit(
  configService: AppConfigService,
  transService: TranslationManagementService
) {
  return async () => {
    await configService.load(environment.settingsFile);
    transService.init();
  };
}

export function ApiBaseUrlFactory(appConfig: AppConfigService) {
  return AppConfigService.settings.api.url;
}

export function HttpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(
    httpClient,
    environment.languagesFolder,
    environment.languagesSuffix
  );
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TwBreakpointsComponent,
    FeatureShellTcModule,
    // FeatureShellNgmugModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    AppConfigService,
    TranslationManagementService,
    {
      provide: APP_INITIALIZER,
      useFactory: AppInit,
      deps: [AppConfigService, TranslationManagementService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
