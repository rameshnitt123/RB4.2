define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		accountNumber : function(val, state){
			state['accountNumber'] = val;
		},
		address : function(val, state){
			state['address'] = val;
		},
		billerCategoryId : function(val, state){
			state['billerCategoryId'] = val;
		},
		billerCategoryName : function(val, state){
			state['billerCategoryName'] = val;
		},
		billerName : function(val, state){
			state['billerName'] = val;
		},
		city : function(val, state){
			state['city'] = val;
		},
		ebillSupport : function(val, state){
			state['ebillSupport'] = val;
		},
		id : function(val, state){
			state['id'] = val;
		},
		limit : function(val, state){
			state['limit'] = val;
		},
		searchString : function(val, state){
			state['searchString'] = val;
		},
		state : function(val, state){
			state['state'] = val;
		},
		zipCode : function(val, state){
			state['zipCode'] = val;
		},
	};
	
	
	//Create the Model Class
	function BillerMaster(defaultValues){
		var privateState = {};
			privateState.accountNumber = defaultValues?(defaultValues["accountNumber"]?defaultValues["accountNumber"]:null):null;
			privateState.address = defaultValues?(defaultValues["address"]?defaultValues["address"]:null):null;
			privateState.billerCategoryId = defaultValues?(defaultValues["billerCategoryId"]?defaultValues["billerCategoryId"]:null):null;
			privateState.billerCategoryName = defaultValues?(defaultValues["billerCategoryName"]?defaultValues["billerCategoryName"]:null):null;
			privateState.billerName = defaultValues?(defaultValues["billerName"]?defaultValues["billerName"]:null):null;
			privateState.city = defaultValues?(defaultValues["city"]?defaultValues["city"]:null):null;
			privateState.ebillSupport = defaultValues?(defaultValues["ebillSupport"]?defaultValues["ebillSupport"]:null):null;
			privateState.id = defaultValues?(defaultValues["id"]?defaultValues["id"]:null):null;
			privateState.limit = defaultValues?(defaultValues["limit"]?defaultValues["limit"]:null):null;
			privateState.searchString = defaultValues?(defaultValues["searchString"]?defaultValues["searchString"]:null):null;
			privateState.state = defaultValues?(defaultValues["state"]?defaultValues["state"]:null):null;
			privateState.zipCode = defaultValues?(defaultValues["zipCode"]?defaultValues["zipCode"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"accountNumber" : {
					get : function(){return privateState.accountNumber},
					set : function(val){
						setterFunctions['accountNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"address" : {
					get : function(){return privateState.address},
					set : function(val){
						setterFunctions['address'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"billerCategoryId" : {
					get : function(){return privateState.billerCategoryId},
					set : function(val){
						setterFunctions['billerCategoryId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"billerCategoryName" : {
					get : function(){return privateState.billerCategoryName},
					set : function(val){
						setterFunctions['billerCategoryName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"billerName" : {
					get : function(){return privateState.billerName},
					set : function(val){
						setterFunctions['billerName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"city" : {
					get : function(){return privateState.city},
					set : function(val){
						setterFunctions['city'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ebillSupport" : {
					get : function(){return privateState.ebillSupport},
					set : function(val){
						setterFunctions['ebillSupport'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"id" : {
					get : function(){return privateState.id},
					set : function(val){
						setterFunctions['id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"limit" : {
					get : function(){return privateState.limit},
					set : function(val){
						setterFunctions['limit'].call(this,val,privateState);
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
				"state" : {
					get : function(){return privateState.state},
					set : function(val){
						setterFunctions['state'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"zipCode" : {
					get : function(){return privateState.zipCode},
					set : function(val){
						setterFunctions['zipCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(BillerMaster);
	
	//Create new class level validator object
	BaseModel.Validator.call(BillerMaster);
	
	var registerValidatorBackup = BillerMaster.registerValidator;
	
	BillerMaster.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( BillerMaster.isValid(this, propName, val) ){
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
	//For Operation 'searchBillerByName' with service id 'searchBillerByName8926'
	BillerMaster.searchBillerByName = function(params, onCompletion){
		return BillerMaster.customVerb('searchBillerByName', params, onCompletion);
	};
	//For Operation 'getBillerByAccountNumber' with service id 'getBillerByAccountNumber7928'
	BillerMaster.getBillerByAccountNumber = function(params, onCompletion){
		return BillerMaster.customVerb('getBillerByAccountNumber', params, onCompletion);
	};
	
	var relations = [
	];
	
	BillerMaster.relations = relations;
	
	BillerMaster.prototype.isValid = function(){
		return BillerMaster.isValid(this);
	};
	
	BillerMaster.prototype.objModelName = "BillerMaster";
	
	return BillerMaster;
});