// AGPL Lizenz
// #####################################################
// programmed (by) =>	{ 🔥🔥🔥 Almir Ajradini 🔥🔥🔥 }
// #####################################################
// 04.05.2022 @ BBBaden
//

const data = {
	M403: {
		Probe1: {
			Beschreibung: "Aufgabe LA403-8401",
			Hinweise: "0-3 Punkte",
			Gewichtung: 1,
		},
		Probe2: {
			Beschreibung: "Kurztest",
			Hinweise: "0-3 Punkte",
			Gewichtung: 1,
		},
		Portfolio: {
			Beschreibung: "Frei wählbares Thema",
			Hinweise: "Siehe standard bewertungskriterien...",
			Gewichtung: 2,
		},
		Klassen: [
			{
				Name: "IN19c",
				Datum: "13.09.2020",
				Schueler: [
					{
						Name: "Muster",
						Vorname: "Max",
						Punkte: [3, 3, 3],
					},
					{
						Name: "Meier",
						Vorname: "Min",
						Punkte: [1, 1, 1],
					},
				],
			},
			{
				Name: "IN18a",
				Datum: "13.09.2020",
				Schueler: [
					{
						Name: "Weber",
						Vorname: "Max",
						Punkte: [3, 1, 3],
					},
				],
			},
		],
	},
};

const template = {
	Probe1: {
		Beschreibung: "",
		Hinweise: "",
		Gewichtung: 1,
	},
	Probe2: {
		Beschreibung: "",
		Hinweise: "",
		Gewichtung: 1,
	},
	Portfolio: {
		Beschreibung: "",
		Hinweise: "",
		Gewichtung: 2,
	},
	Klassen: [
		{
			Name: "xyz",
			Datum: "01.01.2022",
			Schueler: [],
		},
	],
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
