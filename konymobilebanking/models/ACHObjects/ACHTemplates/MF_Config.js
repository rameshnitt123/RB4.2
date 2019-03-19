define([],function(){
	var mappings = {
		"BBGeneralTransactionType_id" : "BBGeneralTransactionType_id",
		"CreatedBy" : "CreatedBy",
		"TemplateType_id" : "TemplateType_id",
		"CompanyName" : "CompanyName",
		"TemplateTypeValue" : "TemplateTypeValue",
		"Status" : "Status",
		"TemplateRequestType_id" : "TemplateRequestType_id",
		"softDelete" : "softDelete",
		"TransactionType_id" : "TransactionType_id",
		"Company_id" : "Company_id",
		"TransactionTypeValue" : "TransactionTypeValue",
		"StatusValue" : "StatusValue",
		"RequestType" : "RequestType",
		"DebitAccount" : "DebitAccount",
		"AccountName" : "AccountName",
		"Records" : "Records",
		"TemplateDescription" : "TemplateDescription",
		"TemplateName" : "TemplateName",
		"MaxAmount" : "MaxAmount",
		"CreatedOn" : "CreatedOn",
		"Template_id" : "Template_id",
		"EffectiveDate" : "EffectiveDate",
		"Approver" : "Approver",
		"userName" : "userName",
		"TotalAmount" : "TotalAmount",
	};
	Object.freeze(mappings);
	
	var typings = {
		"BBGeneralTransactionType_id" : "string",
		"CreatedBy" : "string",
		"TemplateType_id" : "string",
		"CompanyName" : "string",
		"TemplateTypeValue" : "string",
		"Status" : "string",
		"TemplateRequestType_id" : "string",
		"softDelete" : "string",
		"TransactionType_id" : "string",
		"Company_id" : "string",
		"TransactionTypeValue" : "string",
		"StatusValue" : "string",
		"RequestType" : "string",
		"DebitAccount" : "string",
		"AccountName" : "string",
		"Records" : "string",
		"TemplateDescription" : "string",
		"TemplateName" : "string",
		"MaxAmount" : "string",
		"CreatedOn" : "string",
		"Template_id" : "string",
		"EffectiveDate" : "string",
		"Approver" : "string",
		"userName" : "string",
		"TotalAmount" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"Template_id",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "ACHObjects",
		tableName : "ACHTemplates"
	};
	Object.freeze(config);
	
	return config;
})
