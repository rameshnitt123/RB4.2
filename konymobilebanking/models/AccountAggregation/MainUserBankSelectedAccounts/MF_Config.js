define([],function(){
	var mappings = {
		"main_user" : "main_user",
		"bank_id" : "bank_id",
		"Accountid" : "Accountid",
	};
	Object.freeze(mappings);
	
	var typings = {
		"main_user" : "string",
		"bank_id" : "string",
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
		tableName : "MainUserBankSelectedAccounts"
	};
	Object.freeze(config);
	
	return config;
})
