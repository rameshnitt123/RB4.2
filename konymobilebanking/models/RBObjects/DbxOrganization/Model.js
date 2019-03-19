define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
	};
	
	
	//Create the Model Class
	function DbxOrganization(defaultValues){
		var privateState = {};
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(DbxOrganization);
	
	//Create new class level validator object
	BaseModel.Validator.call(DbxOrganization);
	
	var registerValidatorBackup = DbxOrganization.registerValidator;
	
	DbxOrganization.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( DbxOrganization.isValid(this, propName, val) ){
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
	//For Operation 'updateOrganization' with service id 'UpdateOrganisation1311'
	DbxOrganization.updateOrganization = function(params, onCompletion){
		return DbxOrganization.customVerb('updateOrganization', params, onCompletion);
	};
	//For Operation 'unLinkOrgAccounts' with service id 'unlinkOrganizationAccounts7684'
	DbxOrganization.unLinkOrgAccounts = function(params, onCompletion){
		return DbxOrganization.customVerb('unLinkOrgAccounts', params, onCompletion);
	};
	//For Operation 'createOrganization' with service id 'CreateOrganisation3127'
	DbxOrganization.createOrganization = function(params, onCompletion){
		return DbxOrganization.customVerb('createOrganization', params, onCompletion);
	};
	
	var relations = [
	];
	
	DbxOrganization.relations = relations;
	
	DbxOrganization.prototype.isValid = function(){
		return DbxOrganization.isValid(this);
	};
	
	DbxOrganization.prototype.objModelName = "DbxOrganization";
	
	return DbxOrganization;
});