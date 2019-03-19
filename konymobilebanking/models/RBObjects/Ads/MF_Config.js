define([],function(){
	var mappings = {
		"action1" : "action1",
		"action2" : "action2",
		"actionType" : "actionType",
		"adType" : "adType",
		"description" : "description",
		"id" : "id",
		"imageURL" : "imageURL",
		"imageURL2" : "imageURL2",
		"title" : "title",
	};
	Object.freeze(mappings);
	
	var typings = {
		"action1" : "string",
		"action2" : "string",
		"actionType" : "string",
		"adType" : "string",
		"description" : "string",
		"id" : "string",
		"imageURL" : "string",
		"imageURL2" : "string",
		"title" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "Ads"
	};
	Object.freeze(config);
	
	return config;
})
