define([],function(){
	var mappings = {
		"Description" : "Description",
		"id" : "id",
		"Name" : "Name",
	};
	Object.freeze(mappings);
	
	var typings = {
		"Description" : "string",
		"id" : "string",
		"Name" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"id",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "OrganizationType"
	};
	Object.freeze(config);
	
	return config;
})
