define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function AllLocationsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	AllLocationsRepository.prototype = Object.create(BaseRepository.prototype);
	AllLocationsRepository.prototype.constructor = AllLocationsRepository;

	//For Operation 'getAllLocations' with service id 'getAllLocations6742'
	AllLocationsRepository.prototype.getAllLocations = function(params,onCompletion){
		return AllLocationsRepository.prototype.customVerb('getAllLocations',params, onCompletion);
	};
	
	
	return AllLocationsRepository;
})