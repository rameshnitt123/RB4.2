define([],function(){
	var mappings = {
		"bank_id" : "bank_id",
		"id" : "id",
		"label" : "label",
		"username" : "username",
		"scheme" : "scheme",
		"address" : "address",
		"AccountName" : "AccountName",
		"main_user" : "main_user",
	};
	Object.freeze(mappings);
	
	var typings = {
		"bank_id" : "string",
		"id" : "string",
		"label" : "string",
		"username" : "string",
		"scheme" : "string",
		"address" : "string",
		"AccountName" : "string",
		"main_user" : "string",
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
		serviceName : "AccountAggregation",
		tableName : "ExternalAccounts"
	};
	Object.freeze(config);
	
	return config;
})
