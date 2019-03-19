define([],function(){
	var mappings = {
		"accountNumber" : "accountNumber",
		"addressLine1" : "addressLine1",
		"addressLine2" : "addressLine2",
		"billDescription" : "billDescription",
		"billDueDate" : "billDueDate",
		"billerCategory" : "billerCategory",
		"billerId" : "billerId",
		"billGeneratedDate" : "billGeneratedDate",
		"billid" : "billid",
		"cityName" : "cityName",
		"companyName" : "companyName",
		"dueAmount" : "dueAmount",
		"EBillEnable" : "EBillEnable",
		"eBillStatus" : "eBillStatus",
		"eBillSupport" : "eBillSupport",
		"ebillURL" : "ebillURL",
		"email" : "email",
		"errmsg" : "errmsg",
		"lastPaidAmount" : "lastPaidAmount",
		"lastPaidDate" : "lastPaidDate",
		"limit" : "limit",
		"nameOnBill" : "nameOnBill",
		"notes" : "notes",
		"offset" : "offset",
		"order" : "order",
		"paidAmount" : "paidAmount",
		"payeeAccountNumber" : "payeeAccountNumber",
		"payeeId" : "payeeId",
		"payeeName" : "payeeName",
		"payeeNickName" : "payeeNickName",
		"phone" : "phone",
		"searchString" : "searchString",
		"sortBy" : "sortBy",
		"state" : "state",
		"street" : "street",
		"success" : "success",
		"zipCode" : "zipCode",
		"type" : "type",
		"country" : "country",
		"swiftCode" : "swiftCode",
		"routingCode" : "routingCode",
		"bankName" : "bankName",
		"bankAddressLine1" : "bankAddressLine1",
		"bankAddressLine2" : "bankAddressLine2",
		"bankCity" : "bankCity",
		"bankState" : "bankState",
		"bankZip" : "bankZip",
		"IBAN" : "IBAN",
		"wireAccountType" : "wireAccountType",
		"internationalRoutingCode" : "internationalRoutingCode",
		"transactionId" : "transactionId",
		"isManuallyAdded" : "isManuallyAdded",
		"phoneExtension" : "phoneExtension",
		"phoneCountryCode" : "phoneCountryCode",
	};
	Object.freeze(mappings);
	
	var typings = {
		"accountNumber" : "string",
		"addressLine1" : "string",
		"addressLine2" : "string",
		"billDescription" : "string",
		"billDueDate" : "string",
		"billerCategory" : "string",
		"billerId" : "string",
		"billGeneratedDate" : "string",
		"billid" : "string",
		"cityName" : "string",
		"companyName" : "string",
		"dueAmount" : "string",
		"EBillEnable" : "string",
		"eBillStatus" : "string",
		"eBillSupport" : "string",
		"ebillURL" : "string",
		"email" : "string",
		"errmsg" : "string",
		"lastPaidAmount" : "string",
		"lastPaidDate" : "string",
		"limit" : "string",
		"nameOnBill" : "string",
		"notes" : "string",
		"offset" : "string",
		"order" : "string",
		"paidAmount" : "string",
		"payeeAccountNumber" : "string",
		"payeeId" : "string",
		"payeeName" : "string",
		"payeeNickName" : "string",
		"phone" : "string",
		"searchString" : "string",
		"sortBy" : "string",
		"state" : "string",
		"street" : "string",
		"success" : "string",
		"zipCode" : "string",
		"type" : "string",
		"country" : "string",
		"swiftCode" : "string",
		"routingCode" : "string",
		"bankName" : "string",
		"bankAddressLine1" : "string",
		"bankAddressLine2" : "string",
		"bankCity" : "string",
		"bankState" : "string",
		"bankZip" : "string",
		"IBAN" : "string",
		"wireAccountType" : "string",
		"internationalRoutingCode" : "string",
		"transactionId" : "string",
		"isManuallyAdded" : "string",
		"phoneExtension" : "string",
		"phoneCountryCode" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"payeeId",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "Payee"
	};
	Object.freeze(config);
	
	return config;
})
