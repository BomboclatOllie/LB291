// AGPL Lizenz
// #####################################################
// programmed (by) =>	{ 🔥🔥🔥 Almir Ajradini 🔥🔥🔥 }
// #####################################################
// 04.05.2022 @ BBBaden
//

const loginController = require("./controller/00_LoginController");
const masterplanController = require("./controller/01_MasterplanController");
const stundenprepController = require("./controller/02_StundenprepController");
const klpController = require("./controller/03_KLPController");
const standardFeedbackController = require("./controller/04_StandardFeedbackController");
const entschuldigungsFormularController = require("./controller/05_EntschuldigungsFormularController");
const standortbestimmungController = require("./controller/06_StandortbestimmungController");
const triplePController = require("./controller/07_TriplePController");
const korrekturhilfeLBController = require("./controller/08_KorrekturhilfeLBController");
const bewertungshilfeProbeController = require("./controller/09_BewertungshilfeProbeController");
const serienBriefLBController = require("./controller/10_SerienBriefLBController");
const notenLogQVController = require("./controller/11_NotenLogQVController");
const lernjournalController = require("./controller/12_LernjournalController");
const stundenplanViewerController = require("./controller/13_StundenplanViewerController");
const findMyTeacherController = require("./controller/14_FindMyTeacherController");
const groupCreatorController = require("./controller/15_GroupCreatorController");
const antiTabController = require("./controller/16_AntiTabController");
const realtimeFeedbackController = require("./controller/17_RealtimeFeedbackController");
const blogController = require("./controller/18_BlogController");
const webAuftraegeController = require("./controller/19_WebAuftraegeController");
const todosController = require("./controller/20_TodosController");
const voteController = require("./controller/21_VoteController");
const klassenlisteController = require("./controller/22_KlassenlisteController");
const notizenAppController = require("./controller/23_NotizenAppController");
const faqController = require("./controller/24_FAQController");
const quizCreatorController = require("./controller/25_QuizCreatorController");
const serviceMonitorController = require("./controller/26_ServiceMonitorController");

const express = require("express");
const cors = require("cors");
var path = require("path");

const app = express();
const port = 3000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());
// ========================================= Zugangspunkte ====================================================
app.get("/", (req, res) => {
	res.send("Zugangspunkte der API:\n/ => Information zur API\n");
});
app.get("/info", (req, res) => {
	res.send({
		Author: "Almir Ajradini",
		Name: "LB MM291",
		Company: "BBBaden",
	});
});

// ========================================= Register/Login ===================================================
{
	app.post("/login", loginController.login);
	app.post("/changepassword", loginController.changepassword);
	app.get("/register", (req, res) => {
		res.json({
			user: "some free username",
			password:
				"your super secret password. I swear to god I can't read your password after I have encrypted it.",
		});
	});
	app.post("/register", loginController.register);
	app.get("/getuserlist", loginController.getuserlist);
}
// ========================================= 01 Masterpläne ===================================================

app.get("/masterplan/getall", masterplanController.getAll);
app.get("/masterplan/detail/:id", masterplanController.getOneDetail);
app.get("/masterplan/template", masterplanController.getTemplate);
app.post("/masterplan/addone", masterplanController.addOne);

// ========================================= 02 Stundenprep ===================================================

app.get("/stundenprep/getall", stundenprepController.getAll);
app.get("/stundenprep/detail/:id", stundenprepController.getOneDetail);
app.get("/stundenprep/template", stundenprepController.getTemplate);
app.post("/stundenprep/addone", stundenprepController.addOne);

// ========================================= 03 KLP ===========================================================

app.get("/klp/getall", klpController.getAll);
app.get("/klp/detail/:id", klpController.getOneDetail);
app.get("/klp/template", klpController.getTemplate);
app.post("/klp/addone", klpController.addOne);

// ========================================= 04 Standard_Feedback =============================================

app.get("/standardfeedback/getall", standardFeedbackController.getAll);
app.get("/standardfeedback/detail/:id", standardFeedbackController.getOneDetail);
app.get("/standardfeedback/template", standardFeedbackController.getTemplate);
app.post("/standardfeedback/addone", standardFeedbackController.addOne);

