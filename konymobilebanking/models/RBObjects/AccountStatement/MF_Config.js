define([],function(){
	var mappings = {
		"StatementDescription" : "StatementDescription",
		"StatementLink" : "StatementLink",
		"StatementMonth" : "StatementMonth",
		"accountID" : "accountID",
		"format" : "format",
		"year" : "year",
		"errmsg" : "errmsg",
	};
	Object.freeze(mappings);
	
	var typings = {
		"StatementDescription" : "string",
		"StatementLink" : "string",
		"StatementMonth" : "string",
		"accountID" : "string",
		"format" : "string",
		"year" : "string",
		"errmsg" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"accountID",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "AccountStatement"
	};
	Object.freeze(config);
	
	return config;
})
