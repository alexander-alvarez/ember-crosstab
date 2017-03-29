/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-crosstab',

  included: function(app) {
    this._super.included.apply(this, arguments);
    app.import(app.bowerDirectory + '/crosstab/src/crosstab.js');
    //this.import('node_modules/crosstab/src/crosstab.js');
  }
};
