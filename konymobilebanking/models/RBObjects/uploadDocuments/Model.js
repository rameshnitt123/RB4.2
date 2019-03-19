define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		document : function(val, state){
			state['document'] = val;
		},
		documentType : function(val, state){
			state['documentType'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		success : function(val, state){
			state['success'] = val;
		},
	};
	
	
	//Create the Model Class
	function uploadDocuments(defaultValues){
		var privateState = {};
			privateState.document = defaultValues?(defaultValues["document"]?defaultValues["document"]:null):null;
			privateState.documentType = defaultValues?(defaultValues["documentType"]?defaultValues["documentType"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.success = defaultValues?(defaultValues["success"]?defaultValues["success"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"document" : {
					get : function(){return privateState.document},
					set : function(val){
						setterFunctions['document'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"documentType" : {
					get : function(){return privateState.documentType},
					set : function(val){
						setterFunctions['documentType'].call(this,val,privateState);
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
				"success" : {
					get : function(){return privateState.success},
					set : function(val){
						setterFunctions['success'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(uploadDocuments);
	
	//Create new class level validator object
	BaseModel.Validator.call(uploadDocuments);
	
	var registerValidatorBackup = uploadDocuments.registerValidator;
	
	uploadDocuments.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( uploadDocuments.isValid(this, propName, val) ){
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
	
	uploadDocuments.relations = relations;
	
	uploadDocuments.prototype.isValid = function(){
		return uploadDocuments.isValid(this);
	};
	
	uploadDocuments.prototype.objModelName = "uploadDocuments";
	
	return uploadDocuments;
});