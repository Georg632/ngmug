import { RoutingHelper } from '@ngmug/shared/gh-utils';

export class RoutingMap {
  ngmug = {
    about: {},
  };
  headlessui = {
    about: {},
    hlAutocomplete: {
      definition: {},
    },
  };
  rxjs = {
    about: {},
    stateSubject: {},
  };
  routing = {
    about: {},
    parent: {
      parentId: {
        details: {
          childId: {},
        },
      },
    },
  };
}

export const ROUTING: RoutingHelper<RoutingMap> = new RoutingHelper<RoutingMap>(
  new RoutingMap()
);
