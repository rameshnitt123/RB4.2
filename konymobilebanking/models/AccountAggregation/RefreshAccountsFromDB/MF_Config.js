define([],function(){
	var mappings = {
		"AccountName" : "AccountName",
		"main_user" : "main_user",
		"CurrencyCode" : "CurrencyCode",
		"AvailableBalance" : "AvailableBalance",
		"Scheme" : "Scheme",
		"Number" : "Number",
		"Address" : "Address",
		"Bank_id" : "Bank_id",
		"AccountHolder" : "AccountHolder",
		"Type_id" : "Type_id",
		"error" : "error",
		"LastUpdated" : "LastUpdated",
		"id" : "id",
		"BankName" : "BankName",
		"BankLogo" : "BankLogo",
		"TypeDescription" : "TypeDescription",
		"InternalAccount" : "InternalAccount",
		"Username" : "Username",
		"NickName" : "NickName",
		"FavouriteStatus" : "FavouriteStatus",
		"Account_id" : "Account_id",
	};
	Object.freeze(mappings);
	
	var typings = {
		"AccountName" : "string",
		"main_user" : "string",
		"CurrencyCode" : "string",
		"AvailableBalance" : "string",
		"Scheme" : "string",
		"Number" : "string",
		"Address" : "string",
		"Bank_id" : "string",
		"AccountHolder" : "string",
		"Type_id" : "string",
		"error" : "string",
		"LastUpdated" : "string",
		"id" : "string",
		"BankName" : "string",
		"BankLogo" : "string",
		"TypeDescription" : "string",
		"InternalAccount" : "string",
		"Username" : "string",
		"NickName" : "string",
		"FavouriteStatus" : "string",
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
		tableName : "RefreshAccountsFromDB"
	};
	Object.freeze(config);
	
	return config;
})
