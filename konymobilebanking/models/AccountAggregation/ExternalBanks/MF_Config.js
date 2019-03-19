define([],function(){
	var mappings = {
		"id" : "id",
		"BankName" : "BankName",
		"IdentityProvider" : "IdentityProvider",
		"Scheme" : "Scheme",
		"Address" : "Address",
		"Description" : "Description",
		"Oauth2" : "Oauth2",
		"logo" : "logo",
	};
	Object.freeze(mappings);
	
	var typings = {
		"id" : "string",
		"BankName" : "string",
		"IdentityProvider" : "string",
		"Scheme" : "string",
		"Address" : "string",
		"Description" : "string",
		"Oauth2" : "string",
		"logo" : "string",
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
		tableName : "ExternalBanks"
	};
	Object.freeze(config);
	
	return config;
})
