// AGPL Lizenz
// #####################################################
// programmed (by) =>	{ 🔥🔥🔥 Almir Ajradini 🔥🔥🔥 }
// #####################################################
// 04.05.2022 @ BBBaden
//

const data = {
	vote1: {
		title: "Mittagessen",
		choices: {
			Pizza: 3,
			Pasta: 2,
			Kebab: 1,
			Salat: 5,
		},
	},
	vote2: {
		title: "Kino",
		choices: {
			Action: 2,
			Drama: 1,
			Thriller: 4,
			Comedy: 4,
		},
	},
};

const template = {
	title: "",
	choices: {},
};

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
			console.error(error);
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
			if (!data[req.body.name]) {
				data[req.body.name] = req.body.data;
				res.json({
					err: false,
					[req.body.name]: data[req.body.name],
				});
			} else {
				res.json({
					err: true,
					msg: "this One exists",
				});
			}
		} catch (error) {
			console.error(error);
			res.json({
				err: true,
				msg: "server error, could not addonenew element",
			});
		}
	},
	async voteOne(req, res) {
		try {
			if (data[req.body.name] && data[req.body.name].choices[req.body.vote] >= 0) {
				data[req.body.name].choices[req.body.vote] =
					data[req.body.name].choices[req.body.vote] + 1;
				res.json({
					err: false,
					msg: `new count ${data[req.body.name].choices[req.body.vote]}`,
				});
			} else {
				console.log(data[req.body.name]);
				console.log(data[req.body.name].choices[req.body.vote]);
				res.json({
					err: true,
					msg: "this one does not exist",
				});
			}
		} catch (error) {
			console.error(error);
			res.json({
				err: true,
				msg: "server error, could not addonenew element",
			});
		}
	},
};
