// AGPL Lizenz
// #####################################################
// programmed (by) =>	{ 🔥🔥🔥 Almir Ajradini 🔥🔥🔥 }
// #####################################################
// 04.05.2022 @ BBBaden
//

const data = {
	lesson1: [
		{
			feedback: "Zu viel Stoff",
			rating: "3",
		},
		{
			feedback: "Zu schwer",
			rating: "2",
		},
		{
			feedback: "Verstehe nix, aber gefällt mir",
			rating: "4",
		},
	],
	lesson2: [
		{
			feedback: "ganz gut",
			rating: "4",
		},
		{
			feedback: "Sehr interessant",
			rating: "4",
		},
		{
			feedback: "Super",
			rating: "5",
		},
	],
};

const template = {
	feedback: "",
	rating: "",
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
			if (data[req.body.name]) {
				// data[req.body.name] = req.body.data;
				data[req.body.name].push(req.body.data);
				res.json({
					err: false,
					msg: "rating added",
				});
			} else {
				data[req.body.name] = [req.body.data];
				res.json({
					err: false,
					msg: "rating added",
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
