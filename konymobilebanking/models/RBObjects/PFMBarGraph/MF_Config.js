define([],function(){
	var mappings = {
		"errmsg" : "errmsg",
		"monthId" : "monthId",
		"monthName" : "monthName",
		"totalCashFlow" : "totalCashFlow",
	};
	Object.freeze(mappings);
	
	var typings = {
		"errmsg" : "string",
		"monthId" : "string",
		"monthName" : "string",
		"totalCashFlow" : "string",
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
		tableName : "PFMBarGraph"
	};
	Object.freeze(config);
	
	return config;
})
