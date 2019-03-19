define([],function(){
	var mappings = {
		"categoryId" : "categoryId",
		"categoryName" : "categoryName",
		"errmsg" : "errmsg",
		"fromAccountName" : "fromAccountName",
		"fromAccountNumber" : "fromAccountNumber",
		"getMonthlyTransactions" : "getMonthlyTransactions",
		"getUncategorisedCount" : "getUncategorisedCount",
		"isAnalyzed" : "isAnalyzed",
		"isMappedToMerchant" : "isMappedToMerchant",
		"monthId" : "monthId",
		"success" : "success",
		"transactionAmount" : "transactionAmount",
		"transactionDate" : "transactionDate",
		"transactionDescription" : "transactionDescription",
		"transactionId" : "transactionId",
		"transactionNotes" : "transactionNotes",
		"pfmtransactionlist" : "pfmtransactionlist",
		"toAccountName" : "toAccountName",
		"toAccountNumber" : "toAccountNumber",
		"year" : "year",
		"sortby" : "sortby",
		"order" : "order",
		"notes" : "notes",
		"description" : "description",
	};
	Object.freeze(mappings);
	
	var typings = {
		"categoryId" : "string",
		"categoryName" : "string",
		"errmsg" : "string",
		"fromAccountName" : "string",
		"fromAccountNumber" : "string",
		"getMonthlyTransactions" : "string",
		"getUncategorisedCount" : "string",
		"isAnalyzed" : "string",
		"isMappedToMerchant" : "string",
		"monthId" : "string",
		"success" : "string",
		"transactionAmount" : "string",
		"transactionDate" : "string",
		"transactionDescription" : "string",
		"transactionId" : "string",
		"transactionNotes" : "string",
		"pfmtransactionlist" : "string",
		"toAccountName" : "string",
		"toAccountNumber" : "string",
		"year" : "string",
		"sortby" : "string",
		"order" : "string",
		"notes" : "string",
		"description" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"transactionId",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "PFMTransactions"
	};
	Object.freeze(config);
	
	return config;
})
