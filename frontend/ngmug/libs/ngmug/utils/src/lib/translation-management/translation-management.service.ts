import { Injectable } from '@angular/core';
import { GhTranslationService } from '@ngmug/shared/gh-utils';
import { TranslateService } from '@ngx-translate/core';
import { AppConfigService } from '../app-config/app-config.service';
import { getCookie, setCookie } from '../cookies/cookie';

@Injectable({
  providedIn: 'root',
})
export class TranslationManagementService extends GhTranslationService {
  constructor(ngxTranslateService: TranslateService) {
    super(ngxTranslateService);
  }

  override init(): void {
    super.init(
      AppConfigService.settings.language,
      AppConfigService.settings.cookiePrefix,
      getCookie,
      setCookie
    );
  }
}
