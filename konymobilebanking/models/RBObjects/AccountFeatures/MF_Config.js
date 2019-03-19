define([],function(){
	var mappings = {
		"accountTypeId" : "accountTypeId",
		"errmsg" : "errmsg",
		"features" : "features",
		"info" : "info",
		"rates" : "rates",
		"termsAndConditions" : "termsAndConditions",
	};
	Object.freeze(mappings);
	
	var typings = {
		"accountTypeId" : "string",
		"errmsg" : "string",
		"features" : "string",
		"info" : "string",
		"rates" : "string",
		"termsAndConditions" : "string",
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
		tableName : "AccountFeatures"
	};
	Object.freeze(config);
	
	return config;
})
