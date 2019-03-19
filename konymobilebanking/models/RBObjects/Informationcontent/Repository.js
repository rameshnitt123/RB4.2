define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function InformationcontentRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	InformationcontentRepository.prototype = Object.create(BaseRepository.prototype);
	InformationcontentRepository.prototype.constructor = InformationcontentRepository;

	//For Operation 'getAboutUs' with service id 'getInformationContent3223'
	InformationcontentRepository.prototype.getAboutUs = function(params,onCompletion){
		return InformationcontentRepository.prototype.customVerb('getAboutUs',params, onCompletion);
	};
	//For Operation 'getContactUs' with service id 'getContactUs2111'
	InformationcontentRepository.prototype.getContactUs = function(params,onCompletion){
		return InformationcontentRepository.prototype.customVerb('getContactUs',params, onCompletion);
	};
	//For Operation 'getPrivacyPolicy' with service id 'getPrivacyPolicy8800'
	InformationcontentRepository.prototype.getPrivacyPolicy = function(params,onCompletion){
		return InformationcontentRepository.prototype.customVerb('getPrivacyPolicy',params, onCompletion);
	};
	//For Operation 'getTermsAndConditions' with service id 'getTermsAndConditions8451'
	InformationcontentRepository.prototype.getTermsAndConditions = function(params,onCompletion){
		return InformationcontentRepository.prototype.customVerb('getTermsAndConditions',params, onCompletion);
	};
	//For Operation 'getFAQs' with service id 'getFAQs7120'
	InformationcontentRepository.prototype.getFAQs = function(params,onCompletion){
		return InformationcontentRepository.prototype.customVerb('getFAQs',params, onCompletion);
	};
	
	
	return InformationcontentRepository;
})