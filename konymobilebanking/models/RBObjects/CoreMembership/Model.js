define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		id : function(val, state){
			state['id'] = val;
		},
		Customer_id : function(val, state){
			state['Customer_id'] = val;
		},
		MemberId : function(val, state){
			state['MemberId'] = val;
		},
		MemberType : function(val, state){
			state['MemberType'] = val;
		},
		IDType_id : function(val, state){
			state['IDType_id'] = val;
		},
		IDValue : function(val, state){
			state['IDValue'] = val;
		},
	};
	
	
	//Create the Model Class
	function CoreMembership(defaultValues){
		var privateState = {};
			privateState.id = defaultValues?(defaultValues["id"]?defaultValues["id"]:null):null;
			privateState.Customer_id = defaultValues?(defaultValues["Customer_id"]?defaultValues["Customer_id"]:null):null;
			privateState.MemberId = defaultValues?(defaultValues["MemberId"]?defaultValues["MemberId"]:null):null;
			privateState.MemberType = defaultValues?(defaultValues["MemberType"]?defaultValues["MemberType"]:null):null;
			privateState.IDType_id = defaultValues?(defaultValues["IDType_id"]?defaultValues["IDType_id"]:null):null;
			privateState.IDValue = defaultValues?(defaultValues["IDValue"]?defaultValues["IDValue"]:null):null;
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
				"Customer_id" : {
					get : function(){return privateState.Customer_id},
					set : function(val){
						setterFunctions['Customer_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"MemberId" : {
					get : function(){return privateState.MemberId},
					set : function(val){
						setterFunctions['MemberId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"MemberType" : {
					get : function(){return privateState.MemberType},
					set : function(val){
						setterFunctions['MemberType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IDType_id" : {
					get : function(){return privateState.IDType_id},
					set : function(val){
						setterFunctions['IDType_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"IDValue" : {
					get : function(){return privateState.IDValue},
					set : function(val){
						setterFunctions['IDValue'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(CoreMembership);
	
	//Create new class level validator object
	BaseModel.Validator.call(CoreMembership);
	
	var registerValidatorBackup = CoreMembership.registerValidator;
	
	CoreMembership.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( CoreMembership.isValid(this, propName, val) ){
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
	
	CoreMembership.relations = relations;
	
	CoreMembership.prototype.isValid = function(){
		return CoreMembership.isValid(this);
	};
	
	CoreMembership.prototype.objModelName = "CoreMembership";
	
	return CoreMembership;
});