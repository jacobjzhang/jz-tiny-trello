import Ember from 'ember';
import $ from 'jquery';
const { inject } = Ember;

export default Ember.Component.extend({
	store: inject.service(),
	actions: {
   	createList(newList) {
   		if (newList.name) {
        let self = this;
	      let list = this.get('store').createRecord('list', {
	      	name: newList.name
	      });

        list.save();

   		} else {
   			$('#newList input').addClass('input-error');
   			setTimeout(function() {
   				$('#newList input').removeClass('input-error');
   			}, 200);

   		}
    }
  }

});
