define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		AtmId : function(val, state){
			state['AtmId'] = val;
		},
		id : function(val, state){
			state['id'] = val;
		},
		timestamp : function(val, state){
			state['timestamp'] = val;
		},
	};
	
	
	//Create the Model Class
	function QrCode(defaultValues){
		var privateState = {};
			privateState.AtmId = defaultValues?(defaultValues["AtmId"]?defaultValues["AtmId"]:null):null;
			privateState.id = defaultValues?(defaultValues["id"]?defaultValues["id"]:null):null;
			privateState.timestamp = defaultValues?(defaultValues["timestamp"]?defaultValues["timestamp"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"AtmId" : {
					get : function(){return privateState.AtmId},
					set : function(val){
						setterFunctions['AtmId'].call(this,val,privateState);
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
				"timestamp" : {
					get : function(){return privateState.timestamp},
					set : function(val){
						setterFunctions['timestamp'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(QrCode);
	
	//Create new class level validator object
	BaseModel.Validator.call(QrCode);
	
	var registerValidatorBackup = QrCode.registerValidator;
	
	QrCode.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( QrCode.isValid(this, propName, val) ){
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
	
	QrCode.relations = relations;
	
	QrCode.prototype.isValid = function(){
		return QrCode.isValid(this);
	};
	
	QrCode.prototype.objModelName = "QrCode";
	
	return QrCode;
});