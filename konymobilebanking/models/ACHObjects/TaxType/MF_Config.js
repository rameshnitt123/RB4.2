define([],function(){
	var mappings = {
		"Id" : "Id",
		"TaxType" : "TaxType",
	};
	Object.freeze(mappings);
	
	var typings = {
		"Id" : "string",
		"TaxType" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"Id",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "ACHObjects",
		tableName : "TaxType"
	};
	Object.freeze(config);
	
	return config;
})
