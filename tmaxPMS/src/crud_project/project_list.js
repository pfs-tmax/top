Top.Data.createModel("com.tmaxos.topyunjy.datamodel", "DM_project_list", {
  "pid"          : {    "fieldType": "STRING",    "userType": "",    "initValue": ""  },
  "pname"        : {    "fieldType": "STRING",    "userType": "",    "initValue": ""  },
  "ptype"        : {    "fieldType": "STRING",    "userType": "",    "initValue": ""  },
  "start"        : {    "fieldType": "STRING",    "userType": "",    "initValue": ""  },
  "end"          : {    "fieldType": "STRING",    "userType": "",    "initValue": ""  },
  "administrator": {    "fieldType": "STRING",    "userType": "",    "initValue": ""  },
  "cid"          : {    "fieldType": "STRING",    "userType": "",    "initValue": ""  },
  "cname"        : {    "fieldType": "STRING",    "userType": "",    "initValue": ""  },
  "ctype"        : {    "fieldType": "STRING",    "userType": "",    "initValue": ""  },
  "volume"       : {    "fieldType": "STRING",    "userType": "",    "initValue": ""  },
  "man-month"    : {    "fieldType": "STRING",    "userType": "",    "initValue": ""  },
  "status"       : {    "fieldType": "STRING",    "userType": "",    "initValue": ""  },
});

Top.Data.create("DR_project", {
	"DI_project_list" : 
		[
			{"PROJECT_NO":"1",	"PROJECT_NAME":"PMS1",	"PROJECT_TYPE":"1",	"PROJECT_STARTDATE":"2018-11-01",	"PROJECT_ENDDATE":"2018-12-01",	"EMP_NAME_CS":"윤준연", "EMP_NAME_PM":"PROJECT_CUSTOMER", "PROJECT_CUSTYPE":"Tmax Data", 	"PROJECT_SERVICE":"ctype1", "PROJECT_VALUE":"1,000,000,000", "man-month":"500,000,000", "PROJECT_STATUS":"created"},
			//{"pid":"2",	"pname":"CRM1",	"ptype":"1",	"start":"2018-11-01",	"end":"2018-12-01",	"administrator":"윤준연", "cid":"cid1", "cname":"cname1", 	"ctype":"ctype1", "volume":"1,000,000,000", "man-month":"500,000,000", "status":"created"},
			//{"pid":"3",	"pname":"CRM1",	"ptype":"1",	"start":"2018-11-01",	"end":"2018-12-01",	"administrator":"윤준연", "cid":"cid1", "cname":"cname1", 	"ctype":"ctype1", "volume":"1,000,000,000", "man-month":"500,000,000", "status":"created"},
		],
});
DR_project.setModel("DI_project_list","DM_project_list");
DR_project.setRelations([
]);


