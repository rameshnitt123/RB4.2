define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		createdby : function(val, state){
			state['createdby'] = val;
		},
		messageText : function(val, state){
			state['messageText'] = val;
		},
		modifiedby : function(val, state){
			state['modifiedby'] = val;
		},
		service_id : function(val, state){
			state['service_id'] = val;
		},
		status_id : function(val, state){
			state['status_id'] = val;
		},
		outageMessageIds : function(val, state){
			state['outageMessageIds'] = val;
		},
	};
	
	
	//Create the Model Class
	function OutageMessage(defaultValues){
		var privateState = {};
			privateState.createdby = defaultValues?(defaultValues["createdby"]?defaultValues["createdby"]:null):null;
			privateState.messageText = defaultValues?(defaultValues["messageText"]?defaultValues["messageText"]:null):null;
			privateState.modifiedby = defaultValues?(defaultValues["modifiedby"]?defaultValues["modifiedby"]:null):null;
			privateState.service_id = defaultValues?(defaultValues["service_id"]?defaultValues["service_id"]:null):null;
			privateState.status_id = defaultValues?(defaultValues["status_id"]?defaultValues["status_id"]:null):null;
			privateState.outageMessageIds = defaultValues?(defaultValues["outageMessageIds"]?defaultValues["outageMessageIds"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"createdby" : {
					get : function(){return privateState.createdby},
					set : function(val){
						setterFunctions['createdby'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"messageText" : {
					get : function(){return privateState.messageText},
					set : function(val){
						setterFunctions['messageText'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"modifiedby" : {
					get : function(){return privateState.modifiedby},
					set : function(val){
						setterFunctions['modifiedby'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"service_id" : {
					get : function(){return privateState.service_id},
					set : function(val){
						setterFunctions['service_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"status_id" : {
					get : function(){return privateState.status_id},
					set : function(val){
						setterFunctions['status_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"outageMessageIds" : {
					get : function(){return privateState.outageMessageIds},
					set : function(val){
						setterFunctions['outageMessageIds'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(OutageMessage);
	
	//Create new class level validator object
	BaseModel.Validator.call(OutageMessage);
	
	var registerValidatorBackup = OutageMessage.registerValidator;
	
	OutageMessage.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( OutageMessage.isValid(this, propName, val) ){
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
	//For Operation 'createOutageMessage' with service id 'createOutageMessage6069'
	OutageMessage.createOutageMessage = function(params, onCompletion){
		return OutageMessage.customVerb('createOutageMessage', params, onCompletion);
	};
	//For Operation 'getOutageMessage' with service id 'getOutageMessage9185'
	OutageMessage.getOutageMessage = function(params, onCompletion){
		return OutageMessage.customVerb('getOutageMessage', params, onCompletion);
	};
	//For Operation 'updateOutageMessage' with service id 'updateOutageMessage5763'
	OutageMessage.updateOutageMessage = function(params, onCompletion){
		return OutageMessage.customVerb('updateOutageMessage', params, onCompletion);
	};
	//For Operation 'deleteOutageMessage' with service id 'deleteOutageMessage1495'
	OutageMessage.deleteOutageMessage = function(params, onCompletion){
		return OutageMessage.customVerb('deleteOutageMessage', params, onCompletion);
	};
	
	var relations = [
	];
	
	OutageMessage.relations = relations;
	
	OutageMessage.prototype.isValid = function(){
		return OutageMessage.isValid(this);
	};
	
	OutageMessage.prototype.objModelName = "OutageMessage";
	
	return OutageMessage;
});