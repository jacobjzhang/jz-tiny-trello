import Ember from 'ember';

export default Ember.Component.extend({
	inputMode: false,
  newItem: {},
	actions: {
		isEditing() {
			this.toggleProperty('inputMode');
		},
  	createItem: function(newItem, listId) {
      this.toggleProperty('inputMode');
      this.sendAction('createItem', newItem, listId);
    }
  }
});
