define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
	};
	
	
	//Create the Model Class
	function Sms(defaultValues){
		var privateState = {};
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(Sms);
	
	//Create new class level validator object
	BaseModel.Validator.call(Sms);
	
	var registerValidatorBackup = Sms.registerValidator;
	
	Sms.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( Sms.isValid(this, propName, val) ){
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
	//For Operation 'smsOTP' with service id 'smsOTP2422'
	Sms.smsOTP = function(params, onCompletion){
		return Sms.customVerb('smsOTP', params, onCompletion);
	};
	//For Operation 'sendKMSSMS' with service id 'sendSMS7432'
	Sms.sendKMSSMS = function(params, onCompletion){
		return Sms.customVerb('sendKMSSMS', params, onCompletion);
	};
	
	var relations = [
	];
	
	Sms.relations = relations;
	
	Sms.prototype.isValid = function(){
		return Sms.isValid(this);
	};
	
	Sms.prototype.objModelName = "Sms";
	
	return Sms;
});