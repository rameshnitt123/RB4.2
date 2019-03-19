define([],function(){
	var mappings = {
		"accountNumber" : "accountNumber",
		"accountType" : "accountType",
		"bankName" : "bankName",
		"beneficiaryName" : "beneficiaryName",
		"countryName" : "countryName",
		"createdOn" : "createdOn",
		"errmsg" : "errmsg",
		"firstName" : "firstName",
		"Id" : "Id",
		"isInternationalAccount" : "isInternationalAccount",
		"isSameBankAccount" : "isSameBankAccount",
		"isVerified" : "isVerified",
		"lastName" : "lastName",
		"limit" : "limit",
		"nickName" : "nickName",
		"notes" : "notes",
		"offset" : "offset",
		"order" : "order",
		"routingNumber" : "routingNumber",
		"searchString" : "searchString",
		"sortBy" : "sortBy",
		"success" : "success",
		"swiftCode" : "swiftCode",
		"IBAN" : "IBAN",
		"sortCode" : "sortCode",
		"phoneExtension" : "phoneExtension",
		"phoneNumber" : "phoneNumber",
		"phoneCountryCode" : "phoneCountryCode",
	};
	Object.freeze(mappings);
	
	var typings = {
		"accountNumber" : "string",
		"accountType" : "string",
		"bankName" : "string",
		"beneficiaryName" : "string",
		"countryName" : "string",
		"createdOn" : "string",
		"errmsg" : "string",
		"firstName" : "string",
		"Id" : "string",
		"isInternationalAccount" : "string",
		"isSameBankAccount" : "string",
		"isVerified" : "string",
		"lastName" : "string",
		"limit" : "string",
		"nickName" : "string",
		"notes" : "string",
		"offset" : "string",
		"order" : "string",
		"routingNumber" : "string",
		"searchString" : "string",
		"sortBy" : "string",
		"success" : "string",
		"swiftCode" : "string",
		"IBAN" : "string",
		"sortCode" : "string",
		"phoneExtension" : "string",
		"phoneNumber" : "string",
		"phoneCountryCode" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"Id",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "ExternalAccounts"
	};
	Object.freeze(config);
	
	return config;
})
