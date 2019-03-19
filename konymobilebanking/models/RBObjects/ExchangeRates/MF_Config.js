define([],function(){
	var mappings = {
		"currency" : "currency",
		"errmsg" : "errmsg",
		"exchangeRate" : "exchangeRate",
	};
	Object.freeze(mappings);
	
	var typings = {
		"currency" : "string",
		"errmsg" : "string",
		"exchangeRate" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "ExchangeRates"
	};
	Object.freeze(config);
	
	return config;
})
