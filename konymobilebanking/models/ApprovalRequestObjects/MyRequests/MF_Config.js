define([],function(){
	var mappings = {
		"TransactionType" : "TransactionType",
		"Status" : "Status",
		"Request_id" : "Request_id",
		"CompanyName" : "CompanyName",
		"DebitOrCreditAccount" : "DebitOrCreditAccount",
		"Amount" : "Amount",
		"CreatedOn" : "CreatedOn",
		"CreatedBy" : "CreatedBy",
		"Company_id" : "Company_id",
		"RequestCreatedby" : "RequestCreatedby",
		"Payee" : "Payee",
		"Date" : "Date",
		"Transaction_id" : "Transaction_id",
		"Frequency" : "Frequency",
		"Reccurence" : "Reccurence",
		"BBGeneralTransactionType_id" : "BBGeneralTransactionType_id",
		"StatusId" : "StatusId",
		"TemplateRequestTypeId" : "TemplateRequestTypeId",
		"userName" : "userName",
		"TemplateTypeId" : "TemplateTypeId",
		"RequestType" : "RequestType",
		"TemplateTypeValue" : "TemplateTypeValue",
		"softDelete" : "softDelete",
		"TransactionType_id" : "TransactionType_id",
		"TemplateType" : "TemplateType",
		"TransmittedDate" : "TransmittedDate",
		"TransactionId" : "TransactionId",
		"UpdatedDateAndTime" : "UpdatedDateAndTime",
		"MaxAmount" : "MaxAmount",
		"FileName" : "FileName",
		"NumberOfDebits" : "NumberOfDebits",
		"NumberOfPrenotes" : "NumberOfPrenotes",
		"NumberOfCredits" : "NumberOfCredits",
		"formatType" : "formatType",
		"ACHFileFormatType_id" : "ACHFileFormatType_id",
		"ACHFile_id" : "ACHFile_id",
		"TotalCreditAmount" : "TotalCreditAmount",
		"TotalDebitAmount" : "TotalDebitAmount",
		"FileRequestType" : "FileRequestType",
		"CreatedById" : "CreatedById",
		"ActedBy" : "ActedBy",
		"TransactionTypeValue" : "TransactionTypeValue",
		"TotalAmount" : "TotalAmount",
	};
	Object.freeze(mappings);
	
	var typings = {
		"TransactionType" : "string",
		"Status" : "string",
		"Request_id" : "string",
		"CompanyName" : "string",
		"DebitOrCreditAccount" : "string",
		"Amount" : "string",
		"CreatedOn" : "string",
		"CreatedBy" : "string",
		"Company_id" : "string",
		"RequestCreatedby" : "string",
		"Payee" : "string",
		"Date" : "string",
		"Transaction_id" : "string",
		"Frequency" : "string",
		"Reccurence" : "string",
		"BBGeneralTransactionType_id" : "string",
		"StatusId" : "string",
		"TemplateRequestTypeId" : "string",
		"userName" : "string",
		"TemplateTypeId" : "string",
		"RequestType" : "string",
		"TemplateTypeValue" : "string",
		"softDelete" : "string",
		"TransactionType_id" : "string",
		"TemplateType" : "string",
		"TransmittedDate" : "string",
		"TransactionId" : "string",
		"UpdatedDateAndTime" : "string",
		"MaxAmount" : "string",
		"FileName" : "string",
		"NumberOfDebits" : "string",
		"NumberOfPrenotes" : "string",
		"NumberOfCredits" : "string",
		"formatType" : "string",
		"ACHFileFormatType_id" : "string",
		"ACHFile_id" : "string",
		"TotalCreditAmount" : "string",
		"TotalDebitAmount" : "string",
		"FileRequestType" : "string",
		"CreatedById" : "string",
		"ActedBy" : "string",
		"TransactionTypeValue" : "string",
		"TotalAmount" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"Request_id",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "ApprovalRequestObjects",
		tableName : "MyRequests"
	};
	Object.freeze(config);
	
	return config;
})
