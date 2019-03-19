define([],function(){
	var mappings = {
		"cashSpent" : "cashSpent",
		"cateforyId" : "cateforyId",
		"categoryName" : "categoryName",
		"errmsg" : "errmsg",
		"monthId" : "monthId",
		"monthName" : "monthName",
		"totalCashSpent" : "totalCashSpent",
		"year" : "year",
	};
	Object.freeze(mappings);
	
	var typings = {
		"cashSpent" : "string",
		"cateforyId" : "string",
		"categoryName" : "string",
		"errmsg" : "string",
		"monthId" : "string",
		"monthName" : "string",
		"totalCashSpent" : "string",
		"year" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"cateforyId",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "PFMPieChart"
	};
	Object.freeze(config);
	
	return config;
})
