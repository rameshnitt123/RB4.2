define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		closingBalanceAmount : function(val, state){
			state['closingBalanceAmount'] = val;
		},
		depositAmount : function(val, state){
			state['depositAmount'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		referenceId : function(val, state){
			state['referenceId'] = val;
		},
		transAmount : function(val, state){
			state['transAmount'] = val;
		},
		transDate : function(val, state){
			state['transDate'] = val;
		},
		transDesc : function(val, state){
			state['transDesc'] = val;
		},
		transType : function(val, state){
			state['transType'] = val;
		},
	};
	
	
	//Create the Model Class
	function ChartTransactions(defaultValues){
		var privateState = {};
			privateState.closingBalanceAmount = defaultValues?(defaultValues["closingBalanceAmount"]?defaultValues["closingBalanceAmount"]:null):null;
			privateState.depositAmount = defaultValues?(defaultValues["depositAmount"]?defaultValues["depositAmount"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.referenceId = defaultValues?(defaultValues["referenceId"]?defaultValues["referenceId"]:null):null;
			privateState.transAmount = defaultValues?(defaultValues["transAmount"]?defaultValues["transAmount"]:null):null;
			privateState.transDate = defaultValues?(defaultValues["transDate"]?defaultValues["transDate"]:null):null;
			privateState.transDesc = defaultValues?(defaultValues["transDesc"]?defaultValues["transDesc"]:null):null;
			privateState.transType = defaultValues?(defaultValues["transType"]?defaultValues["transType"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"closingBalanceAmount" : {
					get : function(){return privateState.closingBalanceAmount},
					set : function(val){
						setterFunctions['closingBalanceAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"depositAmount" : {
					get : function(){return privateState.depositAmount},
					set : function(val){
						setterFunctions['depositAmount'].call(this,val,privateState);
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
				"referenceId" : {
					get : function(){return privateState.referenceId},
					set : function(val){
						setterFunctions['referenceId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"transAmount" : {
					get : function(){return privateState.transAmount},
					set : function(val){
						setterFunctions['transAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"transDate" : {
					get : function(){return privateState.transDate},
					set : function(val){
						setterFunctions['transDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"transDesc" : {
					get : function(){return privateState.transDesc},
					set : function(val){
						setterFunctions['transDesc'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"transType" : {
					get : function(){return privateState.transType},
					set : function(val){
						setterFunctions['transType'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(ChartTransactions);
	
	//Create new class level validator object
	BaseModel.Validator.call(ChartTransactions);
	
	var registerValidatorBackup = ChartTransactions.registerValidator;
	
	ChartTransactions.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( ChartTransactions.isValid(this, propName, val) ){
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
	
	ChartTransactions.relations = relations;
	
	ChartTransactions.prototype.isValid = function(){
		return ChartTransactions.isValid(this);
	};
	
	ChartTransactions.prototype.objModelName = "ChartTransactions";
	
	return ChartTransactions;
});