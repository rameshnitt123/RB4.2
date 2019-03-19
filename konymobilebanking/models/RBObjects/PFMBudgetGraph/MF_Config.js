define([],function(){
	var mappings = {
		"allocatedAmount" : "allocatedAmount",
		"amountSpent" : "amountSpent",
		"budgetId" : "budgetId",
		"categoryId" : "categoryId",
		"categoryName" : "categoryName",
		"errmsg" : "errmsg",
	};
	Object.freeze(mappings);
	
	var typings = {
		"allocatedAmount" : "string",
		"amountSpent" : "string",
		"budgetId" : "string",
		"categoryId" : "string",
		"categoryName" : "string",
		"errmsg" : "string",
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
		tableName : "PFMBudgetGraph"
	};
	Object.freeze(config);
	
	return config;
})
