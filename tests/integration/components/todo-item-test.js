import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('todo-item', 'Integration | Component | todo item', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('item', {
    name: 'testitem',
    description: 'testitem'
  });
  this.render(hbs`{{todo-item item=item}}`);

  assert.equal(this.$().text().trim(), 'testitem');

});
