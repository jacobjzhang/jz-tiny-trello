import Ember from 'ember';
const { inject } = Ember;

export default Ember.Component.extend({
  store: inject.service(),
  editingName: false,
  editingDesc: false,
  newItem: {},
  actions: {
  	toggleModal() {
  		this.sendAction('toggleModal');
  	},
    toggleEditState(element) {
      if (element === 'name') {
        this.toggleProperty('editingName');        
      } else if (element === 'description') {
        this.toggleProperty('editingDesc');
      }
    },
    editItemName(newItem, id) {
      if (newItem.name) {
        this.toggleProperty('editingName');
        let itemToEdit = this.get('store').findRecord('item', id);      

        itemToEdit.then(function(item) {
          item.set('name', newItem.name);
          item.save();
        });

        this.set('newItem', {});
      }

    },
    editItemDescription(newItem, id) {
      if (newItem.description) {
        this.toggleProperty('editingDesc');
        let itemToEdit = this.get('store').findRecord('item', id);      

        itemToEdit.then(function(item) {
          item.set('description', newItem.description);
          item.save();
        });

        this.set('newItem', {});
      }
    },
    deleteItem(item) {
      this.sendAction('toggleModal');
      this.sendAction('deleteItem', item);
    }
  }
  
});
