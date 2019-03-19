define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		appid : function(val, state){
			state['appid'] = val;
		},
		lat : function(val, state){
			state['lat'] = val;
		},
		lon : function(val, state){
			state['lon'] = val;
		},
		msgtext : function(val, state){
			state['msgtext'] = val;
		},
		password : function(val, state){
			state['password'] = val;
		},
		placeID : function(val, state){
			state['placeID'] = val;
		},
		title : function(val, state){
			state['title'] = val;
		},
		type : function(val, state){
			state['type'] = val;
		},
		ufid : function(val, state){
			state['ufid'] = val;
		},
		userid : function(val, state){
			state['userid'] = val;
		},
		XKonyAuthorization : function(val, state){
			state['XKonyAuthorization'] = val;
		},
	};
	
	
	//Create the Model Class
	function PushNotification(defaultValues){
		var privateState = {};
			privateState.appid = defaultValues?(defaultValues["appid"]?defaultValues["appid"]:null):null;
			privateState.lat = defaultValues?(defaultValues["lat"]?defaultValues["lat"]:null):null;
			privateState.lon = defaultValues?(defaultValues["lon"]?defaultValues["lon"]:null):null;
			privateState.msgtext = defaultValues?(defaultValues["msgtext"]?defaultValues["msgtext"]:null):null;
			privateState.password = defaultValues?(defaultValues["password"]?defaultValues["password"]:null):null;
			privateState.placeID = defaultValues?(defaultValues["placeID"]?defaultValues["placeID"]:null):null;
			privateState.title = defaultValues?(defaultValues["title"]?defaultValues["title"]:null):null;
			privateState.type = defaultValues?(defaultValues["type"]?defaultValues["type"]:null):null;
			privateState.ufid = defaultValues?(defaultValues["ufid"]?defaultValues["ufid"]:null):null;
			privateState.userid = defaultValues?(defaultValues["userid"]?defaultValues["userid"]:null):null;
			privateState.XKonyAuthorization = defaultValues?(defaultValues["XKonyAuthorization"]?defaultValues["XKonyAuthorization"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"appid" : {
					get : function(){return privateState.appid},
					set : function(val){
						setterFunctions['appid'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lat" : {
					get : function(){return privateState.lat},
					set : function(val){
						setterFunctions['lat'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lon" : {
					get : function(){return privateState.lon},
					set : function(val){
						setterFunctions['lon'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"msgtext" : {
					get : function(){return privateState.msgtext},
					set : function(val){
						setterFunctions['msgtext'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"password" : {
					get : function(){return privateState.password},
					set : function(val){
						setterFunctions['password'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"placeID" : {
					get : function(){return privateState.placeID},
					set : function(val){
						setterFunctions['placeID'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"title" : {
					get : function(){return privateState.title},
					set : function(val){
						setterFunctions['title'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"type" : {
					get : function(){return privateState.type},
					set : function(val){
						setterFunctions['type'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ufid" : {
					get : function(){return privateState.ufid},
					set : function(val){
						setterFunctions['ufid'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"userid" : {
					get : function(){return privateState.userid},
					set : function(val){
						setterFunctions['userid'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"XKonyAuthorization" : {
					get : function(){return privateState.XKonyAuthorization},
					set : function(val){
						setterFunctions['XKonyAuthorization'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(PushNotification);
	
	//Create new class level validator object
	BaseModel.Validator.call(PushNotification);
	
	var registerValidatorBackup = PushNotification.registerValidator;
	
	PushNotification.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( PushNotification.isValid(this, propName, val) ){
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
	
	PushNotification.relations = relations;
	
	PushNotification.prototype.isValid = function(){
		return PushNotification.isValid(this);
	};
	
	PushNotification.prototype.objModelName = "PushNotification";
	
	return PushNotification;
});