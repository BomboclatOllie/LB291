// AGPL Lizenz
// #####################################################
// programmed (by) =>	{ 🔥🔥🔥 Almir Ajradini 🔥🔥🔥 }
// #####################################################
// 04.05.2022 @ BBBaden
//

const data = {
	LB403V6: {
		Kriterien: [
			{
				Beschreibung: "Erste Kontrollstruktur ist korrekt erläutert.",
				Hinweise: "'1 P: Korrekter Name, 2P Beschreibung korrekt",
				Gewichtung: 1,
				HZ: 1,
			},
			{
				Beschreibung: "Zweite Aufgabe ist korrekt gelöst",
				Hinweise: "1 Punkt pro Anforderung",
				Gewichtung: 1,
				HZ: 3,
			},
		],
		Klassen: [
			{
				Name: "IN19c",
				Datum: "13.09.2020",
				Schueler: [
					{
						Name: "Muster",
						Vorname: "Max",
						Punkte: [3, 2, 2, 2.5, 3, 1, 1.5, 0],
					},
				],
			},
		],
	},
};

const template = {
	Kriterien: [
		{
			Beschreibung: "",
			Hinweise: "",
			Gewichtung: 1,
			HZ: 1,
		},
	],
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
