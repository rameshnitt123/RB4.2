/**
*@module AccountManager
 */
 
define([], function() {
  /**
   * AccountManager is the class used to hold the information about all internal and external accounts.
   *@alias module:AccountManager
   *@class
   */
 function AccountManager() {
    /**@member {Array} internalAccounts Contains data of all internal accounts*/
    this.internalAccounts = [];
    /**@member {Array} externalAccounts Contains data of all external accounts*/
   this.externalAccounts = [];
    /**@member {Array} fromTransferSupportedAccounts Contains data of all internal accounts which supports Transfers from them */
     this.fromTransferSupportedAccounts = [];
    /**@member {Array} toTransferSupportedAccounts Contains data of all internal accounts which supports Transfers to them*/
    this.toTransferSupportedAccounts = [];
    /**@member {Array} billPaySupportedAccounts Contains data of all internal accounts which supports BillPay from them */
    this.billPaySupportedAccounts = [];
    /**@member {Array} depositSupportedAccounts Contains data of all internal accounts which supports deposits to them*/
    this.depositSupportedAccounts = [];
    /**@member {Array} cardLessWithdrawlSupportedAccounts Contains data of all internal accounts which supports cardless cash withdrawal  from them*/
    this.cardLessWithdrawlSupportedAccounts = [];
    /**@member {Array} myMoneySupportedAccounts Contains data of all internal accounts which supports MyMoney */
    this.myMoneySupportedAccounts = [];
   	/**@member {Array} internationalAccounts Contains data of all international ExternalAccounts*/
    this.internationalAccounts = [];
    /**@member {Array} domesticAccounts Contains data of all domestic ExternalAccounts*/
    this.domesticAccounts = []; 
}

inheritsFrom(AccountManager, kony.mvc.Business.Delegator);

AccountManager.prototype.initializeBusinessController = function(){};
/**
 * Gets the Internal Accounts stored in the class.
 * @returns {Array} - Array of records of internalAccounts.
 */
AccountManager.prototype.getInternalAccounts = function() {
    if (this.internalAccounts.length === 0)
        return "";
    else
        return this.internalAccounts;
};


/**
 * Gets the External Accounts stored in the class.
 * @returns {Array} - Array of records of externalAccounts.
 */
AccountManager.prototype.getExternalAccounts = function() {
    if (this.externalAccounts.length === 0)
        return "";
    else
        return this.externalAccounts;
};


/**
 * Gets both the Internal & External Accounts stored in the class.
 * @returns  {Object} - object with Internal & externalAccounts.
 */
AccountManager.prototype.getAllAccounts = function() {
    if (this.externalAccounts.length === 0 && this.internalAccounts.length === 0)
        return "";
    else {
        var allAccounts = {};
        allAccounts.internalAccounts = this.internalAccounts;
        allAccounts.externalAccounts = this.externalAccounts;
        return allAccounts;
    }

};

/**
 * Gets all the accounts stored in the class which supports Transfers from them .
 * @returns {Array} - Array of records of fromTransfer Supported Accounts.
 */
AccountManager.prototype.getFromTransferSupportedAccounts = function() {
    if (this.fromTransferSupportedAccounts.length === 0)
        return "";
    else
        return this.fromTransferSupportedAccounts;
};


/**
 * Gets all the accounts stored in the class which supports Transfers to them .
 * @returns {Array} - Array of records of toTransfer Supported Accounts.
 */
AccountManager.prototype.getToTransferSupportedAccounts = function() {
    if (this.toTransferSupportedAccounts.length === 0)
        return "";
    else
        return this.toTransferSupportedAccounts;
};


/**
 * Gets all the  accounts stored in the class which supports BillPay from them.
 * @returns {Array} - Array of records of Bill Pay Supported Accounts.
 */
AccountManager.prototype.getBillPaySupportedAccounts = function() {
    if (this.billPaySupportedAccounts.length === 0)
        return "";
    else
        return this.billPaySupportedAccounts;
};


/**
 * Gets all the  accounts stored in the class which supports Deposits to them.
 * @returns {Array} - Array of records of Deposit Supported Accounts.
 */
AccountManager.prototype.getDepositSupportedAccounts = function() {
    if (this.depositSupportedAccounts.length === 0)
        return "";
    else
        return this.depositSupportedAccounts;
};


/**
 * Gets all the  accounts stored in the class which support card less cash withdrawl.
 * @returns {Array} - Array of records of  Card Less Withdrawl Supported Accounts.
 */
AccountManager.prototype.getCardLessWithdrawlSupportedAccounts = function() {
    if (this.cardLessWithdrawlSupportedAccounts.length === 0)
        return "";
    else
        return this.cardLessWithdrawlSupportedAccounts;
};


/**
 * Gets the myMoney supported accounts stored in the class.
 * @returns {Array} - Array of records of my money Supported Accounts.
 */
AccountManager.prototype.getMyMoneySupportedAccounts = function() {
    if (this.myMoneySupportedAccounts.length === 0)
        return "";
    else
        return this.myMoneySupportedAccounts;
};


/**
 * Gets the preffered account for transfers.
 * @returns {Object} - Transfers preferred account.
 */
AccountManager.prototype.getTransfersPreferredAccount = function() {
    var userObj = applicationManager.getUserPreferencesManager();
    var transferPreferedAccountId = userObj.getDefaultAccountforTransfers();
    if (transferPreferedAccountId === null || transferPreferedAccountId === undefined || transferPreferedAccountId === "")
        return "";
    else {
        for (var i = 0; i < this.fromTransferSupportedAccounts.length; i++) {
            if (this.fromTransferSupportedAccounts[i].accountID === transferPreferedAccountId)
                return this.fromTransferSupportedAccounts[i];
        }
    }
};


/**
 * Gets the preffered account for Bill pay.
 * @returns {Object} - Bill pay preferred account.
 */
AccountManager.prototype.getBillPayPreferredAccount = function() {
    var userObj = applicationManager.getUserPreferencesManager();
    var billPayPreferedAccountId = userObj.getDefaultAccountforBillPay();
    if (billPayPreferedAccountId === null || billPayPreferedAccountId === undefined || billPayPreferedAccountId === "")
        return "";
    else {
        for (var i = 0; i < this.billPaySupportedAccounts.length; i++) {
            if (this.billPaySupportedAccounts[i].accountID === billPayPreferedAccountId)
                return this.billPaySupportedAccounts[i];
        }
    }
};


/**
 * Gets the preffered account for card less withdrawl.
 * @returns {Object} - card less withdrawl preferred account.
 */
AccountManager.prototype.getCardlessPreferredAccount = function() {
    var userObj = applicationManager.getUserPreferencesManager();
    var cardlessPreferedAccountId = userObj.getDefaultAccountforCardlessPayments();
    if (cardlessPreferedAccountId === null || cardlessPreferedAccountId === undefined || cardlessPreferedAccountId === "")
        return "";
    else {
        for (var i = 0; i < this.cardLessWithdrawlSupportedAccounts.length; i++) {
            if (this.cardLessWithdrawlSupportedAccounts[i].accountID === cardlessPreferedAccountId)
                return this.cardLessWithdrawlSupportedAccounts[i];
        }
    }
};


/**
 * Gets the preffered account for Deposit.
 * @returns {Object} - Deposit preferred account.
 */
AccountManager.prototype.getDepositPreferredAccount = function() {
    var userObj = applicationManager.getUserPreferencesManager();
    var depositPreferedAccountId = userObj.getDefaultAccountforDeposit();
    if (depositPreferedAccountId === null || depositPreferedAccountId === undefined || depositPreferedAccountId === "")
        return "";
    else {
        for (var i = 0; i < this.depositSupportedAccounts.length; i++) {
            if (this.depositSupportedAccounts[i].accountID === depositPreferedAccountId)
                return this.depositSupportedAccounts[i];
        }
    }
};


/**
 * Splits the internal accounts and populate arrays in the class depending on their support type .
 * @param {Array} internalAccounts - Array of Internal Accounts.
 */
AccountManager.prototype.splitInternalAccounts = function(internalAccounts) {
    this.internalAccounts = internalAccounts;
    for (var i = 0; i < internalAccounts.length; i++) {
        if (internalAccounts[i].supportTransferFrom === "1")
            this.fromTransferSupportedAccounts.push(internalAccounts[i]);
        if (internalAccounts[i].supportBillPay === "1")
            this.billPaySupportedAccounts.push(internalAccounts[i]);
        if (internalAccounts[i].supportTransferTo === "1")
            this.toTransferSupportedAccounts.push(internalAccounts[i]);
        if (internalAccounts[i].supportDeposit === "1")
            this.depositSupportedAccounts.push(internalAccounts[i]);
        if (internalAccounts[i].supportCardlessCash === "1")
            this.cardLessWithdrawlSupportedAccounts.push(internalAccounts[i]);
        if (internalAccounts[i].isPFM === "true")
            this.myMoneySupportedAccounts.push(internalAccounts[i]);

    }
};

/**
 * split the external accounts and populate arrays in the class.
 * @param {Array} internalAccounts - Array of external Accounts.
 */
AccountManager.prototype.splitExternalAccount = function(externalAccounts) {
  	this.internationalAccounts =[];
  	this.domesticAccounts = [];
    this.externalAccounts = externalAccounts;
    for (var i = 0; i < externalAccounts.length; i++) {
      if(externalAccounts[i].isInternationalAccount === "true")
      {
        this.internationalAccounts.push(externalAccounts[i]);
      }
      else
      {
        this.domesticAccounts.push(externalAccounts[i]);
      }
    }
};

/**
 * Clears all the Accounts class arrays.
 */
AccountManager.prototype.clearInternalAccounts = function() {
    this.billPaySupportedAccounts = [];
    this.cardLessWithdrawlSupportedAccounts = [];
    this.depositSupportedAccounts = [];
    this.fromTransferSupportedAccounts = [];
    this.toTransferSupportedAccounts = [];
    this.myMoneySupportedAccounts = [];
};
/**
 * Gets a particular account from Internal Accounts array
 * @param {String} accoundID - Account ID of a particular account.
 * @returns {Object} - returns object of a particular account from internal accounts.
 */
AccountManager.prototype.getInternalAccountByID = function(accoundID) {
    for (var i = 0; i < this.internalAccounts.length; i++) {
        if (this.internalAccounts[i].accountID == accoundID) {
            return this.internalAccounts[i];
        }
    }
    return "";
};


/**
 * Gets a particular account from External Accounts array
 * @param {String} accoundID - Account ID of a particular account.
 * @returns {Object} - returns object of a particular account from External accounts.
 */
AccountManager.prototype.getExternalAccountByID = function(accoundID) {
    for (var i = 0; i < this.externalAccounts.length; i++) {
        if (this.externalAccounts[i].accountNumber == accoundID) {
            return this.externalAccounts[i];
        }
    }
    return "";
};


/**
 * Fetches the Internal Accounts using a service call.
 * @param {Function} presentationSuccessCallback - will be called when call is successfull.
 * @param {Function} presentationErrorCallback - will be called when call is not successfull.
 */
AccountManager.prototype.fetchInternalAccounts = function(presentationSuccessCallback, presentationErrorCallback) {
    var self = this;
    var accountsRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Accounts");
    accountsRepo.customVerb('getAccountsPostLogin', {}, getAllCompletionCallback);

    function getAllCompletionCallback(status, data, error) {
        var srh = applicationManager.getServiceResponseHandler();
        var obj = srh.manageResponse(status, data, error);
        if (obj["status"] === true) {
            self.clearInternalAccounts();
            self.splitInternalAccounts(obj["data"]);
            presentationSuccessCallback(obj["data"]);
        } else {
            presentationErrorCallback(obj["errmsg"]);
        }
    }

};

  /**
 * fetches the External Accounts using a service call.
* @param {Function} presentationSuccessCallback - will be called when call is successfull.
  * @param {Function} presentationErrorCallback - will be called when call is not successfull.
 */
AccountManager.prototype.fetchExternalAccounts = function(presentationSuccessCallback, presentationErrorCallback) {
    var loggerManager = applicationManager.getLoggerManager();

    function getAllCompletionCallback(status, data, error) {
        var serviceResponseHandler = applicationManager.getServiceResponseHandler();
        var responseObject = serviceResponseHandler.manageResponse(status, data, error);
        if (responseObject["status"] === true) {
            self.splitExternalAccount(responseObject["data"]);
            presentationSuccessCallback(responseObject["data"]);            
        } else {
            presentationErrorCallback(responseObject["errmsg"]);
        }
    }
    try {
        loggerManager.log("#### start accountManager : fetchExternalAccounts ####");
        var self = this;
        var externalAccountsRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("ExternalAccounts");
        externalAccountsRepo.getAll(getAllCompletionCallback, "online");
    } catch (err) {
        loggerManager.log("#### in catch " + JSON.stringify(err) + " ####");
    }
};
  /**
 * fetches the External Accounts by criteria using a service call.
* @param {Function} presentationSuccessCallback - will be called when call is successfull.
  * @param {Function} presentationErrorCallback - will be called when call is not successfull.
 */
AccountManager.prototype.fetchExternalAccountsByCriteria = function(criteria, presentationSuccessCallback, presentationErrorCallback) {
    var loggerManager = applicationManager.getLoggerManager();

    function getAllCompletionCallback(status, data, error) {
        var serviceResponseHandler = applicationManager.getServiceResponseHandler();
        var responseObject = serviceResponseHandler.manageResponse(status, data, error);
        if (responseObject["status"] === true) {
            presentationSuccessCallback(responseObject["data"]);            
        } else {
            presentationErrorCallback(responseObject["errmsg"]);
        }
    }
    try {
        loggerManager.log("#### start accountManager : fetchExternalAccounts ####");
        var self = this;
        var externalAccountsRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("ExternalAccounts");
        externalAccountsRepo.getByCriteria(criteria, getAllCompletionCallback, "online");
    } catch (err) {
        loggerManager.log("#### in catch " + JSON.stringify(err) + " ####");
    }
};


/**
 * Fetches the Internal Accounts before login to check quick balances using a service call .
 * @param {object} record - username and device Id of the user 
 * @param {Function} presentationSuccessCallback - will be called when call is successfull.
 * @param {Function} presentationErrorCallback - will be called when call is not successfull.
 */
AccountManager.prototype.fetchInternalAccountsPreLogin = function(criteria, presentationSuccessCallback, presentationErrorCallback) {
    var self = this;
    var accountsRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Accounts");
    accountsRepo.getByCriteria(criteria, getAllCompletionCallback);

    function getAllCompletionCallback(status, data, error) {
        var srh = applicationManager.getServiceResponseHandler();
        var obj = srh.manageResponse(status, data, error);
        if (obj["status"] === true) {
            presentationSuccessCallback(obj["data"]);
        } else {
            presentationErrorCallback(obj["errmsg"]);
        }
    }

};


/**
 * Updates the nickname of a particular account using a service call.
 * @param {object} record -  record with updated nickname and accountId.
 * @param {Function} presentationSuccessCallback - will be called when call is successfull.
 * @param {Function} presentationErrorCallback - will be called when call is not successfull.
 */
AccountManager.prototype.updateNickName = function(record, presentationSuccessCallback, presentationErrorCallback) {
    var accountsRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Accounts");
    accountsRepo.partialUpdate(record, partialUpdateCompletionCallback, "online");

    function partialUpdateCompletionCallback(status, data, error) {
        var srh = applicationManager.getServiceResponseHandler();
        var obj = srh.manageResponse(status, data, error);
        if (obj["status"] === true) {
            presentationSuccessCallback(obj["data"]);
        } else {
            presentationErrorCallback(obj["errmsg"]);
        }
    }
};


/**
 * Creates an external account using a service call.
 * @param {object} record -  record which has to be created.
 * @param {Function} presentationSuccessCallback - will be called when call is successfull.
 * @param {Function} presentationErrorCallback - will be called when call is not successfull.
 */
AccountManager.prototype.createExternalAccounts = function(record, presentationSuccessCallback, presentationErrorCallback) {
    var externalAccountRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("ExternalAccounts");
    externalAccountRepo.save(record, saveCompletionCallback, "online");

    function saveCompletionCallback(status, data, error) {
        var srh = applicationManager.getServiceResponseHandler();
        var obj = srh.manageResponse(status, data, error);
        if (obj["status"] === true) {
            presentationSuccessCallback(obj["data"]);
        } else {
            presentationErrorCallback(obj["errmsg"]);
        }
    }
};


/**
 * Fetches internal accounts to which transfers are done recently using a service call.
* @param {Function} presentationSuccessCallback - will be called when call is successfull.
  * @param {Function} presentationErrorCallback - will be called when call is not successfull.
 */
AccountManager.prototype.getRecentAccounts = function(presentationSuccessCallback, presentationErrorCallback) {

    var self = this;
    var accountsRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Accounts");
    accountsRepo.customVerb('getRecentAccounts', {}, getAllCompletionCallback);

    function getAllCompletionCallback(status, data, error) {
        var srh = applicationManager.getServiceResponseHandler();
        var obj = srh.manageResponse(status, data, error, presentationSuccessCallback, presentationError);
        if (obj["status"] === true) {
            presentationSuccessCallback(obj["data"]);
        } else {
            presentationErrorCallback(obj["errmsg"]);
        }
    }
};


/**
 * Updates nickname of a account locally i.e., data stored in class.
 * @param {object} data containing account Id and nick name to update the object.
 */
AccountManager.prototype.updateNickNameLocally = function(data) {
    for (i = 0; i < this.internalAccounts.length; i++) {
        if (this.internalAccounts[i].accountID === data.accountID) {
            this.internalAccounts[i].nickName = data.nickName;
        }
    }
};

/**
 * Fetches account statments URL for the given criteria using a service call.
 * @param {object} -data containing account Id ,year and month for which statements to be fetched .
 */
AccountManager.prototype.fetchAccountStatments = function(criteria, presentationSuccessCallback, presentationErrorCallback) {

    var accStatements = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("AccountStatement");
    accStatements.customVerb("showDownloadStatements", criteria, getAllCompletionCallback);

    function getAllCompletionCallback(status, data, error) {
        var srh = applicationManager.getServiceResponseHandler();
        var obj = srh.manageResponse(status, data, error);
        if (obj["status"] === true) {
            presentationSuccessCallback(obj["data"]);
        } else {
            presentationErrorCallback(obj["errmsg"]);
        }
    }
};

/**
 * Fetches the External Accounts using a service call.
 * @param {object} data containing username of the signed in user.
* @param {Function} presentationSuccessCallback - will be called when call is successfull.
  * @param {Function} presentationErrorCallback - will be called when call is not successfull.
 */
AccountManager.prototype.fetchExternalAccountsData = function(username, presentationSuccessCallback, presentationErrorCallback) {

    function getAllCompletionCallback(status, data, error) {
        var serviceResponseHandler = applicationManager.getServiceResponseHandler();
        var responseObject = serviceResponseHandler.manageResponse(status, data, error);
        if (responseObject["status"] === true) {
            presentationSuccessCallback(responseObject["data"]);
        } else {
            presentationErrorCallback(responseObject["errmsg"]);
        }
    }

    var loggerManager = applicationManager.getLoggerManager();
    try {
        loggerManager.log("#### start frmExternalAccountDetailsController : setAccountDetails ####");
        var self = this;
        var params;
        var accountsRepo = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("RefreshAccountsFromDB");
        if (username && (username !== undefined || String(username).trim() !== "")) {
            params = kony.mvc.Expression.eq("main_user", username);
        } else {
            presentationErrorCallback("invalid username");
            return;
        }
        accountsRepo.getByCriteria(params, getAllCompletionCallback);
    } catch (err) {
        loggerManager.log("#### in catch " + JSON.stringify(err) + " ####");
    }
};
/**
 * Adds external accounts to the signed in user using a service call. 
 * @param {object} record -  record which has to be created.
* @param {Function} presentationSuccessCallback - will be called when call is successfull.
  * @param {Function} presentationErrorCallback - will be called when call is not successfull.
 */
AccountManager.prototype.addExternalAccounts = function(record, presentationSuccessCallback, presentationErrorCallback) {

    function  saveCompletionCallback(status,  data,  error) {
        var serviceResponseHandler = applicationManager.getServiceResponseHandler();
        var responseObject = serviceResponseHandler.manageResponse(status,  data,  error);
        if (responseObject["status"] === true) {
            presentationSuccessCallback(responseObject["data"]);
        } else {
            presentationErrorCallback(responseObject["error"]);
        }
    }
    var loggerManager = applicationManager.getLoggerManager();
    try {
        loggerManager.log("#### start frmExternalAccountDetailsController : setAccountDetails ####");
        var externalAccountsModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("SelectedAccounts");
        var newExternalAccount = new externalAccountsModel(record);
        newExternalAccount.save(saveCompletionCallback, "online");
    } catch (err) {
        loggerManager.log("#### in catch " + JSON.stringify(err) + " ####");
    }
};
/**
 * Fetches  External Banks using a service call. 
 * @param {Function} successCallback - invoke the call back with success response.
 * @param {Function} errorCallback - invoke the call back with error response.
 */
AccountManager.prototype.fetchExternalBanks = function(successCallback, errorCallback) {

    function getAllCompletionCallback(status, data, error) {
        var serviceResponseHandler = applicationManager.getServiceResponseHandler();
        var responseObject = serviceResponseHandler.manageResponse(status, data, error, successCallback, successCallback);
        if (responseObject["status"] === true) {
            successCallback(responseObject["data"]);
        } else {
            errorCallback(responseObject["errmsg"]);
        }
    }

    var loggerManager = applicationManager.getLoggerManager();
    try {
        loggerManager.log("#### start accountManager : fetchExternalBanks ####");

        var self = this;
        var externalBanks = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("ExternalBanks");
        externalBanks.getAll(getAllCompletionCallback);
    } catch (err) {
        loggerManager.log("#### in catch " + JSON.stringify(err) + " ####");
    }
};
/**
 * Fetches the  Accounts in external banks of a particular external user using a service call.
 * @param {object} data containing username of the signed in user, username for the external bank, id of the external bank.
* @param {Function} presentationSuccessCallback - will be called when call is successfull.
  * @param {Function} presentationErrorCallback - will be called when call is not successfull.
 */

AccountManager.prototype.fetchAccountsFromAnExternalBank = function(externBankDetails, presentationSuccessCallback, presentationErrorCallback) {

    function getAllCompletionCallback(status, data, error) {
        var serviceResponseHandler = applicationManager.getServiceResponseHandler();
        var responseObject = serviceResponseHandler.manageResponse(status, data, error);
        if (responseObject["status"] === true) {
            presentationSuccessCallback(responseObject["data"]);
        } else {
            presentationErrorCallback(responseObject["errmsg"]);
        }
    }
    var loggerManager = applicationManager.getLoggerManager();
    try {
        loggerManager.log("#### start accountManager : fetchAccountsFromAnExternalBank ####");
        var self = this;
        var ExternalAccountsAggregationModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("ExternalAccountsAggregation");
        var criteria = kony.mvc.Expression.and(
            kony.mvc.Expression.eq("main_user", externBankDetails.mainUser),
            kony.mvc.Expression.eq("username", externBankDetails.userName),
            kony.mvc.Expression.eq("bank_id", externBankDetails.bankId)
        );

        ExternalAccountsAggregationModel.getByCriteria(criteria, getAllCompletionCallback);
    } catch (err) {
        loggerManager.log("#### in catch " + JSON.stringify(err) + " ####");
    }
};

/**
 * Fetches all the external accounts added to the signed in user from local database.
 * @param {object} data containing userid of the signed in user.
* @param {Function} presentationSuccessCallback - will be called when call is successfull.
  * @param {Function} presentationErrorCallback - will be called when call is not successfull.
 */  
AccountManager.prototype.getUserAccounts = function(user_id, userAccountsSuccess, userAccountsFailure) {

    function getAllCompletionCallback(status,  data,  error) {
        if (status == kony.mvc.constants.STATUS_SUCCESS) {
            userAccountsSuccess(data);
        } else {
            userAccountsFailure(data);
        }
    }
    var self = this;
    var accountsRepo  =  kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("RefreshAccountsFromDB");
    var params = kony.mvc.Expression.eq("main_user", user_id);
    accountsRepo.getByCriteria(params, getAllCompletionCallback);

};
/**
 * Fetches all the external accounts added to the signed in user from external banks.
 * @param {object} data containing userid of the signed in user.
* @param {Function} presentationSuccessCallback - will be called when call is successfull.
  * @param {Function} presentationErrorCallback - will be called when call is not successfull.
 */ 
AccountManager.prototype.getUserAccountsRealTime = function(user_id, userAccountsRealTimeSuccess, userAccountsRealTimeFailure) {
    function getAllCompletionCallback(status,  data,  error) {
        if (status == kony.mvc.constants.STATUS_SUCCESS) {
            userAccountsRealTimeSuccess(data);
        } else {
            userAccountsRealTimeFailure(error);
        }
    }
    var self = this;
    var accountsRepo  =  kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("RefreshAccounts");
    var params = kony.mvc.Expression.eq("main_user", user_id);
    accountsRepo.getByCriteria(params, getAllCompletionCallback);

};

/**
 * Fetches  External Account details using a service call. 
 * @param {object} data containing username of the signed in user, username, bank id and account name for the external bank.
* @param {Function} presentationSuccessCallback - will be called when call is successfull.
  * @param {Function} presentationErrorCallback - will be called when call is not successfull.
 */


AccountManager.prototype.fetchExternalAccountDetails = function(inputParameters, presentationSuccessCallback, presentationErrorCallback) {
    function getAllCompletionCallback(status, data, error) {
        var serviceResponseHandler = applicationManager.getServiceResponseHandler();
        var responseObject = serviceResponseHandler.manageResponse(status, data, error);
        if (responseObject["status"] === true) {
            presentationSuccessCallback(responseObject["data"]);
        } else {
            presentationErrorCallback(responseObject["errmsg"]);
        }
    }

    var loggerManager = applicationManager.getLoggerManager();
    try {
        loggerManager.log("#### start accountManager : fetchExternalAccountDetails ####");
        var self = this;
        var params;
        var singleAccountDetailsModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("SingleAccountDetails");
        var criteria = kony.mvc.Expression.and(
            kony.mvc.Expression.eq("main_user", inputParameters.mainUser),
            kony.mvc.Expression.eq("username", inputParameters.userName),
            kony.mvc.Expression.eq("bank_id", inputParameters.bankId),
            kony.mvc.Expression.eq("account", inputParameters.accountName)
        );
        singleAccountDetailsModel.getByCriteria(criteria, getAllCompletionCallback);
    } catch (err) {
        loggerManager.log("#### in catch " + JSON.stringify(err) + " ####");
    }
};
  /**
 * Deletes an External Account using a service call. 
 * @param {object} data containing username of the signed in user, username, bank id and account name for the external bank,loopcount-no of acconts to be deleted.
* @param {Function} presentationSuccessCallback - will be called when call is successfull.
  * @param {Function} presentationErrorCallback - will be called when call is not successfull.
 */

AccountManager.prototype.deleteExternalAccount = function(inputParameters, successCallback, failureCallback) {
    function  deleteExternalAccountCompletionCallback(status,  data,  error) {
        var serviceResponseHandler = applicationManager.getServiceResponseHandler();
        var responseObject = serviceResponseHandler.manageResponse(status,  data,  error);
        if (responseObject["status"] === true) {
            successCallback(responseObject["data"]);
        } else {
            failureCallback(responseObject["errmsg"]);
        }
    }

    var loggerManager = applicationManager.getLoggerManager();
    try {
        loggerManager.log("#### start accountManager : deleteExternalAccount ####");
        var self = this;
        var params;
        var primaryKeys;
        var selectedAccountsModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("SelectedAccounts");
        if (inputParameters && (inputParameters !== undefined && typeof inputParameters === 'object')) {
            primaryKeys = {
                "main_user": inputParameters.mainUser,
                "username": inputParameters.userName,
                "bank_id": inputParameters.bankId,
                "AccountName": inputParameters.accountName,
                "loop_count": inputParameters.loopCount
            };
        }

        selectedAccountsModel.removeById(primaryKeys, deleteExternalAccountCompletionCallback);
    } catch (err) {
        loggerManager.log("#### in catch of accountManager : deleteExternalAccount" + JSON.stringify(err) + " ####");
    }
};

/**
 * Updates the nickname of a external account using a service call. 
 * @param {object} record -  record with updated nickname and account Id.
* @param {Function} presentationSuccessCallback - will be called when call is successfull.
  * @param {Function} presentationErrorCallback - will be called when call is not successfull.
 */
AccountManager.prototype.partialUpdateExternalAccount = function(record, successCallback, errorCallback) {
    function partialUpdateCompletionCallback(status, data, error) {
        var responseHandler = applicationManager.getServiceResponseHandler();
        var responseObject = responseHandler.manageResponse(status, data, error);
        if (responseObject["status"] === true) {
            successCallback(responseObject["data"]);
        } else {
            errorCallback(responseObject["errmsg"]);
        }
    }

    var loggerManager = applicationManager.getLoggerManager();
    try {
        loggerManager.log("#### start accountManager : partialUpdateExternalAccount ####");

        var selectedAccountsModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("SelectedAccounts");
        var selectedAccountsObject;
        if (!(record && record !== undefined && typeof record === 'object' &&
                record.main_user && record.username && record.bank_id && record.AccountName && record.loop_count)) {

            errorCallback(kony.i18n.getLocalizedString("kony.mb.Manage.nickNameUpdationFailed"));
            throw "Invalid data: record is null, undefined or not an object or composite keys are missing";
        }
        selectedAccountsObject = new selectedAccountsModel(record);
        selectedAccountsObject.partialUpdate(partialUpdateCompletionCallback);
    } catch (error) {
        loggerManager.log("#### in catch of accountManager : partialUpdateExternalAccount" + JSON.stringify(error) + " ####");
    }
};
/**
 * Method to update account preference
 * @param {JSON} params Account number with its preference number
 * @param {function} presentationSuccessCallback Callback method in case of success
 * @param {function} presentationErrorCallback Callback method in case of error
 */
AccountManager.prototype.setAccountsPreference = function(params,presentationSuccessCallback, presentationErrorCallback){
    function completionCallBack(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status,data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      } else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
    var accountModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Accounts");
    accountModel.customVerb('updateAccountPreference', params, completionCallBack);
}
    
/**
 *  Fetches the details of an external account including balance. 
 * @param {object} record -   data containing username of the signed in user, username, bank id and account name for the external bank
* @param {Function} presentationSuccessCallback - will be called when call is successfull.
  * @param {Function} presentationErrorCallback - will be called when call is not successfull.
 */

AccountManager.prototype.getSingleAccountDetails = function(user_id, username, bank_id, account, singleAccountDetailsSuccsess, singleAccountDetailsFailure) {

    function getCompletionCallback(status,  data,  error) {
        if (status == kony.mvc.constants.STATUS_SUCCESS) {
            singleAccountDetailsSuccsess(data);
        } else {
            singleAccountDetailsFailure(error);
        }
    }
    var self = this;
    var accountsRepo  =  kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("SingleAccountDetails");
    var params = kony.mvc.Expression.and(
        kony.mvc.Expression.eq("main_user", user_id),
        kony.mvc.Expression.eq("username", username),
        kony.mvc.Expression.eq("bank_id", bank_id),
        kony.mvc.Expression.eq("account", account)
    );
    accountsRepo.getByCriteria(params, getCompletionCallback);
};
/**
 * Fetches  categorywise expenses for the given monthid
 * @param {object} monthId - monthId for which data is to be obtained.
 * @param {Function} presentationSuccessCallback - will be called when call is successfull.
 * @param {Function} presentationErrorCallback - will be called when call is not successfull.
 */ 

AccountManager.prototype.getPFMPieChartData = function(monthId,yearId,successCallback,errorCallback)
{
  function getAllCompletionCallback(status,  data,  error) {
    if(status == kony.mvc.constants.STATUS_SUCCESS){
      successCallback(data);
    }
    else{
      errorCallback(data);
    }
  }  
  var pieChartInstance  =  kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("PFMPieChart");
  if(!kony.sdk.isNullOrUndefined(monthId))
  {
     var param = kony.mvc.Expression.and(kony.mvc.Expression.eq("monthId", monthId), kony.mvc.Expression.eq("year", yearId));  
  }else{
     var param = kony.mvc.Expression.eq("year", yearId);  
  }  
  pieChartInstance.getByCriteria(param,getAllCompletionCallback);
  
};

/**
 *  Fetches  monthwise expenditure for the signedin user
 * @param {Function} presentationSuccessCallback - will be called when call is successfull.
 * @param {Function} presentationErrorCallback - will be called when call is not successfull.
 */ 
AccountManager.prototype.getPFMBarGraphData = function(year,successCallback,errorCallback)
{
  function getAllCompletionCallback(status,  data,  error) {
    if(status == kony.mvc.constants.STATUS_SUCCESS){
      data.year = year;
      successCallback(data);
    }
    else{
      errorCallback(data);
    }
  }  
  var barGraphInstance  =  kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("PFMBarGraph");
  var criteria=kony.mvc.Expression.eq("year",year);
  barGraphInstance.getByCriteria(criteria,getAllCompletionCallback);
  //barGraphInstance.getByCriteria({},getAllCompletionCallback);
  
};
/**
 *  Fetches cetotegorywise allocated budget and expendeniture for accounts of the signedin user.
 * @param {Function} presentationSuccessCallback - will be called when call is successfull.
 * @param {Function} presentationErrorCallback - will be called when call is not successfull.
 */ 

AccountManager.prototype.getPFMBudgetGraphData = function(monthId,year,successCallback,errorCallback)
{
  function getAllCompletionCallback(status,  data,  error) {
    if(status == kony.mvc.constants.STATUS_SUCCESS){
      successCallback(data);
    }
    else{
      errorCallback(data);
    }
  }  
  var criteria = kony.mvc.Expression.and(kony.mvc.Expression.eq("monthId", monthId), kony.mvc.Expression.eq("year", year));
  var budgetGraphInstance  =  kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("PFMBudgetGraph");
  budgetGraphInstance.getByCriteria(criteria,getAllCompletionCallback);
};

/**
 * Fetches transactions for a particular monthid and category id for PFM
 * @param {object } -monthid and category id in which transactions are to be obtained
 * @param {Function} presentationSuccessCallback - will be called when call is successfull.
 * @param {Function} presentationErrorCallback - will be called when call is not successfull.
 */ 
AccountManager.prototype.getPFMTransactions = function(inputParams,successCallback,errorCallback)
{
  function getAllCompletionCallback(status,  data,  error) {
    if(status == kony.mvc.constants.STATUS_SUCCESS){
      successCallback(data);
    }
    else{
      errorCallback(data);
    }
  }  
  var transactionsInstance  =  kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("PFMTransactions");
  var params;
  if(!kony.sdk.isNullOrUndefined(inputParams.getMonthlyTransactions))
  {
        params = kony.mvc.Expression.and(
          kony.mvc.Expression.eq("monthId", inputParams.monthId),
          kony.mvc.Expression.eq("getMonthlyTransactions", inputParams.getMonthlyTransactions)
        );
  }else if(!kony.sdk.isNullOrUndefined(inputParams.year))
  {
        params = kony.mvc.Expression.eq("year", inputParams.year);
  }
  else{  
         params = kony.mvc.Expression.and(
        kony.mvc.Expression.eq("monthId", inputParams.monthId),
        kony.mvc.Expression.eq("categoryId", inputParams.categoryId)
      );
  }
  transactionsInstance.getByCriteria(params,getAllCompletionCallback);
  
};
/**
 * Fetches the list of PFM categories using a service call
 * @param {Function} presentationSuccessCallback - will be called when call is successfull.
 * @param {Function} presentationErrorCallback - will be called when call is not successfull.
 */ 
AccountManager.prototype.getPFMCategories = function(successCallback,failureCallback){
  function getAllCompletionCallback(status,  data,  error) {
    if(status == kony.mvc.constants.STATUS_SUCCESS){
      successCallback(data);
    }
    else{
      failureCallback(data);
    }
  }  
  var pfmCategoriesInstance  =  kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("PFMCategory");
  pfmCategoriesInstance.getByCriteria({},getAllCompletionCallback);
};
  /**
 *  Update e-statements preferences of the signed in user
 * @param {Object} params -  data i.e.,enable/disable status, updated nickname or email . 
 * @param {Function} presentationSuccessCallback - will be called when call is successfull.
 * @param {Function} presentationErrorCallback - will be called when call is not successfull.
 */ 
AccountManager.prototype.updatePFMTransaction = function(transactionRecord,successCallback,failureCallback){
  function getAllCompletionCallback(status,  data,  error) {
    if(status == kony.mvc.constants.STATUS_SUCCESS){
     successCallback(data);
    }
    else{
      failureCallback(data);
    }
  }  
  var transactionInstance  =  kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("PFMTransactions");
  var transactionObject = new transactionInstance(transactionRecord);
  transactionObject.partialUpdate(getAllCompletionCallback);
};
/**
 * creates a new account using a service call
 * @param {Array} params - data of selected products. 
 * @param {Function} presentationSuccessCallback - will be called when call is successfull.
 * @param {Function} presentationErrorCallback - will be called when call is not successfull.
 */  
AccountManager.prototype.newAccountOpening = function(params,presentationSuccessCallback,presentationErrorCallback){
  var accountsRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Accounts");
  accountsRepo.customVerb('newAccountOpening', params, getAllCompletionCallback);
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
 *  Update e-statements preferences of the signed in user
 * @param {Object} params -  data i.e.,enable/disable status, updated nickname or email . 
 * @param {Function} presentationSuccessCallback - will be called when call is successfull.
 * @param {Function} presentationErrorCallback - will be called when call is not successfull.
 */
AccountManager.prototype.updateUserAccountSettingsForEstatements = function(params,presentationSuccessCallback, presentationErrorCallback) {
    var self = this;
    var accountsRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Accounts");
    accountsRepo.customVerb('updateUserAccountSettings',params,getAllCompletionCallback);

    function getAllCompletionCallback(status, data, error) {
        var srh = applicationManager.getServiceResponseHandler();
        var obj = srh.manageResponse(status, data, error);
        if (obj["status"] === true) {
            presentationSuccessCallback(obj["data"]);
        } else {
            presentationErrorCallback(obj["errmsg"]);
        }
    }

};

/**
 * Fetches the Checking Accounts using a service call.
 * @param {function} presentationSuccessCallback - will be called when call is successfull.
 * @param {function} presentationErrorCallback - will be called when call is not successfull.
 */
AccountManager.prototype.fetchCheckingAccounts = function(presentationSuccessCallback, presentationErrorCallback) {
    var self = this;
    self.fetchInternalAccounts(getAllCompletionCallback, presentationErrorCallback)

    function getAllCompletionCallback(data) {
        var checkingAccounts = data.filter(function (account) {
            return account.accountType === "Checking";
        })
        presentationSuccessCallback (checkingAccounts);
    }

};

/**
* Fetches the bank details using a service call.
* @param{function} presentationSuccessCallback - will be called when call is successfull.
* @param{function} presentationErrorCallback - will be called when call is not successfull.
*/

AccountManager.prototype.fetchBankDetails =function(params,presentationSuccessCallback, presentationErrorCallback) {
var  accountModel  =  kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Accounts");
accountModel.customVerb('fetchBankDetails',params, getAllCompletionCallback);
	function getAllCompletionCallback(status, data, error) {
		var srh = applicationManager.getServiceResponseHandler();
		var obj = srh.manageResponse(status,data, error);
		if (obj["status"] ===true) {
		presentationSuccessCallback(obj["data"]);
		} 
		else {
		presentationErrorCallback(obj["errmsg"]);
		}
	};
};

/**
* Method to update internal accounts favourite status
* @param {JSON} params account id for changing favourite status
* @param{function} presentationSuccessCallback - will be called when call is successfull.
* @param{function} presentationErrorCallback - will be called when call is not successfull.
*/
AccountManager.prototype.updateFavouriteStatus = function(params,presentationSuccessCallback, presentationErrorCallback){

  function completionCallBack(status, data, error) {
    var srh = applicationManager.getServiceResponseHandler();
    var obj = srh.manageResponse(status,data, error);
    if (obj["status"] ===true) {
      presentationSuccessCallback(obj["data"]);
    } 
    else {
      presentationErrorCallback(obj["errmsg"]);
    }
  }
  var accountModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Accounts");
  accountModel.customVerb("updateFavouriteStatus",params, completionCallBack);
}

/**
* Method to update external accounts favourite status
* @param {JSON} params account id for changing favourite status
* @param{function} presentationSuccessCallback - will be called when call is successfull.
* @param{function} presentationErrorCallback - will be called when call is not successfull.
*/
AccountManager.prototype.updateExternalAccountFavouriteStatus = function(params,presentationSuccessCallback, presentationErrorCallback){

  function completionCallBack(status, data, error) {
    var srh = applicationManager.getServiceResponseHandler();
    var obj = srh.manageResponse(status,data, error);
    if (obj["status"] === true) {
      presentationSuccessCallback(obj["data"]);
    } else {
      presentationErrorCallback(obj["errmsg"]);
    }
  }
  var selectedAccountsModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("SelectedAccounts");
  var selectedAccountsObject = new selectedAccountsModel(params);
  selectedAccountsObject.partialUpdate(completionCallBack);
}

/** 
* Method to get monthly spending PFM data 
* @param {Object} inputParams MDA expression containing month and year 
* @param {Function} successCallback Method that gets called if service call is success 
* @param {Function} errorCallback Method that gets called if service call is failure 
*/
AccountManager.prototype.getMonthlySpending = function(inputParams,successCallback,errorCallback)
{
  function getAllCompletionCallback(status,  data,  error) {
    var srh = applicationManager.getServiceResponseHandler();

    var obj = srh.manageResponse(status,data, error);
    if (obj["status"] === true) {
      successCallback(obj["data"]);
    } else {
      errorCallback(obj["errmsg"]);
    }
  }
  var  PFMPieChartModel  =  kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("PFMPieChart");
  PFMPieChartModel.getByCriteria(inputParams,getAllCompletionCallback);
};

/**
 * Fetches the Internal Account details based on account number using a service call.
 * @param {object} params containing account Id. 
 * @param {Function} presentationSuccessCallback - will be called when call is successful.
 * @param {Function} presentationErrorCallback - will be called when call is not successful.
 */
AccountManager.prototype.fetchInternalAccountByID = function(params,presentationSuccessCallback, presentationErrorCallback) {
    var self = this;
    var accountsRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Accounts");
    accountsRepo.customVerb('getAccountsPostLogin', params , getAllCompletionCallback);

    function getAllCompletionCallback(status, data, error) {
        var srh = applicationManager.getServiceResponseHandler();
        var obj = srh.manageResponse(status, data, error);
        if (obj["status"] === true) {
            presentationSuccessCallback(obj["data"]);
        } else {
            presentationErrorCallback(obj["errmsg"]);
        }
    }

};

/**
 * updates the account phone numbers.
 * @param {object} params - contains the phone numbers. 
 * @param {Function} presentationSuccessCallback - will be called when call is successful.
 * @param {Function} presentationErrorCallback - will be called when call is not successful.
 */
AccountManager.prototype.updateAccountPhoneNumber = function(params,presentationSuccessCallback, presentationErrorCallback) {
    var self = this;
    var accountModel = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Accounts");
    accountModel.customVerb("updateAccountPhoneNumber", params, completionCallBack);

    function completionCallBack(status, data, error) {
        var srh = applicationManager.getServiceResponseHandler();
        var obj = srh.manageResponse(status, data, error);
        if (obj["status"] === true) {
            presentationSuccessCallback(obj["data"]);
        } else {
            presentationErrorCallback(obj["errmsg"]);
        }
    }

};

  AccountManager.prototype.bulkUpdateTransactions = function(transactionList,presentationSuccessCallback,presentationErrorCallback){
    var self = this;
    var PFMTransactions = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("PFMTransactions");
    PFMTransactions.customVerb("updateBulkPFMTransaction", { "pfmtransactionlist": JSON.stringify(transactionList) }, completionCallBack);

    function completionCallBack(status,data,error){
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      } else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };
  
  AccountManager.prototype.getMonthlyCategorizedTransactions = function(monthId,presentationSuccessCallback,presentationErrorCallback){
    var self = this;
    var PfmTransactions = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("PFMTransactions");
    var criteria = kony.mvc.Expression.and(
      kony.mvc.Expression.eq("monthId", monthId),
      kony.mvc.Expression.eq("getMonthlyTransactions", "true") 
    ); 
    PfmTransactions.getByCriteria(criteria, completionCallback);
    
    function completionCallback(status,data,error){
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      } else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };
  
  AccountManager.prototype.getSelecetdPFMAccounts = function(params,presentationSuccessCallback,presentationErrorCallback){
    var self = this;
    var  PFMAccountsModel  =  kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("PFMAccounts");
    PFMAccountsModel.customVerb('getPFMAccounts',params,completionCallback);

    function completionCallback(status,data,error){
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      } else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };
  
  AccountManager.prototype.getUncategorizedTransactions = function(criteria,presentationSuccessCallback,presentationErrorCallback){
    var self = this;
    var PFMTransactions = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("PFMTransactions");
    PFMTransactions.getByCriteria(criteria, completionCallback);
    
    function completionCallback(status,data,error){
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      } else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };
  
  AccountManager.prototype.getYearlyBudgetData = function(criteria,presentationSuccessCallback,presentationErrorCallback){
    var self = this;
    var  PFMBudgetChartModel  =  kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("PFMBudgetGraph");
    PFMBudgetChartModel.getByCriteria(criteria,completionCallback);
    
    function completionCallback(status,data,error){
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      } else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };
  
  AccountManager.prototype.getYearlySpending = function(criteria,presentationSuccessCallback,presentationErrorCallback){
    var self = this;
    var  PFMBarChartModel  =  kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("PFMBarGraph");
    PFMBarChartModel.getByCriteria(criteria,completionCallback);
    
    function completionCallback(status,data,error){
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      } else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }
  };
    /**
   * Used to search the International accounts locally
   * @param {*} searchString search string
   * @returns {array} data
   */
  AccountManager.prototype.searchExternalInternationalAccounts = function(query)
  {
      var data = this.internationalAccounts.filter(
        function(record)
        {
          return (record["beneficiaryName"] && record["beneficiaryName"].toUpperCase().indexOf(query.toUpperCase()) !== -1) 
            || (record["accountNumber"] && record["accountNumber"].toUpperCase().indexOf(query.toUpperCase())!== -1);
        }
      );
    
      return data;
  };

  /**
   * Used to search the domestic accounts locally
    * @param {*} searchString search string
    * @returns {array} data
   */
  AccountManager.prototype.searchExternalAccounts = function(query)
  {
    var data = this.domesticAccounts.filter(
      function(record)
      {
        return (record["beneficiaryName"] && record["beneficiaryName"].toUpperCase().indexOf(query.toUpperCase()) !== -1)
          || (record["IBAN"] && record["IBAN"].toUpperCase().indexOf(query.toUpperCase())!== -1);
      }
    );
    return data;
  };
  
return AccountManager;
});