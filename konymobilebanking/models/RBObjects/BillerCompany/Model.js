define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		companyId : function(val, state){
			state['companyId'] = val;
		},
		companyName : function(val, state){
			state['companyName'] = val;
		},
	};
	
	
	//Create the Model Class
	function BillerCompany(defaultValues){
		var privateState = {};
			privateState.companyId = defaultValues?(defaultValues["companyId"]?defaultValues["companyId"]:null):null;
			privateState.companyName = defaultValues?(defaultValues["companyName"]?defaultValues["companyName"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"companyId" : {
					get : function(){return privateState.companyId},
					set : function(val){
						setterFunctions['companyId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"companyName" : {
					get : function(){return privateState.companyName},
					set : function(val){
						setterFunctions['companyName'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(BillerCompany);
	
	//Create new class level validator object
	BaseModel.Validator.call(BillerCompany);
	
	var registerValidatorBackup = BillerCompany.registerValidator;
	
	BillerCompany.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( BillerCompany.isValid(this, propName, val) ){
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
	
	BillerCompany.relations = relations;
	
	BillerCompany.prototype.isValid = function(){
		return BillerCompany.isValid(this);
	};
	
	BillerCompany.prototype.objModelName = "BillerCompany";
	
	return BillerCompany;
});