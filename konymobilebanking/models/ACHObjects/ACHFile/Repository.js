define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function ACHFileRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	ACHFileRepository.prototype = Object.create(BaseRepository.prototype);
	ACHFileRepository.prototype.constructor = ACHFileRepository;

	//For Operation 'RejectedFiles' with service id 'FetchAllRejectedACHFiles3625'
	ACHFileRepository.prototype.RejectedFiles = function(params,onCompletion){
		return ACHFileRepository.prototype.customVerb('RejectedFiles',params, onCompletion);
	};
	//For Operation 'getFileDetailsByID' with service id 'FetchACHFileDetails8167'
	ACHFileRepository.prototype.getFileDetailsByID = function(params,onCompletion){
		return ACHFileRepository.prototype.customVerb('getFileDetailsByID',params, onCompletion);
	};
	
	
	return ACHFileRepository;
})