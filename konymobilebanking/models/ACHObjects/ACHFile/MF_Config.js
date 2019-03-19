define([],function(){
	var mappings = {
		"FileName" : "FileName",
		"ACHFileID" : "ACHFileID",
		"CompanyName" : "CompanyName",
		"UploadedBy" : "UploadedBy",
		"UpdatedDateAndTime" : "UpdatedDateAndTime",
		"NumberOfDebits" : "NumberOfDebits",
		"NumberOfPrenotes" : "NumberOfPrenotes",
		"UploadedByID" : "UploadedByID",
		"NumberOfCredits" : "NumberOfCredits",
		"softDelete" : "softDelete",
		"CompanyID" : "CompanyID",
		"FormatTypeID" : "FormatTypeID",
		"FileStatus" : "FileStatus",
		"FileSize" : "FileSize",
		"FileStatusID" : "FileStatusID",
		"TransactionTypeID" : "TransactionTypeID",
		"TotalCreditAmount" : "TotalCreditAmount",
		"TotalDebitAmount" : "TotalDebitAmount",
		"FileRequestType" : "FileRequestType",
		"FileFormatType" : "FileFormatType",
		"NumberOfRecords" : "NumberOfRecords",
		"Request_id" : "Request_id",
		"Approver" : "Approver",
		"userName" : "userName",
	};
	Object.freeze(mappings);
	
	var typings = {
		"FileName" : "string",
		"ACHFileID" : "string",
		"CompanyName" : "string",
		"UploadedBy" : "string",
		"UpdatedDateAndTime" : "string",
		"NumberOfDebits" : "string",
		"NumberOfPrenotes" : "string",
		"UploadedByID" : "string",
		"NumberOfCredits" : "string",
		"softDelete" : "string",
		"CompanyID" : "string",
		"FormatTypeID" : "string",
		"FileStatus" : "string",
		"FileSize" : "string",
		"FileStatusID" : "string",
		"TransactionTypeID" : "string",
		"TotalCreditAmount" : "string",
		"TotalDebitAmount" : "string",
		"FileRequestType" : "string",
		"FileFormatType" : "string",
		"NumberOfRecords" : "string",
		"Request_id" : "string",
		"Approver" : "string",
		"userName" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"ACHFileID",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "ACHObjects",
		tableName : "ACHFile"
	};
	Object.freeze(config);
	
	return config;
})
