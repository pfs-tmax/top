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
			{"pid":"1",	"pname":"PMS1",	"ptype":"1",	"start":"2018-11-01",	"end":"2018-12-01",	"administrator":"윤준연", "cid":"cid1", "cname":"Tmax Data", 	"ctype":"ctype1", "volume":"1,000,000,000", "man-month":"500,000,000", "status":"created"},
			//{"pid":"2",	"pname":"CRM1",	"ptype":"1",	"start":"2018-11-01",	"end":"2018-12-01",	"administrator":"윤준연", "cid":"cid1", "cname":"cname1", 	"ctype":"ctype1", "volume":"1,000,000,000", "man-month":"500,000,000", "status":"created"},
			//{"pid":"3",	"pname":"CRM1",	"ptype":"1",	"start":"2018-11-01",	"end":"2018-12-01",	"administrator":"윤준연", "cid":"cid1", "cname":"cname1", 	"ctype":"ctype1", "volume":"1,000,000,000", "man-month":"500,000,000", "status":"created"},
		],
});
DR_project.setModel("DI_project_list","DM_project_list");
DR_project.setRelations([
]);


DR_project.DI_project_list=[
	{"pid":"1",	"pname":"PMS",	"ptype":"1",	"start":"2018-11-01",	"end":"2018-12-01",	"administrator":"윤준연", "cid":"cid1", "cname":"Tmax Data", 	"ctype":"ctype1", "volume":"1,000,000,000", "man-month":"500,000,000", "status":"created"},
	{"pid":"2",	"pname":"CRM",	"ptype":"2",	"start":"2018-11-01",	"end":"2018-12-01",	"administrator":"윤준연", "cid":"cid1", "cname":"cname1", 	"ctype":"ctype1", "volume":"1,000,000,000", "man-month":"500,000,000", "status":"created"},
	
	
]; 

