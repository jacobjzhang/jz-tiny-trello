import { moduleForModel, test } from 'ember-qunit';

moduleForModel('item', 'Unit | Model | item', {
  needs: ['model:list']
});


test('item has name attribute', function(assert) {
  var model = this.subject();
  var hasAttr = Object.keys(model.toJSON()).indexOf('name') > -1;
  assert.ok(hasAttr);
});