import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		selectItem(item) {
			this.sendAction('selectItem', item);
		}
	}
});
