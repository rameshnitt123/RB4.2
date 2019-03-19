define([],function(){
	var mappings = {
		"alertid" : "alertid",
		"bankingIDChange" : "bankingIDChange",
		"communicationChange" : "communicationChange",
		"dealsExpiring" : "dealsExpiring",
		"errmsg" : "errmsg",
		"newDealsAvailable" : "newDealsAvailable",
		"newPayeeAdded" : "newPayeeAdded",
		"passwordChange" : "passwordChange",
		"passwordExpired" : "passwordExpired",
		"payeeDetailsUpdated" : "payeeDetailsUpdated",
		"success" : "success",
		"userName" : "userName",
		"canBeSelected" : "canBeSelected",
		"alertTypes" : "alertTypes",
		"isSelected" : "isSelected",
		"canSmsBeSelected" : "canSmsBeSelected",
		"name" : "name",
		"isSmsActive" : "isSmsActive",
		"canPushBeSelected" : "canPushBeSelected",
		"isEmailActive" : "isEmailActive",
		"isPushActive" : "isPushActive",
		"value" : "value",
		"canEmailBeSelected" : "canEmailBeSelected",
		"alertTypeName" : "alertTypeName",
		"alertTypeId" : "alertTypeId",
		"alerts" : "alerts",
	};
	Object.freeze(mappings);
	
	var typings = {
		"alertid" : "string",
		"bankingIDChange" : "string",
		"communicationChange" : "string",
		"dealsExpiring" : "string",
		"errmsg" : "string",
		"newDealsAvailable" : "string",
		"newPayeeAdded" : "string",
		"passwordChange" : "string",
		"passwordExpired" : "string",
		"payeeDetailsUpdated" : "string",
		"success" : "string",
		"userName" : "string",
		"canBeSelected" : "string",
		"alertTypes" : "string",
		"isSelected" : "string",
		"canSmsBeSelected" : "string",
		"name" : "string",
		"isSmsActive" : "string",
		"canPushBeSelected" : "string",
		"isEmailActive" : "string",
		"isPushActive" : "string",
		"value" : "string",
		"canEmailBeSelected" : "string",
		"alertTypeName" : "string",
		"alertTypeId" : "string",
		"alerts" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"alertid",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "UserAlerts"
	};
	Object.freeze(config);
	
	return config;
})
