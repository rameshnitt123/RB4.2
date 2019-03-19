define([],function(){
	var mappings = {
		"AtmId" : "AtmId",
		"id" : "id",
		"timestamp" : "timestamp",
	};
	Object.freeze(mappings);
	
	var typings = {
		"AtmId" : "string",
		"id" : "string",
		"timestamp" : "string",
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
		tableName : "QrCode"
	};
	Object.freeze(config);
	
	return config;
})
