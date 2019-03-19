define([],function(){
	var mappings = {
		"CountryId" : "CountryId",
		"Name" : "Name",
	};
	Object.freeze(mappings);
	
	var typings = {
		"CountryId" : "string",
		"Name" : "string",
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
		tableName : "Country"
	};
	Object.freeze(config);
	
	return config;
})
