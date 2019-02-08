Top.Data.createModel("com.tmaxos.topyunjy.datamodel", "DM_project_list", {
	"DM_project_list_field0": {
		"fieldType": "STRING",
		"userType": "",
		"initValue": ""
	},
	"DM_project_list_field1": {
		"fieldType": "STRING",
		"userType": "",
		"initValue": ""
	},
	"DM_project_list_field2": {
		"fieldType": "STRING",
		"userType": "",
		"initValue": ""
	}
});
Top.Data.createModel("com.tmaxos.topyunjy.datamodel", "DM_gnbmenu", {
	"DM_gnbmenu_field0": {
		"fieldType": "STRING",
		"userType": "",
		"initValue": ""
	},
	"DM_gnbmenu_field1": {
		"fieldType": "STRING",
		"userType": "",
		"initValue": ""
	}
});
Top.Data.createModel("com.tmaxos.topyunjy.datamodel", "DM_project_type", {
	"PROJECT_TYPE": {
		"fieldType": "STRING",
		"userType": "",
		"initValue": ""
	}
});
Top.Data.createModel("com.tmaxos.topyunjy.datamodel", "DM_employee", {
	"DM_employee_field0": {
		"fieldType": "STRING",
		"userType": "",
		"initValue": ""
	},
	"DM_employee_field1": {
		"fieldType": "STRING",
		"userType": "",
		"initValue": ""
	}
});
Top.Data.createModel("com.tmaxos.topyunjy.datamodel", "DM_task_list", {
	"DM_task_list_field0": {
		"fieldType": "STRING",
		"userType": "",
		"initValue": ""
	},
	"DM_task_list_field1": {
		"fieldType": "STRING",
		"userType": "",
		"initValue": ""
	},
	"DM_task_list_field2": {
		"fieldType": "STRING",
		"userType": "",
		"initValue": ""
	}
});
Top.Data.create("DR_task", {
	"DI_task_list" : 
		[
			{
				"DM_task_list_field0" : "t1",
				"DM_task_list_field1" : "t2",
				"DM_task_list_field2" : "t3",
			},
			{
				"DM_task_list_field0" : "t4",
				"DM_task_list_field1" : "t5",
				"DM_task_list_field2" : "t6",
			},
		],
});
DR_task.setModel("DI_task_list","DM_task_list");
DR_task.setRelations([
]);
Top.Data.create("DR_employee", {
	"DI_employee" : 
		[
			{
				"DM_employee_field0" : "d1",
				"DM_employee_field1" : "d2",
			},
		],
});
DR_employee.setModel("DI_employee","DM_employee");
DR_employee.setRelations([
]);
Top.Data.create("DR_project_type", {
	"DI_project_type" : 
		[
			{
				"PROJECT_TYPE" : "123",
			},
		],
});
DR_project_type.setModel("DI_project_type","DM_project_type");
DR_project_type.setRelations([
]);
Top.Data.create("DR_gnbmenu", {
	"DI_gnbmenu" : 
		[
			{
				"DM_gnbmenu_field0" : "",
				"DM_gnbmenu_field1" : "",
			},
			{
				"DM_gnbmenu_field0" : "",
				"DM_gnbmenu_field1" : "",
			},
		],
});
DR_gnbmenu.setModel("DI_gnbmenu","DM_gnbmenu");
DR_gnbmenu.setRelations([
]);
Top.Data.create("DR_project", {
	"DI_project_list" : 
		[
			{
				"DM_project_list_field0" : "11",
				"DM_project_list_field1" : "",
				"DM_project_list_field2" : "",
			},
			{
				"DM_project_list_field0" : "21",
				"DM_project_list_field1" : "",
				"DM_project_list_field2" : "",
			},
		],
});
DR_project.setModel("DI_project_list","DM_project_list");
DR_project.setRelations([
]);
var menu_model_tmaxPMS = Top.Data.create({
	"left" : [{
		id: "menuitem0",
		text: "menuitem",
		
	},{
		id: "menuitem1",
		text: "menuitem",
		
	},],
	"topMenu" : [{
		id: "menuitem1",
		text: "sub1a",
		onClick : "m_1_1",
		
		children: [{
		id: "menuitem0",
		text: "sub2",
		onClick : "m_1_1",
		
	},{
		id: "menuitem1",
		text: "sub3",
		onClick : "m_1_1",
		
	},{
		id: "menuitem2",
		text: "sub4",
		onClick : "m_1_1",
		
	},],},{
		id: "menuitem2",
		text: "sub1",
		onClick : "m_1_1",
		
	},{
		id: "menuitem3",
		text: "sub2",
		
	},{
		id: "menuitem4",
		text: "sub3",
		
	},],
});
