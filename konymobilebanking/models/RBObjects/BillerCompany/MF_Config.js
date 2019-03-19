define([],function(){
	var mappings = {
		"companyId" : "companyId",
		"companyName" : "companyName",
	};
	Object.freeze(mappings);
	
	var typings = {
		"companyId" : "string",
		"companyName" : "string",
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
		tableName : "BillerCompany"
	};
	Object.freeze(config);
	
	return config;
})
