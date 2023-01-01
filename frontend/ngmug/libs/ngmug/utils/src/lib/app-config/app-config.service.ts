import { PlatformLocation } from '@angular/common';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GhAppConfig, GhConfigService } from '@ngmug/shared/gh-utils';
import { AppConfig } from './app-config';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService extends GhConfigService<AppConfig> {
  static settings: AppConfig;
  defaultValue: AppConfig = {
    api: {
      url: '',
    },
    language: ['de-DE', 'en-US'],
    title: 'Title',
    logoUrl: 'TBD',
    cookiePrefix: '',
  };

  constructor(
    platformLocation: PlatformLocation,
    titleService: Title,
    httpback: HttpBackend
  ) {
    super(new HttpClient(httpback), platformLocation, titleService);
  }

  override async load(configPath: string): Promise<AppConfig> {
    AppConfigService.settings = await super.load(configPath, this.defaultValue);
    return AppConfigService.settings;
  }
}
