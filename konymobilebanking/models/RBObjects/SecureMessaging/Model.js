define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		accountid : function(val, state){
			state['accountid'] = val;
		},
		createdby : function(val, state){
			state['createdby'] = val;
		},
		customer_id : function(val, state){
			state['customer_id'] = val;
		},
		filename : function(val, state){
			state['filename'] = val;
		},
		harddelete : function(val, state){
			state['harddelete'] = val;
		},
		markallasread : function(val, state){
			state['markallasread'] = val;
		},
		media_id : function(val, state){
			state['media_id'] = val;
		},
		messagedescription : function(val, state){
			state['messagedescription'] = val;
		},
		modifiedby : function(val, state){
			state['modifiedby'] = val;
		},
		Priority : function(val, state){
			state['Priority'] = val;
		},
		requestcategory_id : function(val, state){
			state['requestcategory_id'] = val;
		},
		requestid : function(val, state){
			state['requestid'] = val;
		},
		Requestsubject : function(val, state){
			state['Requestsubject'] = val;
		},
		softdelete : function(val, state){
			state['softdelete'] = val;
		},
		softDeleteFlag : function(val, state){
			state['softDeleteFlag'] = val;
		},
		Status : function(val, state){
			state['Status'] = val;
		},
		username : function(val, state){
			state['username'] = val;
		},
		request_id : function(val, state){
			state['request_id'] = val;
		},
	};
	
	
	//Create the Model Class
	function SecureMessaging(defaultValues){
		var privateState = {};
			privateState.accountid = defaultValues?(defaultValues["accountid"]?defaultValues["accountid"]:null):null;
			privateState.createdby = defaultValues?(defaultValues["createdby"]?defaultValues["createdby"]:null):null;
			privateState.customer_id = defaultValues?(defaultValues["customer_id"]?defaultValues["customer_id"]:null):null;
			privateState.filename = defaultValues?(defaultValues["filename"]?defaultValues["filename"]:null):null;
			privateState.harddelete = defaultValues?(defaultValues["harddelete"]?defaultValues["harddelete"]:null):null;
			privateState.markallasread = defaultValues?(defaultValues["markallasread"]?defaultValues["markallasread"]:null):null;
			privateState.media_id = defaultValues?(defaultValues["media_id"]?defaultValues["media_id"]:null):null;
			privateState.messagedescription = defaultValues?(defaultValues["messagedescription"]?defaultValues["messagedescription"]:null):null;
			privateState.modifiedby = defaultValues?(defaultValues["modifiedby"]?defaultValues["modifiedby"]:null):null;
			privateState.Priority = defaultValues?(defaultValues["Priority"]?defaultValues["Priority"]:null):null;
			privateState.requestcategory_id = defaultValues?(defaultValues["requestcategory_id"]?defaultValues["requestcategory_id"]:null):null;
			privateState.requestid = defaultValues?(defaultValues["requestid"]?defaultValues["requestid"]:null):null;
			privateState.Requestsubject = defaultValues?(defaultValues["Requestsubject"]?defaultValues["Requestsubject"]:null):null;
			privateState.softdelete = defaultValues?(defaultValues["softdelete"]?defaultValues["softdelete"]:null):null;
			privateState.softDeleteFlag = defaultValues?(defaultValues["softDeleteFlag"]?defaultValues["softDeleteFlag"]:null):null;
			privateState.Status = defaultValues?(defaultValues["Status"]?defaultValues["Status"]:null):null;
			privateState.username = defaultValues?(defaultValues["username"]?defaultValues["username"]:null):null;
			privateState.request_id = defaultValues?(defaultValues["request_id"]?defaultValues["request_id"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"accountid" : {
					get : function(){return privateState.accountid},
					set : function(val){
						setterFunctions['accountid'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"createdby" : {
					get : function(){return privateState.createdby},
					set : function(val){
						setterFunctions['createdby'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"customer_id" : {
					get : function(){return privateState.customer_id},
					set : function(val){
						setterFunctions['customer_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"filename" : {
					get : function(){return privateState.filename},
					set : function(val){
						setterFunctions['filename'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"harddelete" : {
					get : function(){return privateState.harddelete},
					set : function(val){
						setterFunctions['harddelete'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"markallasread" : {
					get : function(){return privateState.markallasread},
					set : function(val){
						setterFunctions['markallasread'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"media_id" : {
					get : function(){return privateState.media_id},
					set : function(val){
						setterFunctions['media_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"messagedescription" : {
					get : function(){return privateState.messagedescription},
					set : function(val){
						setterFunctions['messagedescription'].call(this,val,privateState);
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
				"Priority" : {
					get : function(){return privateState.Priority},
					set : function(val){
						setterFunctions['Priority'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"requestcategory_id" : {
					get : function(){return privateState.requestcategory_id},
					set : function(val){
						setterFunctions['requestcategory_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"requestid" : {
					get : function(){return privateState.requestid},
					set : function(val){
						setterFunctions['requestid'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Requestsubject" : {
					get : function(){return privateState.Requestsubject},
					set : function(val){
						setterFunctions['Requestsubject'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"softdelete" : {
					get : function(){return privateState.softdelete},
					set : function(val){
						setterFunctions['softdelete'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"softDeleteFlag" : {
					get : function(){return privateState.softDeleteFlag},
					set : function(val){
						setterFunctions['softDeleteFlag'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Status" : {
					get : function(){return privateState.Status},
					set : function(val){
						setterFunctions['Status'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"username" : {
					get : function(){return privateState.username},
					set : function(val){
						setterFunctions['username'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"request_id" : {
					get : function(){return privateState.request_id},
					set : function(val){
						setterFunctions['request_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(SecureMessaging);
	
	//Create new class level validator object
	BaseModel.Validator.call(SecureMessaging);
	
	var registerValidatorBackup = SecureMessaging.registerValidator;
	
	SecureMessaging.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( SecureMessaging.isValid(this, propName, val) ){
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
	//For Operation 'getRequestCategory' with service id 'getRequestCategory4222'
	SecureMessaging.getRequestCategory = function(params, onCompletion){
		return SecureMessaging.customVerb('getRequestCategory', params, onCompletion);
	};
	//For Operation 'updateRequest' with service id 'updateRequest9197'
	SecureMessaging.updateRequest = function(params, onCompletion){
		return SecureMessaging.customVerb('updateRequest', params, onCompletion);
	};
	//For Operation 'getRequests' with service id 'getRequests5580'
	SecureMessaging.getRequests = function(params, onCompletion){
		return SecureMessaging.customVerb('getRequests', params, onCompletion);
	};
	//For Operation 'getAllMessagesForARequest' with service id 'getAllMessagesForARequest4187'
	SecureMessaging.getAllMessagesForARequest = function(params, onCompletion){
		return SecureMessaging.customVerb('getAllMessagesForARequest', params, onCompletion);
	};
	//For Operation 'getUnreadMessageCount' with service id 'getUnreadMessageCount3384'
	SecureMessaging.getUnreadMessageCount = function(params, onCompletion){
		return SecureMessaging.customVerb('getUnreadMessageCount', params, onCompletion);
	};
	//For Operation 'createCustomerRequest' with service id 'createCustomerRequest9297'
	SecureMessaging.createCustomerRequest = function(params, onCompletion){
		return SecureMessaging.customVerb('createCustomerRequest', params, onCompletion);
	};
	//For Operation 'CreateNewCustomerRequestWithoutAttachment' with service id 'CreateNewCustomerRequest_RB3309'
	SecureMessaging.CreateNewCustomerRequestWithoutAttachment = function(params, onCompletion){
		return SecureMessaging.customVerb('CreateNewCustomerRequestWithoutAttachment', params, onCompletion);
	};
	//For Operation 'getMessageAttachment' with service id 'getMessageAttachment9401'
	SecureMessaging.getMessageAttachment = function(params, onCompletion){
		return SecureMessaging.customVerb('getMessageAttachment', params, onCompletion);
	};
	
	var relations = [
	];
	
	SecureMessaging.relations = relations;
	
	SecureMessaging.prototype.isValid = function(){
		return SecureMessaging.isValid(this);
	};
	
	SecureMessaging.prototype.objModelName = "SecureMessaging";
	
	return SecureMessaging;
});