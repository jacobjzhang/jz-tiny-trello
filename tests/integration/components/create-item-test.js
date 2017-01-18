import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('create-item', 'Integration | Component | create item', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{create-item}}`);

  assert.equal(this.$().text().trim(), 'Add item to list');
  
});


test('it can switch from a create button to an input', function(assert) {

  this.render(hbs`
    {{#create-item}}
      template block text
    {{/create-item}}
  `);

  this.$('button').click();
  this.$('#newItem input').val('test');

  var entry;
  this.$('#newItem input').keypress(function(e) {
    if(e.which === 13) {
        entry = $('#newItem input').val();
    }
  });

  var e = $.Event("keypress");
  e.which = 13;
  e.keyCode = 13;
  this.$('#newItem input').trigger(e);

  assert.equal(entry, 'test');
});
