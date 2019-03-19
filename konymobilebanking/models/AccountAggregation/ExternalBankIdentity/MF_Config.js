define([],function(){
	var mappings = {
		"username" : "username",
		"password" : "password",
		"main_user" : "main_user",
		"bank_id" : "bank_id",
		"SessionToken" : "SessionToken",
		"id" : "id",
	};
	Object.freeze(mappings);
	
	var typings = {
		"username" : "string",
		"password" : "string",
		"main_user" : "string",
		"bank_id" : "string",
		"SessionToken" : "string",
		"id" : "string",
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
		tableName : "ExternalBankIdentity"
	};
	Object.freeze(config);
	
	return config;
})
