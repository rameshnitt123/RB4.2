define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		AccountName : function(val, state){
			state['AccountName'] = val;
		},
		main_user : function(val, state){
			state['main_user'] = val;
		},
		username : function(val, state){
			state['username'] = val;
		},
		Bank_id : function(val, state){
			state['Bank_id'] = val;
		},
		CurrencyCode : function(val, state){
			state['CurrencyCode'] = val;
		},
		AvailableBalance : function(val, state){
			state['AvailableBalance'] = val;
		},
		Scheme : function(val, state){
			state['Scheme'] = val;
		},
		Number : function(val, state){
			state['Number'] = val;
		},
		Address : function(val, state){
			state['Address'] = val;
		},
		AccountHolder : function(val, state){
			state['AccountHolder'] = val;
		},
		BankName : function(val, state){
			state['BankName'] = val;
		},
		TypeDescription : function(val, state){
			state['TypeDescription'] = val;
		},
		Type_id : function(val, state){
			state['Type_id'] = val;
		},
		BankLogo : function(val, state){
			state['BankLogo'] = val;
		},
		NickName : function(val, state){
			state['NickName'] = val;
		},
		Account_id : function(val, state){
			state['Account_id'] = val;
		},
		FavouriteStatus : function(val, state){
			state['FavouriteStatus'] = val;
		},
	};
	
	
	//Create the Model Class
	function SingleAccountDetails(defaultValues){
		var privateState = {};
			privateState.AccountName = defaultValues?(defaultValues["AccountName"]?defaultValues["AccountName"]:null):null;
			privateState.main_user = defaultValues?(defaultValues["main_user"]?defaultValues["main_user"]:null):null;
			privateState.username = defaultValues?(defaultValues["username"]?defaultValues["username"]:null):null;
			privateState.Bank_id = defaultValues?(defaultValues["Bank_id"]?defaultValues["Bank_id"]:null):null;
			privateState.CurrencyCode = defaultValues?(defaultValues["CurrencyCode"]?defaultValues["CurrencyCode"]:null):null;
			privateState.AvailableBalance = defaultValues?(defaultValues["AvailableBalance"]?defaultValues["AvailableBalance"]:null):null;
			privateState.Scheme = defaultValues?(defaultValues["Scheme"]?defaultValues["Scheme"]:null):null;
			privateState.Number = defaultValues?(defaultValues["Number"]?defaultValues["Number"]:null):null;
			privateState.Address = defaultValues?(defaultValues["Address"]?defaultValues["Address"]:null):null;
			privateState.AccountHolder = defaultValues?(defaultValues["AccountHolder"]?defaultValues["AccountHolder"]:null):null;
			privateState.BankName = defaultValues?(defaultValues["BankName"]?defaultValues["BankName"]:null):null;
			privateState.TypeDescription = defaultValues?(defaultValues["TypeDescription"]?defaultValues["TypeDescription"]:null):null;
			privateState.Type_id = defaultValues?(defaultValues["Type_id"]?defaultValues["Type_id"]:null):null;
			privateState.BankLogo = defaultValues?(defaultValues["BankLogo"]?defaultValues["BankLogo"]:null):null;
			privateState.NickName = defaultValues?(defaultValues["NickName"]?defaultValues["NickName"]:null):null;
			privateState.Account_id = defaultValues?(defaultValues["Account_id"]?defaultValues["Account_id"]:null):null;
			privateState.FavouriteStatus = defaultValues?(defaultValues["FavouriteStatus"]?defaultValues["FavouriteStatus"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
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
				"username" : {
					get : function(){return privateState.username},
					set : function(val){
						setterFunctions['username'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Bank_id" : {
					get : function(){return privateState.Bank_id},
					set : function(val){
						setterFunctions['Bank_id'].call(this,val,privateState);
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
				"AvailableBalance" : {
					get : function(){return privateState.AvailableBalance},
					set : function(val){
						setterFunctions['AvailableBalance'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Scheme" : {
					get : function(){return privateState.Scheme},
					set : function(val){
						setterFunctions['Scheme'].call(this,val,privateState);
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
				"Address" : {
					get : function(){return privateState.Address},
					set : function(val){
						setterFunctions['Address'].call(this,val,privateState);
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
				"BankName" : {
					get : function(){return privateState.BankName},
					set : function(val){
						setterFunctions['BankName'].call(this,val,privateState);
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
				"Type_id" : {
					get : function(){return privateState.Type_id},
					set : function(val){
						setterFunctions['Type_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"BankLogo" : {
					get : function(){return privateState.BankLogo},
					set : function(val){
						setterFunctions['BankLogo'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"NickName" : {
					get : function(){return privateState.NickName},
					set : function(val){
						setterFunctions['NickName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Account_id" : {
					get : function(){return privateState.Account_id},
					set : function(val){
						setterFunctions['Account_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"FavouriteStatus" : {
					get : function(){return privateState.FavouriteStatus},
					set : function(val){
						setterFunctions['FavouriteStatus'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(SingleAccountDetails);
	
	//Create new class level validator object
	BaseModel.Validator.call(SingleAccountDetails);
	
	var registerValidatorBackup = SingleAccountDetails.registerValidator;
	
	SingleAccountDetails.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( SingleAccountDetails.isValid(this, propName, val) ){
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
	
	SingleAccountDetails.relations = relations;
	
	SingleAccountDetails.prototype.isValid = function(){
		return SingleAccountDetails.isValid(this);
	};
	
	SingleAccountDetails.prototype.objModelName = "SingleAccountDetails";
	
	return SingleAccountDetails;
});