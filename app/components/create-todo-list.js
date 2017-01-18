import Ember from 'ember';
const { inject } = Ember;

export default Ember.Component.extend({
	store: inject.service(),
	actions: {
   	createList(newList) {
      let list = this.get('store').createRecord('list', {
      	name: newList.name
      });
      list.save();
    }
  }
});
