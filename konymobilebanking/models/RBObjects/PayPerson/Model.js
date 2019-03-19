define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		email : function(val, state){
			state['email'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		name : function(val, state){
			state['name'] = val;
		},
		limit : function(val, state){
			state['limit'] = val;
		},
		nickName : function(val, state){
			state['nickName'] = val;
		},
		offset : function(val, state){
			state['offset'] = val;
		},
		order : function(val, state){
			state['order'] = val;
		},
		PayPersonId : function(val, state){
			state['PayPersonId'] = val;
		},
		phone : function(val, state){
			state['phone'] = val;
		},
		primaryContactForSending : function(val, state){
			state['primaryContactForSending'] = val;
		},
		searchString : function(val, state){
			state['searchString'] = val;
		},
		secondaryEmail : function(val, state){
			state['secondaryEmail'] = val;
		},
		secondaryEmail2 : function(val, state){
			state['secondaryEmail2'] = val;
		},
		secondaryPhoneNumber : function(val, state){
			state['secondaryPhoneNumber'] = val;
		},
		secondaryPhoneNumber2 : function(val, state){
			state['secondaryPhoneNumber2'] = val;
		},
		sortBy : function(val, state){
			state['sortBy'] = val;
		},
		success : function(val, state){
			state['success'] = val;
		},
		phoneCountryCode : function(val, state){
			state['phoneCountryCode'] = val;
		},
		phoneExtension : function(val, state){
			state['phoneExtension'] = val;
		},
		transactionId : function(val, state){
			state['transactionId'] = val;
		},
	};
	
	
	//Create the Model Class
	function PayPerson(defaultValues){
		var privateState = {};
			privateState.email = defaultValues?(defaultValues["email"]?defaultValues["email"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.name = defaultValues?(defaultValues["name"]?defaultValues["name"]:null):null;
			privateState.limit = defaultValues?(defaultValues["limit"]?defaultValues["limit"]:null):null;
			privateState.nickName = defaultValues?(defaultValues["nickName"]?defaultValues["nickName"]:null):null;
			privateState.offset = defaultValues?(defaultValues["offset"]?defaultValues["offset"]:null):null;
			privateState.order = defaultValues?(defaultValues["order"]?defaultValues["order"]:null):null;
			privateState.PayPersonId = defaultValues?(defaultValues["PayPersonId"]?defaultValues["PayPersonId"]:null):null;
			privateState.phone = defaultValues?(defaultValues["phone"]?defaultValues["phone"]:null):null;
			privateState.primaryContactForSending = defaultValues?(defaultValues["primaryContactForSending"]?defaultValues["primaryContactForSending"]:null):null;
			privateState.searchString = defaultValues?(defaultValues["searchString"]?defaultValues["searchString"]:null):null;
			privateState.secondaryEmail = defaultValues?(defaultValues["secondaryEmail"]?defaultValues["secondaryEmail"]:null):null;
			privateState.secondaryEmail2 = defaultValues?(defaultValues["secondaryEmail2"]?defaultValues["secondaryEmail2"]:null):null;
			privateState.secondaryPhoneNumber = defaultValues?(defaultValues["secondaryPhoneNumber"]?defaultValues["secondaryPhoneNumber"]:null):null;
			privateState.secondaryPhoneNumber2 = defaultValues?(defaultValues["secondaryPhoneNumber2"]?defaultValues["secondaryPhoneNumber2"]:null):null;
			privateState.sortBy = defaultValues?(defaultValues["sortBy"]?defaultValues["sortBy"]:null):null;
			privateState.success = defaultValues?(defaultValues["success"]?defaultValues["success"]:null):null;
			privateState.phoneCountryCode = defaultValues?(defaultValues["phoneCountryCode"]?defaultValues["phoneCountryCode"]:null):null;
			privateState.phoneExtension = defaultValues?(defaultValues["phoneExtension"]?defaultValues["phoneExtension"]:null):null;
			privateState.transactionId = defaultValues?(defaultValues["transactionId"]?defaultValues["transactionId"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
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
				"name" : {
					get : function(){return privateState.name},
					set : function(val){
						setterFunctions['name'].call(this,val,privateState);
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
				"nickName" : {
					get : function(){return privateState.nickName},
					set : function(val){
						setterFunctions['nickName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"offset" : {
					get : function(){return privateState.offset},
					set : function(val){
						setterFunctions['offset'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"order" : {
					get : function(){return privateState.order},
					set : function(val){
						setterFunctions['order'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"PayPersonId" : {
					get : function(){return privateState.PayPersonId},
					set : function(val){
						setterFunctions['PayPersonId'].call(this,val,privateState);
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
				"primaryContactForSending" : {
					get : function(){return privateState.primaryContactForSending},
					set : function(val){
						setterFunctions['primaryContactForSending'].call(this,val,privateState);
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
				"secondaryEmail" : {
					get : function(){return privateState.secondaryEmail},
					set : function(val){
						setterFunctions['secondaryEmail'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"secondaryEmail2" : {
					get : function(){return privateState.secondaryEmail2},
					set : function(val){
						setterFunctions['secondaryEmail2'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"secondaryPhoneNumber" : {
					get : function(){return privateState.secondaryPhoneNumber},
					set : function(val){
						setterFunctions['secondaryPhoneNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"secondaryPhoneNumber2" : {
					get : function(){return privateState.secondaryPhoneNumber2},
					set : function(val){
						setterFunctions['secondaryPhoneNumber2'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"sortBy" : {
					get : function(){return privateState.sortBy},
					set : function(val){
						setterFunctions['sortBy'].call(this,val,privateState);
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
				"phoneCountryCode" : {
					get : function(){return privateState.phoneCountryCode},
					set : function(val){
						setterFunctions['phoneCountryCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"phoneExtension" : {
					get : function(){return privateState.phoneExtension},
					set : function(val){
						setterFunctions['phoneExtension'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"transactionId" : {
					get : function(){return privateState.transactionId},
					set : function(val){
						setterFunctions['transactionId'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(PayPerson);
	
	//Create new class level validator object
	BaseModel.Validator.call(PayPerson);
	
	var registerValidatorBackup = PayPerson.registerValidator;
	
	PayPerson.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( PayPerson.isValid(this, propName, val) ){
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
	//For Operation 'getRecentPayPerson' with service id 'getRecentPayPerson3082'
	PayPerson.getRecentPayPerson = function(params, onCompletion){
		return PayPerson.customVerb('getRecentPayPerson', params, onCompletion);
	};
	//For Operation 'editPayPerson' with service id 'editPayPerson6717'
	PayPerson.editPayPerson = function(params, onCompletion){
		return PayPerson.customVerb('editPayPerson', params, onCompletion);
	};
	//For Operation 'deletePayPerson' with service id 'deletePayPerson2617'
	PayPerson.deletePayPerson = function(params, onCompletion){
		return PayPerson.customVerb('deletePayPerson', params, onCompletion);
	};
	
	var relations = [
	];
	
	PayPerson.relations = relations;
	
	PayPerson.prototype.isValid = function(){
		return PayPerson.isValid(this);
	};
	
	PayPerson.prototype.objModelName = "PayPerson";
	
	return PayPerson;
});