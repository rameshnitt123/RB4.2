define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		myRequestsWaiting : function(val, state){
			state['myRequestsWaiting'] = val;
		},
		myRequestsRejected : function(val, state){
			state['myRequestsRejected'] = val;
		},
		myRequestsApproved : function(val, state){
			state['myRequestsApproved'] = val;
		},
		ACHFilesForMyApproval : function(val, state){
			state['ACHFilesForMyApproval'] = val;
		},
		ACHTransactionsForMyApproval : function(val, state){
			state['ACHTransactionsForMyApproval'] = val;
		},
		GeneralTransactionsForMyApproval : function(val, state){
			state['GeneralTransactionsForMyApproval'] = val;
		},
	};
	
	
	//Create the Model Class
	function Counts(defaultValues){
		var privateState = {};
			privateState.myRequestsWaiting = defaultValues?(defaultValues["myRequestsWaiting"]?defaultValues["myRequestsWaiting"]:null):null;
			privateState.myRequestsRejected = defaultValues?(defaultValues["myRequestsRejected"]?defaultValues["myRequestsRejected"]:null):null;
			privateState.myRequestsApproved = defaultValues?(defaultValues["myRequestsApproved"]?defaultValues["myRequestsApproved"]:null):null;
			privateState.ACHFilesForMyApproval = defaultValues?(defaultValues["ACHFilesForMyApproval"]?defaultValues["ACHFilesForMyApproval"]:null):null;
			privateState.ACHTransactionsForMyApproval = defaultValues?(defaultValues["ACHTransactionsForMyApproval"]?defaultValues["ACHTransactionsForMyApproval"]:null):null;
			privateState.GeneralTransactionsForMyApproval = defaultValues?(defaultValues["GeneralTransactionsForMyApproval"]?defaultValues["GeneralTransactionsForMyApproval"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"myRequestsWaiting" : {
					get : function(){return privateState.myRequestsWaiting},
					set : function(val){
						setterFunctions['myRequestsWaiting'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"myRequestsRejected" : {
					get : function(){return privateState.myRequestsRejected},
					set : function(val){
						setterFunctions['myRequestsRejected'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"myRequestsApproved" : {
					get : function(){return privateState.myRequestsApproved},
					set : function(val){
						setterFunctions['myRequestsApproved'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ACHFilesForMyApproval" : {
					get : function(){return privateState.ACHFilesForMyApproval},
					set : function(val){
						setterFunctions['ACHFilesForMyApproval'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ACHTransactionsForMyApproval" : {
					get : function(){return privateState.ACHTransactionsForMyApproval},
					set : function(val){
						setterFunctions['ACHTransactionsForMyApproval'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"GeneralTransactionsForMyApproval" : {
					get : function(){return privateState.GeneralTransactionsForMyApproval},
					set : function(val){
						setterFunctions['GeneralTransactionsForMyApproval'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(Counts);
	
	//Create new class level validator object
	BaseModel.Validator.call(Counts);
	
	var registerValidatorBackup = Counts.registerValidator;
	
	Counts.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( Counts.isValid(this, propName, val) ){
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
	
	Counts.relations = relations;
	
	Counts.prototype.isValid = function(){
		return Counts.isValid(this);
	};
	
	Counts.prototype.objModelName = "Counts";
	
	return Counts;
});