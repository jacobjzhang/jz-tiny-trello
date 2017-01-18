import Ember from 'ember';

export default Ember.Component.extend({
	inputMode: false,
  newItem: '',
	actions: {
		isEditing() {
			this.set('inputMode', true);
		},
  	createItem: function(newItem, listId) {
  		this.set('inputMode', false);
      this.sendAction('createItem', newItem, listId);
    }
  }
});
