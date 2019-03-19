define([],function(){
	var mappings = {
		"APY" : "APY",
		"CDTerm" : "CDTerm",
		"errmsg" : "errmsg",
		"minimumDeposit" : "minimumDeposit",
	};
	Object.freeze(mappings);
	
	var typings = {
		"APY" : "string",
		"CDTerm" : "string",
		"errmsg" : "string",
		"minimumDeposit" : "string",
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
		tableName : "InterestRates"
	};
	Object.freeze(config);
	
	return config;
})
