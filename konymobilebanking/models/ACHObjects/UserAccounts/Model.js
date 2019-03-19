define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		Account_id : function(val, state){
			state['Account_id'] = val;
		},
		AccountName : function(val, state){
			state['AccountName'] = val;
		},
		IsWithdrawAllowed : function(val, state){
			state['IsWithdrawAllowed'] = val;
		},
		IsDepositAllowed : function(val, state){
			state['IsDepositAllowed'] = val;
		},
		IsOrganizationAccount : function(val, state){
			state['IsOrganizationAccount'] = val;
		},
		IsViewAllowed : function(val, state){
			state['IsViewAllowed'] = val;
		},
		Customer_id : function(val, state){
			state['Customer_id'] = val;
		},
		id : function(val, state){
			state['id'] = val;
		},
	};
	
	
	//Create the Model Class
	function UserAccounts(defaultValues){
		var privateState = {};
			privateState.Account_id = defaultValues?(defaultValues["Account_id"]?defaultValues["Account_id"]:null):null;
			privateState.AccountName = defaultValues?(defaultValues["AccountName"]?defaultValues["AccountName"]:null):null;
			privateState.IsWithdrawAllowed = defaultValues?(defaultValues["IsWithdrawAllowed"]?defaultValues["IsWithdrawAllowed"]:null):null;
			privateState.IsDepositAllowed = defaultValues?(defaultValues["IsDepositAllowed"]?defaultValues["IsDepositAllowed"]:null):null;
			privateState.IsOrganizationAccount = defaultValues?(defaultValues["IsOrganizationAccount"]?defaultValues["IsOrganizationAccount"]:null):null;
			privateState.IsViewAllowed = defaultValues?(defaultValues["IsViewAllowed"]?defaultValues["IsViewAllowed"]:null):null;
			privateState.Customer_id = defaultValues?(defaultValues["Customer_id"]?defaultValues["Customer_id"]:null):null;
			privateState.id = defaultValues?(defaultValues["id"]?defaultValues["id"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"Account_id" : {
					get : function(){return privateState.Account_id},
					set : function(val){
						setterFunctions['Account_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"AccountName" : {
					get : function(){return privateState.AccountName},
					set : function(val){
						setterFunctions['AccountName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IsWithdrawAllowed" : {
					get : function(){return privateState.IsWithdrawAllowed},
					set : function(val){
						setterFunctions['IsWithdrawAllowed'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IsDepositAllowed" : {
					get : function(){return privateState.IsDepositAllowed},
					set : function(val){
						setterFunctions['IsDepositAllowed'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IsOrganizationAccount" : {
					get : function(){return privateState.IsOrganizationAccount},
					set : function(val){
						setterFunctions['IsOrganizationAccount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IsViewAllowed" : {
					get : function(){return privateState.IsViewAllowed},
					set : function(val){
						setterFunctions['IsViewAllowed'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Customer_id" : {
					get : function(){return privateState.Customer_id},
					set : function(val){
						setterFunctions['Customer_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"id" : {
					get : function(){return privateState.id},
					set : function(val){
						setterFunctions['id'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(UserAccounts);
	
	//Create new class level validator object
	BaseModel.Validator.call(UserAccounts);
	
	var registerValidatorBackup = UserAccounts.registerValidator;
	
	UserAccounts.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( UserAccounts.isValid(this, propName, val) ){
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
	
	UserAccounts.relations = relations;
	
	UserAccounts.prototype.isValid = function(){
		return UserAccounts.isValid(this);
	};
	
	UserAccounts.prototype.objModelName = "UserAccounts";
	
	return UserAccounts;
});