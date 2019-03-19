define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		month : function(val, state){
			state['month'] = val;
		},
		monthCash : function(val, state){
			state['monthCash'] = val;
		},
		monthCredit : function(val, state){
			state['monthCredit'] = val;
		},
		totalCash : function(val, state){
			state['totalCash'] = val;
		},
		totalCreditDebt : function(val, state){
			state['totalCreditDebt'] = val;
		},
	};
	
	
	//Create the Model Class
	function AccountCashFlow(defaultValues){
		var privateState = {};
			privateState.month = defaultValues?(defaultValues["month"]?defaultValues["month"]:null):null;
			privateState.monthCash = defaultValues?(defaultValues["monthCash"]?defaultValues["monthCash"]:null):null;
			privateState.monthCredit = defaultValues?(defaultValues["monthCredit"]?defaultValues["monthCredit"]:null):null;
			privateState.totalCash = defaultValues?(defaultValues["totalCash"]?defaultValues["totalCash"]:null):null;
			privateState.totalCreditDebt = defaultValues?(defaultValues["totalCreditDebt"]?defaultValues["totalCreditDebt"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"month" : {
					get : function(){return privateState.month},
					set : function(val){
						setterFunctions['month'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"monthCash" : {
					get : function(){return privateState.monthCash},
					set : function(val){
						setterFunctions['monthCash'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"monthCredit" : {
					get : function(){return privateState.monthCredit},
					set : function(val){
						setterFunctions['monthCredit'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"totalCash" : {
					get : function(){return privateState.totalCash},
					set : function(val){
						setterFunctions['totalCash'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"totalCreditDebt" : {
					get : function(){return privateState.totalCreditDebt},
					set : function(val){
						setterFunctions['totalCreditDebt'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(AccountCashFlow);
	
	//Create new class level validator object
	BaseModel.Validator.call(AccountCashFlow);
	
	var registerValidatorBackup = AccountCashFlow.registerValidator;
	
	AccountCashFlow.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( AccountCashFlow.isValid(this, propName, val) ){
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
	
	AccountCashFlow.relations = relations;
	
	AccountCashFlow.prototype.isValid = function(){
		return AccountCashFlow.isValid(this);
	};
	
	AccountCashFlow.prototype.objModelName = "AccountCashFlow";
	
	return AccountCashFlow;
});