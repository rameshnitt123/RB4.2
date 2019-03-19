define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		action1 : function(val, state){
			state['action1'] = val;
		},
		action2 : function(val, state){
			state['action2'] = val;
		},
		actionType : function(val, state){
			state['actionType'] = val;
		},
		adType : function(val, state){
			state['adType'] = val;
		},
		description : function(val, state){
			state['description'] = val;
		},
		id : function(val, state){
			state['id'] = val;
		},
		imageURL : function(val, state){
			state['imageURL'] = val;
		},
		imageURL2 : function(val, state){
			state['imageURL2'] = val;
		},
		title : function(val, state){
			state['title'] = val;
		},
	};
	
	
	//Create the Model Class
	function Ads(defaultValues){
		var privateState = {};
			privateState.action1 = defaultValues?(defaultValues["action1"]?defaultValues["action1"]:null):null;
			privateState.action2 = defaultValues?(defaultValues["action2"]?defaultValues["action2"]:null):null;
			privateState.actionType = defaultValues?(defaultValues["actionType"]?defaultValues["actionType"]:null):null;
			privateState.adType = defaultValues?(defaultValues["adType"]?defaultValues["adType"]:null):null;
			privateState.description = defaultValues?(defaultValues["description"]?defaultValues["description"]:null):null;
			privateState.id = defaultValues?(defaultValues["id"]?defaultValues["id"]:null):null;
			privateState.imageURL = defaultValues?(defaultValues["imageURL"]?defaultValues["imageURL"]:null):null;
			privateState.imageURL2 = defaultValues?(defaultValues["imageURL2"]?defaultValues["imageURL2"]:null):null;
			privateState.title = defaultValues?(defaultValues["title"]?defaultValues["title"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"action1" : {
					get : function(){return privateState.action1},
					set : function(val){
						setterFunctions['action1'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"action2" : {
					get : function(){return privateState.action2},
					set : function(val){
						setterFunctions['action2'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"actionType" : {
					get : function(){return privateState.actionType},
					set : function(val){
						setterFunctions['actionType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"adType" : {
					get : function(){return privateState.adType},
					set : function(val){
						setterFunctions['adType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"description" : {
					get : function(){return privateState.description},
					set : function(val){
						setterFunctions['description'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"id" : {
					get : function(){return privateState.id},
					set : function(val){
						setterFunctions['id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"imageURL" : {
					get : function(){return privateState.imageURL},
					set : function(val){
						setterFunctions['imageURL'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"imageURL2" : {
					get : function(){return privateState.imageURL2},
					set : function(val){
						setterFunctions['imageURL2'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"title" : {
					get : function(){return privateState.title},
					set : function(val){
						setterFunctions['title'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(Ads);
	
	//Create new class level validator object
	BaseModel.Validator.call(Ads);
	
	var registerValidatorBackup = Ads.registerValidator;
	
	Ads.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( Ads.isValid(this, propName, val) ){
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
	
	Ads.relations = relations;
	
	Ads.prototype.isValid = function(){
		return Ads.isValid(this);
	};
	
	Ads.prototype.objModelName = "Ads";
	
	return Ads;
});