// ========================================= 05 EntschuldigungsFormular =======================================

app.get("/entschuldigungsformular/getall", entschuldigungsFormularController.getAll);
app.get("/entschuldigungsformular/detail/:id", entschuldigungsFormularController.getOneDetail);
app.get("/entschuldigungsformular/template", entschuldigungsFormularController.getTemplate);
app.post("/entschuldigungsformular/addone", entschuldigungsFormularController.addOne);

// ========================================= 06 Standortbestimmung ============================================

app.get("/standortbestimmung/getall", standortbestimmungController.getAll);
app.get("/standortbestimmung/detail/:id", standortbestimmungController.getOneDetail);
app.get("/standortbestimmung/template", standortbestimmungController.getTemplate);
app.post("/standortbestimmung/addone", standortbestimmungController.addOne);

// ========================================= 07 TripleP =======================================================

app.get("/triplep/getall", triplePController.getAll);
app.get("/triplep/detail/:id", triplePController.getOneDetail);
app.get("/triplep/template", triplePController.getTemplate);
app.post("/triplep/addone", triplePController.addOne);

// ========================================= 08 Korrekturhilfe_LB =============================================

app.get("/korrekturhilfelb/getall", korrekturhilfeLBController.getAll);
app.get("/korrekturhilfelb/detail/:id", korrekturhilfeLBController.getOneDetail);
app.get("/korrekturhilfelb/template", korrekturhilfeLBController.getTemplate);
app.post("/korrekturhilfelb/addone", korrekturhilfeLBController.addOne);

// ========================================= 09 Bewertungshilfe_Probe =========================================

app.get("/bewertungshilfeprobe/getall", bewertungshilfeProbeController.getAll);
app.get("/bewertungshilfeprobe/detail/:id", bewertungshilfeProbeController.getOneDetail);
app.get("/bewertungshilfeprobe/template", bewertungshilfeProbeController.getTemplate);
app.post("/bewertungshilfeprobe/addone", bewertungshilfeProbeController.addOne);

// ========================================= 10 Serienbrief_LB ================================================

app.get("/serienbrieflb/getall", serienBriefLBController.getAll);
app.get("/serienbrieflb/detail/:id", serienBriefLBController.getOneDetail);
app.get("/serienbrieflb/template", serienBriefLBController.getTemplate);
app.post("/serienbrieflb/addone", serienBriefLBController.addOne);

// ========================================= 11 Noten_Log_QV ==================================================

app.get("/notenlogqv/getall", notenLogQVController.getAll);
app.get("/notenlogqv/detail/:id", notenLogQVController.getOneDetail);
app.get("/notenlogqv/template", notenLogQVController.getTemplate);
app.post("/notenlogqv/addone", notenLogQVController.addOne);

// ========================================= 12 Lernjournal ===================================================

app.get("/lernjournal/getall", lernjournalController.getAll);
app.get("/lernjournal/detail/:id", lernjournalController.getOneDetail);
app.get("/lernjournal/template", lernjournalController.getTemplate);
app.post("/lernjournal/addone", lernjournalController.addOne);

// ========================================= 13 Stundenplan_Viewer ============================================

app.get("/stundenplanviewer/getall", stundenplanViewerController.getAll);
app.get("/stundenplanviewer/detail/:id", stundenplanViewerController.getOneDetail);
app.get("/stundenplanviewer/template", stundenplanViewerController.getTemplate);
app.post("/stundenplanviewer/addone", stundenplanViewerController.addOne);

// ========================================= 14 Find_My_Teacher ===============================================

app.get("/findmyteacher/getall", findMyTeacherController.getAll);
app.get("/findmyteacher/detail/:id", findMyTeacherController.getOneDetail);
app.get("/findmyteacher/template", findMyTeacherController.getTemplate);
app.post("/findmyteacher/addone", findMyTeacherController.addOne);

// ========================================= 15 Group_Creator =================================================

