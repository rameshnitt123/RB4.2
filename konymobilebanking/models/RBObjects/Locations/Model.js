define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		addressLine1 : function(val, state){
			state['addressLine1'] = val;
		},
		addressLine2 : function(val, state){
			state['addressLine2'] = val;
		},
		API_KEY : function(val, state){
			state['API_KEY'] = val;
		},
		currLatitude : function(val, state){
			state['currLatitude'] = val;
		},
		currLongitude : function(val, state){
			state['currLongitude'] = val;
		},
		distance : function(val, state){
			state['distance'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		formattedAddress : function(val, state){
			state['formattedAddress'] = val;
		},
		informationTitle : function(val, state){
			state['informationTitle'] = val;
		},
		latitude : function(val, state){
			state['latitude'] = val;
		},
		locationId : function(val, state){
			state['locationId'] = val;
		},
		longitude : function(val, state){
			state['longitude'] = val;
		},
		mapURL : function(val, state){
			state['mapURL'] = val;
		},
		name : function(val, state){
			state['name'] = val;
		},
		phoneNumber : function(val, state){
			state['phoneNumber'] = val;
		},
		placeID : function(val, state){
			state['placeID'] = val;
		},
		place_id : function(val, state){
			state['place_id'] = val;
		},
		query : function(val, state){
			state['query'] = val;
		},
		radius : function(val, state){
			state['radius'] = val;
		},
		rating : function(val, state){
			state['rating'] = val;
		},
		services : function(val, state){
			state['services'] = val;
		},
		status : function(val, state){
			state['status'] = val;
		},
		type : function(val, state){
			state['type'] = val;
		},
		types : function(val, state){
			state['types'] = val;
		},
		webSiteURL : function(val, state){
			state['webSiteURL'] = val;
		},
		workingHours : function(val, state){
			state['workingHours'] = val;
		},
	};
	
	
	//Create the Model Class
	function Locations(defaultValues){
		var privateState = {};
			privateState.addressLine1 = defaultValues?(defaultValues["addressLine1"]?defaultValues["addressLine1"]:null):null;
			privateState.addressLine2 = defaultValues?(defaultValues["addressLine2"]?defaultValues["addressLine2"]:null):null;
			privateState.API_KEY = defaultValues?(defaultValues["API_KEY"]?defaultValues["API_KEY"]:null):null;
			privateState.currLatitude = defaultValues?(defaultValues["currLatitude"]?defaultValues["currLatitude"]:null):null;
			privateState.currLongitude = defaultValues?(defaultValues["currLongitude"]?defaultValues["currLongitude"]:null):null;
			privateState.distance = defaultValues?(defaultValues["distance"]?defaultValues["distance"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.formattedAddress = defaultValues?(defaultValues["formattedAddress"]?defaultValues["formattedAddress"]:null):null;
			privateState.informationTitle = defaultValues?(defaultValues["informationTitle"]?defaultValues["informationTitle"]:null):null;
			privateState.latitude = defaultValues?(defaultValues["latitude"]?defaultValues["latitude"]:null):null;
			privateState.locationId = defaultValues?(defaultValues["locationId"]?defaultValues["locationId"]:null):null;
			privateState.longitude = defaultValues?(defaultValues["longitude"]?defaultValues["longitude"]:null):null;
			privateState.mapURL = defaultValues?(defaultValues["mapURL"]?defaultValues["mapURL"]:null):null;
			privateState.name = defaultValues?(defaultValues["name"]?defaultValues["name"]:null):null;
			privateState.phoneNumber = defaultValues?(defaultValues["phoneNumber"]?defaultValues["phoneNumber"]:null):null;
			privateState.placeID = defaultValues?(defaultValues["placeID"]?defaultValues["placeID"]:null):null;
			privateState.place_id = defaultValues?(defaultValues["place_id"]?defaultValues["place_id"]:null):null;
			privateState.query = defaultValues?(defaultValues["query"]?defaultValues["query"]:null):null;
			privateState.radius = defaultValues?(defaultValues["radius"]?defaultValues["radius"]:null):null;
			privateState.rating = defaultValues?(defaultValues["rating"]?defaultValues["rating"]:null):null;
			privateState.services = defaultValues?(defaultValues["services"]?defaultValues["services"]:null):null;
			privateState.status = defaultValues?(defaultValues["status"]?defaultValues["status"]:null):null;
			privateState.type = defaultValues?(defaultValues["type"]?defaultValues["type"]:null):null;
			privateState.types = defaultValues?(defaultValues["types"]?defaultValues["types"]:null):null;
			privateState.webSiteURL = defaultValues?(defaultValues["webSiteURL"]?defaultValues["webSiteURL"]:null):null;
			privateState.workingHours = defaultValues?(defaultValues["workingHours"]?defaultValues["workingHours"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"addressLine1" : {
					get : function(){return privateState.addressLine1},
					set : function(val){
						setterFunctions['addressLine1'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"addressLine2" : {
					get : function(){return privateState.addressLine2},
					set : function(val){
						setterFunctions['addressLine2'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"API_KEY" : {
					get : function(){return privateState.API_KEY},
					set : function(val){
						setterFunctions['API_KEY'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"currLatitude" : {
					get : function(){return privateState.currLatitude},
					set : function(val){
						setterFunctions['currLatitude'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"currLongitude" : {
					get : function(){return privateState.currLongitude},
					set : function(val){
						setterFunctions['currLongitude'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"distance" : {
					get : function(){return privateState.distance},
					set : function(val){
						setterFunctions['distance'].call(this,val,privateState);
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
				"formattedAddress" : {
					get : function(){return privateState.formattedAddress},
					set : function(val){
						setterFunctions['formattedAddress'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"informationTitle" : {
					get : function(){return privateState.informationTitle},
					set : function(val){
						setterFunctions['informationTitle'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"latitude" : {
					get : function(){return privateState.latitude},
					set : function(val){
						setterFunctions['latitude'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"locationId" : {
					get : function(){return privateState.locationId},
					set : function(val){
						setterFunctions['locationId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"longitude" : {
					get : function(){return privateState.longitude},
					set : function(val){
						setterFunctions['longitude'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"mapURL" : {
					get : function(){return privateState.mapURL},
					set : function(val){
						setterFunctions['mapURL'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"name" : {
					get : function(){return privateState.name},
					set : function(val){
						setterFunctions['name'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"phoneNumber" : {
					get : function(){return privateState.phoneNumber},
					set : function(val){
						setterFunctions['phoneNumber'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"placeID" : {
					get : function(){return privateState.placeID},
					set : function(val){
						setterFunctions['placeID'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"place_id" : {
					get : function(){return privateState.place_id},
					set : function(val){
						setterFunctions['place_id'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"query" : {
					get : function(){return privateState.query},
					set : function(val){
						setterFunctions['query'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"radius" : {
					get : function(){return privateState.radius},
					set : function(val){
						setterFunctions['radius'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"rating" : {
					get : function(){return privateState.rating},
					set : function(val){
						setterFunctions['rating'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"services" : {
					get : function(){return privateState.services},
					set : function(val){
						setterFunctions['services'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"status" : {
					get : function(){return privateState.status},
					set : function(val){
						setterFunctions['status'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"type" : {
					get : function(){return privateState.type},
					set : function(val){
						setterFunctions['type'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"types" : {
					get : function(){return privateState.types},
					set : function(val){
						setterFunctions['types'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"webSiteURL" : {
					get : function(){return privateState.webSiteURL},
					set : function(val){
						setterFunctions['webSiteURL'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"workingHours" : {
					get : function(){return privateState.workingHours},
					set : function(val){
						setterFunctions['workingHours'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(Locations);
	
	//Create new class level validator object
	BaseModel.Validator.call(Locations);
	
	var registerValidatorBackup = Locations.registerValidator;
	
	Locations.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( Locations.isValid(this, propName, val) ){
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
	//For Operation 'getLocationDetails' with service id 'getLocationDetails3576'
	Locations.getLocationDetails = function(params, onCompletion){
		return Locations.customVerb('getLocationDetails', params, onCompletion);
	};
	//For Operation 'getLocationsQuery' with service id 'getLocationsQuery3428'
	Locations.getLocationsQuery = function(params, onCompletion){
		return Locations.customVerb('getLocationsQuery', params, onCompletion);
	};
	//For Operation 'getAddressSuggestions' with service id 'getAddressSuggestions2093'
	Locations.getAddressSuggestions = function(params, onCompletion){
		return Locations.customVerb('getAddressSuggestions', params, onCompletion);
	};
	//For Operation 'getLocationRange' with service id 'getLocationRange4604'
	Locations.getLocationRange = function(params, onCompletion){
		return Locations.customVerb('getLocationRange', params, onCompletion);
	};
	//For Operation 'getLocationList' with service id 'getLocations6657'
	Locations.getLocationList = function(params, onCompletion){
		return Locations.customVerb('getLocationList', params, onCompletion);
	};
	//For Operation 'getLocationAddress' with service id 'getLocationAddress4437'
	Locations.getLocationAddress = function(params, onCompletion){
		return Locations.customVerb('getLocationAddress', params, onCompletion);
	};
	
	var relations = [
	];
	
	Locations.relations = relations;
	
	Locations.prototype.isValid = function(){
		return Locations.isValid(this);
	};
	
	Locations.prototype.objModelName = "Locations";
	
	return Locations;
});