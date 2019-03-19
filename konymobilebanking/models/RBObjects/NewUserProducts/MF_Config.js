define([],function(){
	var mappings = {
		"errmsg" : "errmsg",
		"features" : "features",
		"info" : "info",
		"productDescription" : "productDescription",
		"productId" : "productId",
		"productImageURL" : "productImageURL",
		"productLi" : "productLi",
		"productName" : "productName",
		"productType" : "productType",
		"productTypeId" : "productTypeId",
		"rates" : "rates",
		"termsAndConditions" : "termsAndConditions",
		"products" : "products",
		"success" : "success",
	};
	Object.freeze(mappings);
	
	var typings = {
		"errmsg" : "string",
		"features" : "string",
		"info" : "string",
		"productDescription" : "string",
		"productId" : "string",
		"productImageURL" : "string",
		"productLi" : "string",
		"productName" : "string",
		"productType" : "string",
		"productTypeId" : "string",
		"rates" : "string",
		"termsAndConditions" : "string",
		"products" : "string",
		"success" : "string",
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
		tableName : "NewUserProducts"
	};
	Object.freeze(config);
	
	return config;
})
