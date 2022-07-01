// AGPL Lizenz
// #####################################################
// programmed (by) =>	{ 🔥🔥🔥 Almir Ajradini 🔥🔥🔥 }
// #####################################################
// 04.05.2022 @ BBBaden
//

const data = {
	Weber: {
		SozialesVerhalten11: "nicht erfüllt",
		SozialesVerhalten12: "teilw. erfüllt",
		SozialesVerhalten13: "voll erfüllt",
		SozialesVerhalten21: "voll erfüllt",
		SozialesVerhalten22: "teilw. erfüllt",
		SozialesVerhalten23: "voll erfüllt",
		SozialesVerhalten24: "voll erfüllt",
		SozialesVerhalten31: "nicht erfüllt",
		SozialesVerhalten32: "teilw. erfüllt",
		SozialesVerhalten33: "nicht erfüllt",
		SozialesVerhalten34: "teilw. erfüllt",
		SozialesVerhalten35: "voll erfüllt",
		SozialesVerhalten41: "teilw. erfüllt",
		SozialesVerhalten42: "teilw. erfüllt",
		SozialesVerhalten43: "nicht erfüllt",
		SozialesVerhalten44: "teilw. erfüllt",
		Zielvereinbarung1: "Ziele",
		Zielvereinbarung2: "Massnahmen",
		Zielvereinbarung3: "Umsetzung",
	},
};

const template = {
	SozialesVerhalten11: "",
	SozialesVerhalten12: "",
	SozialesVerhalten13: "",
	SozialesVerhalten21: "",
	SozialesVerhalten22: "",
	SozialesVerhalten23: "",
	SozialesVerhalten24: "",
	SozialesVerhalten31: "",
	SozialesVerhalten32: "",
	SozialesVerhalten33: "",
	SozialesVerhalten34: "",
	SozialesVerhalten35: "",
	SozialesVerhalten41: "",
	SozialesVerhalten42: "",
	SozialesVerhalten43: "",
	SozialesVerhalten44: "",
	Zielvereinbarung1: "",
	Zielvereinbarung2: "",
	Zielvereinbarung3: "",
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
