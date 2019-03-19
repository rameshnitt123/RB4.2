define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		main_user : function(val, state){
			state['main_user'] = val;
		},
		id : function(val, state){
			state['id'] = val;
		},
		User_id : function(val, state){
			state['User_id'] = val;
		},
		BankName : function(val, state){
			state['BankName'] = val;
		},
		Description : function(val, state){
			state['Description'] = val;
		},
	};
	
	
	//Create the Model Class
	function UserBanks(defaultValues){
		var privateState = {};
			privateState.main_user = defaultValues?(defaultValues["main_user"]?defaultValues["main_user"]:null):null;
			privateState.id = defaultValues?(defaultValues["id"]?defaultValues["id"]:null):null;
			privateState.User_id = defaultValues?(defaultValues["User_id"]?defaultValues["User_id"]:null):null;
			privateState.BankName = defaultValues?(defaultValues["BankName"]?defaultValues["BankName"]:null):null;
			privateState.Description = defaultValues?(defaultValues["Description"]?defaultValues["Description"]:null):null;
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
				"id" : {
					get : function(){return privateState.id},
					set : function(val){
						setterFunctions['id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"User_id" : {
					get : function(){return privateState.User_id},
					set : function(val){
						setterFunctions['User_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"BankName" : {
					get : function(){return privateState.BankName},
					set : function(val){
						setterFunctions['BankName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Description" : {
					get : function(){return privateState.Description},
					set : function(val){
						setterFunctions['Description'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(UserBanks);
	
	//Create new class level validator object
	BaseModel.Validator.call(UserBanks);
	
	var registerValidatorBackup = UserBanks.registerValidator;
	
	UserBanks.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( UserBanks.isValid(this, propName, val) ){
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
	
	UserBanks.relations = relations;
	
	UserBanks.prototype.isValid = function(){
		return UserBanks.isValid(this);
	};
	
	UserBanks.prototype.objModelName = "UserBanks";
	
	return UserBanks;
});