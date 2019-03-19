define([],function(){
	var mappings = {
		"id" : "id",
		"currencyCode" : "currencyCode",
	};
	Object.freeze(mappings);
	
	var typings = {
		"id" : "string",
		"currencyCode" : "string",
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
		serviceName : "RBObjects",
		tableName : "Currency"
	};
	Object.freeze(config);
	
	return config;
})
