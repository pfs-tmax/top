Top.Controller.create('layout1_1_create_projectLogic', {
	init: function(widget){},
  search_emp: function(event, widget) {
    Top.Dom.selectById("dialog_search_emp").open()
    event_widget_id=widget.id;
  }, search_project_type : function(event, widget) {
	  alert("asdf");

	  DR_project_type.DI_project_type = [		{			"PROJECT_TYPE" : "a",		}];
	  sb=Top.Dom.selectById("PROJECT_TYPE");
	  sb.updateData();
	  sb.setProperties({"itemData":DR_project_type.DI_project_type});

	  alert("asdfasdfadsf");


}




});

Top.Controller.create('search_empLogic', {
  search_emp: function(event, widget) {


    $('#btn').click(function() {
      console.log("ajax_btn");
      $.ajax({
        url: 'http://192.168.6.68:18088/common/common_sg/PmsEmployeeReadByName?action=SO',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify({
          "dto": {
            "EMP_NAME": Top.Dom.selectById("EMP_NAME").getText()
          }
        }),
        success: function(result) {
          console.log("Ajax success");
          dto = result["dto"];
          console.log(dto);
          //dto.employeeList[0].EMP_NO;
          DR_employee.DI_employee=dto.employeeList;
          //test_items.push(new_item);
      	  tv = Top.Dom.selectById("EMP_TABLE");
      	  tv.update();
        },
        error: function(error) {
          alert("Ajax failed");
        }
      })//end of Ajax
    })//end of Event
  }, get_emp : function(event, widget) {
	  data=tv.getClickedData()
	  Top.Dom.selectById(event_widget_id).setText(data.EMP_NAME+"("+data.EMP_NO+")");
	  Top.Dom.selectById("dialog_search_emp").close();
  }

});



//DM_employee
Top.Data.createModel("com.tmaxos.topyunjy.datamodel", "DM_employee", {
	"DM_employee_field00": {		"fieldType": "STRING",		"userType": "",		"initValue": ""	},

})	;
Top.Data.create("DR_employee", {
	"DI_employee" :
		[
			{				"DM_employee_field0" : "d1",				"DM_employee_field1" : "d2",			},
		],
});
DR_employee.setModel("DI_employee","DM_employee");
DR_employee.setRelations([
]);


//DM_project_type
Top.Data.createModel("com.tmaxos.topyunjy.datamodel", "DM_project_type", {
	"DM_project_type_field0": {
		"fieldType": "STRING",
		"userType": "",
		"initValue": ""
	}
});
Top.Data.create("DR_project_type", {
	"DI_project_type" :
		[
			{
				"PROJECT_TYPE" : "aasdfdf",
			},
		],
});
DR_project_type.setModel("DI_project_type","DM_project_type");
DR_project_type.setRelations([
]);

DR_project_type.DI_project_type = [		{			"PROJECT_TYPE" : "123",		}];
