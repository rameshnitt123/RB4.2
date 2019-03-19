define([],function(){
	var mappings = {
		"Transaction_id" : "Transaction_id",
		"TransactionDate" : "TransactionDate",
		"CreatedBy" : "CreatedBy",
		"Payee" : "Payee",
		"StatusValue" : "StatusValue",
		"Reccurence" : "Reccurence",
		"Frequency" : "Frequency",
		"Company_id" : "Company_id",
		"TransactionType_id" : "TransactionType_id",
		"CreatedOn" : "CreatedOn",
		"Amount" : "Amount",
		"companyName" : "companyName",
		"DebitOrCreditAccount" : "DebitOrCreditAccount",
		"TransactionType" : "TransactionType",
		"Status" : "Status",
		"EffectiveDate" : "EffectiveDate",
		"BBGeneralTransactionType_id" : "BBGeneralTransactionType_id",
		"TransactionEntry" : "TransactionEntry",
		"Approver" : "Approver",
		"userName" : "userName",
	};
	Object.freeze(mappings);
	
	var typings = {
		"Transaction_id" : "string",
		"TransactionDate" : "string",
		"CreatedBy" : "string",
		"Payee" : "string",
		"StatusValue" : "string",
		"Reccurence" : "string",
		"Frequency" : "string",
		"Company_id" : "string",
		"TransactionType_id" : "string",
		"CreatedOn" : "string",
		"Amount" : "string",
		"companyName" : "string",
		"DebitOrCreditAccount" : "string",
		"TransactionType" : "string",
		"Status" : "string",
		"EffectiveDate" : "string",
		"BBGeneralTransactionType_id" : "string",
		"TransactionEntry" : "string",
		"Approver" : "string",
		"userName" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"Transaction_id",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "ACHObjects",
		tableName : "BBGeneralTransactions"
	};
	Object.freeze(config);
	
	return config;
})
