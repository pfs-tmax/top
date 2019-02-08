Top.Controller.create('MaintmaxPMSLayoutLogic', {
	init: function(widget){
	/*	gnbMenu=Top.Dom.selectById("MenuHolder0");
		gnbMenu.setVisible("visible")
		gnbMenu.setProperties({"items":"topMenu"});
		//inframe = Top.Dom.selectById("inframe");
		//inframe.src("layout1_.html");*/
	},
});

Top.App.onLoad(function() {
});
Top.ContextMenu.create({
	"leftMenu" : "menu_model_tmaxPMS.left",
	"topMenu" : "menu_model_tmaxPMS.topMenu",
});
Top.Controller.create('tmaxPMSLogic', {
	m1 : function(event, widget) {
		inframe = Top.Dom.selectById("inframe");
		inframe.src("layout1_.html")
	},m1_1 : function(event, widget) {
		alert("layout1_1");
		inframe = Top.Dom.selectById("inframe");
		inframe.src("layout1_1.html");
	},m1_2 : function(event, widget) {
		inframe = Top.Dom.selectById("inframe");
		inframe.src("layout1_2.html");
	},m2 : function(event, widget) {
		inframe = Top.Dom.selectById("inframe");
		inframe.src("layout2_.html");
	},m2_1 : function(event, widget) {
		inframe = Top.Dom.selectById("inframe");
		inframe.src("layout2_1.html");
	},m2_2 : function(event, widget) {
		inframe = Top.Dom.selectById("inframe");
		inframe.src("layout2_2.html");
	},m3 : function(event, widget) {
		inframe = Top.Dom.selectById("inframe");
		inframe.src("layout3_.html");
	},m3_1 : function(event, widget) {
		inframe = Top.Dom.selectById("inframe");
		inframe.src("layout3_1.html");
	},m3_2 : function(event, widget) {
		inframe = Top.Dom.selectById("inframe");
		inframe.src("layout3_2.html");
	},m4 : function(event, widget) {
		inframe = Top.Dom.selectById("inframe");
		inframe.src("layout4_.html")
	},m5 : function(event, widget) {
		inframe = Top.Dom.selectById("inframe");
		inframe.src("layout5_.html")
	},m6 : function(event, widget) {
		inframe = Top.Dom.selectById("inframe");
		inframe.src("layout6_.html")
	},m7 : function(event, widget) {
		inframe = Top.Dom.selectById("inframe");
		inframe.src("layout7_.html")
	},m8 : function(event, widget) {
		inframe = Top.Dom.selectById("inframe");
		inframe.src("layout8_.html")
	},
	
});

var menu_model_tmaxPMS = Top.Data.create({
	"leftMenu" : [{
		id: "menuitem0",
		text: "menuitem",
		
	},{
		id: "menuitem1",
		text: "menuitem",
		
	},],
	
	"topMenu" : [
		{id: "m1",	text: "프로젝트",	onClick : "m1",	icon: "icon-hamburger_menu2",	
			children: [{
				id: "m11",	text: "프로젝트 목록",	onClick : "m1",	},{
				id: "m12",	text: "프로젝트 요약",	onClick : "m1_2",	}]
		},
		{id: "m2",	text: "공지사항",	onClick : "m2",	icon: "icon-file",
			children: [{
				id: "m21",	text: "공지사항하위",	onClick : "m2_1",	},{
				id: "m22",	text: "공지사항하위2",	onClick : "m2_2",	}]
		},
		{id: "m3",	text: "요구사항",	onClick : "m3",	icon: "icon-message",
			children: [{
				id: "m31",	text: "요구사항하위",	onClick : "m3_1",	},{
				id: "m32",	text: "요구사항하위2",	onClick : "m3_2",	}]
		},
		{id: ",m4",	text: "업무관리",	onClick : "m4",    icon: "icon-file",
			
		},
		{id: ",m5",	text: "인력관리",	onClick : "m5",    icon: "icon-expert",
			
		},
		{id: ",m6",	text: "문서관리",	onClick : "m6",    icon: "icon-prozone_file",
			
		},
		{id: ",m7",	text: "이슈관리",	onClick : "m7",    icon: "icon-square_check",
			
		},
		{id: ",m8",	text: "요청사항",	onClick : "m8",    icon: "icon-tcc_help",
			
		},
		],
});
