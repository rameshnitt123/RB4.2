define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		main_user : function(val, state){
			state['main_user'] = val;
		},
		UserName : function(val, state){
			state['UserName'] = val;
		},
	};
	
	
	//Create the Model Class
	function MainUserBankUsers(defaultValues){
		var privateState = {};
			privateState.main_user = defaultValues?(defaultValues["main_user"]?defaultValues["main_user"]:null):null;
			privateState.UserName = defaultValues?(defaultValues["UserName"]?defaultValues["UserName"]:null):null;
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
				"UserName" : {
					get : function(){return privateState.UserName},
					set : function(val){
						setterFunctions['UserName'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(MainUserBankUsers);
	
	//Create new class level validator object
	BaseModel.Validator.call(MainUserBankUsers);
	
	var registerValidatorBackup = MainUserBankUsers.registerValidator;
	
	MainUserBankUsers.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( MainUserBankUsers.isValid(this, propName, val) ){
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
	
	MainUserBankUsers.relations = relations;
	
	MainUserBankUsers.prototype.isValid = function(){
		return MainUserBankUsers.isValid(this);
	};
	
	MainUserBankUsers.prototype.objModelName = "MainUserBankUsers";
	
	return MainUserBankUsers;
});