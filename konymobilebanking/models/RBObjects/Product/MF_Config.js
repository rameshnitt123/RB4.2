define([],function(){
	var mappings = {
		"productId" : "productId",
		"Status_id" : "Status_id",
		"rates" : "rates",
		"MarketingStateId" : "MarketingStateId",
		"productType" : "productType",
		"productDescription" : "productDescription",
		"info" : "info",
		"Type_id" : "Type_id",
		"productName" : "productName",
		"productTypeId" : "productTypeId",
		"otherproducttype_Name" : "otherproducttype_Name",
		"termsAndConditions" : "termsAndConditions",
		"otherproducttype_Description" : "otherproducttype_Description",
		"SecondaryProduct_id" : "SecondaryProduct_id",
		"features" : "features",
		"otherproducttype_id" : "otherproducttype_id",
		"createdby" : "createdby",
		"modifiedby" : "modifiedby",
		"lastmodifiedts" : "lastmodifiedts",
		"createdts" : "createdts",
		"softdeleteflag" : "softdeleteflag",
		"synctimestamp" : "synctimestamp",
		"deviceID" : "deviceID",
		"userName" : "userName",
		"accountID" : "accountID",
	};
	Object.freeze(mappings);
	
	var typings = {
		"productId" : "string",
		"Status_id" : "string",
		"rates" : "string",
		"MarketingStateId" : "string",
		"productType" : "string",
		"productDescription" : "string",
		"info" : "string",
		"Type_id" : "string",
		"productName" : "string",
		"productTypeId" : "string",
		"otherproducttype_Name" : "string",
		"termsAndConditions" : "string",
		"otherproducttype_Description" : "string",
		"SecondaryProduct_id" : "string",
		"features" : "string",
		"otherproducttype_id" : "string",
		"createdby" : "string",
		"modifiedby" : "string",
		"lastmodifiedts" : "string",
		"createdts" : "string",
		"softdeleteflag" : "string",
		"synctimestamp" : "string",
		"deviceID" : "string",
		"userName" : "string",
		"accountID" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"productId",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "Product"
	};
	Object.freeze(config);
	
	return config;
})
