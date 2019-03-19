define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		CountryId : function(val, state){
			state['CountryId'] = val;
		},
		Name : function(val, state){
			state['Name'] = val;
		},
	};
	
	
	//Create the Model Class
	function Country(defaultValues){
		var privateState = {};
			privateState.CountryId = defaultValues?(defaultValues["CountryId"]?defaultValues["CountryId"]:null):null;
			privateState.Name = defaultValues?(defaultValues["Name"]?defaultValues["Name"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"CountryId" : {
					get : function(){return privateState.CountryId},
					set : function(val){
						setterFunctions['CountryId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Name" : {
					get : function(){return privateState.Name},
					set : function(val){
						setterFunctions['Name'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(Country);
	
	//Create new class level validator object
	BaseModel.Validator.call(Country);
	
	var registerValidatorBackup = Country.registerValidator;
	
	Country.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( Country.isValid(this, propName, val) ){
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
	//For Operation 'getAllCountries' with service id 'getAllCountries5715'
	Country.getAllCountries = function(params, onCompletion){
		return Country.customVerb('getAllCountries', params, onCompletion);
	};
	
	var relations = [
	];
	
	Country.relations = relations;
	
	Country.prototype.isValid = function(){
		return Country.isValid(this);
	};
	
	Country.prototype.objModelName = "Country";
	
	return Country;
});