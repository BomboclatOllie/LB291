// AGPL Lizenz
// #####################################################
// programmed (by) =>	{ 🔥🔥🔥 Almir Ajradini 🔥🔥🔥 }
// #####################################################
// 04.05.2022 @ BBBaden
//

const data = {
	LA8405: {
		Titel: "JSON Daten",
		Modul: "291 Mediamatiker/in EFZ",
		Author: "Almir Ajradini",
		Version: "V0.1",
		Hilfsmittel: "Das Internet, Links im Anhang, Video auf Moodle",
		Nachweis: "Laden Sie ihre Lösung auf Moodle hoch.",
		Sozialform: "Einzelarbeit / Partnerarbeit",
		Leistungsziele: "3.1 – 3.7, 5.4 – 5.5",
		Ausgangslage: "Im Auftrag LA_8404_DOM_Manipulationen_und_Events haben Sie durch...",
		Aufgabenstellung: "Erstellen Sie eine clientseitige Suche...",
		Teilaufträge: ["Lösung aus Aufgabe LA_8404 (30min)", "Personenliste – JSON Daten (60min)"],
	},
};

const template = {
	Titel: "",
	Modul: "",
	Author: "",
	Version: "",
	Hilfsmittel: "",
	Nachweis: "",
	Sozialform: "",
	Leistungsziele: "",
	Ausgangslage: "",
	Aufgabenstellung: "",
	Teilaufträge: [],
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
