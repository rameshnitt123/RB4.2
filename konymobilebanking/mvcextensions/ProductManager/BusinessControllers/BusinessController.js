/**
*@module ProductManager
 */
define([], function() {

  /**
   * Product Manager consists of all possible methods of products related service calls
   *@alias module:ProductManager
   *@class
   */
function ProductManager() {
  scope=this;
  
  /**@member {object} products Contains list of products*/
  this.products=null;
}

inheritsFrom(ProductManager, kony.mvc.Business.Delegator);

ProductManager.prototype.initializeBusinessController = function(){};

/**
  * set different type of products 
  * @returns {array} - list of products with their description
  **/
ProductManager.prototype.setProductsList=function(response)
{
  scope.products=response;
}
/**
  * Returns different type of products 
  * @returns {array} - list of products with their description
  **/
ProductManager.prototype.getProductsList = function() {
  return scope.products;
};
/**
  * Returns different type of products 
  * @returns {array} - list of products with their description
  **/
ProductManager.prototype.fetchProductsList = function(presentationSuccessCallback, presentationErrorCallback) {

  var  usrProducts  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Products");
  // usrProducts.getAllProducts(getAllCompletionCallback);
 // usrProducts. customVerb("getAllProducts",{},getAllCompletionCallback);getProductList
  usrProducts. customVerb("getProductList",{},getAllCompletionCallback);

  function  getAllCompletionCallback(status,  data,  error) {
    var srh = applicationManager.getServiceResponseHandler();
    var obj =  srh.manageResponse(status,  data,  error);
    if(obj["status"] === true){

      presentationSuccessCallback(obj["data"]["records"]);
    }
    else {
      presentationErrorCallback(obj["errmsg"]);
    }
  }
};

/**
  * Returns  list of products user selected 
  * @returns {array} - list of products with their description
  **/  
ProductManager.prototype.getUserProductsList = function(presentationSuccessCallback, presentationErrorCallback) {

  var  usrProducts  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("NewUserProducts");
  usrProducts.getAll(getAllCompletionCallback);

  function  getAllCompletionCallback(status,  data,  error) {
    var srh = applicationManager.getServiceResponseHandler();
    var obj =  srh.manageResponse(status,  data,  error);
    if(obj["status"] === true){
      presentationSuccessCallback(obj["data"]);
    }
    else {
      presentationErrorCallback(obj["errmsg"]);
    }
  }
};

/**
  * creates an entry of products user selected into the user table  
  * @param {String} - stringified the list of selected product by the user
  **/ 
ProductManager.prototype.createSelectedProductsList = function(params,presentationSuccessCallback, presentationErrorCallback) {

  var  usrProducts  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("NewUserProducts");
  usrProducts.save (params,getAllCompletionCallback);

  function  getAllCompletionCallback(status,  data,  error) {
    var srh = applicationManager.getServiceResponseHandler();
    var obj =  srh.manageResponse(status,  data,  error);
    if(obj["status"] === true){
      presentationSuccessCallback(obj["data"]);
    }
    else {
      presentationErrorCallback(obj["errmsg"]);
    }
  }
};

return ProductManager;
});