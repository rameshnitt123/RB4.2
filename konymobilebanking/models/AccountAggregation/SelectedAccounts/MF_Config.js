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
		"NickName" : "NickName",
		"Number" : "Number",
		"CurrencyCode" : "CurrencyCode",
		"Type_id" : "Type_id",
		"AccountHolder" : "AccountHolder",
		"FavouriteStatus" : "FavouriteStatus",
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
		"NickName" : "string",
		"Number" : "string",
		"CurrencyCode" : "string",
		"Type_id" : "string",
		"AccountHolder" : "string",
		"FavouriteStatus" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"loop_count",
					"bank_id",
					"main_user",
					"username",
					"AccountName",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "AccountAggregation",
		tableName : "SelectedAccounts"
	};
	Object.freeze(config);
	
	return config;
})
