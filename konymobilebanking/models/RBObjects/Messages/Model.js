define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		accountId : function(val, state){
			state['accountId'] = val;
		},
		accountName : function(val, state){
			state['accountName'] = val;
		},
		accountNickName : function(val, state){
			state['accountNickName'] = val;
		},
		categoryId : function(val, state){
			state['categoryId'] = val;
		},
		categoryName : function(val, state){
			state['categoryName'] = val;
		},
		count : function(val, state){
			state['count'] = val;
		},
		createdDate : function(val, state){
			state['createdDate'] = val;
		},
		deletedDate : function(val, state){
			state['deletedDate'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		isRead : function(val, state){
			state['isRead'] = val;
		},
		message : function(val, state){
			state['message'] = val;
		},
		messageId : function(val, state){
			state['messageId'] = val;
		},
		messageType : function(val, state){
			state['messageType'] = val;
		},
		pageSize : function(val, state){
			state['pageSize'] = val;
		},
		receivedDate : function(val, state){
			state['receivedDate'] = val;
		},
		recordNumber : function(val, state){
			state['recordNumber'] = val;
		},
		sentDate : function(val, state){
			state['sentDate'] = val;
		},
		subcategoryId : function(val, state){
			state['subcategoryId'] = val;
		},
		subcategoryName : function(val, state){
			state['subcategoryName'] = val;
		},
		subject : function(val, state){
			state['subject'] = val;
		},
		success : function(val, state){
			state['success'] = val;
		},
	};
	
	
	//Create the Model Class
	function Messages(defaultValues){
		var privateState = {};
			privateState.accountId = defaultValues?(defaultValues["accountId"]?defaultValues["accountId"]:null):null;
			privateState.accountName = defaultValues?(defaultValues["accountName"]?defaultValues["accountName"]:null):null;
			privateState.accountNickName = defaultValues?(defaultValues["accountNickName"]?defaultValues["accountNickName"]:null):null;
			privateState.categoryId = defaultValues?(defaultValues["categoryId"]?defaultValues["categoryId"]:null):null;
			privateState.categoryName = defaultValues?(defaultValues["categoryName"]?defaultValues["categoryName"]:null):null;
			privateState.count = defaultValues?(defaultValues["count"]?defaultValues["count"]:null):null;
			privateState.createdDate = defaultValues?(defaultValues["createdDate"]?defaultValues["createdDate"]:null):null;
			privateState.deletedDate = defaultValues?(defaultValues["deletedDate"]?defaultValues["deletedDate"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.isRead = defaultValues?(defaultValues["isRead"]?defaultValues["isRead"]:null):null;
			privateState.message = defaultValues?(defaultValues["message"]?defaultValues["message"]:null):null;
			privateState.messageId = defaultValues?(defaultValues["messageId"]?defaultValues["messageId"]:null):null;
			privateState.messageType = defaultValues?(defaultValues["messageType"]?defaultValues["messageType"]:null):null;
			privateState.pageSize = defaultValues?(defaultValues["pageSize"]?defaultValues["pageSize"]:null):null;
			privateState.receivedDate = defaultValues?(defaultValues["receivedDate"]?defaultValues["receivedDate"]:null):null;
			privateState.recordNumber = defaultValues?(defaultValues["recordNumber"]?defaultValues["recordNumber"]:null):null;
			privateState.sentDate = defaultValues?(defaultValues["sentDate"]?defaultValues["sentDate"]:null):null;
			privateState.subcategoryId = defaultValues?(defaultValues["subcategoryId"]?defaultValues["subcategoryId"]:null):null;
			privateState.subcategoryName = defaultValues?(defaultValues["subcategoryName"]?defaultValues["subcategoryName"]:null):null;
			privateState.subject = defaultValues?(defaultValues["subject"]?defaultValues["subject"]:null):null;
			privateState.success = defaultValues?(defaultValues["success"]?defaultValues["success"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"accountId" : {
					get : function(){return privateState.accountId},
					set : function(val){
						setterFunctions['accountId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"accountName" : {
					get : function(){return privateState.accountName},
					set : function(val){
						setterFunctions['accountName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"accountNickName" : {
					get : function(){return privateState.accountNickName},
					set : function(val){
						setterFunctions['accountNickName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"categoryId" : {
					get : function(){return privateState.categoryId},
					set : function(val){
						setterFunctions['categoryId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"categoryName" : {
					get : function(){return privateState.categoryName},
					set : function(val){
						setterFunctions['categoryName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"count" : {
					get : function(){return privateState.count},
					set : function(val){
						setterFunctions['count'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"createdDate" : {
					get : function(){return privateState.createdDate},
					set : function(val){
						setterFunctions['createdDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"deletedDate" : {
					get : function(){return privateState.deletedDate},
					set : function(val){
						setterFunctions['deletedDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"errmsg" : {
					get : function(){return privateState.errmsg},
					set : function(val){
						setterFunctions['errmsg'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isRead" : {
					get : function(){return privateState.isRead},
					set : function(val){
						setterFunctions['isRead'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"message" : {
					get : function(){return privateState.message},
					set : function(val){
						setterFunctions['message'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"messageId" : {
					get : function(){return privateState.messageId},
					set : function(val){
						setterFunctions['messageId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"messageType" : {
					get : function(){return privateState.messageType},
					set : function(val){
						setterFunctions['messageType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"pageSize" : {
					get : function(){return privateState.pageSize},
					set : function(val){
						setterFunctions['pageSize'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"receivedDate" : {
					get : function(){return privateState.receivedDate},
					set : function(val){
						setterFunctions['receivedDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"recordNumber" : {
					get : function(){return privateState.recordNumber},
					set : function(val){
						setterFunctions['recordNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"sentDate" : {
					get : function(){return privateState.sentDate},
					set : function(val){
						setterFunctions['sentDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"subcategoryId" : {
					get : function(){return privateState.subcategoryId},
					set : function(val){
						setterFunctions['subcategoryId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"subcategoryName" : {
					get : function(){return privateState.subcategoryName},
					set : function(val){
						setterFunctions['subcategoryName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"subject" : {
					get : function(){return privateState.subject},
					set : function(val){
						setterFunctions['subject'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"success" : {
					get : function(){return privateState.success},
					set : function(val){
						setterFunctions['success'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(Messages);
	
	//Create new class level validator object
	BaseModel.Validator.call(Messages);
	
	var registerValidatorBackup = Messages.registerValidator;
	
	Messages.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( Messages.isValid(this, propName, val) ){
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
	//For Operation 'customDelete' with service id 'deleteMessage8829'
	Messages.customDelete = function(params, onCompletion){
		return Messages.customVerb('customDelete', params, onCompletion);
	};
	//For Operation 'MessageCount' with service id 'getMessageCount4579'
	Messages.MessageCount = function(params, onCompletion){
		return Messages.customVerb('MessageCount', params, onCompletion);
	};
	
	var relations = [
	];
	
	Messages.relations = relations;
	
	Messages.prototype.isValid = function(){
		return Messages.isValid(this);
	};
	
	Messages.prototype.objModelName = "Messages";
	
	return Messages;
});