Top.Data.createModel("com.tmax.yunjy.datamodel", "DM_gnbmenu", {
	"menu_top01": {		"fieldType": "STRING",		"userType": "",		"initValue": ""	},
	"menu_top02": {		"fieldType": "STRING",		"userType": "",		"initValue": ""	},
	"menu_top03": {		"fieldType": "STRING",		"userType": "",		"initValue": ""	},
	"menu_top04": {		"fieldType": "STRING",		"userType": "",		"initValue": ""	},
	"menu_top05": {		"fieldType": "STRING",		"userType": "",		"initValue": ""	},
	"name": {
		"fieldType": "STRING",
		"userType": "",
		"initValue": ""
	},
	"age": {
		"fieldType": "INTEGER",
		"userType": "",
		"initValue": ""
	},
	"location": {
		"fieldType": "STRING",
		"userType": "",
		"initValue": ""
	},
	"add": {
		"fieldType": "STRING",
		"userType": "",
		"initValue": ""
	}
});
Top.Data.create("DR_gnbmenu", {
	"DI_gnbmenu" : 
		[
			{	"menu_top01" : "name1",		"menu_top02" : "11", 	"menu_top03" : "location1",			},
			{	"menu_top01" : "name2",		"menu_top02" : "12", 	"menu_top03" : "location2",			},
			{	"menu_top01" : "name3",		"menu_top02" : "13", 	"menu_top03" : "location3",			},
		],
});

DR_gnbmenu.setModel("DI_gnbmenu","DM_gnbmenu");
DR_gnbmenu.setRelations([]);



