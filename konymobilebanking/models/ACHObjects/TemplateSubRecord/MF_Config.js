define([],function(){
	var mappings = {
		"taxSubType" : "taxSubType",
		"softDelete" : "softDelete",
		"TemplateRecord_id" : "TemplateRecord_id",
		"TemplateSubRecord_id" : "TemplateSubRecord_id",
		"Amount" : "Amount",
		"TaxSubCategory_id" : "TaxSubCategory_id",
	};
	Object.freeze(mappings);
	
	var typings = {
		"taxSubType" : "string",
		"softDelete" : "string",
		"TemplateRecord_id" : "string",
		"TemplateSubRecord_id" : "string",
		"Amount" : "string",
		"TaxSubCategory_id" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"TemplateSubRecord_id",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "ACHObjects",
		tableName : "TemplateSubRecord"
	};
	Object.freeze(config);
	
	return config;
})
