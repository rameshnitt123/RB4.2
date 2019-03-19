define([],function(){
	var mappings = {
		"main_user" : "main_user",
		"username" : "username",
		"bank_id" : "bank_id",
		"AccountName" : "AccountName",
		"AvailableBalance" : "AvailableBalance",
		"id" : "id",
		"loop_count" : "loop_count",
		"Account_id" : "Account_id",
	};
	Object.freeze(mappings);
	
	var typings = {
		"main_user" : "string",
		"username" : "string",
		"bank_id" : "string",
		"AccountName" : "string",
		"AvailableBalance" : "string",
		"id" : "string",
		"loop_count" : "string",
		"Account_id" : "string",
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
		tableName : "Accounts"
	};
	Object.freeze(config);
	
	return config;
})
