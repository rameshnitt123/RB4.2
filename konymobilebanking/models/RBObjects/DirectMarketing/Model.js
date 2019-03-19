define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		adType : function(val, state){
			state['adType'] = val;
		},
		buttonType : function(val, state){
			state['buttonType'] = val;
		},
		colour : function(val, state){
			state['colour'] = val;
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
		model : function(val, state){
			state['model'] = val;
		},
		navigationId : function(val, state){
			state['navigationId'] = val;
		},
		navigationType : function(val, state){
			state['navigationType'] = val;
		},
		navigationURL : function(val, state){
			state['navigationURL'] = val;
		},
		result : function(val, state){
			state['result'] = val;
		},
		sessionId : function(val, state){
			state['sessionId'] = val;
		},
		text : function(val, state){
			state['text'] = val;
		},
		visible : function(val, state){
			state['visible'] = val;
		},
		flowposition : function(val, state){
			state['flowposition'] = val;
		},
		navId : function(val, state){
			state['navId'] = val;
		},
	};
	
	
	//Create the Model Class
	function DirectMarketing(defaultValues){
		var privateState = {};
			privateState.adType = defaultValues?(defaultValues["adType"]?defaultValues["adType"]:null):null;
			privateState.buttonType = defaultValues?(defaultValues["buttonType"]?defaultValues["buttonType"]:null):null;
			privateState.colour = defaultValues?(defaultValues["colour"]?defaultValues["colour"]:null):null;
			privateState.description = defaultValues?(defaultValues["description"]?defaultValues["description"]:null):null;
			privateState.id = defaultValues?(defaultValues["id"]?defaultValues["id"]:null):null;
			privateState.imageURL = defaultValues?(defaultValues["imageURL"]?defaultValues["imageURL"]:null):null;
			privateState.model = defaultValues?(defaultValues["model"]?defaultValues["model"]:null):null;
			privateState.navigationId = defaultValues?(defaultValues["navigationId"]?defaultValues["navigationId"]:null):null;
			privateState.navigationType = defaultValues?(defaultValues["navigationType"]?defaultValues["navigationType"]:null):null;
			privateState.navigationURL = defaultValues?(defaultValues["navigationURL"]?defaultValues["navigationURL"]:null):null;
			privateState.result = defaultValues?(defaultValues["result"]?defaultValues["result"]:null):null;
			privateState.sessionId = defaultValues?(defaultValues["sessionId"]?defaultValues["sessionId"]:null):null;
			privateState.text = defaultValues?(defaultValues["text"]?defaultValues["text"]:null):null;
			privateState.visible = defaultValues?(defaultValues["visible"]?defaultValues["visible"]:null):null;
			privateState.flowposition = defaultValues?(defaultValues["flowposition"]?defaultValues["flowposition"]:null):null;
			privateState.navId = defaultValues?(defaultValues["navId"]?defaultValues["navId"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"adType" : {
					get : function(){return privateState.adType},
					set : function(val){
						setterFunctions['adType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"buttonType" : {
					get : function(){return privateState.buttonType},
					set : function(val){
						setterFunctions['buttonType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"colour" : {
					get : function(){return privateState.colour},
					set : function(val){
						setterFunctions['colour'].call(this,val,privateState);
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
				"model" : {
					get : function(){return privateState.model},
					set : function(val){
						setterFunctions['model'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"navigationId" : {
					get : function(){return privateState.navigationId},
					set : function(val){
						setterFunctions['navigationId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"navigationType" : {
					get : function(){return privateState.navigationType},
					set : function(val){
						setterFunctions['navigationType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"navigationURL" : {
					get : function(){return privateState.navigationURL},
					set : function(val){
						setterFunctions['navigationURL'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"result" : {
					get : function(){return privateState.result},
					set : function(val){
						setterFunctions['result'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"sessionId" : {
					get : function(){return privateState.sessionId},
					set : function(val){
						setterFunctions['sessionId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"text" : {
					get : function(){return privateState.text},
					set : function(val){
						setterFunctions['text'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"visible" : {
					get : function(){return privateState.visible},
					set : function(val){
						setterFunctions['visible'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"flowposition" : {
					get : function(){return privateState.flowposition},
					set : function(val){
						setterFunctions['flowposition'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"navId" : {
					get : function(){return privateState.navId},
					set : function(val){
						setterFunctions['navId'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(DirectMarketing);
	
	//Create new class level validator object
	BaseModel.Validator.call(DirectMarketing);
	
	var registerValidatorBackup = DirectMarketing.registerValidator;
	
	DirectMarketing.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( DirectMarketing.isValid(this, propName, val) ){
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
	//For Operation 'sendDmResponse' with service id 'sendDmResponse6499'
	DirectMarketing.sendDmResponse = function(params, onCompletion){
		return DirectMarketing.customVerb('sendDmResponse', params, onCompletion);
	};
	//For Operation 'getDirectMarketingAds' with service id 'getDirectMarketingAds2962'
	DirectMarketing.getDirectMarketingAds = function(params, onCompletion){
		return DirectMarketing.customVerb('getDirectMarketingAds', params, onCompletion);
	};
	
	var relations = [
	];
	
	DirectMarketing.relations = relations;
	
	DirectMarketing.prototype.isValid = function(){
		return DirectMarketing.isValid(this);
	};
	
	DirectMarketing.prototype.objModelName = "DirectMarketing";
	
	return DirectMarketing;
});