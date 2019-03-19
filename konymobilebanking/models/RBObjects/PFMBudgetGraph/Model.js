define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		allocatedAmount : function(val, state){
			state['allocatedAmount'] = val;
		},
		amountSpent : function(val, state){
			state['amountSpent'] = val;
		},
		budgetId : function(val, state){
			state['budgetId'] = val;
		},
		categoryId : function(val, state){
			state['categoryId'] = val;
		},
		categoryName : function(val, state){
			state['categoryName'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
	};
	
	
	//Create the Model Class
	function PFMBudgetGraph(defaultValues){
		var privateState = {};
			privateState.allocatedAmount = defaultValues?(defaultValues["allocatedAmount"]?defaultValues["allocatedAmount"]:null):null;
			privateState.amountSpent = defaultValues?(defaultValues["amountSpent"]?defaultValues["amountSpent"]:null):null;
			privateState.budgetId = defaultValues?(defaultValues["budgetId"]?defaultValues["budgetId"]:null):null;
			privateState.categoryId = defaultValues?(defaultValues["categoryId"]?defaultValues["categoryId"]:null):null;
			privateState.categoryName = defaultValues?(defaultValues["categoryName"]?defaultValues["categoryName"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"allocatedAmount" : {
					get : function(){return privateState.allocatedAmount},
					set : function(val){
						setterFunctions['allocatedAmount'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"amountSpent" : {
					get : function(){return privateState.amountSpent},
					set : function(val){
						setterFunctions['amountSpent'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"budgetId" : {
					get : function(){return privateState.budgetId},
					set : function(val){
						setterFunctions['budgetId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"categoryId" : {
					get : function(){return privateState.categoryId},
					set : function(val){
						setterFunctions['categoryId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"categoryName" : {
					get : function(){return privateState.categoryName},
					set : function(val){
						setterFunctions['categoryName'].call(this,val,privateState);
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
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(PFMBudgetGraph);
	
	//Create new class level validator object
	BaseModel.Validator.call(PFMBudgetGraph);
	
	var registerValidatorBackup = PFMBudgetGraph.registerValidator;
	
	PFMBudgetGraph.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( PFMBudgetGraph.isValid(this, propName, val) ){
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
	
	PFMBudgetGraph.relations = relations;
	
	PFMBudgetGraph.prototype.isValid = function(){
		return PFMBudgetGraph.isValid(this);
	};
	
	PFMBudgetGraph.prototype.objModelName = "PFMBudgetGraph";
	
	return PFMBudgetGraph;
});