/**
*@module TransactionManager
 */
define([], function() {
   /**
   * Transaction Manager consists of all possible methods of Transactions and service calls regarding transactions.
   *@alias module:TransactionManager
   *@class
   */
function TransactionManager(){
  var modelDefinition=kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Transactions");
  this.transferObject=new modelDefinition();
 /**@member {OBJECT}  Contains all frequency types*/
 this.frequencyTypes={
        ONCE:"Once",
        WEEKLY:"Weekly",
        DAILY:"Daily",
        MONTHLY:"Monthly",
        BIWEEKLY:"BiWeekly",
        YEARLY:"Yearly",
        HALFYEARLY:"Half Yearly",
        QUARTERLY:"Quarterly",
        EVERYTWOWEEKS:"Every Two Weeks"
    
  };
}

inheritsFrom(TransactionManager, kony.mvc.Business.Delegator);

TransactionManager.prototype.initializeBusinessController = function(){};
  
/**
  * set an attribute in the transaction object.
  * @param {string} key , key in the transaction object.
  * @param {string} value , value to be assigned for the key in the transaction object.
  */  
TransactionManager.prototype.setTransactionAttribute = function(key,value)
{
  this.transferObject[key]=value;
};
  
/**
  * set a primary attribute in the transaction object.
  * @param {object} data , data consists of transactiond Id key value pair.
  */    
TransactionManager.prototype.setTransactionprimaryAttribute = function(data) {
        var modelDefinition = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Transactions");
        this.transferObject1 = new modelDefinition(data);
        for(var key in this.transferObject){
          if(key!=="transactionId")
            this.transferObject1[key]=this.transferObject[key];
        }
        this.transferObject=this.transferObject1;
    };
 

/**
  * used to get a transaction object.
  * @return {object} transferObject, entire Transaction Object.
  */  
 TransactionManager.prototype.getTransactionObject = function()
 {
   return this.transferObject;
 };

/**
  * used to set a transaction object.
  * @param {object} object, entire Transaction Object.
  */ 
 TransactionManager.prototype.setTransactionObject = function(object)
 {
    this.transferObject=object;
 };
  
/**
  * used to get available frequency types.
  * @return {object} frequencyTypes, Frequency Type object.
  */ 
 TransactionManager.prototype.getAvailableFrequencyType = function()
 {
   return this.frequencyTypes;
 }; 

/**
  * used to clear Transaction Object.
  */   
 TransactionManager.prototype.clearTransferObject = function()
 {
  var modelDefinition=kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Transactions");
  this.transferObject=new modelDefinition();

 };

/**
  * get Posted Transactions for a particular account using a service call.
  * @param {object} criteria , key value pair of Accound Id.
  * @param {function} presentationSuccessCallback , invoke the call back with success response.
  * @param {function} presentationErrorCallback , invoke the call back with error response.
  */
TransactionManager.prototype.fetchAccountPostedTransactions = function(criteria,presentationSuccessCallback, presentationErrorCallback) {

  var  postTran  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Transactions");
  postTran. customVerb("getAccountPostedTransactions", criteria,getAllCompletionCallback);

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
  * get Pending Transactions for a particular account using a service call.
  * @param {object} criteria , key value pair of Accound Id.
  * @param {function} presentationSuccessCallback , invoke the call back with success response.
  * @param {function} presentationErrorCallback , invoke the call back with error response.
  */
TransactionManager.prototype.fetchAccountPendingTransactions = function(criteria,presentationSuccessCallback, presentationErrorCallback) {

  var  pendTran  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Transactions");
  pendTran. customVerb("getAccountPendingTransactions", criteria,getAllCompletionCallback);

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
  * get Posted Transactions using a service call base on the search options.
  * @param {object} searchOptions , object consisting various key value pairs as filters.
  * @param {function} presentationSuccessCallback , invoke the call back with success response.
  * @param {function} presentationErrorCallback , invoke the call back with error response.
  */
TransactionManager.prototype.fetchPostedTransactions = function(searchOptions,presentationSuccessCallback, presentationErrorCallback){
    var  getPostedUserTransactions  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Transactions");
    getPostedUserTransactions.customVerb("getPostedUserTransactions", searchOptions,getAllCompletionCallback); 
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
  * get Pending Transactions using a service call base on the search options.
  * @param {object} searchOptions , object consisting various key value pairs as filters.
  * @param {function} presentationSuccessCallback , invoke the call back with success response.
  * @param {function} presentationErrorCallback , invoke the call back with error response.
  */
TransactionManager.prototype.fetchPendingTransactions = function(searchOptions,presentationSuccessCallback, presentationErrorCallback){
    var  getPendingUserTransactions  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Transactions");
    getPendingUserTransactions.customVerb("getPendingUserTransactions", searchOptions,getAllCompletionCallback); 
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
  * get Posted transfer and p2p transactions for a user using a service call.
  * @param {function} presentationSuccessCallback , invoke the call back with success response.
  * @param {function} presentationErrorCallback , invoke the call back with error response.
  */
TransactionManager.prototype.fetchUserpostedTransactions = function(presentationSuccessCallback, presentationErrorCallback){
    var  getPostedUserTransactions  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Transactions");
    getPostedUserTransactions.customVerb("getPostedTransfersAndP2pTransactions",{},getAllCompletionCallback); 
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
  * get Posted transfer and p2p transactions for a user using a service call.
  * @param {function} presentationSuccessCallback , invoke the call back with success response.
  * @param {function} presentationErrorCallback , invoke the call back with error response.
  */
TransactionManager.prototype.fetchUserScheduledTransactions = function(presentationSuccessCallback, presentationErrorCallback){
    var  getPendingUserTransactions  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Transactions");
    getPendingUserTransactions.customVerb("getScheduledTransferAndP2pTransactions",{},getAllCompletionCallback); 
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
  * create a Transaction.
  * @param {object} tranObj , object to create a transaction.
  * @param {function} presentationSuccessCallback , invoke the call back with success response.
  * @param {function} presentationErrorCallback , invoke the call back with error response.
  */
TransactionManager.prototype.createTransaction = function(tranObj,presentationSuccessCallback,presentationErrorCallback){
  var  transacObj  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Transactions");
  var transObj = this.convertDateFormat(tranObj);
  transacObj.save(transObj,saveCompletionCallback,"online");
     function  saveCompletionCallback(status,  data,  error) {
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
  * used to convert dates in transaction object to backend format.
  * @param {object} transactionObj , entire transaction object.
  * @return {object} transactionObj , transaction object after formating the dates.
  */
TransactionManager.prototype.convertDateFormat = function(transactionObj)
{
  if(transactionObj.scheduledDate)
     transactionObj.scheduledDate=this.convertDateToBackendFormat(transactionObj.scheduledDate);
  if(transactionObj.frequencyStartDate)
     transactionObj.frequencyStartDate=this.convertDateToBackendFormat(transactionObj.frequencyStartDate);
  if(transactionObj.frequencyEndDate)
     transactionObj.frequencyEndDate=this.convertDateToBackendFormat(transactionObj.frequencyEndDate);
  return transactionObj;
};

/**
  * used to convert date  to backend format.
  * @param {string} tempDate , date in string format.
  * @return {string} formattedDate , backend formated date in string format.
  */  
TransactionManager.prototype.convertDateToBackendFormat = function(tempDate)
{
     var formatUtil=applicationManager.getFormatUtilManager();
     var dateobj=formatUtil.getDateObjectFromCalendarString(tempDate,'MM/DD/YYYY');
     var formattedDate = formatUtil.getFormatedDateString(dateobj,formatUtil.BACKEND_DATE_FORMAT); 
     return formattedDate;
};

/**
  * get account posted transactions  for a external account using a service call.
  * @param {object} params , key value pairs required to fetch transactions 
  * @param {function} presentationSuccessCallback , invoke the call back with success response.
  * @param {function} presentationErrorCallback , invoke the call back with error response.
  */
TransactionManager.prototype.fetchAccountPostedExternalTransactions = function(params,presentationSuccessCallback, presentationErrorCallback) {

  var postedExternalTran  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("ExternalTransactionsAggregation");
  postedExternalTran.getByCriteria(params,getAllCompletionCallback);
  function  getAllCompletionCallback(status,  data,  error) {
    if(status === kony.mvc.constants.STATUS_FAILURE){
      presentationErrorCallback(data);
    }
    else{
  presentationSuccessCallback(data);
    }
    }
};

/**
  * get user bill pay scheduled Transactions using a service call.
  * @param {object} criteria , key value pairs to get user scheduled bills.
  * @param {function} presentationSuccessCallback , invoke the call back with success response.
  * @param {function} presentationErrorCallback , invoke the call back with error response.
  */
TransactionManager.prototype.fetchUserBillPayScheduledTransactions = function(criteria,presentationSuccessCallback, presentationErrorCallback){
    var  getPendingUserTransactions  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Transactions");
    getPendingUserTransactions.customVerb("getUsersScheduledBill",criteria,getAllCompletionCallback); 
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
  * get user Bill Pay Posted Transactions using a service call.
  * @param {object} criteria , key value pairs to get user scheduled bills.
  * @param {function} presentationSuccessCallback , invoke the call back with success response.
  * @param {function} presentationErrorCallback , invoke the call back with error response.
  */
TransactionManager.prototype.fetchUserBillPayPostedTransactions = function(criteria,presentationSuccessCallback, presentationErrorCallback){
    var  getPostedUserTransactions  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Transactions");
    getPostedUserTransactions.customVerb("getUserCompletedBillHistory",criteria,getAllCompletionCallback); 
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
  * get Pending Cardless Transactions for a account using a service call.
  * @param {function} presentationSuccessCallback , invoke the call back with success response.
  * @param {function} presentationErrorCallback , invoke the call back with error response.
  */
TransactionManager.prototype.fetchCardlessPendingTransactions = function(presentationSuccessCallback, presentationErrorCallback) {

  var  pendTran  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Transactions");
  pendTran. customVerb("getPendingCardlessTransactions",{},getAllCompletionCallback);

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
  * get Posted Cardless Transactions for a account using a service call.
  * @param {function} presentationSuccessCallback , invoke the call back with success response.
  * @param {function} presentationErrorCallback , invoke the call back with error response.
  */
TransactionManager.prototype.fetchCardlessPostedTransactions = function(presentationSuccessCallback, presentationErrorCallback) {

  var  pendTran  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Transactions");
  pendTran. customVerb("getPostedCardlessTransactions",{},getAllCompletionCallback);

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
  * search the input string in the contacts.
  * @param {string} inputString , used to search the array.
  * @param {Array} contactsArray , array in which the search for inputString is done.
  * @returns {Array} - Array of records with matched string.
  */
TransactionManager.prototype.searchInputStringForContactsList=function(inputString,contactsArray){
    var matchedData=[];
    if(contactsArray!==null && contactsArray!==undefined){
      for(var i=0;i<contactsArray.length;i++){
        if(contactsArray[i].firstname!=="" && contactsArray[i].firstname!==null && contactsArray[i].firstname!==undefined || 
          contactsArray[i].lastname!=="" && contactsArray[i].lastname!==null && contactsArray[i].lastname!==undefined){
            if(contactsArray[i].firstname && contactsArray[i].firstname.toLowerCase().indexOf(inputString)>=0){
              matchedData.push(contactsArray[i]);
            }
             else if(contactsArray[i].lastname && contactsArray[i].lastname.toLowerCase().indexOf(inputString)>=0 ){
              matchedData.push(contactsArray[i]);
            }
        }
      }
    }
    return matchedData;
};

/**
  * create cardless Transactions using a service call.
  * @param {object} criteria , record which is sent to create transaction.
  * @param {function} presentationSuccessCallback , invoke the call back with success response.
  * @param {function} presentationErrorCallback , invoke the call back with error response.
  */
TransactionManager.prototype.createCardlessTransaction = function(record,presentationSuccessCallback, presentationErrorCallback){
  var  transactionsRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Transactions");
  record.scheduledDate = this.convertDateToBackendFormat(record.scheduledDate);
  transactionsRepo.customVerb("createCardlessTransaction",record,getAllCompletionCallback); 
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
  * delete current Recurrence transaction using a service call.
  * @param {object} criteria , key value pair of transaction Id which is to be deleted.
  * @param {function} presentationSuccessCallback , invoke the call back with success response.
  * @param {function} presentationErrorCallback , invoke the call back with error response.
  */
TransactionManager.prototype.deleteRecurrenceTransaction = function(record,presentationSuccessCallback,presentationErrorCallback)
{
    var  transactionsRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Transactions");
    transactionsRepo.customVerb("cancelScheduledTransactionOccurrence",record,getAllCompletionCallback);
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
  * update a transaction using a service call.
  * @param {object} tranObj , key value pair which have to be updated for the transaction.
  * @param {function} presentationSuccessCallback , invoke the call back with success response.
  * @param {function} presentationErrorCallback , invoke the call back with error response.
  */
TransactionManager.prototype.updateTransaction = function(tranObj,presentationSuccessCallback,presentationErrorCallback){
  var  transacObj  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Transactions");
  var transObj = this.convertDateFormat(tranObj);
  for(var key in tranObj)
    {
      if(tranObj[key]==="")
        delete transObj[key];
    }
  transacObj.partialUpdate(transObj,updateCompletionCallback,"online");
     function  updateCompletionCallback(status,  data,  error) {
    var srh = applicationManager.getServiceResponseHandler();
    var obj =  srh.manageResponse(status,  data,  error);
    if(obj["status"] === true){
      presentationSuccessCallback(obj["data"]);
    }
    else {
      presentationErrorCallback(obj["errmsg"]);
    }
  }
};


/**
  * get Posted deposits  for an account using a service call.
  * @param {function} presentationSuccessCallback , invoke the call back with success response.
  * @param {function} presentationErrorCallback , invoke the call back with error response.
  */
TransactionManager.prototype.getPostedDeposits = function(presentationSuccessCallback, presentationErrorCallback) {

  var  transactionsRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Transactions");
  transactionsRepo.customVerb("getPostedDeposits",{},getAllCompletionCallback);

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
  * get Pending deposits  for an account using a service call.
  * @param {function} presentationSuccessCallback , invoke the call back with success response.
  * @param {function} presentationErrorCallback , invoke the call back with error response.
  */
TransactionManager.prototype.getPendingDeposits = function(presentationSuccessCallback, presentationErrorCallback) {

  var  transactionsRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Transactions");
  transactionsRepo.customVerb("getPendingDeposits",{},getAllCompletionCallback);

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
  * delete transaction using a service call.
  * @param {object} record ,  key value pair of transaction Id which is to be deleted.
  * @param {function} presentationSuccessCallback , invoke the call back with success response.
  * @param {function} presentationErrorCallback , invoke the call back with error response.
  */
TransactionManager.prototype.deleteTransaction = function(record,presentationSuccessCallback,presentationErrorCallback)
{
    var  transactionsRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Transactions");
  	transactionsRepo.customVerb("deleteTransaction",record,deleteCompletionCallback);
    function  deleteCompletionCallback(status,  data,  error) {
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
  * get Posted Transactions for an external account using a service call.
  * @param {object} criteria ,  key value pairs required to get posted transactions.
  * @param {function} presentationSuccessCallback , invoke the call back with success response.
  * @param {function} presentationErrorCallback , invoke the call back with error response.
  */
TransactionManager.prototype.fetchToExternalAccountTransactions = function(criteria,presentationSuccessCallback, presentationErrorCallback) {

  var  postTran  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Transactions");
  postTran.customVerb("getToExternalAccountTransactions", criteria,getAllCompletionCallback);

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
  * Fetch Wire Transcation of the user using a service call
  * @param {object} params - parameters for sorting|pagination|search
  * @param {string} [params.offset]  offset for pagination
  * @param {string} [params.searchString]  searchString for pagination
  * @param {string} [params.limit]  limit for pagination
  * @param {string} [params.sortBy]  sortBy parameter for sorting
  * @param {string} [params.order]  order for sorting asc or desc
  * @param {callBack} presentationSuccessCallback , invoke the call back with success response.
  * @param {callBack} presentationErrorCallback , invoke the call back with error response.
  */
 TransactionManager.prototype.fetchWireTransactions = function(params,presentationSuccessCallback, presentationErrorCallback) {
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
  var  transactionModel  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Transactions");
  transactionModel.customVerb("getUserWiredTransactions", params,getAllCompletionCallback);
};
/**
  * Fetch Wire Transcation of the user using a service call
  * @param {object} params - parameters for sorting|pagination|search
  * @param {string} [params.limit]  limit for pagination
  * @param {callBack} presentationSuccessCallback , invoke the call back with success response.
  * @param {callBack} presentationErrorCallback , invoke the call back with error response.
  */
 TransactionManager.prototype.fetchRecipientWireTransactions = function(params,presentationSuccessCallback, presentationErrorCallback) {
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
  var TransactionsModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Transactions");
  TransactionsModel.customVerb('getRecipientWireTransaction', params,  getAllCompletionCallback)
};


/**
  * get payed bills for a pyee.
  * @param {object}  -  payeeid of the payeee.
  * @param {function} presentationSuccessCallback - invoke the call back with success response.
  * @param {function} presentationErrorCallback - invoke the call back with error response.
  */
  TransactionManager.prototype.fetchPayeeBill = function(record,presentationSuccessCallback, presentationErrorCallback){
    var getPayeeBills = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Transactions");
    getPayeeBills.customVerb("getPayeeBills",record,getAllCompletionCallback); 
  function getAllCompletionCallback(status, data, error) {
    var srh = applicationManager.getServiceResponseHandler();
    var obj =  srh.manageResponse(status, data, error);
    if(obj["status"] === true){
      presentationSuccessCallback(obj["data"]);
    }
    else {
      presentationErrorCallback(obj["errmsg"]);
    }
  }
};  

/**
  * get pay a person sent transactions.
  * @param {object}  params-  an object with offset, limit, sortby, orderby values.
  * @param {function} presentationSuccessCallback - invoke the call back with success response.
  * @param {function} presentationErrorCallback - invoke the call back with error response.
  */

TransactionManager.prototype.fetchPayAPersonSentTransactions = function(params, presentationSuccessCallback, presentationErrorCallback) {

  var  transferRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Transactions");
  transferRepo.customVerb("getSentP2PTransactions",params,getAllCompletionCallback);

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
  * get recent Transactions for a User using a service call.
  * @param {object} command ,  key value pairs required to get recent transactions.
  * @param {function} presentationSuccessCallback , invoke the call back with success response.
  * @param {function} presentationErrorCallback , invoke the call back with error response.
  */
  TransactionManager.prototype.fetchUserRecentTransactions = function(command,presentationSuccessCallback, presentationErrorCallback){
    var self = this;

    var TransactionsModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Transactions");
    TransactionsModel.customVerb("getRecentUserTransactions", command, getAllCompletionCallback);

    function  getAllCompletionCallback(status,  data,  error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj =  srh.manageResponse(status,  data,  error);
      if(obj["status"] === true){
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }

  };
  
   
  /**
  * get scheduled Transactions for a User using a service call.
  * @param {object} command ,  key value pairs required to get scheduled transactions.
  * @param {function} presentationSuccessCallback , invoke the call back with success response.
  * @param {function} presentationErrorCallback , invoke the call back with error response.
  */
  TransactionManager.prototype.fetchScheduledUserTransactions = function(command,presentationSuccessCallback, presentationErrorCallback){
    var self = this;

    var TransactionsModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Transactions");
    TransactionsModel.customVerb("getScheduledUserTransactions", command, getAllCompletionCallback);

    function  getAllCompletionCallback(status,  data,  error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj =  srh.manageResponse(status,  data,  error);
      if(obj["status"] === true){
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };
  
  /**
   * used to create a bulk billPayement 
   * @param {array} transList list of transactions
   * @param {function} presentationSuccessCallback , invoke the call back with success response.
   * @param {function} presentationErrorCallback , invoke the call back with error response.
  */
   TransactionManager.prototype.createBulkBillPayPayement = function(transList,presentationSuccessCallback,presentationErrorCallback)
	{
	  var self = this;
	  var transactionModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition('Transactions');
	  transactionModel.customVerb('createBulkBillPay', {'bulkPayString': transList}, getAllCompletionCallback);
	  function  getAllCompletionCallback(status,  data,  error) {
		var srh = applicationManager.getServiceResponseHandler();
		var obj =  srh.manageResponse(status,  data,  error);
		if(obj["status"] === true){
		  presentationSuccessCallback(obj["data"]);
		}
		else {
		  presentationErrorCallback(obj["errmsg"]);
		}
	  }
	};

     
 /**
   * used to fetch the recipient activity.
   * @param {object} param - contains the information of payPersonID.
   * @param {function} presentationSuccessCallback , invoke the call back with success response.
   * @param {function} presentationErrorCallback , invoke the call back with error response.
  */
   TransactionManager.prototype.getRecipientActivity  = function(param, presentationSuccessCallback,presentationErrorCallback)
    {
     var TransactionModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Transactions");
            TransactionModel.customVerb('getPayPersonHistory', param , onCompletionCallback);
      function  onCompletionCallback(status,  data,  error) {
        var srh = applicationManager.getServiceResponseHandler();
        var obj =  srh.manageResponse(status,  data,  error);
        if(obj["status"] === true){
          presentationSuccessCallback(obj["data"]);
        }
        else {
          presentationErrorCallback(obj["errmsg"]);
        }
      }
    };

	
  /**
   * Makes Trail Deposit
   * @param {object} param - Account number
   * @param {function} presentationSuccessCallback , invoke the call back with success response.
   * @param {function} presentationErrorCallback , invoke the call back with error response.
  */
  TransactionManager.prototype.makeTrailDeposit  = function(param, presentationSuccessCallback,presentationErrorCallback)
    {
      var TransactionsModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Transactions");      
      TransactionsModel.customVerb("makeTrialDeposit", param, completionCallback);

      function  completionCallback(status,  data,  error) {
        var srh = applicationManager.getServiceResponseHandler();
        var obj =  srh.manageResponse(status,  data,  error);
        if(obj["status"] === true){
          presentationSuccessCallback(obj["data"]);
        }
        else {
          presentationErrorCallback(obj["errmsg"]);
        }
      }
    };
	
  /**
   * Verifies Trail Deposit
   * @param {object} param - Account Number
   * @param {function} presentationSuccessCallback , invoke the call back with success response.
   * @param {function} presentationErrorCallback , invoke the call back with error response.
  */
  TransactionManager.prototype.verifyTrailDeposit  = function(param, presentationSuccessCallback,presentationErrorCallback)
    {
      var TransactionsModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Transactions");      
      TransactionsModel.customVerb("makeTrialDeposit", param, completionCallback);

      function  completionCallback(status,  data,  error) {
        var srh = applicationManager.getServiceResponseHandler();
        var obj =  srh.manageResponse(status,  data,  error);
        if(obj["status"] === true){
          presentationSuccessCallback(obj["data"]);
        }
        else {
          presentationErrorCallback(obj["errmsg"]);
        }
      }
    };

/**
 * Method to fetch scheduled transactions for the logged in user
 * @param {function} presentationSuccessCallback Method that gets called in case of service success
 * @param {function} presentationErrorCallback Method that gets called in case of service failure
 */
TransactionManager.prototype.fetchScheduledTransaction = function(presentationSuccessCallback, presentationErrorCallback){
  function completionCallback(status,  data,  error) {
    var srh = applicationManager.getServiceResponseHandler();
    var obj =  srh.manageResponse(status,  data,  error);
    if(obj["status"] === true){
      presentationSuccessCallback(obj["data"]);
    }
    else {
      presentationErrorCallback(obj["errmsg"]);
    }
  }
  var TransactionModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Transactions");
  TransactionModel.customVerb("getUserScheduledTransactions", { }, completionCallback);  
}

/**
 * Method to fetch transactions by type
 * @param {JSON} inputParams input params like accountId, transactionType, offset, limit, sortBy and order
 * @param {function} presentationSuccessCallback Method that gets called in case of service success
 * @param {function} presentationErrorCallback Method that gets called in case of service failure
 */
TransactionManager.prototype.fetchAccountTransactionByType = function(inputParams, presentationSuccessCallback, presentationErrorCallback){
  function completionCallback(status,  data,  error) {
    var srh = applicationManager.getServiceResponseHandler();
    var obj =  srh.manageResponse(status,  data,  error);
    if(obj["status"] === true){
      presentationSuccessCallback(obj["data"]);
    }
    else {
      presentationErrorCallback(obj["errmsg"]);
    }
  }
  var TransactionModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Transactions");
  TransactionModel.customVerb("getAccountTransactionByType", inputParams, completionCallback);  
}

/**
   * Method to fetch transactions based on seach criteria
   * @param {Object} params MDA expression containing searchDescription, searchMinAmount, searchMaxAmount, accountNumber, searchType etc
   * @param {function} presentationSuccessCallback Method that gets invoked in case of service success
   * @param {function} presentationErrorCallback Method that gets invoked in case of service failure
   */
  TransactionManager.prototype.fetchTransactionsByCriteria = function (params, presentationSuccessCallback, presentationErrorCallback) {
    var postedExternalTran = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Transactions");
    postedExternalTran.getByCriteria(params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      if (status === kony.mvc.constants.STATUS_FAILURE) {
        presentationErrorCallback(error);
      }
      else {
        presentationSuccessCallback(data);
      }
    }
  };

/**
    * Method to fetch disputed transactions based on seach criteria
    * @param {Object} params MDA expression containing searchDescription, searchMinAmount, searchMaxAmount, accountNumber, searchType etc
    * @param {function} presentationSuccessCallback Method that gets invoked in case of service success
    * @param {function} presentationErrorCallback Method that gets invoked in case of service failure
    */
  TransactionManager.prototype.getDisputedTransactions = function (params, presentationSuccessCallback, presentationErrorCallback) {
    var getDisputedTran = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Transactions");
    getDisputedTran.customVerb("getDisputedTransactions", params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      if (status === kony.mvc.constants.STATUS_FAILURE) {
        presentationErrorCallback(error);
      }
      else {
        presentationSuccessCallback(data);
      }
    }
  };

  /**
  * Method to create disputed transactions based on seach criteria
  * @param {Object} params MDA expression containing searchDescription, searchMinAmount, searchMaxAmount, accountNumber, searchType etc
  * @param {function} presentationSuccessCallback Method that gets invoked in case of service success
  * @param {function} presentationErrorCallback Method that gets invoked in case of service failure
  */
  TransactionManager.prototype.createDisputedTransaction = function (params, presentationSuccessCallback, presentationErrorCallback) {
    var createDisputedTran = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Transactions");
    createDisputedTran.customVerb("createDisputedTransaction", params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      if (status === kony.mvc.constants.STATUS_FAILURE) {
        presentationErrorCallback(error);
      }
      else {
        presentationSuccessCallback(data);
      }
    }
  };
  /**
*  Method to fetch stop check request
* @param {Object} params MDA expression containing searchDescription, searchMinAmount, searchMaxAmount, accountNumber, searchType etc
* @param {function} presentationSuccessCallback Method that gets invoked in case of service success
* @param {function} presentationErrorCallback Method that gets invoked in case of service failure
*/
  TransactionManager.prototype.getStopCheckPaymentRequests = function (params, presentationSuccessCallback, presentationErrorCallback) {
    var createDisputedTran = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Transactions");
    createDisputedTran.customVerb("getStopCheckPaymentRequestTransactions", params, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      if (status === kony.mvc.constants.STATUS_FAILURE) {
        presentationErrorCallback(error);
      }
      else {
        presentationSuccessCallback(data);
      }
    }
  };
return TransactionManager;
});