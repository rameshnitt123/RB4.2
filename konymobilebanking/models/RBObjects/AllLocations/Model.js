define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		id : function(val, state){
			state['id'] = val;
		},
		Code : function(val, state){
			state['Code'] = val;
		},
		Name : function(val, state){
			state['Name'] = val;
		},
		createdby : function(val, state){
			state['createdby'] = val;
		},
		createdts : function(val, state){
			state['createdts'] = val;
		},
		lastmodifiedts : function(val, state){
			state['lastmodifiedts'] = val;
		},
		modifiedby : function(val, state){
			state['modifiedby'] = val;
		},
		softdeleteflag : function(val, state){
			state['softdeleteflag'] = val;
		},
		synctimestamp : function(val, state){
			state['synctimestamp'] = val;
		},
		Country_id : function(val, state){
			state['Country_id'] = val;
		},
		Region_id : function(val, state){
			state['Region_id'] = val;
		},
	};
	
	
	//Create the Model Class
	function AllLocations(defaultValues){
		var privateState = {};
			privateState.id = defaultValues?(defaultValues["id"]?defaultValues["id"]:null):null;
			privateState.Code = defaultValues?(defaultValues["Code"]?defaultValues["Code"]:null):null;
			privateState.Name = defaultValues?(defaultValues["Name"]?defaultValues["Name"]:null):null;
			privateState.createdby = defaultValues?(defaultValues["createdby"]?defaultValues["createdby"]:null):null;
			privateState.createdts = defaultValues?(defaultValues["createdts"]?defaultValues["createdts"]:null):null;
			privateState.lastmodifiedts = defaultValues?(defaultValues["lastmodifiedts"]?defaultValues["lastmodifiedts"]:null):null;
			privateState.modifiedby = defaultValues?(defaultValues["modifiedby"]?defaultValues["modifiedby"]:null):null;
			privateState.softdeleteflag = defaultValues?(defaultValues["softdeleteflag"]?defaultValues["softdeleteflag"]:null):null;
			privateState.synctimestamp = defaultValues?(defaultValues["synctimestamp"]?defaultValues["synctimestamp"]:null):null;
			privateState.Country_id = defaultValues?(defaultValues["Country_id"]?defaultValues["Country_id"]:null):null;
			privateState.Region_id = defaultValues?(defaultValues["Region_id"]?defaultValues["Region_id"]:null):null;
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
				"Code" : {
					get : function(){return privateState.Code},
					set : function(val){
						setterFunctions['Code'].call(this,val,privateState);
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
				"createdby" : {
					get : function(){return privateState.createdby},
					set : function(val){
						setterFunctions['createdby'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"createdts" : {
					get : function(){return privateState.createdts},
					set : function(val){
						setterFunctions['createdts'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lastmodifiedts" : {
					get : function(){return privateState.lastmodifiedts},
					set : function(val){
						setterFunctions['lastmodifiedts'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"modifiedby" : {
					get : function(){return privateState.modifiedby},
					set : function(val){
						setterFunctions['modifiedby'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"softdeleteflag" : {
					get : function(){return privateState.softdeleteflag},
					set : function(val){
						setterFunctions['softdeleteflag'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"synctimestamp" : {
					get : function(){return privateState.synctimestamp},
					set : function(val){
						setterFunctions['synctimestamp'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Country_id" : {
					get : function(){return privateState.Country_id},
					set : function(val){
						setterFunctions['Country_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Region_id" : {
					get : function(){return privateState.Region_id},
					set : function(val){
						setterFunctions['Region_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(AllLocations);
	
	//Create new class level validator object
	BaseModel.Validator.call(AllLocations);
	
	var registerValidatorBackup = AllLocations.registerValidator;
	
	AllLocations.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( AllLocations.isValid(this, propName, val) ){
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
	//For Operation 'getAllLocations' with service id 'getAllLocations6742'
	AllLocations.getAllLocations = function(params, onCompletion){
		return AllLocations.customVerb('getAllLocations', params, onCompletion);
	};
	
	var relations = [
	];
	
	AllLocations.relations = relations;
	
	AllLocations.prototype.isValid = function(){
		return AllLocations.isValid(this);
	};
	
	AllLocations.prototype.objModelName = "AllLocations";
	
	return AllLocations;
});