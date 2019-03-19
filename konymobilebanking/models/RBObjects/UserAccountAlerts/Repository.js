define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function UserAccountAlertsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	UserAccountAlertsRepository.prototype = Object.create(BaseRepository.prototype);
	UserAccountAlertsRepository.prototype.constructor = UserAccountAlertsRepository;

	//For Operation 'getUserAccountAlertsForAdmin' with service id 'GetUserAccountAlertsForAdmin4127'
	UserAccountAlertsRepository.prototype.getUserAccountAlertsForAdmin = function(params,onCompletion){
		return UserAccountAlertsRepository.prototype.customVerb('getUserAccountAlertsForAdmin',params, onCompletion);
	};
	
	
	return UserAccountAlertsRepository;
})