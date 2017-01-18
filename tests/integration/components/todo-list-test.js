import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('single-list', 'Integration | Component | todo list', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{todo-list}}`);

  assert.equal(this.$().text().trim(), 'Add item to list');

});
