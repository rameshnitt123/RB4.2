define([],function(){
	var mappings = {
		"balanceAmount" : "balanceAmount",
		"billDueDate" : "billDueDate",
		"billerCategory" : "billerCategory",
		"billerName" : "billerName",
		"billGeneratedDate" : "billGeneratedDate",
		"description" : "description",
		"dueAmount" : "dueAmount",
		"ebillStatus" : "ebillStatus",
		"ebillURL" : "ebillURL",
		"fromAccountName" : "fromAccountName",
		"fromAccountNumber" : "fromAccountNumber",
		"id" : "id",
		"order" : "order",
		"paidAmount" : "paidAmount",
		"paidDate" : "paidDate",
		"payeeId" : "payeeId",
		"payeeName" : "payeeName",
		"sortBy" : "sortBy",
		"payeeAddressLine1" : "payeeAddressLine1",
		"type_id" : "type_id",
		"transactionType" : "transactionType",
		"recurrenceDesc" : "recurrenceDesc",
		"currencyCode" : "currencyCode",
		"errmsg" : "errmsg",
	};
	Object.freeze(mappings);
	
	var typings = {
		"balanceAmount" : "string",
		"billDueDate" : "string",
		"billerCategory" : "string",
		"billerName" : "string",
		"billGeneratedDate" : "string",
		"description" : "string",
		"dueAmount" : "string",
		"ebillStatus" : "string",
		"ebillURL" : "string",
		"fromAccountName" : "string",
		"fromAccountNumber" : "string",
		"id" : "string",
		"order" : "string",
		"paidAmount" : "string",
		"paidDate" : "string",
		"payeeId" : "string",
		"payeeName" : "string",
		"sortBy" : "string",
		"payeeAddressLine1" : "string",
		"type_id" : "string",
		"transactionType" : "string",
		"recurrenceDesc" : "string",
		"currencyCode" : "string",
		"errmsg" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"id",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "Bills"
	};
	Object.freeze(config);
	
	return config;
})
