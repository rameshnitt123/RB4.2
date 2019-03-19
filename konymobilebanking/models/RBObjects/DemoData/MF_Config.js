define([],function(){
	var mappings = {
		"newUsername" : "newUsername",
		"newPassword" : "newPassword",
		"email" : "email",
		"countryCode" : "countryCode",
		"adminUsername" : "adminUsername",
		"adminPassword" : "adminPassword",
	};
	Object.freeze(mappings);
	
	var typings = {
		"newUsername" : "string",
		"newPassword" : "string",
		"email" : "string",
		"countryCode" : "string",
		"adminUsername" : "string",
		"adminPassword" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"newUsername",
					"newPassword",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "DemoData"
	};
	Object.freeze(config);
	
	return config;
})
