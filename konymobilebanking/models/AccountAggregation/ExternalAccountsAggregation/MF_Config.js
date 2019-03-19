define([],function(){
	var mappings = {
		"Bank_id" : "Bank_id",
		"id" : "id",
		"label" : "label",
		"username" : "username",
		"scheme" : "scheme",
		"address" : "address",
		"AccountName" : "AccountName",
		"main_user" : "main_user",
		"BankName" : "BankName",
		"Type_id" : "Type_id",
		"TypeDescription" : "TypeDescription",
		"AvailableBalance" : "AvailableBalance",
		"AccountHolder" : "AccountHolder",
		"CurrencyCode" : "CurrencyCode",
		"Number" : "Number",
	};
	Object.freeze(mappings);
	
	var typings = {
		"Bank_id" : "string",
		"id" : "string",
		"label" : "string",
		"username" : "string",
		"scheme" : "string",
		"address" : "string",
		"AccountName" : "string",
		"main_user" : "string",
		"BankName" : "string",
		"Type_id" : "string",
		"TypeDescription" : "string",
		"AvailableBalance" : "string",
		"AccountHolder" : "string",
		"CurrencyCode" : "string",
		"Number" : "string",
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
		tableName : "ExternalAccountsAggregation"
	};
	Object.freeze(config);
	
	return config;
})
