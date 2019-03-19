define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function SmsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	SmsRepository.prototype = Object.create(BaseRepository.prototype);
	SmsRepository.prototype.constructor = SmsRepository;

	//For Operation 'smsOTP' with service id 'smsOTP2422'
	SmsRepository.prototype.smsOTP = function(params,onCompletion){
		return SmsRepository.prototype.customVerb('smsOTP',params, onCompletion);
	};
	//For Operation 'sendKMSSMS' with service id 'sendSMS7432'
	SmsRepository.prototype.sendKMSSMS = function(params,onCompletion){
		return SmsRepository.prototype.customVerb('sendKMSSMS',params, onCompletion);
	};
	
	
	return SmsRepository;
})