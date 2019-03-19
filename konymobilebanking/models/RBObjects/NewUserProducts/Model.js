define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		features : function(val, state){
			state['features'] = val;
		},
		info : function(val, state){
			state['info'] = val;
		},
		productDescription : function(val, state){
			state['productDescription'] = val;
		},
		productId : function(val, state){
			state['productId'] = val;
		},
		productImageURL : function(val, state){
			state['productImageURL'] = val;
		},
		productLi : function(val, state){
			state['productLi'] = val;
		},
		productName : function(val, state){
			state['productName'] = val;
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
		products : function(val, state){
			state['products'] = val;
		},
		success : function(val, state){
			state['success'] = val;
		},
	};
	
	
	//Create the Model Class
	function NewUserProducts(defaultValues){
		var privateState = {};
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.features = defaultValues?(defaultValues["features"]?defaultValues["features"]:null):null;
			privateState.info = defaultValues?(defaultValues["info"]?defaultValues["info"]:null):null;
			privateState.productDescription = defaultValues?(defaultValues["productDescription"]?defaultValues["productDescription"]:null):null;
			privateState.productId = defaultValues?(defaultValues["productId"]?defaultValues["productId"]:null):null;
			privateState.productImageURL = defaultValues?(defaultValues["productImageURL"]?defaultValues["productImageURL"]:null):null;
			privateState.productLi = defaultValues?(defaultValues["productLi"]?defaultValues["productLi"]:null):null;
			privateState.productName = defaultValues?(defaultValues["productName"]?defaultValues["productName"]:null):null;
			privateState.productType = defaultValues?(defaultValues["productType"]?defaultValues["productType"]:null):null;
			privateState.productTypeId = defaultValues?(defaultValues["productTypeId"]?defaultValues["productTypeId"]:null):null;
			privateState.rates = defaultValues?(defaultValues["rates"]?defaultValues["rates"]:null):null;
			privateState.termsAndConditions = defaultValues?(defaultValues["termsAndConditions"]?defaultValues["termsAndConditions"]:null):null;
			privateState.products = defaultValues?(defaultValues["products"]?defaultValues["products"]:null):null;
			privateState.success = defaultValues?(defaultValues["success"]?defaultValues["success"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"errmsg" : {
					get : function(){return privateState.errmsg},
					set : function(val){
						setterFunctions['errmsg'].call(this,val,privateState);
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
				"productImageURL" : {
					get : function(){return privateState.productImageURL},
					set : function(val){
						setterFunctions['productImageURL'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"productLi" : {
					get : function(){return privateState.productLi},
					set : function(val){
						setterFunctions['productLi'].call(this,val,privateState);
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
				"products" : {
					get : function(){return privateState.products},
					set : function(val){
						setterFunctions['products'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"success" : {
					get : function(){return privateState.success},
					set : function(val){
						setterFunctions['success'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(NewUserProducts);
	
	//Create new class level validator object
	BaseModel.Validator.call(NewUserProducts);
	
	var registerValidatorBackup = NewUserProducts.registerValidator;
	
	NewUserProducts.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( NewUserProducts.isValid(this, propName, val) ){
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
	//For Operation 'getAllProducts' with service id 'getAllProducts6906'
	NewUserProducts.getAllProducts = function(params, onCompletion){
		return NewUserProducts.customVerb('getAllProducts', params, onCompletion);
	};
	
	var relations = [
	];
	
	NewUserProducts.relations = relations;
	
	NewUserProducts.prototype.isValid = function(){
		return NewUserProducts.isValid(this);
	};
	
	NewUserProducts.prototype.objModelName = "NewUserProducts";
	
	return NewUserProducts;
});