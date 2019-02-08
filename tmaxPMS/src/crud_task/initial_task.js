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
/*
DR_task.DI_task_list=[{
    id: "Tmax_Group", text: "Tmax group", icon: "icon-folder", children: [
        { id: "TmaxSoft", text: "TmaxSoft", icon: "icon-search", children: [
            { id: "TP", text: "TP" },
            { id: "EP", text: "EP" }, 
            { id: "PM", text: "PM" }
        ]}, 
        { id: "TmaxData", text: "TmaxData", image: "./res/graph.png", children: [
            { id: "DB1", text: "DB1" },
            { id: "DB2", text: "DB2" },
            { id: "DB3", text: "DB3" }
        ]}, 
        { id: "TmaxGlobal", text: "TmaxGlobal", children: [
            { id: "USA", text: "USA" },
            { id: "Japan", text: "Japan"},
            { id: "CHN", text: "CHN" }
        ]}
    ]
}];

*/
var tree_option = {
	    node: {
	        checkable: true,
	        editable: true,
	        deletable: true,
	        draggable: true
	    },
	    view : {
	        expand: true
	    }

	};


Top.Controller.create('layout1_1_r_taskLogic', {
	init : function(widget) {
		Top.selectById("task_list")
	}
});

