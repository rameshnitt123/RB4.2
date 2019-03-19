define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		accountType : function(val, state){
			state['accountType'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		productDescription : function(val, state){
			state['productDescription'] = val;
		},
		productId : function(val, state){
			state['productId'] = val;
		},
		StateId : function(val, state){
			state['StateId'] = val;
		},
		features : function(val, state){
			state['features'] = val;
		},
		info : function(val, state){
			state['info'] = val;
		},
		productType : function(val, state){
			state['productType'] = val;
		},
		productTypeId : function(val, state){
			state['productTypeId'] = val;
		},
		rates : function(val, state){
			state['rates'] = val;
		},
		termsAndConditions : function(val, state){
			state['termsAndConditions'] = val;
		},
	};
	
	
	//Create the Model Class
	function Products(defaultValues){
		var privateState = {};
			privateState.accountType = defaultValues?(defaultValues["accountType"]?defaultValues["accountType"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.productDescription = defaultValues?(defaultValues["productDescription"]?defaultValues["productDescription"]:null):null;
			privateState.productId = defaultValues?(defaultValues["productId"]?defaultValues["productId"]:null):null;
			privateState.StateId = defaultValues?(defaultValues["StateId"]?defaultValues["StateId"]:null):null;
			privateState.features = defaultValues?(defaultValues["features"]?defaultValues["features"]:null):null;
			privateState.info = defaultValues?(defaultValues["info"]?defaultValues["info"]:null):null;
			privateState.productType = defaultValues?(defaultValues["productType"]?defaultValues["productType"]:null):null;
			privateState.productTypeId = defaultValues?(defaultValues["productTypeId"]?defaultValues["productTypeId"]:null):null;
			privateState.rates = defaultValues?(defaultValues["rates"]?defaultValues["rates"]:null):null;
			privateState.termsAndConditions = defaultValues?(defaultValues["termsAndConditions"]?defaultValues["termsAndConditions"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"accountType" : {
					get : function(){return privateState.accountType},
					set : function(val){
						setterFunctions['accountType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"errmsg" : {
					get : function(){return privateState.errmsg},
					set : function(val){
						setterFunctions['errmsg'].call(this,val,privateState);
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
				"productId" : {
					get : function(){return privateState.productId},
					set : function(val){
						setterFunctions['productId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"StateId" : {
					get : function(){return privateState.StateId},
					set : function(val){
						setterFunctions['StateId'].call(this,val,privateState);
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
				"info" : {
					get : function(){return privateState.info},
					set : function(val){
						setterFunctions['info'].call(this,val,privateState);
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
				"productTypeId" : {
					get : function(){return privateState.productTypeId},
					set : function(val){
						setterFunctions['productTypeId'].call(this,val,privateState);
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
				"termsAndConditions" : {
					get : function(){return privateState.termsAndConditions},
					set : function(val){
						setterFunctions['termsAndConditions'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(Products);
	
	//Create new class level validator object
	BaseModel.Validator.call(Products);
	
	var registerValidatorBackup = Products.registerValidator;
	
	Products.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( Products.isValid(this, propName, val) ){
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
	//For Operation 'getProductList' with service id 'getProductList5507'
	Products.getProductList = function(params, onCompletion){
		return Products.customVerb('getProductList', params, onCompletion);
	};
	
	var relations = [
	];
	
	Products.relations = relations;
	
	Products.prototype.isValid = function(){
		return Products.isValid(this);
	};
	
	Products.prototype.objModelName = "Products";
	
	return Products;
});