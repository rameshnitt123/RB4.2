define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function DirectMarketingRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	DirectMarketingRepository.prototype = Object.create(BaseRepository.prototype);
	DirectMarketingRepository.prototype.constructor = DirectMarketingRepository;

	//For Operation 'sendDmResponse' with service id 'sendDmResponse6499'
	DirectMarketingRepository.prototype.sendDmResponse = function(params,onCompletion){
		return DirectMarketingRepository.prototype.customVerb('sendDmResponse',params, onCompletion);
	};
	//For Operation 'getDirectMarketingAds' with service id 'getDirectMarketingAds2962'
	DirectMarketingRepository.prototype.getDirectMarketingAds = function(params,onCompletion){
		return DirectMarketingRepository.prototype.customVerb('getDirectMarketingAds',params, onCompletion);
	};
	
	
	return DirectMarketingRepository;
})