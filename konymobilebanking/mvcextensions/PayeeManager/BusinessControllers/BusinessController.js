/**
  * This is class named PayeeManager which handles all functions related to Payees in the application.
  */
  define([], function() {
function PayeeManager(){
	this.listOfPayees = [];
  	this.listOfBillerCompanies=[];
}

inheritsFrom(PayeeManager, kony.mvc.Business.Delegator);

PayeeManager.prototype.initializeBusinessController = function(){};

/**
  * fetch the list of payees using a service call.
  * @member of PayeeManager
  * @param {callBack} presentationSuccessCallback - invoke the call back with success response.
  * @param {callBack} presentationErrorCallback - invoke the call back with error response.
  */
PayeeManager.prototype.fetchPayeesList = function(presentationSuccessCallback,presentationErrorCallback)
{
	var self =this;
	var payeesRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Payee");
	payeesRepo.getAll(getAllCompletionCallback,"online");
	function  getAllCompletionCallback(status,  data,  error) {
		var srh = applicationManager.getServiceResponseHandler();
		var obj =  srh.manageResponse(status,  data,  error);
		if(obj.status === true){
			self.listOfPayees = obj.data;
			presentationSuccessCallback(obj.data);
		}
		else {
			presentationErrorCallback(obj.errmsg);
		}
	}
};


/**
  * Creates a payee using a service call.
  * @member of PayeeManager
  * @param {record} record -  record which has to be created.
  * @param {callBack} presentationSuccessCallback - invoke the call back with success response.
  * @param {callBack} presentationErrorCallback - invoke the call back with error response.
  */
PayeeManager.prototype.createPayee = function(record,presentationSuccessCallback,presentationErrorCallback)
{
    var payeeRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Payee");
  	payeeRepo.save (record,saveCompletionCallback,"online");
	function  saveCompletionCallback(status,  data,  error) {
    	var srh = applicationManager.getServiceResponseHandler();
    	var obj =  srh.manageResponse(status,  data,  error);
    	if(obj.status === true){
			presentationSuccessCallback(obj.data);
    	}
    	else {
      		presentationErrorCallback(obj.errmsg);
    	}
	}
};


/**
  * Fetches recent payees using a service call.
  * @member of PayeeManager
  * @param {callBack} presentationSuccessCallback - invoke the call back with success response.
  * @param {callBack} presentationErrorCallback - invoke the call back with error response.
  */
PayeeManager.prototype.getRecentPayees = function(presentationSuccessCallback,presentationErrorCallback)
{
    var self =this;
	var payeeRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Payee");
	payeeRepo.customVerb('getRecentPayee',{},getAllCompletionCallback);
	function  getAllCompletionCallback(status,  data,  error) {
    	var srh = applicationManager.getServiceResponseHandler();
    	var obj =  srh.manageResponse(status,  data,  error,presentationSuccessCallback,presentationErrorCallback);
    	if(obj.status === true){
			presentationSuccessCallback(obj.data);
    	}
    	else {
    	  	presentationErrorCallback(obj.errmsg);
    	}
	} 
};

/**
  * Updates the payee using a service call.
  * @member of PayeeManager
  * @param {record} record -  record which has to be updated.
  * @param {callBack} presentationSuccessCallback - invoke the call back with success response.
  * @param {callBack} presentationErrorCallback - invoke the call back with error response.
  */
PayeeManager.prototype.updatePayeeDetails = function(record,presentationSuccessCallback,presentationErrorCallback)
{
	var payeesRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Payee");
   	payeesRepo.partialUpdate(record,partialUpdateCompletionCallback,"online");
    function  partialUpdateCompletionCallback(status,  data,  error) {
    	var srh = applicationManager.getServiceResponseHandler();
    	var obj =  srh.manageResponse(status,  data,  error);
    	if(obj.status === true){
			presentationSuccessCallback(obj.data);
    	}
    	else {
      		presentationErrorCallback(obj.errmsg);
    	}
	} 
};


/**
  * Updates the payee using a service call.
  * @member of PayeeManager
  * @param {record} record -  record which has to be updated.
  * @param {callBack} presentationSuccessCallback - invoke the call back with success response.
  * @param {callBack} presentationErrorCallback - invoke the call back with error response.
  */
PayeeManager.prototype.deletePayeeById = function(payeeId,presentationSuccessCallback,presentationErrorCallback)
{
	var payeesRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Payee");
   	payeesRepo.removeById(payeesRepo,payeeId,partialUpdateCompletionCallback,"online");
    function  partialUpdateCompletionCallback(status,  data,  error) {
    	var srh = applicationManager.getServiceResponseHandler();
    	var obj =  srh.manageResponse(status,  data,  error);
    	if(obj.status === true){
			presentationSuccessCallback(obj.data);
    	}
    	else {
      		presentationErrorCallback(obj.errmsg);
    	}
	} 
};

/**
  * fetch the list of biller companies using a service call.
  * @member of PayeeManager
  * @param {callBack} presentationSuccessCallback - invoke the call back with success response.
  * @param {callBack} presentationErrorCallback - invoke the call back with error response.
  */
PayeeManager.prototype.fetchBillerCompaniesList = function(presentationSuccessCallback,presentationErrorCallback)
{
	var self =this;
	var payeesRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("BillerCompany");
	payeesRepo.getAll(getAllCompletionCallback,"online");
	function  getAllCompletionCallback(status,  data,  error) {
		var srh = applicationManager.getServiceResponseHandler();
		var obj =  srh.manageResponse(status,  data,  error);
		if(obj.status === true){
			self.listOfBillerCompanies = obj.data;
			presentationSuccessCallback(obj.data);
		}
		else {
			presentationErrorCallback(obj.errmsg);
		}
	}
};

/**
  * fetch the payee details by id 
  * @member of PayeeManager
  * @param {String} payeeId - Payee ID of a particular payee.
  * @returns {Json} - returns json of a particular payee from list of all payees.
  */
PayeeManager.prototype.fetchPayeeDetailsById = function(payeeId)
{
	for(var i=0;i<this.listOfPayees.length;i++){
		if(this.listOfPayees[i].payeeId == payeeId){
		  	return this.listOfPayees[i];
	  	}
  	}
  	return "";
};

return PayeeManager;
});