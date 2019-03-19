define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		accountTypeId : function(val, state){
			state['accountTypeId'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		features : function(val, state){
			state['features'] = val;
		},
		info : function(val, state){
			state['info'] = val;
		},
		rates : function(val, state){
			state['rates'] = val;
		},
		termsAndConditions : function(val, state){
			state['termsAndConditions'] = val;
		},
	};
	
	
	//Create the Model Class
	function AccountFeatures(defaultValues){
		var privateState = {};
			privateState.accountTypeId = defaultValues?(defaultValues["accountTypeId"]?defaultValues["accountTypeId"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.features = defaultValues?(defaultValues["features"]?defaultValues["features"]:null):null;
			privateState.info = defaultValues?(defaultValues["info"]?defaultValues["info"]:null):null;
			privateState.rates = defaultValues?(defaultValues["rates"]?defaultValues["rates"]:null):null;
			privateState.termsAndConditions = defaultValues?(defaultValues["termsAndConditions"]?defaultValues["termsAndConditions"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"accountTypeId" : {
					get : function(){return privateState.accountTypeId},
					set : function(val){
						setterFunctions['accountTypeId'].call(this,val,privateState);
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
	BaseModel.isParentOf(AccountFeatures);
	
	//Create new class level validator object
	BaseModel.Validator.call(AccountFeatures);
	
	var registerValidatorBackup = AccountFeatures.registerValidator;
	
	AccountFeatures.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( AccountFeatures.isValid(this, propName, val) ){
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
	
	var relations = [
	];
	
	AccountFeatures.relations = relations;
	
	AccountFeatures.prototype.isValid = function(){
		return AccountFeatures.isValid(this);
	};
	
	AccountFeatures.prototype.objModelName = "AccountFeatures";
	
	return AccountFeatures;
});