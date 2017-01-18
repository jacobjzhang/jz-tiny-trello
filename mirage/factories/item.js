import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
	name() {
		return faker.company.bsBuzz();
	},
	description() {
		return faker.company.catchPhraseDescriptor();
	}
});
