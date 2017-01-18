import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('item', 'Unit | Model | item', {
  // Specify the other units that are required for this test.
  needs: []
});


test('it exists', function(assert) {
	Ember.run(function(){
	  let store = this.store();
	  assert.ok(store.find('item', 1), "record exists");
  });
});