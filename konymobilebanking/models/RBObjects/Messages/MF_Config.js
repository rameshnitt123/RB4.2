define([],function(){
	var mappings = {
		"accountId" : "accountId",
		"accountName" : "accountName",
		"accountNickName" : "accountNickName",
		"categoryId" : "categoryId",
		"categoryName" : "categoryName",
		"count" : "count",
		"createdDate" : "createdDate",
		"deletedDate" : "deletedDate",
		"errmsg" : "errmsg",
		"isRead" : "isRead",
		"message" : "message",
		"messageId" : "messageId",
		"messageType" : "messageType",
		"pageSize" : "pageSize",
		"receivedDate" : "receivedDate",
		"recordNumber" : "recordNumber",
		"sentDate" : "sentDate",
		"subcategoryId" : "subcategoryId",
		"subcategoryName" : "subcategoryName",
		"subject" : "subject",
		"success" : "success",
	};
	Object.freeze(mappings);
	
	var typings = {
		"accountId" : "string",
		"accountName" : "string",
		"accountNickName" : "string",
		"categoryId" : "string",
		"categoryName" : "string",
		"count" : "string",
		"createdDate" : "string",
		"deletedDate" : "string",
		"errmsg" : "string",
		"isRead" : "string",
		"message" : "string",
		"messageId" : "string",
		"messageType" : "string",
		"pageSize" : "string",
		"receivedDate" : "string",
		"recordNumber" : "string",
		"sentDate" : "string",
		"subcategoryId" : "string",
		"subcategoryName" : "string",
		"subject" : "string",
		"success" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"messageId",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "Messages"
	};
	Object.freeze(config);
	
	return config;
})
