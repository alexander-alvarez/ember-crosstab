import Ember from 'ember';
const { computed, getOwner, run } = Ember;

export default Ember.Service.extend({

  init() {
    this._super(...arguments);
    crosstab.broadcastMaster('newTab');

    crosstab.on('newTab', ({ origin }) => {
      run(this, () => {
        const newTabs = [...this.get('childrenTabs'), origin];
        this.set('childrenTabs', newTabs);
      });
    })
  },

  childrenTabs: computed(function() {
    return [];
  }),

  tabId: computed(function() {
    return getOwner(this).lookup('crosstab:id');
  }),

  hasRegisteredWithMaster: false,

  /**
   * @type Array
   */
  otherTabs: undefined,

  register(eventName, context, fn) {
    crosstab.on(eventName, function(message) {
      fn.apply(context, message.data)
    });
  }

});
