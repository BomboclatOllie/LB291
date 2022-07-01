// AGPL Lizenz
// #####################################################
// programmed (by) =>	{ 🔥🔥🔥 Almir Ajradini 🔥🔥🔥 }
// #####################################################
// 04.05.2022 @ BBBaden
//

const data = {
	ME20b_2021: {
		Klasse: "ME20b",
		Jahr: "2021",
		Zimmer: "B511",
		LP: "Stellrecht",
		Unterrichtsstart: "13.08.2021",
		Module: ["M288", "M307"],
		LB: [{ LB288: "17.12.2021" }, { LB307: "24.06.2022" }],
		KeinUnterricht: [
			{ Herbstferien: "08.10.2021" },
			{ Herbstferien: "15.10.2021" },
			{ Weihnachtsferien: "31.12.2021" },
			{ Weihnachtsferien: "07.01.2022" },
			{ Sportferien: "11.02.2022" },
			{ Sportferien: "18.02.2022" },
			{ Schneesportwoche: "11.03.2022" },
			{ Frühlingsferien: "15.04.2022" },
			{ Frühlingsferien: "22.04.2022" },
			{ Auffahrtsbrücke: "27.05.2022" },
			{ Prüfungswoche: "03.06.2022" },
			{ Sommerferien: "08.07.2022" },
		],
	},
};

const template = {
	Klasse: "", //klassenname
	Jahr: "", //jahrgang
	Zimmer: "", //zimmernummer
	LP: "", // lehrperson
	Unterrichtsstart: "", //unterrichtsstart
	Module: [], //auflistung der module
	LB: [{}], //auflistung der LB's
	KeinUnterricht: [{}], // auflistung der unterrichtsfreientage
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
