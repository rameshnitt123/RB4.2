define([],function(){
	var mappings = {
		"company" : "company",
		"firstName" : "firstName",
		"lastName" : "lastName",
		"startDate" : "startDate",
		"title" : "title",
	};
	Object.freeze(mappings);
	
	var typings = {
		"company" : "string",
		"firstName" : "string",
		"lastName" : "string",
		"startDate" : "string",
		"title" : "string",
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
		tableName : "LinkedIn"
	};
	Object.freeze(config);
	
	return config;
})
