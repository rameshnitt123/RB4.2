define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function ProductsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	ProductsRepository.prototype = Object.create(BaseRepository.prototype);
	ProductsRepository.prototype.constructor = ProductsRepository;

	//For Operation 'getProductList' with service id 'getProductList5507'
	ProductsRepository.prototype.getProductList = function(params,onCompletion){
		return ProductsRepository.prototype.customVerb('getProductList',params, onCompletion);
	};
	
	
	return ProductsRepository;
})