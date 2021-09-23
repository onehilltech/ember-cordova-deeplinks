/* global universalLinks */

import Service, { inject as service } from '@ember/service';

export default class DeepLinksService extends Service {
  @service ('ember-cordova/events')
  cordovaEvents;

  _universalLinks = null;

  constructor () {
    super (...arguments);

    this._universalLinks = new Promise ((resolve) => {
      this.cordovaEvents.on ('deviceready', function () {
        console.log ('device is ready, deep link subscriptions enabled.');
        resolve (universalLinks);
      });
    });
  }

  subscribe (name, callback) {
    return this._universalLinks.then (links => links.subscribe (name, callback));
  }

  unsubscribe (name) {
    return this._universalLinks.then (links => links.unsubscribe (name));
  }
}
