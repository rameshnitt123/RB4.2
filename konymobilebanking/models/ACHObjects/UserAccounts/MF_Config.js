define([],function(){
	var mappings = {
		"Account_id" : "Account_id",
		"AccountName" : "AccountName",
		"IsWithdrawAllowed" : "IsWithdrawAllowed",
		"IsDepositAllowed" : "IsDepositAllowed",
		"IsOrganizationAccount" : "IsOrganizationAccount",
		"IsViewAllowed" : "IsViewAllowed",
		"Customer_id" : "Customer_id",
		"id" : "id",
	};
	Object.freeze(mappings);
	
	var typings = {
		"Account_id" : "string",
		"AccountName" : "string",
		"IsWithdrawAllowed" : "string",
		"IsDepositAllowed" : "string",
		"IsOrganizationAccount" : "string",
		"IsViewAllowed" : "string",
		"Customer_id" : "string",
		"id" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"Account_id",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "ACHObjects",
		tableName : "UserAccounts"
	};
	Object.freeze(config);
	
	return config;
})
