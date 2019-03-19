define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		accountType : function(val, state){
			state['accountType'] = val;
		},
		address : function(val, state){
			state['address'] = val;
		},
		dateOfBirth : function(val, state){
			state['dateOfBirth'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		firstName : function(val, state){
			state['firstName'] = val;
		},
		lastName : function(val, state){
			state['lastName'] = val;
		},
		productId : function(val, state){
			state['productId'] = val;
		},
		referenceId : function(val, state){
			state['referenceId'] = val;
		},
		ssn : function(val, state){
			state['ssn'] = val;
		},
		stateId : function(val, state){
			state['stateId'] = val;
		},
		success : function(val, state){
			state['success'] = val;
		},
	};
	
	
	//Create the Model Class
	function NewAccount(defaultValues){
		var privateState = {};
			privateState.accountType = defaultValues?(defaultValues["accountType"]?defaultValues["accountType"]:null):null;
			privateState.address = defaultValues?(defaultValues["address"]?defaultValues["address"]:null):null;
			privateState.dateOfBirth = defaultValues?(defaultValues["dateOfBirth"]?defaultValues["dateOfBirth"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.firstName = defaultValues?(defaultValues["firstName"]?defaultValues["firstName"]:null):null;
			privateState.lastName = defaultValues?(defaultValues["lastName"]?defaultValues["lastName"]:null):null;
			privateState.productId = defaultValues?(defaultValues["productId"]?defaultValues["productId"]:null):null;
			privateState.referenceId = defaultValues?(defaultValues["referenceId"]?defaultValues["referenceId"]:null):null;
			privateState.ssn = defaultValues?(defaultValues["ssn"]?defaultValues["ssn"]:null):null;
			privateState.stateId = defaultValues?(defaultValues["stateId"]?defaultValues["stateId"]:null):null;
			privateState.success = defaultValues?(defaultValues["success"]?defaultValues["success"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"accountType" : {
					get : function(){return privateState.accountType},
					set : function(val){
						setterFunctions['accountType'].call(this,val,privateState);
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
				"dateOfBirth" : {
					get : function(){return privateState.dateOfBirth},
					set : function(val){
						setterFunctions['dateOfBirth'].call(this,val,privateState);
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
				"firstName" : {
					get : function(){return privateState.firstName},
					set : function(val){
						setterFunctions['firstName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lastName" : {
					get : function(){return privateState.lastName},
					set : function(val){
						setterFunctions['lastName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"productId" : {
					get : function(){return privateState.productId},
					set : function(val){
						setterFunctions['productId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"referenceId" : {
					get : function(){return privateState.referenceId},
					set : function(val){
						setterFunctions['referenceId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ssn" : {
					get : function(){return privateState.ssn},
					set : function(val){
						setterFunctions['ssn'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"stateId" : {
					get : function(){return privateState.stateId},
					set : function(val){
						setterFunctions['stateId'].call(this,val,privateState);
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
	BaseModel.isParentOf(NewAccount);
	
	//Create new class level validator object
	BaseModel.Validator.call(NewAccount);
	
	var registerValidatorBackup = NewAccount.registerValidator;
	
	NewAccount.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( NewAccount.isValid(this, propName, val) ){
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
	
	NewAccount.relations = relations;
	
	NewAccount.prototype.isValid = function(){
		return NewAccount.isValid(this);
	};
	
	NewAccount.prototype.objModelName = "NewAccount";
	
	return NewAccount;
});