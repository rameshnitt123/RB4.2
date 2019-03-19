define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		span : function(val, state){
			state['span'] = val;
		},
		credit : function(val, state){
			state['credit'] = val;
		},
		debit : function(val, state){
			state['debit'] = val;
		},
		total_balance : function(val, state){
			state['total_balance'] = val;
		},
		Duration : function(val, state){
			state['Duration'] = val;
		},
	};
	
	
	//Create the Model Class
	function CashPositions(defaultValues){
		var privateState = {};
			privateState.span = defaultValues?(defaultValues["span"]?defaultValues["span"]:null):null;
			privateState.credit = defaultValues?(defaultValues["credit"]?defaultValues["credit"]:null):null;
			privateState.debit = defaultValues?(defaultValues["debit"]?defaultValues["debit"]:null):null;
			privateState.total_balance = defaultValues?(defaultValues["total_balance"]?defaultValues["total_balance"]:null):null;
			privateState.Duration = defaultValues?(defaultValues["Duration"]?defaultValues["Duration"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"span" : {
					get : function(){return privateState.span},
					set : function(val){
						setterFunctions['span'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"credit" : {
					get : function(){return privateState.credit},
					set : function(val){
						setterFunctions['credit'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"debit" : {
					get : function(){return privateState.debit},
					set : function(val){
						setterFunctions['debit'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"total_balance" : {
					get : function(){return privateState.total_balance},
					set : function(val){
						setterFunctions['total_balance'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Duration" : {
					get : function(){return privateState.Duration},
					set : function(val){
						setterFunctions['Duration'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(CashPositions);
	
	//Create new class level validator object
	BaseModel.Validator.call(CashPositions);
	
	var registerValidatorBackup = CashPositions.registerValidator;
	
	CashPositions.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( CashPositions.isValid(this, propName, val) ){
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
	//For Operation 'getCashPositions' with service id 'FetchCashPositions7462'
	CashPositions.getCashPositions = function(params, onCompletion){
		return CashPositions.customVerb('getCashPositions', params, onCompletion);
	};
	
	var relations = [
	];
	
	CashPositions.relations = relations;
	
	CashPositions.prototype.isValid = function(){
		return CashPositions.isValid(this);
	};
	
	CashPositions.prototype.objModelName = "CashPositions";
	
	return CashPositions;
});