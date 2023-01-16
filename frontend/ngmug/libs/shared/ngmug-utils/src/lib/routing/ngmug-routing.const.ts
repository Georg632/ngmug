import { RoutingHelper } from '@ngmug/shared/gh-utils';

export class RoutingMap {
  ngmug = {
    getstarted: {},
  };
  headlessui = {
    getstarted: {},
    combobox: {},
    dialog: {},
  };
  rxjs = {
    getstarted: {},
    stateSubject: {},
  };
  routing = {
    getstarted: {},
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
