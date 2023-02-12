import { GhAppConfig } from '@ngmug/shared/gh-utils';

export interface AppConfig extends GhAppConfig {
  cookiePrefix: string;
  logoUrl: string;
}
