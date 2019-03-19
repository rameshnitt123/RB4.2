define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function DashboardRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	DashboardRepository.prototype = Object.create(BaseRepository.prototype);
	DashboardRepository.prototype.constructor = DashboardRepository;

	//For Operation 'getDashboard' with service id 'getDashboard7732'
	DashboardRepository.prototype.getDashboard = function(params,onCompletion){
		return DashboardRepository.prototype.customVerb('getDashboard',params, onCompletion);
	};
	
	
	return DashboardRepository;
})