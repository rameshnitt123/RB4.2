define([],function(){
	var mappings = {
		"main_user" : "main_user",
		"id" : "id",
		"User_id" : "User_id",
		"BankName" : "BankName",
		"Description" : "Description",
	};
	Object.freeze(mappings);
	
	var typings = {
		"main_user" : "string",
		"id" : "string",
		"User_id" : "string",
		"BankName" : "string",
		"Description" : "string",
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
		tableName : "UserBanks"
	};
	Object.freeze(config);
	
	return config;
})
