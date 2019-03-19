define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		imageURL : function(val, state){
			state['imageURL'] = val;
		},
		isRead : function(val, state){
			state['isRead'] = val;
		},
		notificationActionLink : function(val, state){
			state['notificationActionLink'] = val;
		},
		notificationId : function(val, state){
			state['notificationId'] = val;
		},
		notificationModule : function(val, state){
			state['notificationModule'] = val;
		},
		notificationSubject : function(val, state){
			state['notificationSubject'] = val;
		},
		notificationSubModule : function(val, state){
			state['notificationSubModule'] = val;
		},
		notificationText : function(val, state){
			state['notificationText'] = val;
		},
		receivedDate : function(val, state){
			state['receivedDate'] = val;
		},
		result : function(val, state){
			state['result'] = val;
		},
		searchString : function(val, state){
			state['searchString'] = val;
		},
		unreadNotificationCount : function(val, state){
			state['unreadNotificationCount'] = val;
		},
		userNotificationId : function(val, state){
			state['userNotificationId'] = val;
		},
	};
	
	
	//Create the Model Class
	function Notifications(defaultValues){
		var privateState = {};
			privateState.imageURL = defaultValues?(defaultValues["imageURL"]?defaultValues["imageURL"]:null):null;
			privateState.isRead = defaultValues?(defaultValues["isRead"]?defaultValues["isRead"]:null):null;
			privateState.notificationActionLink = defaultValues?(defaultValues["notificationActionLink"]?defaultValues["notificationActionLink"]:null):null;
			privateState.notificationId = defaultValues?(defaultValues["notificationId"]?defaultValues["notificationId"]:null):null;
			privateState.notificationModule = defaultValues?(defaultValues["notificationModule"]?defaultValues["notificationModule"]:null):null;
			privateState.notificationSubject = defaultValues?(defaultValues["notificationSubject"]?defaultValues["notificationSubject"]:null):null;
			privateState.notificationSubModule = defaultValues?(defaultValues["notificationSubModule"]?defaultValues["notificationSubModule"]:null):null;
			privateState.notificationText = defaultValues?(defaultValues["notificationText"]?defaultValues["notificationText"]:null):null;
			privateState.receivedDate = defaultValues?(defaultValues["receivedDate"]?defaultValues["receivedDate"]:null):null;
			privateState.result = defaultValues?(defaultValues["result"]?defaultValues["result"]:null):null;
			privateState.searchString = defaultValues?(defaultValues["searchString"]?defaultValues["searchString"]:null):null;
			privateState.unreadNotificationCount = defaultValues?(defaultValues["unreadNotificationCount"]?defaultValues["unreadNotificationCount"]:null):null;
			privateState.userNotificationId = defaultValues?(defaultValues["userNotificationId"]?defaultValues["userNotificationId"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"imageURL" : {
					get : function(){return privateState.imageURL},
					set : function(val){
						setterFunctions['imageURL'].call(this,val,privateState);
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
				"notificationActionLink" : {
					get : function(){return privateState.notificationActionLink},
					set : function(val){
						setterFunctions['notificationActionLink'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"notificationId" : {
					get : function(){return privateState.notificationId},
					set : function(val){
						setterFunctions['notificationId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"notificationModule" : {
					get : function(){return privateState.notificationModule},
					set : function(val){
						setterFunctions['notificationModule'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"notificationSubject" : {
					get : function(){return privateState.notificationSubject},
					set : function(val){
						setterFunctions['notificationSubject'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"notificationSubModule" : {
					get : function(){return privateState.notificationSubModule},
					set : function(val){
						setterFunctions['notificationSubModule'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"notificationText" : {
					get : function(){return privateState.notificationText},
					set : function(val){
						setterFunctions['notificationText'].call(this,val,privateState);
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
				"result" : {
					get : function(){return privateState.result},
					set : function(val){
						setterFunctions['result'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"searchString" : {
					get : function(){return privateState.searchString},
					set : function(val){
						setterFunctions['searchString'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"unreadNotificationCount" : {
					get : function(){return privateState.unreadNotificationCount},
					set : function(val){
						setterFunctions['unreadNotificationCount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"userNotificationId" : {
					get : function(){return privateState.userNotificationId},
					set : function(val){
						setterFunctions['userNotificationId'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(Notifications);
	
	//Create new class level validator object
	BaseModel.Validator.call(Notifications);
	
	var registerValidatorBackup = Notifications.registerValidator;
	
	Notifications.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( Notifications.isValid(this, propName, val) ){
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
	//For Operation 'deleteNotification' with service id 'deleteNotification6942'
	Notifications.deleteNotification = function(params, onCompletion){
		return Notifications.customVerb('deleteNotification', params, onCompletion);
	};
	//For Operation 'getUnreadNotificationCount' with service id 'getUnreadNotifications5049'
	Notifications.getUnreadNotificationCount = function(params, onCompletion){
		return Notifications.customVerb('getUnreadNotificationCount', params, onCompletion);
	};
	
	var relations = [
	];
	
	Notifications.relations = relations;
	
	Notifications.prototype.isValid = function(){
		return Notifications.isValid(this);
	};
	
	Notifications.prototype.objModelName = "Notifications";
	
	return Notifications;
});