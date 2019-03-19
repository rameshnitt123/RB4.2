define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		infoContent : function(val, state){
			state['infoContent'] = val;
		},
		infoType : function(val, state){
			state['infoType'] = val;
		},
		categoryName : function(val, state){
			state['categoryName'] = val;
		},
	};
	
	
	//Create the Model Class
	function Informationcontent(defaultValues){
		var privateState = {};
			privateState.infoContent = defaultValues?(defaultValues["infoContent"]?defaultValues["infoContent"]:null):null;
			privateState.infoType = defaultValues?(defaultValues["infoType"]?defaultValues["infoType"]:null):null;
			privateState.categoryName = defaultValues?(defaultValues["categoryName"]?defaultValues["categoryName"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"infoContent" : {
					get : function(){return privateState.infoContent},
					set : function(val){
						setterFunctions['infoContent'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"infoType" : {
					get : function(){return privateState.infoType},
					set : function(val){
						setterFunctions['infoType'].call(this,val,privateState);
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
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(Informationcontent);
	
	//Create new class level validator object
	BaseModel.Validator.call(Informationcontent);
	
	var registerValidatorBackup = Informationcontent.registerValidator;
	
	Informationcontent.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( Informationcontent.isValid(this, propName, val) ){
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
	//For Operation 'getAboutUs' with service id 'getInformationContent3223'
	Informationcontent.getAboutUs = function(params, onCompletion){
		return Informationcontent.customVerb('getAboutUs', params, onCompletion);
	};
	//For Operation 'getContactUs' with service id 'getContactUs2111'
	Informationcontent.getContactUs = function(params, onCompletion){
		return Informationcontent.customVerb('getContactUs', params, onCompletion);
	};
	//For Operation 'getPrivacyPolicy' with service id 'getPrivacyPolicy8800'
	Informationcontent.getPrivacyPolicy = function(params, onCompletion){
		return Informationcontent.customVerb('getPrivacyPolicy', params, onCompletion);
	};
	//For Operation 'getTermsAndConditions' with service id 'getTermsAndConditions8451'
	Informationcontent.getTermsAndConditions = function(params, onCompletion){
		return Informationcontent.customVerb('getTermsAndConditions', params, onCompletion);
	};
	//For Operation 'getFAQs' with service id 'getFAQs7120'
	Informationcontent.getFAQs = function(params, onCompletion){
		return Informationcontent.customVerb('getFAQs', params, onCompletion);
	};
	
	var relations = [
	];
	
	Informationcontent.relations = relations;
	
	Informationcontent.prototype.isValid = function(){
		return Informationcontent.isValid(this);
	};
	
	Informationcontent.prototype.objModelName = "Informationcontent";
	
	return Informationcontent;
});