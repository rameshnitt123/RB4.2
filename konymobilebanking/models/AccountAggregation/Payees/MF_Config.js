define([],function(){
	var mappings = {
		"counterparty_id" : "counterparty_id",
		"created_by_user_id" : "created_by_user_id",
		"is_beneficiary" : "is_beneficiary",
		"name" : "name",
		"other_account_routing_address" : "other_account_routing_address",
		"other_account_routing_scheme" : "other_account_routing_scheme",
		"other_bank_routing_address" : "other_bank_routing_address",
		"other_bank_routing_scheme" : "other_bank_routing_scheme",
		"other_branch_routing_address" : "other_branch_routing_address",
		"other_branch_routing_scheme" : "other_branch_routing_scheme",
		"this_account_id" : "this_account_id",
		"this_bank_id" : "this_bank_id",
		"this_view_id" : "this_view_id",
	};
	Object.freeze(mappings);
	
	var typings = {
		"counterparty_id" : "string",
		"created_by_user_id" : "string",
		"is_beneficiary" : "string",
		"name" : "string",
		"other_account_routing_address" : "string",
		"other_account_routing_scheme" : "string",
		"other_bank_routing_address" : "string",
		"other_bank_routing_scheme" : "string",
		"other_branch_routing_address" : "string",
		"other_branch_routing_scheme" : "string",
		"this_account_id" : "string",
		"this_bank_id" : "string",
		"this_view_id" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "AccountAggregation",
		tableName : "Payees"
	};
	Object.freeze(config);
	
	return config;
})
