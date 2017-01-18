import Ember from 'ember';
const { inject } = Ember;

export default Ember.Component.extend({
	store: inject.service(),
	actions: {
    selectItem(item) {
      this.sendAction('selectItem', item);
    },
  	createItem: function(newItem, listId) {
      this.sendAction('createItem', newItem, listId);
    },
    deleteList: function(list) {
    	let id = list.id;

    	let listToDel = this.get('store').peekRecord('list', id);
    	listToDel.destroyRecord();
    }
	}
});
