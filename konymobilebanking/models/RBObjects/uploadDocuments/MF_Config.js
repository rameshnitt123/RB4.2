define([],function(){
	var mappings = {
		"document" : "document",
		"documentType" : "documentType",
		"errmsg" : "errmsg",
		"success" : "success",
	};
	Object.freeze(mappings);
	
	var typings = {
		"document" : "string",
		"documentType" : "string",
		"errmsg" : "string",
		"success" : "string",
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
		tableName : "uploadDocuments"
	};
	Object.freeze(config);
	
	return config;
})
