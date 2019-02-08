//Top.Controller.create('MaintmaxPMSLayoutLogic', {
//	init: function(widget){
//	},
//});

//Top.Controller.create('layout1_Logic', {
Top.Controller.create('layout1_Logic', {
	c_task : function(event, widget) {
		//alert("프로젝트 생성");

	},r_task : function(event, widget) {
		alert("프로젝트 task 읽기");
		pid=Top.Dom.selectById("project_list").getClickedData()["pid"]
		pname=Top.Dom.selectById("project_list").getClickedData()["pname"]
		//alert(pid);
		Top.Dom.selectById("layout1_").src("layout1_1_r_task.html")
		Top.Dom.selectById("pid").setText(pid)
		Top.Dom.selectById("pname").setText(pname)
		
	},u_task : function(event, widget) {
		alert("프로젝트 수정");
		
	},d_task : function(event, widget) {
		alert("선택한 프로젝트 삭제");
	}
});

Top.Controller.create('layout1_1_r_taskLogic', {
	init: function(widget){
		Top.Dom.selectById("pid").setText(pid)
		Top.Dom.selectById("pname").setText(pname)
	},
	r_task : function(event, widget) {
	}
});
