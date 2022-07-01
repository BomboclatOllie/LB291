// AGPL Lizenz
// #####################################################
// programmed (by) =>	{ 🔥🔥🔥 Almir Ajradini 🔥🔥🔥 }
// #####################################################
// 04.05.2022 @ BBBaden
//

const data = {
	M288: {
		Kompetenz:
			"Programmiert mit JavaScript basierten Sprachen korrekte Abläufe, wiederverwendbare Funktionen und einfache Objekte. Manipuliert das HTML-DOM und liest Datenstrukturen in der JavaScript Object Notation (JSON) aus.",
		HZ1: "Definiert mit JavaScript basierten Programmiersprachen sinnvolle Datenstrukturen",
		HZ2: "Programmiert effiziente Abläufe anhand von Kontrollstrukturen (z.B. Fallunterscheidung, Schleifen).",
		HZ3: "Kapselt Daten und Abläufe in Funktionen, um die Wiederverwendbarkeit und Wartbarkeit des Programmcodes zu verbessern.",
		HZ4: "Durchsucht und manipuliert mit JavaScript basierten Programmiersprachen das HTML-DOM (Document Object Model).",
		HZ5: "Kapselt Daten und Methoden in JavaScript basierte Objekte, um die Wiederverwendbarkeit und Wartbarkeit des Programmcodes zu verbessern.",
		HZ6: "Liest mit JavaScript basierten Programmen einfache Datenstrukturen in der JavaScript Object Notation (JSON) aus.",
		Objekt: "HTML-Websites mit JavaScripts und JSON-Daten",
		Leistungsziele: [
			{
				LZNr: "LZ1",
				Leistungsziel:
					"Ich kann mit Hilfe der Unterlagen ein Javascript-File in eine Webseite einbinden.",
				SelbsteinschätzungVor: "+",
				SelbsteinschätzungNach: "++",
			},
			{
				LZNr: "LZ2",
				Leistungsziel:
					"Ich kann ohne Unterlagen in der Browser-Console mit Javascript Anweisungen schreiben.",
				SelbsteinschätzungVor: "-",
				SelbsteinschätzungNach: "++",
			},
			{
				LZNr: "LZ3",
				Leistungsziel: "Ich kann in Javascript ohne Unterlagen einen Kommentar schreiben.",
				SelbsteinschätzungVor: "+",
				SelbsteinschätzungNach: "+",
			},
			{
				LZNr: "LZ4",
				Leistungsziel: "Ich kann ohne Unterlagen in Javascript eine Variable deklarieren.",
				SelbsteinschätzungVor: "--",
				SelbsteinschätzungNach: "+",
			},
			{
				LZNr: "LZ5",
				Leistungsziel:
					"Ich kann ohne Unterlagen in Javascript eine Variable initialisieren.",
				SelbsteinschätzungVor: "-",
				SelbsteinschätzungNach: "+",
			},
		],
	},
};

const template = {
	Kompetenz: "",
	HZ1: "",
	HZ2: "",
	HZ3: "",
	HZ4: "",
	HZ5: "",
	HZ6: "",
	Objekt: "",
	Leistungsziele: [
		{
			LZNr: "",
			Leistungsziel: "",
			SelbsteinschätzungVor: "",
			SelbsteinschätzungNach: "",
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
