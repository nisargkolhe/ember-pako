/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-pako',
  included: function included(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/pako/dist/pako.js');
    app.import('vendor/pako.js', {
      exports: {
        pako: ['default']
      }
    });
  }
};
