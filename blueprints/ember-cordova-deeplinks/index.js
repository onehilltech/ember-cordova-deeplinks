'use strict';

const { Blueprint } = require ('ember-cli-blueprint-helpers');

module.exports = Blueprint.extend ({
  addons: [
    { name: 'ember-cordova-events' }
  ]
});
