define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		monthId : function(val, state){
			state['monthId'] = val;
		},
		monthName : function(val, state){
			state['monthName'] = val;
		},
		totalCashFlow : function(val, state){
			state['totalCashFlow'] = val;
		},
	};
	
	
	//Create the Model Class
	function PFMBarGraph(defaultValues){
		var privateState = {};
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.monthId = defaultValues?(defaultValues["monthId"]?defaultValues["monthId"]:null):null;
			privateState.monthName = defaultValues?(defaultValues["monthName"]?defaultValues["monthName"]:null):null;
			privateState.totalCashFlow = defaultValues?(defaultValues["totalCashFlow"]?defaultValues["totalCashFlow"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
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
				"totalCashFlow" : {
					get : function(){return privateState.totalCashFlow},
					set : function(val){
						setterFunctions['totalCashFlow'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(PFMBarGraph);
	
	//Create new class level validator object
	BaseModel.Validator.call(PFMBarGraph);
	
	var registerValidatorBackup = PFMBarGraph.registerValidator;
	
	PFMBarGraph.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( PFMBarGraph.isValid(this, propName, val) ){
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
	
	PFMBarGraph.relations = relations;
	
	PFMBarGraph.prototype.isValid = function(){
		return PFMBarGraph.isValid(this);
	};
	
	PFMBarGraph.prototype.objModelName = "PFMBarGraph";
	
	return PFMBarGraph;
});