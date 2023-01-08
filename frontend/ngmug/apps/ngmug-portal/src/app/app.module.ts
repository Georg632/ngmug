import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  AppConfigService,
  TranslationManagementService,
} from '@ngmug/ngmug/utils';
import { TwBreakpointsComponent } from '@ngmug/shared/gh-utils';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';

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
    AppRoutingModule,
    TwBreakpointsComponent,
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
