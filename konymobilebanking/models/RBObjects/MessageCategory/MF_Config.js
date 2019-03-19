define([],function(){
	var mappings = {
		"categoryId" : "categoryId",
		"categoryName" : "categoryName",
		"errmsg" : "errmsg",
	};
	Object.freeze(mappings);
	
	var typings = {
		"categoryId" : "string",
		"categoryName" : "string",
		"errmsg" : "string",
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
		tableName : "MessageCategory"
	};
	Object.freeze(config);
	
	return config;
})
