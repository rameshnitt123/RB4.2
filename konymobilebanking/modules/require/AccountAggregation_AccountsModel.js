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
	};
	
	
	//Create the Model Class
	function Accounts(defaultValues){
		var privateState = {};
			privateState.main_user = defaultValues?(defaultValues["main_user"]?defaultValues["main_user"]:null):null;
			privateState.username = defaultValues?(defaultValues["username"]?defaultValues["username"]:null):null;
			privateState.bank_id = defaultValues?(defaultValues["bank_id"]?defaultValues["bank_id"]:null):null;
			privateState.AccountName = defaultValues?(defaultValues["AccountName"]?defaultValues["AccountName"]:null):null;
			privateState.AvailableBalance = defaultValues?(defaultValues["AvailableBalance"]?defaultValues["AvailableBalance"]:null):null;
			privateState.id = defaultValues?(defaultValues["id"]?defaultValues["id"]:null):null;
			privateState.loop_count = defaultValues?(defaultValues["loop_count"]?defaultValues["loop_count"]:null):null;
			privateState.Account_id = defaultValues?(defaultValues["Account_id"]?defaultValues["Account_id"]:null):null;
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
					set : function(val){throw Error("id cannot be changed."); },
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
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(Accounts);
	
	//Create new class level validator object
	BaseModel.Validator.call(Accounts);
	
	var registerValidatorBackup = Accounts.registerValidator;
	
	Accounts.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( Accounts.isValid(this, propName, val) ){
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
	
	Accounts.relations = relations;
	
	Accounts.prototype.isValid = function(){
		return Accounts.isValid(this);
	};
	
	return Accounts;
});