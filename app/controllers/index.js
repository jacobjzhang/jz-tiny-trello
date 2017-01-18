import Ember from 'ember';

export default Ember.Controller.extend({
  modalEnabled: false,
  selectedItem: {},
  actions: {
    toggleModal() {
      this.toggleProperty('modalEnabled');
    },
    createItem(newItem, listId) {
      let thisNewItem = this.store.createRecord('item', {
        name: newItem.name,
        description: 'Click here to enter a description'
      });

      let listToAssociate = this.store.findRecord('list', listId);
      listToAssociate.then(function(list) {
        list.get('items').then(function(items) {
          items.pushObject(thisNewItem);
          items.save();
        });
      });

    },
    selectItem(item) {
      this.set('selectedItem', item);
      this.toggleProperty('modalEnabled');
    },
    deleteItem(item) {
      let id = item.id;
      let thisItem = this.get('store').peekRecord('item', id);
      thisItem.destroyRecord();

    }
  }
  
});
