define([],function(){
	var mappings = {
		"infoContent" : "infoContent",
		"infoType" : "infoType",
		"categoryName" : "categoryName",
	};
	Object.freeze(mappings);
	
	var typings = {
		"infoContent" : "string",
		"infoType" : "string",
		"categoryName" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"categoryName",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "Informationcontent"
	};
	Object.freeze(config);
	
	return config;
})
