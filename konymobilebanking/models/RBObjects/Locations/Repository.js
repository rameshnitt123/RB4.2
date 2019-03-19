define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function LocationsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	LocationsRepository.prototype = Object.create(BaseRepository.prototype);
	LocationsRepository.prototype.constructor = LocationsRepository;

	//For Operation 'getLocationDetails' with service id 'getLocationDetails3576'
	LocationsRepository.prototype.getLocationDetails = function(params,onCompletion){
		return LocationsRepository.prototype.customVerb('getLocationDetails',params, onCompletion);
	};
	//For Operation 'getLocationsQuery' with service id 'getLocationsQuery3428'
	LocationsRepository.prototype.getLocationsQuery = function(params,onCompletion){
		return LocationsRepository.prototype.customVerb('getLocationsQuery',params, onCompletion);
	};
	//For Operation 'getAddressSuggestions' with service id 'getAddressSuggestions2093'
	LocationsRepository.prototype.getAddressSuggestions = function(params,onCompletion){
		return LocationsRepository.prototype.customVerb('getAddressSuggestions',params, onCompletion);
	};
	//For Operation 'getLocationRange' with service id 'getLocationRange4604'
	LocationsRepository.prototype.getLocationRange = function(params,onCompletion){
		return LocationsRepository.prototype.customVerb('getLocationRange',params, onCompletion);
	};
	//For Operation 'getLocationList' with service id 'getLocations6657'
	LocationsRepository.prototype.getLocationList = function(params,onCompletion){
		return LocationsRepository.prototype.customVerb('getLocationList',params, onCompletion);
	};
	//For Operation 'getLocationAddress' with service id 'getLocationAddress4437'
	LocationsRepository.prototype.getLocationAddress = function(params,onCompletion){
		return LocationsRepository.prototype.customVerb('getLocationAddress',params, onCompletion);
	};
	
	
	return LocationsRepository;
})