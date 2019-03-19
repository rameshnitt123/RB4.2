define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		accountId : function(val, state){
			state['accountId'] = val;
		},
		displayName : function(val, state){
			state['displayName'] = val;
		},
		email : function(val, state){
			state['email'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		isNpp : function(val, state){
			state['isNpp'] = val;
		},
		isP2PRegistered : function(val, state){
			state['isP2PRegistered'] = val;
		},
		isZell : function(val, state){
			state['isZell'] = val;
		},
		p2pRegId : function(val, state){
			state['p2pRegId'] = val;
		},
		phone : function(val, state){
			state['phone'] = val;
		},
		success : function(val, state){
			state['success'] = val;
		},
	};
	
	
	//Create the Model Class
	function p2pregistration(defaultValues){
		var privateState = {};
			privateState.accountId = defaultValues?(defaultValues["accountId"]?defaultValues["accountId"]:null):null;
			privateState.displayName = defaultValues?(defaultValues["displayName"]?defaultValues["displayName"]:null):null;
			privateState.email = defaultValues?(defaultValues["email"]?defaultValues["email"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.isNpp = defaultValues?(defaultValues["isNpp"]?defaultValues["isNpp"]:null):null;
			privateState.isP2PRegistered = defaultValues?(defaultValues["isP2PRegistered"]?defaultValues["isP2PRegistered"]:null):null;
			privateState.isZell = defaultValues?(defaultValues["isZell"]?defaultValues["isZell"]:null):null;
			privateState.p2pRegId = defaultValues?(defaultValues["p2pRegId"]?defaultValues["p2pRegId"]:null):null;
			privateState.phone = defaultValues?(defaultValues["phone"]?defaultValues["phone"]:null):null;
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
				"displayName" : {
					get : function(){return privateState.displayName},
					set : function(val){
						setterFunctions['displayName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"email" : {
					get : function(){return privateState.email},
					set : function(val){
						setterFunctions['email'].call(this,val,privateState);
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
				"isNpp" : {
					get : function(){return privateState.isNpp},
					set : function(val){
						setterFunctions['isNpp'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isP2PRegistered" : {
					get : function(){return privateState.isP2PRegistered},
					set : function(val){
						setterFunctions['isP2PRegistered'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"isZell" : {
					get : function(){return privateState.isZell},
					set : function(val){
						setterFunctions['isZell'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"p2pRegId" : {
					get : function(){return privateState.p2pRegId},
					set : function(val){
						setterFunctions['p2pRegId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"phone" : {
					get : function(){return privateState.phone},
					set : function(val){
						setterFunctions['phone'].call(this,val,privateState);
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
	BaseModel.isParentOf(p2pregistration);
	
	//Create new class level validator object
	BaseModel.Validator.call(p2pregistration);
	
	var registerValidatorBackup = p2pregistration.registerValidator;
	
	p2pregistration.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( p2pregistration.isValid(this, propName, val) ){
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
	
	p2pregistration.relations = relations;
	
	p2pregistration.prototype.isValid = function(){
		return p2pregistration.isValid(this);
	};
	
	p2pregistration.prototype.objModelName = "p2pregistration";
	
	return p2pregistration;
});