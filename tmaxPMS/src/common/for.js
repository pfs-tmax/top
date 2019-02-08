var test = [
	{ "name": "name1", 	"id": "id1", 	"pw": "pw1"},
	{ "name": "name2", 	"id": "id2", 	"pw": "pw2"},
	{ "name": "name3", 	"id": "id3", 	"pw": "pw3"}]

for(each in test){
	console.log(each["name"]);
	console.log(each["id"]);
	console.log(each["pw"]);
}

Top.Controller.create('MaintmaxPMSLayoutLogic', {
	clickfcn : function(event, widget) {
		
	}
});

Top.Controller.create('tmaxPMSLogic', {
	dialog : function(event, widget) {
	}
});



