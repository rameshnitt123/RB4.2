define([],function(){
	var mappings = {
		"adType" : "adType",
		"buttonType" : "buttonType",
		"colour" : "colour",
		"description" : "description",
		"id" : "id",
		"imageURL" : "imageURL",
		"model" : "model",
		"navigationId" : "navigationId",
		"navigationType" : "navigationType",
		"navigationURL" : "navigationURL",
		"result" : "result",
		"sessionId" : "sessionId",
		"text" : "text",
		"visible" : "visible",
		"flowposition" : "flowposition",
		"navId" : "navId",
	};
	Object.freeze(mappings);
	
	var typings = {
		"adType" : "string",
		"buttonType" : "string",
		"colour" : "string",
		"description" : "string",
		"id" : "string",
		"imageURL" : "string",
		"model" : "string",
		"navigationId" : "string",
		"navigationType" : "string",
		"navigationURL" : "string",
		"result" : "string",
		"sessionId" : "string",
		"text" : "string",
		"visible" : "string",
		"flowposition" : "string",
		"navId" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"id",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "DirectMarketing"
	};
	Object.freeze(config);
	
	return config;
})
