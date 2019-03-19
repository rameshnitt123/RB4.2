define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		productId : function(val, state){
			state['productId'] = val;
		},
		Status_id : function(val, state){
			state['Status_id'] = val;
		},
		rates : function(val, state){
			state['rates'] = val;
		},
		MarketingStateId : function(val, state){
			state['MarketingStateId'] = val;
		},
		productType : function(val, state){
			state['productType'] = val;
		},
		productDescription : function(val, state){
			state['productDescription'] = val;
		},
		info : function(val, state){
			state['info'] = val;
		},
		Type_id : function(val, state){
			state['Type_id'] = val;
		},
		productName : function(val, state){
			state['productName'] = val;
		},
		productTypeId : function(val, state){
			state['productTypeId'] = val;
		},
		otherproducttype_Name : function(val, state){
			state['otherproducttype_Name'] = val;
		},
		termsAndConditions : function(val, state){
			state['termsAndConditions'] = val;
		},
		otherproducttype_Description : function(val, state){
			state['otherproducttype_Description'] = val;
		},
		SecondaryProduct_id : function(val, state){
			state['SecondaryProduct_id'] = val;
		},
		features : function(val, state){
			state['features'] = val;
		},
		otherproducttype_id : function(val, state){
			state['otherproducttype_id'] = val;
		},
		createdby : function(val, state){
			state['createdby'] = val;
		},
		modifiedby : function(val, state){
			state['modifiedby'] = val;
		},
		lastmodifiedts : function(val, state){
			state['lastmodifiedts'] = val;
		},
		createdts : function(val, state){
			state['createdts'] = val;
		},
		softdeleteflag : function(val, state){
			state['softdeleteflag'] = val;
		},
		synctimestamp : function(val, state){
			state['synctimestamp'] = val;
		},
		deviceID : function(val, state){
			state['deviceID'] = val;
		},
		userName : function(val, state){
			state['userName'] = val;
		},
		accountID : function(val, state){
			state['accountID'] = val;
		},
	};
	
	
	//Create the Model Class
	function Product(defaultValues){
		var privateState = {};
			privateState.productId = defaultValues?(defaultValues["productId"]?defaultValues["productId"]:null):null;
			privateState.Status_id = defaultValues?(defaultValues["Status_id"]?defaultValues["Status_id"]:null):null;
			privateState.rates = defaultValues?(defaultValues["rates"]?defaultValues["rates"]:null):null;
			privateState.MarketingStateId = defaultValues?(defaultValues["MarketingStateId"]?defaultValues["MarketingStateId"]:null):null;
			privateState.productType = defaultValues?(defaultValues["productType"]?defaultValues["productType"]:null):null;
			privateState.productDescription = defaultValues?(defaultValues["productDescription"]?defaultValues["productDescription"]:null):null;
			privateState.info = defaultValues?(defaultValues["info"]?defaultValues["info"]:null):null;
			privateState.Type_id = defaultValues?(defaultValues["Type_id"]?defaultValues["Type_id"]:null):null;
			privateState.productName = defaultValues?(defaultValues["productName"]?defaultValues["productName"]:null):null;
			privateState.productTypeId = defaultValues?(defaultValues["productTypeId"]?defaultValues["productTypeId"]:null):null;
			privateState.otherproducttype_Name = defaultValues?(defaultValues["otherproducttype_Name"]?defaultValues["otherproducttype_Name"]:null):null;
			privateState.termsAndConditions = defaultValues?(defaultValues["termsAndConditions"]?defaultValues["termsAndConditions"]:null):null;
			privateState.otherproducttype_Description = defaultValues?(defaultValues["otherproducttype_Description"]?defaultValues["otherproducttype_Description"]:null):null;
			privateState.SecondaryProduct_id = defaultValues?(defaultValues["SecondaryProduct_id"]?defaultValues["SecondaryProduct_id"]:null):null;
			privateState.features = defaultValues?(defaultValues["features"]?defaultValues["features"]:null):null;
			privateState.otherproducttype_id = defaultValues?(defaultValues["otherproducttype_id"]?defaultValues["otherproducttype_id"]:null):null;
			privateState.createdby = defaultValues?(defaultValues["createdby"]?defaultValues["createdby"]:null):null;
			privateState.modifiedby = defaultValues?(defaultValues["modifiedby"]?defaultValues["modifiedby"]:null):null;
			privateState.lastmodifiedts = defaultValues?(defaultValues["lastmodifiedts"]?defaultValues["lastmodifiedts"]:null):null;
			privateState.createdts = defaultValues?(defaultValues["createdts"]?defaultValues["createdts"]:null):null;
			privateState.softdeleteflag = defaultValues?(defaultValues["softdeleteflag"]?defaultValues["softdeleteflag"]:null):null;
			privateState.synctimestamp = defaultValues?(defaultValues["synctimestamp"]?defaultValues["synctimestamp"]:null):null;
			privateState.deviceID = defaultValues?(defaultValues["deviceID"]?defaultValues["deviceID"]:null):null;
			privateState.userName = defaultValues?(defaultValues["userName"]?defaultValues["userName"]:null):null;
			privateState.accountID = defaultValues?(defaultValues["accountID"]?defaultValues["accountID"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"productId" : {
					get : function(){return privateState.productId},
					set : function(val){
						setterFunctions['productId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Status_id" : {
					get : function(){return privateState.Status_id},
					set : function(val){
						setterFunctions['Status_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"rates" : {
					get : function(){return privateState.rates},
					set : function(val){
						setterFunctions['rates'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"MarketingStateId" : {
					get : function(){return privateState.MarketingStateId},
					set : function(val){
						setterFunctions['MarketingStateId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"productType" : {
					get : function(){return privateState.productType},
					set : function(val){
						setterFunctions['productType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"productDescription" : {
					get : function(){return privateState.productDescription},
					set : function(val){
						setterFunctions['productDescription'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"info" : {
					get : function(){return privateState.info},
					set : function(val){
						setterFunctions['info'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Type_id" : {
					get : function(){return privateState.Type_id},
					set : function(val){
						setterFunctions['Type_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"productName" : {
					get : function(){return privateState.productName},
					set : function(val){
						setterFunctions['productName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"productTypeId" : {
					get : function(){return privateState.productTypeId},
					set : function(val){
						setterFunctions['productTypeId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"otherproducttype_Name" : {
					get : function(){return privateState.otherproducttype_Name},
					set : function(val){
						setterFunctions['otherproducttype_Name'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"termsAndConditions" : {
					get : function(){return privateState.termsAndConditions},
					set : function(val){
						setterFunctions['termsAndConditions'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"otherproducttype_Description" : {
					get : function(){return privateState.otherproducttype_Description},
					set : function(val){
						setterFunctions['otherproducttype_Description'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"SecondaryProduct_id" : {
					get : function(){return privateState.SecondaryProduct_id},
					set : function(val){
						setterFunctions['SecondaryProduct_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"features" : {
					get : function(){return privateState.features},
					set : function(val){
						setterFunctions['features'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"otherproducttype_id" : {
					get : function(){return privateState.otherproducttype_id},
					set : function(val){
						setterFunctions['otherproducttype_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"createdby" : {
					get : function(){return privateState.createdby},
					set : function(val){
						setterFunctions['createdby'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"modifiedby" : {
					get : function(){return privateState.modifiedby},
					set : function(val){
						setterFunctions['modifiedby'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lastmodifiedts" : {
					get : function(){return privateState.lastmodifiedts},
					set : function(val){
						setterFunctions['lastmodifiedts'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"createdts" : {
					get : function(){return privateState.createdts},
					set : function(val){
						setterFunctions['createdts'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"softdeleteflag" : {
					get : function(){return privateState.softdeleteflag},
					set : function(val){
						setterFunctions['softdeleteflag'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"synctimestamp" : {
					get : function(){return privateState.synctimestamp},
					set : function(val){
						setterFunctions['synctimestamp'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"deviceID" : {
					get : function(){return privateState.deviceID},
					set : function(val){
						setterFunctions['deviceID'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"userName" : {
					get : function(){return privateState.userName},
					set : function(val){
						setterFunctions['userName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"accountID" : {
					get : function(){return privateState.accountID},
					set : function(val){
						setterFunctions['accountID'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(Product);
	
	//Create new class level validator object
	BaseModel.Validator.call(Product);
	
	var registerValidatorBackup = Product.registerValidator;
	
	Product.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( Product.isValid(this, propName, val) ){
					return setterBackup.apply(null, arguments);
				}else{
					throw Error("Validation failed for "+ propName +" : "+val);
				}
			}
			setterFunctions[arguments[0]].changed = true;
		}
		return registerValidatorBackup.apply(null, arguments);
	}
	
	//Extending Model for custom operations
	//For Operation 'getUserProductList' with service id 'getUserProductList3202'
	Product.getUserProductList = function(params, onCompletion){
		return Product.customVerb('getUserProductList', params, onCompletion);
	};
	
	var relations = [
	];
	
	Product.relations = relations;
	
	Product.prototype.isValid = function(){
		return Product.isValid(this);
	};
	
	Product.prototype.objModelName = "Product";
	
	return Product;
});