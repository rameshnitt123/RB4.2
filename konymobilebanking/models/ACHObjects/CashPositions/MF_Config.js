define([],function(){
	var mappings = {
		"span" : "span",
		"credit" : "credit",
		"debit" : "debit",
		"total_balance" : "total_balance",
		"Duration" : "Duration",
	};
	Object.freeze(mappings);
	
	var typings = {
		"span" : "string",
		"credit" : "string",
		"debit" : "string",
		"total_balance" : "string",
		"Duration" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"span",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "ACHObjects",
		tableName : "CashPositions"
	};
	Object.freeze(config);
	
	return config;
})
