define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		main_user : function(val, state){
			state['main_user'] = val;
		},
		username : function(val, state){
			state['username'] = val;
		},
		bank_id : function(val, state){
			state['bank_id'] = val;
		},
		AccountName : function(val, state){
			state['AccountName'] = val;
		},
		AvailableBalance : function(val, state){
			state['AvailableBalance'] = val;
		},
		id : function(val, state){
			state['id'] = val;
		},
		loop_count : function(val, state){
			state['loop_count'] = val;
		},
		Account_id : function(val, state){
			state['Account_id'] = val;
		},
		NickName : function(val, state){
			state['NickName'] = val;
		},
		Number : function(val, state){
			state['Number'] = val;
		},
		CurrencyCode : function(val, state){
			state['CurrencyCode'] = val;
		},
		Type_id : function(val, state){
			state['Type_id'] = val;
		},
		AccountHolder : function(val, state){
			state['AccountHolder'] = val;
		},
		FavouriteStatus : function(val, state){
			state['FavouriteStatus'] = val;
		},
	};
	
	
	//Create the Model Class
	function SelectedAccounts(defaultValues){
		var privateState = {};
			privateState.main_user = defaultValues?(defaultValues["main_user"]?defaultValues["main_user"]:null):null;
			privateState.username = defaultValues?(defaultValues["username"]?defaultValues["username"]:null):null;
			privateState.bank_id = defaultValues?(defaultValues["bank_id"]?defaultValues["bank_id"]:null):null;
			privateState.AccountName = defaultValues?(defaultValues["AccountName"]?defaultValues["AccountName"]:null):null;
			privateState.AvailableBalance = defaultValues?(defaultValues["AvailableBalance"]?defaultValues["AvailableBalance"]:null):null;
			privateState.id = defaultValues?(defaultValues["id"]?defaultValues["id"]:null):null;
			privateState.loop_count = defaultValues?(defaultValues["loop_count"]?defaultValues["loop_count"]:null):null;
			privateState.Account_id = defaultValues?(defaultValues["Account_id"]?defaultValues["Account_id"]:null):null;
			privateState.NickName = defaultValues?(defaultValues["NickName"]?defaultValues["NickName"]:null):null;
			privateState.Number = defaultValues?(defaultValues["Number"]?defaultValues["Number"]:null):null;
			privateState.CurrencyCode = defaultValues?(defaultValues["CurrencyCode"]?defaultValues["CurrencyCode"]:null):null;
			privateState.Type_id = defaultValues?(defaultValues["Type_id"]?defaultValues["Type_id"]:null):null;
			privateState.AccountHolder = defaultValues?(defaultValues["AccountHolder"]?defaultValues["AccountHolder"]:null):null;
			privateState.FavouriteStatus = defaultValues?(defaultValues["FavouriteStatus"]?defaultValues["FavouriteStatus"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
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
				"bank_id" : {
					get : function(){return privateState.bank_id},
					set : function(val){
						setterFunctions['bank_id'].call(this,val,privateState);
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
				"AvailableBalance" : {
					get : function(){return privateState.AvailableBalance},
					set : function(val){
						setterFunctions['AvailableBalance'].call(this,val,privateState);
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
				"loop_count" : {
					get : function(){return privateState.loop_count},
					set : function(val){
						setterFunctions['loop_count'].call(this,val,privateState);
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
				"NickName" : {
					get : function(){return privateState.NickName},
					set : function(val){
						setterFunctions['NickName'].call(this,val,privateState);
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
				"CurrencyCode" : {
					get : function(){return privateState.CurrencyCode},
					set : function(val){
						setterFunctions['CurrencyCode'].call(this,val,privateState);
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
				"AccountHolder" : {
					get : function(){return privateState.AccountHolder},
					set : function(val){
						setterFunctions['AccountHolder'].call(this,val,privateState);
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
	BaseModel.isParentOf(SelectedAccounts);
	
	//Create new class level validator object
	BaseModel.Validator.call(SelectedAccounts);
	
	var registerValidatorBackup = SelectedAccounts.registerValidator;
	
	SelectedAccounts.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( SelectedAccounts.isValid(this, propName, val) ){
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
	
	SelectedAccounts.relations = relations;
	
	SelectedAccounts.prototype.isValid = function(){
		return SelectedAccounts.isValid(this);
	};
	
	SelectedAccounts.prototype.objModelName = "SelectedAccounts";
	
	return SelectedAccounts;
});