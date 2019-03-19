define([],function(){
	var mappings = {
		"Id" : "Id",
		"AccountType" : "AccountType",
	};
	Object.freeze(mappings);
	
	var typings = {
		"Id" : "string",
		"AccountType" : "string",
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
		tableName : "ACHAccountTypes"
	};
	Object.freeze(config);
	
	return config;
})
