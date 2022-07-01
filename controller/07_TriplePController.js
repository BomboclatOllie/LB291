// AGPL Lizenz
// #####################################################
// programmed (by) =>	{ 🔥🔥🔥 Almir Ajradini 🔥🔥🔥 }
// #####################################################
// 04.05.2022 @ BBBaden
//

const data = {
	M293: {
		Probe1: {
			Beschreibung: "LA_Aufgabe_HTML",
			AbgabeDatum: "11.02.2022",
			Anforderungen: "Aufgabe Lösen...",
		},
		Probe2: {
			Beschreibung: "LA_Aufgabe_JS",
			AbgabeDatum: "02.03.2022",
			Anforderungen: "Programmieren...",
		},
		Portfolio: {
			Beschreibung: "Frei wählbares Thema",
			AbgabeDatum: "09.03.2022",
			Anforderungen: "StandardPortfolio",
			Links: [
				{
					Name: "Muster",
					Link: "www.portfolios.ch/muster",
				},
				{
					Name: "Mueller",
					Link: "www.portfolios.ch/mueller",
				},
			],
		},
	},
};

const template = {
	Probe1: {
		Beschreibung: "",
		AbgabeDatum: "",
		Anforderungen: "",
	},
	Probe2: {
		Beschreibung: "",
		AbgabeDatum: "",
		Anforderungen: "",
	},
	Portfolio: {
		Beschreibung: "",
		AbgabeDatum: "",
		Anforderungen: "",
		Links: [
			{
				Name: "",
				Link: "",
			},
		],
	},
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
