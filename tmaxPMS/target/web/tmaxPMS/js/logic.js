Top.App.onLoad(function() {
});
Top.ContextMenu.create({
   "left" : "menu_model_tmaxPMS.left",
   "topMenu" : "menu_model_tmaxPMS.topMenu",
});
Top.Dialog.create("dialog_c_project", {
	description: "",
	class: "",
	layoutWidth: "600px",
	layoutHeight: "600px",
	title: "Create Project!!",
	isConfirmation: "false",
	dialogLayout: "layout1_1_c_project",
	movable: "true",
	closedOnclickoutside: "false"
});
Top.Dialog.create("dialog_search_emp", {
	description: "",
	class: "",
	layoutHeight: "500px",
	title: "Search Employee",
	isConfirmation: "true",
	dialogLayout: "search_emp",
	movable: "true",
	closedOnclickoutside: "true"
});
