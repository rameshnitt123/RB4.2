define([],function(){
	var mappings = {
		"main_user" : "main_user",
		"Accountid" : "Accountid",
	};
	Object.freeze(mappings);
	
	var typings = {
		"main_user" : "string",
		"Accountid" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"Accountid",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "AccountAggregation",
		tableName : "MainUserSelectedAccounts"
	};
	Object.freeze(config);
	
	return config;
})
