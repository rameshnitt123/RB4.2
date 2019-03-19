define([],function(){
	var mappings = {
		"closingBalanceAmount" : "closingBalanceAmount",
		"depositAmount" : "depositAmount",
		"errmsg" : "errmsg",
		"referenceId" : "referenceId",
		"transAmount" : "transAmount",
		"transDate" : "transDate",
		"transDesc" : "transDesc",
		"transType" : "transType",
	};
	Object.freeze(mappings);
	
	var typings = {
		"closingBalanceAmount" : "string",
		"depositAmount" : "string",
		"errmsg" : "string",
		"referenceId" : "string",
		"transAmount" : "string",
		"transDate" : "string",
		"transDesc" : "string",
		"transType" : "string",
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
		tableName : "ChartTransactions"
	};
	Object.freeze(config);
	
	return config;
})
