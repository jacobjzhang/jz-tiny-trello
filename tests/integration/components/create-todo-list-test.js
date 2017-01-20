import { moduleForComponent, test } from 'ember-qunit';
import wait from 'ember-test-helpers/wait';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('create-todo-list', 'Integration | Component | create todo list', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{create-todo-list}}`);

  assert.equal(this.$('.panel-heading').text().trim(), 'New List');
  assert.equal(this.$('.panel-body').text().trim(), 'Create List');

});

test('it can create a new to-do list', function(assert) {

  this.set('newList', {});
  this.render(hbs`
    {{create-todo-list newList=newList}}
  `);

  this.$('#newList input').val('test list');
  this.$('#newList button').click();
  
  return wait().then(() => {
    var numOfLists = this.$('.panel').length;
    assert.equal(numOfLists, 1);
  });



});
