import Ember from 'ember';
const { inject } = Ember;

export default Ember.Component.extend({
  store: inject.service(),
  editState: false,
  newDesc: '',
  actions: {
  	toggleModal() {
  		this.sendAction('toggleModal');
  	},
    toggleEditState() {
      this.toggleProperty('editState');
    },
    editItemDescription(newDesc, id) {
      this.toggleProperty('editState');
      let itemToEdit = this.get('store').findRecord('item', id);      

      itemToEdit.then(function(item) {
        item.set('description', newDesc);
        item.save();
      });

    },
    deleteItem(item) {
      this.sendAction('toggleModal');
      this.sendAction('deleteItem', item);
    }
  }
  
});
