// AGPL Lizenz
// #####################################################
// programmed (by) =>	{ 🔥🔥🔥 Almir Ajradini 🔥🔥🔥 }
// #####################################################
// 04.05.2022 @ BBBaden
//

const data = {
	Ajradini: [
		{
			Tag: "Fr",
			Fach: "Informatik",
			Zeit: "07:30-11:55",
			Zimmer: "B 505",
		},
		{
			Tag: "Fr",
			Fach: "Informatik",
			Zeit: "14:30-17:05",
			Zimmer: "B 505",
		},
	],
	Bachofner: [
		{
			Tag: "Mo",
			Fach: "ICT",
			Zeit: "07:30-09:00",
			Zimmer: "B 501",
		},
	],
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
};