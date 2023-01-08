import { GhAppConfig } from '@ngmug/shared/gh-utils';

export interface AppConfig extends GhAppConfig {
  language: string[];
  cookiePrefix: string;
  logoUrl: string;
}
