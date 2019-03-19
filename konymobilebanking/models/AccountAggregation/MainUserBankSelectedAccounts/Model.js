define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		main_user : function(val, state){
			state['main_user'] = val;
		},
		bank_id : function(val, state){
			state['bank_id'] = val;
		},
		Accountid : function(val, state){
			state['Accountid'] = val;
		},
	};
	
	
	//Create the Model Class
	function MainUserBankSelectedAccounts(defaultValues){
		var privateState = {};
			privateState.main_user = defaultValues?(defaultValues["main_user"]?defaultValues["main_user"]:null):null;
			privateState.bank_id = defaultValues?(defaultValues["bank_id"]?defaultValues["bank_id"]:null):null;
			privateState.Accountid = defaultValues?(defaultValues["Accountid"]?defaultValues["Accountid"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"main_user" : {
					get : function(){return privateState.main_user},
					set : function(val){
						setterFunctions['main_user'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"bank_id" : {
					get : function(){return privateState.bank_id},
					set : function(val){
						setterFunctions['bank_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Accountid" : {
					get : function(){return privateState.Accountid},
					set : function(val){
						setterFunctions['Accountid'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(MainUserBankSelectedAccounts);
	
	//Create new class level validator object
	BaseModel.Validator.call(MainUserBankSelectedAccounts);
	
	var registerValidatorBackup = MainUserBankSelectedAccounts.registerValidator;
	
	MainUserBankSelectedAccounts.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( MainUserBankSelectedAccounts.isValid(this, propName, val) ){
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
	
	MainUserBankSelectedAccounts.relations = relations;
	
	MainUserBankSelectedAccounts.prototype.isValid = function(){
		return MainUserBankSelectedAccounts.isValid(this);
	};
	
	MainUserBankSelectedAccounts.prototype.objModelName = "MainUserBankSelectedAccounts";
	
	return MainUserBankSelectedAccounts;
});