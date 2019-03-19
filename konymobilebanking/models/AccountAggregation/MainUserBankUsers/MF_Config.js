define([],function(){
	var mappings = {
		"main_user" : "main_user",
		"UserName" : "UserName",
	};
	Object.freeze(mappings);
	
	var typings = {
		"main_user" : "string",
		"UserName" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"UserName",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "AccountAggregation",
		tableName : "MainUserBankUsers"
	};
	Object.freeze(config);
	
	return config;
})
