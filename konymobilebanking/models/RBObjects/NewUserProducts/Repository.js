define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function NewUserProductsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	NewUserProductsRepository.prototype = Object.create(BaseRepository.prototype);
	NewUserProductsRepository.prototype.constructor = NewUserProductsRepository;

	//For Operation 'getAllProducts' with service id 'getAllProducts6906'
	NewUserProductsRepository.prototype.getAllProducts = function(params,onCompletion){
		return NewUserProductsRepository.prototype.customVerb('getAllProducts',params, onCompletion);
	};
	
	
	return NewUserProductsRepository;
})