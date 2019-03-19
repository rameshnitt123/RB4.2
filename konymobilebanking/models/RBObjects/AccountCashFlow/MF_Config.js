define([],function(){
	var mappings = {
		"month" : "month",
		"monthCash" : "monthCash",
		"monthCredit" : "monthCredit",
		"totalCash" : "totalCash",
		"totalCreditDebt" : "totalCreditDebt",
	};
	Object.freeze(mappings);
	
	var typings = {
		"month" : "string",
		"monthCash" : "string",
		"monthCredit" : "string",
		"totalCash" : "string",
		"totalCreditDebt" : "string",
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
		tableName : "AccountCashFlow"
	};
	Object.freeze(config);
	
	return config;
})
