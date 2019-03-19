define([],function(){
	var mappings = {
		"accountName" : "accountName",
		"accountNumber" : "accountNumber",
		"accountType" : "accountType",
		"alertId" : "alertId",
		"balanceUpdate" : "balanceUpdate",
		"balanceUpdateTypeId" : "balanceUpdateTypeId",
		"checkClearance" : "checkClearance",
		"creditLimit" : "creditLimit",
		"debitLimit" : "debitLimit",
		"depositDueReminder" : "depositDueReminder",
		"depositDueReminderTypeId" : "depositDueReminderTypeId",
		"errmsg" : "errmsg",
		"isEnabled" : "isEnabled",
		"minimumBalance" : "minimumBalance",
		"paymentDueReminder" : "paymentDueReminder",
		"paymentDueReminderTypeId" : "paymentDueReminderTypeId",
		"success" : "success",
		"successfulTransfer" : "successfulTransfer",
	};
	Object.freeze(mappings);
	
	var typings = {
		"accountName" : "string",
		"accountNumber" : "string",
		"accountType" : "string",
		"alertId" : "string",
		"balanceUpdate" : "string",
		"balanceUpdateTypeId" : "string",
		"checkClearance" : "string",
		"creditLimit" : "string",
		"debitLimit" : "string",
		"depositDueReminder" : "string",
		"depositDueReminderTypeId" : "string",
		"errmsg" : "string",
		"isEnabled" : "boolean",
		"minimumBalance" : "string",
		"paymentDueReminder" : "string",
		"paymentDueReminderTypeId" : "string",
		"success" : "string",
		"successfulTransfer" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"alertId",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "UserAccountAlerts"
	};
	Object.freeze(config);
	
	return config;
})
