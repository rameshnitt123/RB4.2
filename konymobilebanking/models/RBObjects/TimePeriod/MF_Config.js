define([],function(){
	var mappings = {
		"description" : "description",
		"errmsg" : "errmsg",
		"timePeriodId" : "timePeriodId",
	};
	Object.freeze(mappings);
	
	var typings = {
		"description" : "string",
		"errmsg" : "string",
		"timePeriodId" : "string",
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
		tableName : "TimePeriod"
	};
	Object.freeze(config);
	
	return config;
})
