define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function ProductRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	ProductRepository.prototype = Object.create(BaseRepository.prototype);
	ProductRepository.prototype.constructor = ProductRepository;

	//For Operation 'getUserProductList' with service id 'getUserProductList3202'
	ProductRepository.prototype.getUserProductList = function(params,onCompletion){
		return ProductRepository.prototype.customVerb('getUserProductList',params, onCompletion);
	};
	
	
	return ProductRepository;
})