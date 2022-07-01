// AGPL Lizenz
// #####################################################
// programmed (by) =>	{ 🔥🔥🔥 Almir Ajradini 🔥🔥🔥 }
// #####################################################
// 04.05.2022 @ BBBaden
//

const data = {
	MaxWeber: {
		Beruf: "Informatiker",
		Klasse: "IN20b",
		"02.05.2022": {
			Grund: "krank",
			FreigabeBL: true,
			FreigabeEltern: true,
			FreigabeAusbilder: false,
			FreigabeLP: false,
			Absenzen: [
				{
					LP: "EnglishLP",
					AnzahlLektionen: 2,
				},
				{
					LP: "SportLP",
					AnzahlLektionen: 1,
				},
				{
					LP: "AllgemeinLP",
					AnzahlLektionen: 3,
				},
			],
		},
		"07.03.2022": {
			Grund: "krank",
			FreigabeBL: true,
			FreigabeEltern: true,
			FreigabeAusbilder: true,
			FreigabeLP: true,
			Absenzen: [
				{
					LP: "InformatikLP",
					AnzahlLektionen: 8,
				},
			],
		},
	},
};

const template = {
	Beruf: "",
	Klasse: "",
	"": {
		Grund: "",
		FreigabeBL: false,
		FreigabeEltern: false,
		FreigabeAusbilder: false,
		FreigabeLP: false,
		Absenzen: [
			{
				LP: "",
				AnzahlLektionen: "",
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
				msg: "server error, could not add one new element",
			});
		}
	},
};
