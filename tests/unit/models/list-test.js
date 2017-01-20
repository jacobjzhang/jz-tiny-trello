import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('list', 'Unit | Model | list', {
  needs: ['model:item']
});

test('list has items relationship', function(assert) {
  const List = this.store().modelFor('list');
  const relationship = Ember.get(List, 'relationshipsByName').get('items');

  assert.equal(relationship.key, 'items', 'has relationship with list');
  assert.equal(relationship.kind, 'hasMany', 'kind of relationship is belongsTo');
});
