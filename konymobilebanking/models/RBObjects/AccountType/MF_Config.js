define([],function(){
	var mappings = {
		"TypeDescription" : "TypeDescription",
		"TypeID" : "TypeID",
		"displayName" : "displayName",
	};
	Object.freeze(mappings);
	
	var typings = {
		"TypeDescription" : "string",
		"TypeID" : "string",
		"displayName" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"TypeID",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "AccountType"
	};
	Object.freeze(config);
	
	return config;
})
