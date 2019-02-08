Top.Controller.create('tmaxPMSLogic', {
	on_menu : function(event, widget) {
		open("MenuHolder0")
	},
	changeMenuType : function(event, widget) {
	    var thisMenu;

	    Top.Dom.selectById("test_menu1").setVisible("none");
	    Top.Dom.selectById("test_menu2").setVisible("none");
	    Top.Dom.selectById("test_menu3").setVisible("none");
	    Top.Dom.selectById("test_menu4").setVisible("none");
	    Top.Dom.selectById("test_menu5").setVisible("none");
	    Top.Dom.selectById("MenuHolder0").setVisible("none");
	    Top.Dom.selectById("test_menu7").setVisible("none");
	    Top.Dom.selectById("test_menu8").setVisible("none");


	    if (widget.id === "floatingButton") thisMenu = Top.Dom.selectById("test_menu1");
	    else if (widget.id === "sideButton_1") thisMenu = Top.Dom.selectById("test_menu2");
	    else if (widget.id === "sideButton_2") thisMenu = Top.Dom.selectById("test_menu3");
	    else if (widget.id === "dropdownButton") thisMenu = Top.Dom.selectById("test_menu4");
	    else if (widget.id === "drawerButton") thisMenu = Top.Dom.selectById("test_menu5");
	    else if (widget.id === "headerButton_1") thisMenu = Top.Dom.selectById("MenuHolder0");
	    else if (widget.id === "headerButton_2") thisMenu = Top.Dom.selectById("test_menu7");
	    else if (widget.id === "cascadingButton") thisMenu = Top.Dom.selectById("test_menu8");

	    thisMenu.setVisible("visible");
	}, selectMenu : function(event, widget) {

	}, menu_click : function(event, widget) {
		console.log("btn Click");
		inframe=Top.Dom.selectById("inframe")
		inframe.src("layout_1_1.html")
		
	}, m1_1 : function(event, widget) {
	}
	,
});

