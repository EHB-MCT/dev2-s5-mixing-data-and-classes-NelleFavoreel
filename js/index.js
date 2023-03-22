"use strict";
import Joke from "./Joke.js";

const app = {
	items: [],
	init() {
		this.getData();
	},
	getData() {
		fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10").then(function (dataJ) {
			return dataJ.json().then(function (data) {
				const joke1 = new Joke(data.categories, data.flags, data.type, data.safe);
				console.log(joke1);
			});
		});
	},
	onSearch() {},
	render(message) {},
};
app.init();
