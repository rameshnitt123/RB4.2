define([],function(){
	var mappings = {
		"Id" : "Id",
		"TaxType" : "TaxType",
		"TaxSubType" : "TaxSubType",
	};
	Object.freeze(mappings);
	
	var typings = {
		"Id" : "string",
		"TaxType" : "string",
		"TaxSubType" : "string",
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
		tableName : "TaxSubType"
	};
	Object.freeze(config);
	
	return config;
})
