Top.Controller.create('layout1_Logic', {

  c_project: function(event, widget) {
    //alert("프로젝트 생성");
    Top.Dom.selectById("layout1_").src("layout1_1_create_project.html")
  },
  r_project: function(event, widget) {
    alert("프로젝트 리스트 새로고침");
    Top.Dom.selectById("project_list").update()

  },
  u_project: function(event, widget) {
    alert("프로젝트 수정");

  },
  d_project: function(event, widget) {
    alert("선택한 프로젝트 삭제");



    var tableObj = Top.Dom.selectById("project_list");
    // table get CheckedIndex ex : [0,3,5]
    var checkedIndexArray = tableObj.getCheckedIndex();
    // table get CheckedIndex Count ex : [0,3,5] -> 3
    var checkedIndexLength = tableObj.getCheckedIndex().length;
    checkedIndexLength === 0 ? alert("선택된 사원이 없습니다.") : ""
    // getTableData Repo
    var tableData =
      window[Top.Dom.selectById("project_list").getProperties('data-model').items.split('.')[0]];
    //"DR_project"


    // getTableRepo Instance
    var dataInstance =
      tableData[Top.Dom.selectById("project_list").getProperties('data-model').items.split('.')[1]];
    //"DI_project_list"


    // set Comment
    //해당의 경우 Index는 0부터 시작하기 때문에 0,2,3 값이 Array에 들어가게 됩니다.
    //		for(var i=0;i<checkedIndexLength;i++)
    //		{
    //		dataInstance[checkedIndexArray[i]].comt = comtStr;
    //		}
    // table update
    // 바인딩되어 있는 데이터가 변경 시에 해당 변경 데이터를 View(화면에) 적용시키는 API입니다.
    dataInstance.splice(tableObj.getCheckedIndex(), 1)
    tableObj.update();

  },
});

Top.Controller.create('tmaxPMSLogic', {
  dialog: function(event, widget) {
    alert("dialog")
  }
});

Top.Controller.create('layout1_1_create_projectLogic', {
  create_project: function(event, widget) {
    alert("프로젝트 생성")
    Top.Dom.selectById("layout1_1_create_project").src("layout1_.html")
    DI_project_list_addition = [{
      //"PROJECT_NO": Top.Dom.selectById("PROJECT_NO").getText(),
      "PROJECT_NAME": Top.Dom.selectById("PROJECT_NAME").getText(),
      "PROJECT_TYPE": "", //Top.Dom.selectById("c_ptype"        ).getSelectedText(),
      "EMP_NO_CS": Top.Dom.selectById("EMP_NAME_CS").getText().split("(")[1].split(")")[0],
      "EMP_NO_PM": Top.Dom.selectById("EMP_NAME_PM").getText().split("(")[1].split(")")[0],
      "PROJECT_STARTDATE": Top.Dom.selectById("PROJECT_STARTDATE").getDate(),
      "PROJECT_ENDDATE": Top.Dom.selectById("PROJECT_ENDDATE").getDate(),
      "PROJECT_CUSTOMER": Top.Dom.selectById("PROJECT_CUSTOMER").getText(),
      "PROJECT_CUSADMIN": Top.Dom.selectById("PROJECT_CUSADMIN").getText(),
      //"PROJECT_CUSTYPE":         "",//Top.Dom.selectById("PROJECT_CUSTYPE"        ).getSelectedText(),
      "PROJECT_SERVICE": "", //Top.Dom.selectById("PROJECT_SERVICE"        ).getSelectedText(),
      "PROJECT_STATUS": Top.Dom.selectById("PROJECT_STATUS").getText(),
      "PROJECT_VALUE": Top.Dom.selectById("PROJECT_VALUE").getText(),
      "PROJECT_DESCRIPTION": Top.Dom.selectById("PROJECT_DESCRIPTION").getText(),
    }, ]

    DR_project.DI_project_list = DR_project.DI_project_list.concat(DI_project_list_addition)
    
    
    
          $.ajax({
        url: 'http://192.168.6.68:18088/common/common_sg/CreateProject?action=SO',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify({
          "dto": {
			      //"PROJECT_NO": Top.Dom.selectById("PROJECT_NO").getText(),
			      "PROJECT_NAME": Top.Dom.selectById("PROJECT_NAME").getText(),
			      "PROJECT_TYPE": "", //Top.Dom.selectById("c_ptype"        ).getSelectedText(),
			      "EMP_NO_CS": Top.Dom.selectById("EMP_NAME_CS").getText().split("(")[1].split(")")[0],
			      "EMP_NO_PM": Top.Dom.selectById("EMP_NAME_PM").getText().split("(")[1].split(")")[0],
			      "PROJECT_STARTDATE": Top.Dom.selectById("PROJECT_STARTDATE").getDate(),
			      "PROJECT_ENDDATE": Top.Dom.selectById("PROJECT_ENDDATE").getDate(),
			      "PROJECT_CUSTOMER": Top.Dom.selectById("PROJECT_CUSTOMER").getText(),
			      "PROJECT_CUSADMIN": Top.Dom.selectById("PROJECT_CUSADMIN").getText(),
			      //"PROJECT_CUSTYPE":         "",//Top.Dom.selectById("PROJECT_CUSTYPE"        ).getSelectedText(),
			      "PROJECT_SERVICE": "", //Top.Dom.selectById("PROJECT_SERVICE"        ).getSelectedText(),
			      "PROJECT_STATUS": Top.Dom.selectById("PROJECT_STATUS").getText(),
			      "PROJECT_VALUE": Top.Dom.selectById("PROJECT_VALUE").getText(),
			      "PROJECT_DESCRIPTION": Top.Dom.selectById("PROJECT_DESCRIPTION").getText(),
			    }
        }),
        success: function(result) {
        	alert("Ajax Success!!!");
          console.log("Ajax success");
          dto = result["dto"];
          console.log(dto);
          //dto.employeeList[0].EMP_NO;
          DR_employee.DI_employee = dto.employeeList;
          //test_items.push(new_item);
          tv = Top.Dom.selectById("EMP_TABLE");
          tv.update();
        },
        error: function(error) {
          alert("Ajax failed");
        }
      }) //end of Ajax
      
      
      



  },
  get_emp: function(event, widget) {
    data = tv.getClickedData()
    Top.Dom.selectById(event_widget_id).setText(data.EMP_NAME);
    Top.Dom.selectById("dialog_search_emp").close();
  },
  create_project_cancel: function(event, widget) {
    alert("프로젝트 생성취소");
    Top.Dom.selectById("layout1_1_create_project").src("layout1_.html");
  }
});
