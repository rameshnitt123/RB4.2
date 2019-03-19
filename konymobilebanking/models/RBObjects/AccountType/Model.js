define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		TypeDescription : function(val, state){
			state['TypeDescription'] = val;
		},
		TypeID : function(val, state){
			state['TypeID'] = val;
		},
		displayName : function(val, state){
			state['displayName'] = val;
		},
	};
	
	
	//Create the Model Class
	function AccountType(defaultValues){
		var privateState = {};
			privateState.TypeDescription = defaultValues?(defaultValues["TypeDescription"]?defaultValues["TypeDescription"]:null):null;
			privateState.TypeID = defaultValues?(defaultValues["TypeID"]?defaultValues["TypeID"]:null):null;
			privateState.displayName = defaultValues?(defaultValues["displayName"]?defaultValues["displayName"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"TypeDescription" : {
					get : function(){return privateState.TypeDescription},
					set : function(val){
						setterFunctions['TypeDescription'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"TypeID" : {
					get : function(){return privateState.TypeID},
					set : function(val){
						setterFunctions['TypeID'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"displayName" : {
					get : function(){return privateState.displayName},
					set : function(val){
						setterFunctions['displayName'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(AccountType);
	
	//Create new class level validator object
	BaseModel.Validator.call(AccountType);
	
	var registerValidatorBackup = AccountType.registerValidator;
	
	AccountType.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( AccountType.isValid(this, propName, val) ){
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
	
	AccountType.relations = relations;
	
	AccountType.prototype.isValid = function(){
		return AccountType.isValid(this);
	};
	
	AccountType.prototype.objModelName = "AccountType";
	
	return AccountType;
});