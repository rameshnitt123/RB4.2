define([],function(){
	var mappings = {
		"categoryId" : "categoryId",
		"subcategoryId" : "subcategoryId",
		"subcategoryName" : "subcategoryName",
	};
	Object.freeze(mappings);
	
	var typings = {
		"categoryId" : "string",
		"subcategoryId" : "string",
		"subcategoryName" : "string",
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
		tableName : "MessageSubCategory"
	};
	Object.freeze(config);
	
	return config;
})
