// AGPL Lizenz
// #####################################################
// programmed (by) =>	{ 🔥🔥🔥 Almir Ajradini 🔥🔥🔥 }
// #####################################################
// 04.05.2022 @ BBBaden
//

const data = {
	coding: {
		url: [
			"https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/JSON",
			"https://javascript.info/object",
		],
	},
	design: {
		url: [
			"https://dev.to/imiahazel/100-css-box-shadow-presets-2o1k",
			"https://dev.to/richkurtzman/figma-firejet-fathym-f-yeah-401",
		],
	},
};

const template = {};

module.exports = {
	async getAll(req, res) {
		try {
			const allElements = [];

			for (const element in data) allElements.push({ [element]: data[element] });

			res.json({
				err: false,
				elements: allElements,
			});
		} catch (error) {
			// console.error(error);
			res.json({
				err: true,
				msg: "server error",
			});
		}
	},

	async getOneDetail(req, res) {
		try {
			if (data[req.params.id]) {
				one = data[req.params.id];
				res.json(one);
			} else {
				res.json({
					err: true,
					msg: "id not found",
				});
			}
		} catch (error) {
			console.error(error);
			res.json({
				err: true,
				msg: "Details of ID not found",
			});
		}
	},

	async getTemplate(req, res) {
		res.json(template);
	},

	async addOne(req, res) {
		try {
			if (!data[req.body.category]) {
				data[req.body.category] = { url: [req.body.url] };
				res.json({
					err: false,
					msg: "Category created",
				});
			} else {
				data[req.body.category].url.push(req.body.url);
				console.log(req.body.category);
				res.json({
					err: false,
					msg: "URL added",
				});
			}
		} catch (error) {
			res.json({
				err: true,
				msg: "server error, could not addonenew element",
			});
		}
	},
};

// {
//     "category": "coding",
//     "url": "https://www.w3schools.com"
// }
