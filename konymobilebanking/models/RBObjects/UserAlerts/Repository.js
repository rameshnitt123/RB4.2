define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function UserAlertsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	UserAlertsRepository.prototype = Object.create(BaseRepository.prototype);
	UserAlertsRepository.prototype.constructor = UserAlertsRepository;

	//For Operation 'getAllAlerts' with service id 'getAllAlerts7486'
	UserAlertsRepository.prototype.getAllAlerts = function(params,onCompletion){
		return UserAlertsRepository.prototype.customVerb('getAllAlerts',params, onCompletion);
	};
	//For Operation 'updateAlerts' with service id 'updateAlerts3636'
	UserAlertsRepository.prototype.updateAlerts = function(params,onCompletion){
		return UserAlertsRepository.prototype.customVerb('updateAlerts',params, onCompletion);
	};
	
	
	return UserAlertsRepository;
})