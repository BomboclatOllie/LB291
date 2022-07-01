// AGPL Lizenz
// #####################################################
// programmed (by) =>	{ 🔥🔥🔥 Almir Ajradini 🔥🔥🔥 }
// #####################################################
// 04.05.2022 @ BBBaden
//

const data = {
	M319: {
		ModulNummer: "319",
		ModulTitel: "Applikationen entwerfen und implementieren",
		ModulTyp: "SM",
		Note: "4.5",
		Erreichungsgrad: [33, 55, 45, 77],
		Handlungsziele: [
			{
				Nummer: 1,
				Beschreibung:
					"Erfasst Problemstellungen, entwickelt strukturiert Lösungsansätze und übersetzt sie für die Stakeholder.",
			},
			{
				Nummer: 2,
				Beschreibung:
					"Erstellt eine geeignete visuelle Darstellung für die Programmierung von Anforderungen.",
			},
		],
	},
	M187: {
		ModulNummer: "187",
		ModulTitel: "ICT-Arbeitsplatz mit Betriebssystem in Betrieb nehmen",
		ModulTyp: "ÜK",
		Note: "5",
		Erreichungsgrad: [44, 75, 60, 80],
		Handlungsziele: [
			{
				Nummer: 1,
				Beschreibung:
					"Komponenten des eigenen ICT-Arbeitsplatzes sowie Peripheriegeräte nach Vorgabe verbinden.",
			},
			{
				Nummer: 2,
				Beschreibung:
					"Betriebssystem und Anwendungen nach Vorgaben installieren und konfigurieren.",
			},
		],
	},
};

const template = {
	ModulNummer: "",
	ModulTitel: "",
	ModulTyp: "",
	Note: "",
	Erreichungsgrad: [],
	Handlungsziele: [
		{
			Nummer: "",
			Beschreibung: "",
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
