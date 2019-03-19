define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function NotificationsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	NotificationsRepository.prototype = Object.create(BaseRepository.prototype);
	NotificationsRepository.prototype.constructor = NotificationsRepository;

	//For Operation 'deleteNotification' with service id 'deleteNotification6942'
	NotificationsRepository.prototype.deleteNotification = function(params,onCompletion){
		return NotificationsRepository.prototype.customVerb('deleteNotification',params, onCompletion);
	};
	//For Operation 'getUnreadNotificationCount' with service id 'getUnreadNotifications5049'
	NotificationsRepository.prototype.getUnreadNotificationCount = function(params,onCompletion){
		return NotificationsRepository.prototype.customVerb('getUnreadNotificationCount',params, onCompletion);
	};
	
	
	return NotificationsRepository;
})