app.get("/groupcreator/getall", groupCreatorController.getAll);
app.get("/groupcreator/detail/:id", groupCreatorController.getOneDetail);
app.get("/groupcreator/template", groupCreatorController.getTemplate);
app.post("/groupcreator/addone", groupCreatorController.addOne);

// ========================================= 16 Anti_Tab ======================================================

app.get("/antitab/getall", antiTabController.getAll);
app.get("/antitab/detail/:id", antiTabController.getOneDetail);
app.get("/antitab/template", antiTabController.getTemplate);
app.post("/antitab/addone", antiTabController.addOne);

// ========================================= 17 Realtime_Feedback =============================================

app.get("/realtimefeedback/getall", realtimeFeedbackController.getAll);
app.get("/realtimefeedback/detail/:id", realtimeFeedbackController.getOneDetail);
app.get("/realtimefeedback/template", realtimeFeedbackController.getTemplate);
app.post("/realtimefeedback/addone", realtimeFeedbackController.addOne);

// ========================================= 18 Blog ==========================================================

app.get("/blog/getall", blogController.getAll);
app.get("/blog/detail/:id", blogController.getOneDetail);
app.get("/blog/template", blogController.getTemplate);
app.post("/blog/addone", blogController.addOne);

// ========================================= 19 Web_Aufträge ==================================================

app.get("/webauftraege/getall", webAuftraegeController.getAll);
app.get("/webauftraege/detail/:id", webAuftraegeController.getOneDetail);
app.get("/webauftraege/template", webAuftraegeController.getTemplate);
app.post("/webauftraege/addone", webAuftraegeController.addOne);

// ========================================= 20 Todos =========================================================

app.get("/todos/getall", todosController.getAll);
app.get("/todos/detail/:id", todosController.getOneDetail);
app.get("/todos/template", todosController.getTemplate);
app.post("/todos/addone", todosController.addOne);
app.post("/todos/changeone", todosController.changeOne);
app.post("/todos/deleteone", todosController.deleteOne);

// ========================================= 21 Vote ==========================================================

app.get("/vote/getall", voteController.getAll);
app.get("/vote/detail/:id", voteController.getOneDetail);
app.get("/vote/template", voteController.getTemplate);
app.post("/vote/addone", voteController.addOne);
app.post("/vote/voteone", voteController.voteOne);

// ========================================= 22 Klassenliste ==================================================

app.get("/klassenliste/getall", klassenlisteController.getAll);
app.get("/klassenliste/detail/:id", klassenlisteController.getOneDetail);
app.get("/klassenliste/template", klassenlisteController.getTemplate);
app.post("/klassenliste/addone", klassenlisteController.addOne);

// ========================================= 23 Notizen_App ===================================================

app.get("/notizenapp/getall", notizenAppController.getAll);
app.get("/notizenapp/detail/:id", notizenAppController.getOneDetail);
app.get("/notizenapp/template", notizenAppController.getTemplate);
app.post("/notizenapp/addone", notizenAppController.addOne);
app.post("/notizenapp/deleteone", notizenAppController.deleteOne);

// ========================================= 24 FAQ ===========================================================

app.get("/faq/getall", faqController.getAll);
app.get("/faq/detail/:id", faqController.getOneDetail);
app.get("/faq/template", faqController.getTemplate);
app.post("/faq/addone", faqController.addOne);

// ========================================= 25 QuizCreator ===================================================

app.get("/quizcreator/getall", quizCreatorController.getAll);
app.get("/quizcreator/detail/:id", quizCreatorController.getOneDetail);
app.get("/quizcreator/template", quizCreatorController.getTemplate);
app.post("/quizcreator/addone", quizCreatorController.addOne);

// ========================================= 26 ServiceMonitorController ===================================================

app.get("/servicemonitor/getall", serviceMonitorController.getAll);
app.get("/servicemonitor/detail/:id", serviceMonitorController.getOneDetail);
app.get("/servicemonitor/template", serviceMonitorController.getTemplate);
app.post("/servicemonitor/addone", serviceMonitorController.addOne);

// ======================================== Start Server ======================================================

app.listen(port, () => {
	console.log(`API listening @ http://localhost:${port}`);
});
