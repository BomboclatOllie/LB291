// AGPL Lizenz
// #####################################################
// programmed (by) =>	{ 🔥🔥🔥 Almir Ajradini 🔥🔥🔥 }
// #####################################################
// 04.05.2022 @ BBBaden
//

const data = {
	M403: {
		ModulNummer: "403",
		ModulTitel: "Programmabläufe prozedural implementieren",
		LBVersion: "LB 403-V6",
		Kriterien: [
			{
				Kriterium: "Erste Kontrollstruktur ist korrekt erläutert.",
				Handlungsziel: 1,
				Gewichtung: 1,
			},
			{
				Kriterium: "Zweite Kontrollstruktur ist korrekt erläutert.",
				Handlungsziel: 1,
				Gewichtung: 1,
			},
		],
		Klassen: [
			{
				Klasse: "xy21",
				Datum: "01.01.2022",
				Experte: "Almir Ajradini",
				Schueler: [
					{
						Name: "Maximus",
						Vorname: "Maxi",
						NoteProbe: 6,
						Punkte: [3, 3, 3, 2, 1, 2, 3],
						Bemerkungen: [
							"Super Alles richtig",
							"Gut",
							"Gut",
							"geht so",
							"nicht ganz so gut",
							"...",
						],
					},
				],
			},
		],
	},
};

const template = {
	ModulNummer: "xyz",
	ModulTitel: "xyz",
	LBVersion: "xyz",
	Kriterien: [
		{
			Kriterium: "xyz",
			Handlungsziel: "",
			Gewichtung: "",
		},
	],
	Klassen: [
		{
			Klasse: "xyz",
			Datum: "01.01.2022",
			Experte: "xyz",
			Schueler: [
				{
					Name: "xyz",
					Vorname: "xyz",
					NoteProbe: "",
					Punkte: [],
					Bemerkungen: [],
				},
			],
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
