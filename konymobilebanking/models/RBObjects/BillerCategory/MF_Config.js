define([],function(){
	var mappings = {
		"categoryName" : "categoryName",
		"id" : "id",
	};
	Object.freeze(mappings);
	
	var typings = {
		"categoryName" : "string",
		"id" : "string",
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
		tableName : "BillerCategory"
	};
	Object.freeze(config);
	
	return config;
})
