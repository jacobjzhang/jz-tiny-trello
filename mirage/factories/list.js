import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
	name() {
		return faker.commerce.department();
	},
	afterCreate(list, server) {
		server.createList('item', 4, {list});
	}
});
