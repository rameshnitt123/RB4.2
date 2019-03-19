define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		accountID : function(val, state){
			state['accountID'] = val;
		},
		accountName : function(val, state){
			state['accountName'] = val;
		},
		accountNickName : function(val, state){
			state['accountNickName'] = val;
		},
		checkOrderID : function(val, state){
			state['checkOrderID'] = val;
		},
		country : function(val, state){
			state['country'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		leafCount : function(val, state){
			state['leafCount'] = val;
		},
		name : function(val, state){
			state['name'] = val;
		},
		orderTime : function(val, state){
			state['orderTime'] = val;
		},
		postboxNumber : function(val, state){
			state['postboxNumber'] = val;
		},
		state : function(val, state){
			state['state'] = val;
		},
		status : function(val, state){
			state['status'] = val;
		},
		success : function(val, state){
			state['success'] = val;
		},
		zipcode : function(val, state){
			state['zipcode'] = val;
		},
	};
	
	
	//Create the Model Class
	function CheckOrder(defaultValues){
		var privateState = {};
			privateState.accountID = defaultValues?(defaultValues["accountID"]?defaultValues["accountID"]:null):null;
			privateState.accountName = defaultValues?(defaultValues["accountName"]?defaultValues["accountName"]:null):null;
			privateState.accountNickName = defaultValues?(defaultValues["accountNickName"]?defaultValues["accountNickName"]:null):null;
			privateState.checkOrderID = defaultValues?(defaultValues["checkOrderID"]?defaultValues["checkOrderID"]:null):null;
			privateState.country = defaultValues?(defaultValues["country"]?defaultValues["country"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.leafCount = defaultValues?(defaultValues["leafCount"]?defaultValues["leafCount"]:null):null;
			privateState.name = defaultValues?(defaultValues["name"]?defaultValues["name"]:null):null;
			privateState.orderTime = defaultValues?(defaultValues["orderTime"]?defaultValues["orderTime"]:null):null;
			privateState.postboxNumber = defaultValues?(defaultValues["postboxNumber"]?defaultValues["postboxNumber"]:null):null;
			privateState.state = defaultValues?(defaultValues["state"]?defaultValues["state"]:null):null;
			privateState.status = defaultValues?(defaultValues["status"]?defaultValues["status"]:null):null;
			privateState.success = defaultValues?(defaultValues["success"]?defaultValues["success"]:null):null;
			privateState.zipcode = defaultValues?(defaultValues["zipcode"]?defaultValues["zipcode"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"accountID" : {
					get : function(){return privateState.accountID},
					set : function(val){
						setterFunctions['accountID'].call(this,val,privateState);
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
				"checkOrderID" : {
					get : function(){return privateState.checkOrderID},
					set : function(val){
						setterFunctions['checkOrderID'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"country" : {
					get : function(){return privateState.country},
					set : function(val){
						setterFunctions['country'].call(this,val,privateState);
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
				"leafCount" : {
					get : function(){return privateState.leafCount},
					set : function(val){
						setterFunctions['leafCount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"name" : {
					get : function(){return privateState.name},
					set : function(val){
						setterFunctions['name'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"orderTime" : {
					get : function(){return privateState.orderTime},
					set : function(val){
						setterFunctions['orderTime'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"postboxNumber" : {
					get : function(){return privateState.postboxNumber},
					set : function(val){
						setterFunctions['postboxNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"state" : {
					get : function(){return privateState.state},
					set : function(val){
						setterFunctions['state'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"status" : {
					get : function(){return privateState.status},
					set : function(val){
						setterFunctions['status'].call(this,val,privateState);
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
				"zipcode" : {
					get : function(){return privateState.zipcode},
					set : function(val){
						setterFunctions['zipcode'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(CheckOrder);
	
	//Create new class level validator object
	BaseModel.Validator.call(CheckOrder);
	
	var registerValidatorBackup = CheckOrder.registerValidator;
	
	CheckOrder.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( CheckOrder.isValid(this, propName, val) ){
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
	
	CheckOrder.relations = relations;
	
	CheckOrder.prototype.isValid = function(){
		return CheckOrder.isValid(this);
	};
	
	CheckOrder.prototype.objModelName = "CheckOrder";
	
	return CheckOrder;
});