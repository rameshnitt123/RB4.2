define([],function(){
	var mappings = {
		"TransactionType_id" : "TransactionType_id",
		"TransactionTypeName" : "TransactionTypeName",
	};
	Object.freeze(mappings);
	
	var typings = {
		"TransactionType_id" : "string",
		"TransactionTypeName" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"TransactionType_id",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "ACHObjects",
		tableName : "TransactionTypes"
	};
	Object.freeze(config);
	
	return config;
})
