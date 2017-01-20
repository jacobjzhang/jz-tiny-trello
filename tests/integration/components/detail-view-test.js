import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('detail-view', 'Integration | Component | detail view', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{detail-view}}`);

  assert.equal(this.$('.pull-right span.button:first').text().trim(), 'Delete');
  assert.equal(this.$('.pull-right span.button:last').text().trim(), 'Close');


  this.set('item', {
    name: 'testitem',
    description: 'testitem'
  });
  
  this.render(hbs`
    {{detail-view selectedItem=item}}
  `);

  var woInstruct = this.$('.panel-body')
                       .text()
                       .replace('Click the name above or description below to edit.','')
                       .trim();
  assert.equal(woInstruct, 'testitem');
});
