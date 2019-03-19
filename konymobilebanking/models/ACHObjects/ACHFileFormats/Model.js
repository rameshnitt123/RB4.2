define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		id : function(val, state){
			state['id'] = val;
		},
		Fileextension : function(val, state){
			state['Fileextension'] = val;
		},
		FileType : function(val, state){
			state['FileType'] = val;
		},
		MIMEtype : function(val, state){
			state['MIMEtype'] = val;
		},
	};
	
	
	//Create the Model Class
	function ACHFileFormats(defaultValues){
		var privateState = {};
			privateState.id = defaultValues?(defaultValues["id"]?defaultValues["id"]:null):null;
			privateState.Fileextension = defaultValues?(defaultValues["Fileextension"]?defaultValues["Fileextension"]:null):null;
			privateState.FileType = defaultValues?(defaultValues["FileType"]?defaultValues["FileType"]:null):null;
			privateState.MIMEtype = defaultValues?(defaultValues["MIMEtype"]?defaultValues["MIMEtype"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"id" : {
					get : function(){return privateState.id},
					set : function(val){
						setterFunctions['id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Fileextension" : {
					get : function(){return privateState.Fileextension},
					set : function(val){
						setterFunctions['Fileextension'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"FileType" : {
					get : function(){return privateState.FileType},
					set : function(val){
						setterFunctions['FileType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"MIMEtype" : {
					get : function(){return privateState.MIMEtype},
					set : function(val){
						setterFunctions['MIMEtype'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(ACHFileFormats);
	
	//Create new class level validator object
	BaseModel.Validator.call(ACHFileFormats);
	
	var registerValidatorBackup = ACHFileFormats.registerValidator;
	
	ACHFileFormats.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( ACHFileFormats.isValid(this, propName, val) ){
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
	
	ACHFileFormats.relations = relations;
	
	ACHFileFormats.prototype.isValid = function(){
		return ACHFileFormats.isValid(this);
	};
	
	ACHFileFormats.prototype.objModelName = "ACHFileFormats";
	
	return ACHFileFormats;
});