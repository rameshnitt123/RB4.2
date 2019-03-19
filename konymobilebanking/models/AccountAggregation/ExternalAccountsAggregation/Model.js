define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		Bank_id : function(val, state){
			state['Bank_id'] = val;
		},
		id : function(val, state){
			state['id'] = val;
		},
		label : function(val, state){
			state['label'] = val;
		},
		username : function(val, state){
			state['username'] = val;
		},
		scheme : function(val, state){
			state['scheme'] = val;
		},
		address : function(val, state){
			state['address'] = val;
		},
		AccountName : function(val, state){
			state['AccountName'] = val;
		},
		main_user : function(val, state){
			state['main_user'] = val;
		},
		BankName : function(val, state){
			state['BankName'] = val;
		},
		Type_id : function(val, state){
			state['Type_id'] = val;
		},
		TypeDescription : function(val, state){
			state['TypeDescription'] = val;
		},
		AvailableBalance : function(val, state){
			state['AvailableBalance'] = val;
		},
		AccountHolder : function(val, state){
			state['AccountHolder'] = val;
		},
		CurrencyCode : function(val, state){
			state['CurrencyCode'] = val;
		},
		Number : function(val, state){
			state['Number'] = val;
		},
	};
	
	
	//Create the Model Class
	function ExternalAccountsAggregation(defaultValues){
		var privateState = {};
			privateState.Bank_id = defaultValues?(defaultValues["Bank_id"]?defaultValues["Bank_id"]:null):null;
			privateState.id = defaultValues?(defaultValues["id"]?defaultValues["id"]:null):null;
			privateState.label = defaultValues?(defaultValues["label"]?defaultValues["label"]:null):null;
			privateState.username = defaultValues?(defaultValues["username"]?defaultValues["username"]:null):null;
			privateState.scheme = defaultValues?(defaultValues["scheme"]?defaultValues["scheme"]:null):null;
			privateState.address = defaultValues?(defaultValues["address"]?defaultValues["address"]:null):null;
			privateState.AccountName = defaultValues?(defaultValues["AccountName"]?defaultValues["AccountName"]:null):null;
			privateState.main_user = defaultValues?(defaultValues["main_user"]?defaultValues["main_user"]:null):null;
			privateState.BankName = defaultValues?(defaultValues["BankName"]?defaultValues["BankName"]:null):null;
			privateState.Type_id = defaultValues?(defaultValues["Type_id"]?defaultValues["Type_id"]:null):null;
			privateState.TypeDescription = defaultValues?(defaultValues["TypeDescription"]?defaultValues["TypeDescription"]:null):null;
			privateState.AvailableBalance = defaultValues?(defaultValues["AvailableBalance"]?defaultValues["AvailableBalance"]:null):null;
			privateState.AccountHolder = defaultValues?(defaultValues["AccountHolder"]?defaultValues["AccountHolder"]:null):null;
			privateState.CurrencyCode = defaultValues?(defaultValues["CurrencyCode"]?defaultValues["CurrencyCode"]:null):null;
			privateState.Number = defaultValues?(defaultValues["Number"]?defaultValues["Number"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"Bank_id" : {
					get : function(){return privateState.Bank_id},
					set : function(val){
						setterFunctions['Bank_id'].call(this,val,privateState);
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
				"label" : {
					get : function(){return privateState.label},
					set : function(val){
						setterFunctions['label'].call(this,val,privateState);
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
				"scheme" : {
					get : function(){return privateState.scheme},
					set : function(val){
						setterFunctions['scheme'].call(this,val,privateState);
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
				"AccountName" : {
					get : function(){return privateState.AccountName},
					set : function(val){
						setterFunctions['AccountName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"main_user" : {
					get : function(){return privateState.main_user},
					set : function(val){
						setterFunctions['main_user'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"BankName" : {
					get : function(){return privateState.BankName},
					set : function(val){
						setterFunctions['BankName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Type_id" : {
					get : function(){return privateState.Type_id},
					set : function(val){
						setterFunctions['Type_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"TypeDescription" : {
					get : function(){return privateState.TypeDescription},
					set : function(val){
						setterFunctions['TypeDescription'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"AvailableBalance" : {
					get : function(){return privateState.AvailableBalance},
					set : function(val){
						setterFunctions['AvailableBalance'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"AccountHolder" : {
					get : function(){return privateState.AccountHolder},
					set : function(val){
						setterFunctions['AccountHolder'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"CurrencyCode" : {
					get : function(){return privateState.CurrencyCode},
					set : function(val){
						setterFunctions['CurrencyCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Number" : {
					get : function(){return privateState.Number},
					set : function(val){
						setterFunctions['Number'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(ExternalAccountsAggregation);
	
	//Create new class level validator object
	BaseModel.Validator.call(ExternalAccountsAggregation);
	
	var registerValidatorBackup = ExternalAccountsAggregation.registerValidator;
	
	ExternalAccountsAggregation.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( ExternalAccountsAggregation.isValid(this, propName, val) ){
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
	
	ExternalAccountsAggregation.relations = relations;
	
	ExternalAccountsAggregation.prototype.isValid = function(){
		return ExternalAccountsAggregation.isValid(this);
	};
	
	ExternalAccountsAggregation.prototype.objModelName = "ExternalAccountsAggregation";
	
	return ExternalAccountsAggregation;
});