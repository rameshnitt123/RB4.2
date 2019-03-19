define([],function(){
	var mappings = {
		"AccountName" : "AccountName",
		"main_user" : "main_user",
		"username" : "username",
		"Bank_id" : "Bank_id",
		"CurrencyCode" : "CurrencyCode",
		"AvailableBalance" : "AvailableBalance",
		"Scheme" : "Scheme",
		"Number" : "Number",
		"Address" : "Address",
		"AccountHolder" : "AccountHolder",
		"BankName" : "BankName",
		"TypeDescription" : "TypeDescription",
		"Type_id" : "Type_id",
		"BankLogo" : "BankLogo",
		"NickName" : "NickName",
		"Account_id" : "Account_id",
		"FavouriteStatus" : "FavouriteStatus",
	};
	Object.freeze(mappings);
	
	var typings = {
		"AccountName" : "string",
		"main_user" : "string",
		"username" : "string",
		"Bank_id" : "string",
		"CurrencyCode" : "string",
		"AvailableBalance" : "string",
		"Scheme" : "string",
		"Number" : "string",
		"Address" : "string",
		"AccountHolder" : "string",
		"BankName" : "string",
		"TypeDescription" : "string",
		"Type_id" : "string",
		"BankLogo" : "string",
		"NickName" : "string",
		"Account_id" : "string",
		"FavouriteStatus" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"Account_id",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "AccountAggregation",
		tableName : "SingleAccountDetails"
	};
	Object.freeze(config);
	
	return config;
})
