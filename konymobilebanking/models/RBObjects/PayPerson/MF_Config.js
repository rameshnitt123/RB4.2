define([],function(){
	var mappings = {
		"email" : "email",
		"errmsg" : "errmsg",
		"name" : "name",
		"limit" : "limit",
		"nickName" : "nickName",
		"offset" : "offset",
		"order" : "order",
		"PayPersonId" : "PayPersonId",
		"phone" : "phone",
		"primaryContactForSending" : "primaryContactForSending",
		"searchString" : "searchString",
		"secondaryEmail" : "secondaryEmail",
		"secondaryEmail2" : "secondaryEmail2",
		"secondaryPhoneNumber" : "secondaryPhoneNumber",
		"secondaryPhoneNumber2" : "secondaryPhoneNumber2",
		"sortBy" : "sortBy",
		"success" : "success",
		"phoneCountryCode" : "phoneCountryCode",
		"phoneExtension" : "phoneExtension",
		"transactionId" : "transactionId",
	};
	Object.freeze(mappings);
	
	var typings = {
		"email" : "string",
		"errmsg" : "string",
		"name" : "string",
		"limit" : "string",
		"nickName" : "string",
		"offset" : "string",
		"order" : "string",
		"PayPersonId" : "string",
		"phone" : "string",
		"primaryContactForSending" : "string",
		"searchString" : "string",
		"secondaryEmail" : "string",
		"secondaryEmail2" : "string",
		"secondaryPhoneNumber" : "string",
		"secondaryPhoneNumber2" : "string",
		"sortBy" : "string",
		"success" : "string",
		"phoneCountryCode" : "string",
		"phoneExtension" : "string",
		"transactionId" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"PayPersonId",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "PayPerson"
	};
	Object.freeze(config);
	
	return config;
})
