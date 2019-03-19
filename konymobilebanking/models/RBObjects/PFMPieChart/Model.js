define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		cashSpent : function(val, state){
			state['cashSpent'] = val;
		},
		cateforyId : function(val, state){
			state['cateforyId'] = val;
		},
		categoryName : function(val, state){
			state['categoryName'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		monthId : function(val, state){
			state['monthId'] = val;
		},
		monthName : function(val, state){
			state['monthName'] = val;
		},
		totalCashSpent : function(val, state){
			state['totalCashSpent'] = val;
		},
		year : function(val, state){
			state['year'] = val;
		},
	};
	
	
	//Create the Model Class
	function PFMPieChart(defaultValues){
		var privateState = {};
			privateState.cashSpent = defaultValues?(defaultValues["cashSpent"]?defaultValues["cashSpent"]:null):null;
			privateState.cateforyId = defaultValues?(defaultValues["cateforyId"]?defaultValues["cateforyId"]:null):null;
			privateState.categoryName = defaultValues?(defaultValues["categoryName"]?defaultValues["categoryName"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.monthId = defaultValues?(defaultValues["monthId"]?defaultValues["monthId"]:null):null;
			privateState.monthName = defaultValues?(defaultValues["monthName"]?defaultValues["monthName"]:null):null;
			privateState.totalCashSpent = defaultValues?(defaultValues["totalCashSpent"]?defaultValues["totalCashSpent"]:null):null;
			privateState.year = defaultValues?(defaultValues["year"]?defaultValues["year"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"cashSpent" : {
					get : function(){return privateState.cashSpent},
					set : function(val){
						setterFunctions['cashSpent'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"cateforyId" : {
					get : function(){return privateState.cateforyId},
					set : function(val){
						setterFunctions['cateforyId'].call(this,val,privateState);
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
				"monthId" : {
					get : function(){return privateState.monthId},
					set : function(val){
						setterFunctions['monthId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"monthName" : {
					get : function(){return privateState.monthName},
					set : function(val){
						setterFunctions['monthName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"totalCashSpent" : {
					get : function(){return privateState.totalCashSpent},
					set : function(val){
						setterFunctions['totalCashSpent'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"year" : {
					get : function(){return privateState.year},
					set : function(val){
						setterFunctions['year'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(PFMPieChart);
	
	//Create new class level validator object
	BaseModel.Validator.call(PFMPieChart);
	
	var registerValidatorBackup = PFMPieChart.registerValidator;
	
	PFMPieChart.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( PFMPieChart.isValid(this, propName, val) ){
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
	
	PFMPieChart.relations = relations;
	
	PFMPieChart.prototype.isValid = function(){
		return PFMPieChart.isValid(this);
	};
	
	PFMPieChart.prototype.objModelName = "PFMPieChart";
	
	return PFMPieChart;
});