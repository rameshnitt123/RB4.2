define([],function(){
	var mappings = {
		"myRequestsWaiting" : "myRequestsWaiting",
		"myRequestsRejected" : "myRequestsRejected",
		"myRequestsApproved" : "myRequestsApproved",
		"ACHFilesForMyApproval" : "ACHFilesForMyApproval",
		"ACHTransactionsForMyApproval" : "ACHTransactionsForMyApproval",
		"GeneralTransactionsForMyApproval" : "GeneralTransactionsForMyApproval",
	};
	Object.freeze(mappings);
	
	var typings = {
		"myRequestsWaiting" : "string",
		"myRequestsRejected" : "string",
		"myRequestsApproved" : "string",
		"ACHFilesForMyApproval" : "string",
		"ACHTransactionsForMyApproval" : "string",
		"GeneralTransactionsForMyApproval" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"myRequestsWaiting",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "ApprovalRequestObjects",
		tableName : "Counts"
	};
	Object.freeze(config);
	
	return config;
})
