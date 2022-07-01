// AGPL Lizenz
// #####################################################
// programmed (by) =>	{ 🔥🔥🔥 Almir Ajradini 🔥🔥🔥 }
// #####################################################
// 04.05.2022 @ BBBaden
//

const data = {
	IN20b: {
		Datum: "05.02.2022",
		Fragen: [
			"Abwechslungsreicher Unterricht",
			"Verständlichkeit der Erklärungen",
			"Respekt im Umgang",
			"Gute Hilfestellungen",
			"Nachvollziehbare Notensetzung",
			"Regeln werden durchgesetzt",
			"Bekanntgabe der Ziele",
		],
		Bewertungen: [
			[3, 4, 5, 3, 4, 5, 3],
			[4, 5, 3, 5, 5, 3, 4],
			[4, 5, 5, 3, 4, 4, 4],
			[3, 4, 5, 3, 4, 5, 3],
			[4, 5, 3, 5, 5, 3, 4],
			[4, 5, 5, 3, 4, 4, 4],
		],
	},
};

const template = {
	Datum: "",
	Fragen: [
		"Abwechslungsreicher Unterricht",
		"Verständlichkeit der Erklärungen",
		"Respekt im Umgang",
		"Gute Hilfestellungen",
		"Nachvollziehbare Notensetzung",
		"Regeln werden durchgesetzt",
		"Bekanntgabe der Ziele",
	],
	Bewertungen: [[]],
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
};
