define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function NumberRangeRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	NumberRangeRepository.prototype = Object.create(BaseRepository.prototype);
	NumberRangeRepository.prototype.constructor = NumberRangeRepository;

	//For Operation 'ResetNumberRange' with service id 'resetNumberRangeorch3665'
	NumberRangeRepository.prototype.ResetNumberRange = function(params,onCompletion){
		return NumberRangeRepository.prototype.customVerb('ResetNumberRange',params, onCompletion);
	};
	//For Operation 'ReadNextNumber' with service id 'getNumberRangejava7432'
	NumberRangeRepository.prototype.ReadNextNumber = function(params,onCompletion){
		return NumberRangeRepository.prototype.customVerb('ReadNextNumber',params, onCompletion);
	};
	//For Operation 'SetNextNumber' with service id 'setNumberRangeorch8532'
	NumberRangeRepository.prototype.SetNextNumber = function(params,onCompletion){
		return NumberRangeRepository.prototype.customVerb('SetNextNumber',params, onCompletion);
	};
	//For Operation 'DeleteNumberRange' with service id 'deleteNumberRangeorch6334'
	NumberRangeRepository.prototype.DeleteNumberRange = function(params,onCompletion){
		return NumberRangeRepository.prototype.customVerb('DeleteNumberRange',params, onCompletion);
	};
	
	
	return NumberRangeRepository;
})