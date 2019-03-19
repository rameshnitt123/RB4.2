define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		counterparty_id : function(val, state){
			state['counterparty_id'] = val;
		},
		created_by_user_id : function(val, state){
			state['created_by_user_id'] = val;
		},
		is_beneficiary : function(val, state){
			state['is_beneficiary'] = val;
		},
		name : function(val, state){
			state['name'] = val;
		},
		other_account_routing_address : function(val, state){
			state['other_account_routing_address'] = val;
		},
		other_account_routing_scheme : function(val, state){
			state['other_account_routing_scheme'] = val;
		},
		other_bank_routing_address : function(val, state){
			state['other_bank_routing_address'] = val;
		},
		other_bank_routing_scheme : function(val, state){
			state['other_bank_routing_scheme'] = val;
		},
		other_branch_routing_address : function(val, state){
			state['other_branch_routing_address'] = val;
		},
		other_branch_routing_scheme : function(val, state){
			state['other_branch_routing_scheme'] = val;
		},
		this_account_id : function(val, state){
			state['this_account_id'] = val;
		},
		this_bank_id : function(val, state){
			state['this_bank_id'] = val;
		},
		this_view_id : function(val, state){
			state['this_view_id'] = val;
		},
	};
	
	
	//Create the Model Class
	function Payees(defaultValues){
		var privateState = {};
			privateState.counterparty_id = defaultValues?(defaultValues["counterparty_id"]?defaultValues["counterparty_id"]:null):null;
			privateState.created_by_user_id = defaultValues?(defaultValues["created_by_user_id"]?defaultValues["created_by_user_id"]:null):null;
			privateState.is_beneficiary = defaultValues?(defaultValues["is_beneficiary"]?defaultValues["is_beneficiary"]:null):null;
			privateState.name = defaultValues?(defaultValues["name"]?defaultValues["name"]:null):null;
			privateState.other_account_routing_address = defaultValues?(defaultValues["other_account_routing_address"]?defaultValues["other_account_routing_address"]:null):null;
			privateState.other_account_routing_scheme = defaultValues?(defaultValues["other_account_routing_scheme"]?defaultValues["other_account_routing_scheme"]:null):null;
			privateState.other_bank_routing_address = defaultValues?(defaultValues["other_bank_routing_address"]?defaultValues["other_bank_routing_address"]:null):null;
			privateState.other_bank_routing_scheme = defaultValues?(defaultValues["other_bank_routing_scheme"]?defaultValues["other_bank_routing_scheme"]:null):null;
			privateState.other_branch_routing_address = defaultValues?(defaultValues["other_branch_routing_address"]?defaultValues["other_branch_routing_address"]:null):null;
			privateState.other_branch_routing_scheme = defaultValues?(defaultValues["other_branch_routing_scheme"]?defaultValues["other_branch_routing_scheme"]:null):null;
			privateState.this_account_id = defaultValues?(defaultValues["this_account_id"]?defaultValues["this_account_id"]:null):null;
			privateState.this_bank_id = defaultValues?(defaultValues["this_bank_id"]?defaultValues["this_bank_id"]:null):null;
			privateState.this_view_id = defaultValues?(defaultValues["this_view_id"]?defaultValues["this_view_id"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"counterparty_id" : {
					get : function(){return privateState.counterparty_id},
					set : function(val){
						setterFunctions['counterparty_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"created_by_user_id" : {
					get : function(){return privateState.created_by_user_id},
					set : function(val){
						setterFunctions['created_by_user_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"is_beneficiary" : {
					get : function(){return privateState.is_beneficiary},
					set : function(val){
						setterFunctions['is_beneficiary'].call(this,val,privateState);
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
				"other_account_routing_address" : {
					get : function(){return privateState.other_account_routing_address},
					set : function(val){
						setterFunctions['other_account_routing_address'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"other_account_routing_scheme" : {
					get : function(){return privateState.other_account_routing_scheme},
					set : function(val){
						setterFunctions['other_account_routing_scheme'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"other_bank_routing_address" : {
					get : function(){return privateState.other_bank_routing_address},
					set : function(val){
						setterFunctions['other_bank_routing_address'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"other_bank_routing_scheme" : {
					get : function(){return privateState.other_bank_routing_scheme},
					set : function(val){
						setterFunctions['other_bank_routing_scheme'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"other_branch_routing_address" : {
					get : function(){return privateState.other_branch_routing_address},
					set : function(val){
						setterFunctions['other_branch_routing_address'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"other_branch_routing_scheme" : {
					get : function(){return privateState.other_branch_routing_scheme},
					set : function(val){
						setterFunctions['other_branch_routing_scheme'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"this_account_id" : {
					get : function(){return privateState.this_account_id},
					set : function(val){
						setterFunctions['this_account_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"this_bank_id" : {
					get : function(){return privateState.this_bank_id},
					set : function(val){
						setterFunctions['this_bank_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"this_view_id" : {
					get : function(){return privateState.this_view_id},
					set : function(val){
						setterFunctions['this_view_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(Payees);
	
	//Create new class level validator object
	BaseModel.Validator.call(Payees);
	
	var registerValidatorBackup = Payees.registerValidator;
	
	Payees.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( Payees.isValid(this, propName, val) ){
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
	//For Operation 'localget' with service id 'readExternalAccountsViewjava7313'
	Payees.localget = function(params, onCompletion){
		return Payees.customVerb('localget', params, onCompletion);
	};
	
	var relations = [
	];
	
	Payees.relations = relations;
	
	Payees.prototype.isValid = function(){
		return Payees.isValid(this);
	};
	
	Payees.prototype.objModelName = "Payees";
	
	return Payees;
});