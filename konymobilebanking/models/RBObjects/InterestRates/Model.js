define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		APY : function(val, state){
			state['APY'] = val;
		},
		CDTerm : function(val, state){
			state['CDTerm'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		minimumDeposit : function(val, state){
			state['minimumDeposit'] = val;
		},
	};
	
	
	//Create the Model Class
	function InterestRates(defaultValues){
		var privateState = {};
			privateState.APY = defaultValues?(defaultValues["APY"]?defaultValues["APY"]:null):null;
			privateState.CDTerm = defaultValues?(defaultValues["CDTerm"]?defaultValues["CDTerm"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.minimumDeposit = defaultValues?(defaultValues["minimumDeposit"]?defaultValues["minimumDeposit"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"APY" : {
					get : function(){return privateState.APY},
					set : function(val){
						setterFunctions['APY'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"CDTerm" : {
					get : function(){return privateState.CDTerm},
					set : function(val){
						setterFunctions['CDTerm'].call(this,val,privateState);
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
				"minimumDeposit" : {
					get : function(){return privateState.minimumDeposit},
					set : function(val){
						setterFunctions['minimumDeposit'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(InterestRates);
	
	//Create new class level validator object
	BaseModel.Validator.call(InterestRates);
	
	var registerValidatorBackup = InterestRates.registerValidator;
	
	InterestRates.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( InterestRates.isValid(this, propName, val) ){
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
	
	InterestRates.relations = relations;
	
	InterestRates.prototype.isValid = function(){
		return InterestRates.isValid(this);
	};
	
	InterestRates.prototype.objModelName = "InterestRates";
	
	return InterestRates;
});