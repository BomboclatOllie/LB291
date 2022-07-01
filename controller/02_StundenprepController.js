// AGPL Lizenz
// #####################################################
// programmed (by) =>	{ 🔥🔥🔥 Almir Ajradini 🔥🔥🔥 }
// #####################################################
// 04.05.2022 @ BBBaden
//

const data = {
	M122B1: {
		Version: "1.0",
		Author: "Ajradini",
		Klasse: "IN20a",
		Jahr: "2021",
		Zimmer: "B512",
		LP: "Ajradini",
		Unterrichtseinheiten: [
			{
				Datum: "02.05.2021",
				Uhrzeit: "13:05",
				DauerMin: "55",
				Thema: "Einstieg Modul 122",
				Sozialform: "PL",
				Material: ["PR_122_0700_Advance-Organizer", "LA_122_0700_Einstieg"],
			},
			{
				Datum: "02.05.2021",
				Uhrzeit: "14:00",
				DauerMin: "15",
				Thema: "Pause",
			},
			{
				Datum: "02.05.2021",
				Uhrzeit: "13:05",
				DauerMin: "55",
				Thema: "Einführung Powershell",
				Sozialform: "EA",
				Material: ["LA_122_0710_Einfuehrung_Powershell"],
			},
			{
				Datum: "02.05.2021",
				Uhrzeit: "15:10",
				DauerMin: "15",
				Thema: "Pause",
			},
		],
		VorbereitungUnterricht: "",
		Tagesziele: "",
		PendenzenNaechsterUnterricht: "",
		Hausaufgaben: "Unterrichtsstoff repetieren, Zusammenfassung schreiben (ProBe)",
	},
	M122B2: {
		Version: "1.0",
		Author: "Ajradini",
		Klasse: "IN20a",
		Jahr: "2021",
		Zimmer: "B512",
		LP: "Ajradini",
		Unterrichtseinheiten: [
			{
				Datum: "09.05.2021",
				Uhrzeit: "13:05",
				DauerMin: "55",
				Thema: "Weiter im Modul 122",
				Sozialform: "PL",
				Material: ["LAXYZ"],
			},
			{
				Datum: "09.05.2021",
				Uhrzeit: "14:00",
				DauerMin: "15",
				Thema: "Pause",
			},
			{
				Datum: "09.05.2021",
				Uhrzeit: "14:15",
				DauerMin: "55",
				Thema: "Weiter mit Powershell",
				Sozialform: "EA",
				Material: ["LA_122_0722_asdf"],
			},
			{
				Datum: "09.05.2021",
				Uhrzeit: "15:10",
				DauerMin: "15",
				Thema: "Pause",
			},
		],
		VorbereitungUnterricht: "",
		Tagesziele: "",
		PendenzenNaechsterUnterricht: "",
		Hausaufgaben: "Unterrichtsstoff repetieren, Zusammenfassung schreiben (ProBe)",
	},
};

const template = {
	Version: "",
	Author: "",
	Klasse: "",
	Jahr: "",
	Zimmer: "",
	LP: "",
	Unterrichtseinheiten: [
		{
			Datum: "",
			Uhrzeit: "",
			DauerMin: "",
			Thema: "",
			Sozialform: "",
			Material: [],
		},
	],
	VorbereitungUnterricht: "",
	Tagesziele: "",
	PendenzenNaechsterUnterricht: "",
	Hausaufgaben: "",
};

module.exports = {
	async getAll(req, res) {
		try {
			const allElements = [];

			for (const el in data) allElements.push({ [el]: data[el] });

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
				msg: "Detail of ID not found",
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
