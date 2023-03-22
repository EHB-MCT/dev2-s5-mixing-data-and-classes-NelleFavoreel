export default class Joke {
	constructor(categories, flags, joketype, amount, safe) {
		this.categories = categories;
		this.flags = flags;
		this.joketype = joketype;
		this.amount = amount;
		this.safe = safe;
	}
	get htmlString() {
		return `
		<h2>${this.joketype}</h2>`;
	}
}
