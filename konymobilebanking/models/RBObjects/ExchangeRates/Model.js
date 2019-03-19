define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		currency : function(val, state){
			state['currency'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		exchangeRate : function(val, state){
			state['exchangeRate'] = val;
		},
	};
	
	
	//Create the Model Class
	function ExchangeRates(defaultValues){
		var privateState = {};
			privateState.currency = defaultValues?(defaultValues["currency"]?defaultValues["currency"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.exchangeRate = defaultValues?(defaultValues["exchangeRate"]?defaultValues["exchangeRate"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"currency" : {
					get : function(){return privateState.currency},
					set : function(val){
						setterFunctions['currency'].call(this,val,privateState);
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
				"exchangeRate" : {
					get : function(){return privateState.exchangeRate},
					set : function(val){
						setterFunctions['exchangeRate'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(ExchangeRates);
	
	//Create new class level validator object
	BaseModel.Validator.call(ExchangeRates);
	
	var registerValidatorBackup = ExchangeRates.registerValidator;
	
	ExchangeRates.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( ExchangeRates.isValid(this, propName, val) ){
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
	
	ExchangeRates.relations = relations;
	
	ExchangeRates.prototype.isValid = function(){
		return ExchangeRates.isValid(this);
	};
	
	ExchangeRates.prototype.objModelName = "ExchangeRates";
	
	return ExchangeRates;
});