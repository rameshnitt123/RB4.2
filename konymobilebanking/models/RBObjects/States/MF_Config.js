define([],function(){
	var mappings = {
		"errmsg" : "errmsg",
		"stateId" : "stateId",
		"stateName" : "stateName",
		"countryId" : "countryId",
		"regionId" : "regionId",
	};
	Object.freeze(mappings);
	
	var typings = {
		"errmsg" : "string",
		"stateId" : "string",
		"stateName" : "string",
		"countryId" : "string",
		"regionId" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"stateId",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "States"
	};
	Object.freeze(config);
	
	return config;
})
