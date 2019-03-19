/**
*@module DataProcessorUtility
*/
define([], function() {
 /**
   * Data processor utility provides apis for common data processing across the app
   *@alias module:DataProcessorUtility
   *@class
   */
function DataProcessorUtility(){
 /**@member {Integer}  a global count for timer*/
  this.timerCounter = 0;
}

inheritsFrom(DataProcessorUtility, kony.mvc.Business.Delegator);

DataProcessorUtility.prototype.initializeBusinessController = function(){};

/**
  * A UI function to display a generic error toast message (i18n conversion is not done in this function. A converted localised string is to be given)
  * @param {scope} scope - scope of current  controller(generally "this")
  * @param {String} msg  - a msg to be displayed
  * @param {function} callBack - a callback function defined in given scope
*/
DataProcessorUtility.prototype.showToastMessageError = function(scope, msg, func)
{
  if(scope && scope.view && scope.view.flxPopup){
      this.showToast("sknFlxf54b5e", "errormessage.png", msg,func,scope);
  }
};


/**
  * A UI function to display a generic success toast message (i18n conversion is not done in this function. A converted localised string is to be given)
  * @param {scope} scope - scope of current  controller(generally "this")
  * @param {String} msg  - a msg to be displayed
  * @param {function} callBack - a callback function defined in given scope
*/
DataProcessorUtility.prototype.showToastMessageSuccess = function(scope, msg , func)
{
    if(scope && scope.view && scope.view.flxPopup){
        this.showToast("sknFlx43ce6e", "confirmation.png", msg,func,scope);
    }
 
 };

/** Tost Messages util*/

DataProcessorUtility.prototype.showToast = function(skin, image, message,func,scope) {
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
      if(deviceUtilManager.isIPhone())
     {
        if (scope.view.flxMainContainer != null || scope.view.flxMainContainer != undefined) {
            scope.view.flxMainContainer.top = "65dp";
        }
        if (scope.view.titleBarAttributes != null || scope.view.titleBarAttributes != undefined) {
            var titleBarAttributes = scope.view.titleBarAttributes;
            titleBarAttributes["navigationBarHidden"] = true;
            scope.view.titleBarAttributes = titleBarAttributes;
            titleBarAttributes["navigationBarHidden"] = false;
        }
    }
    scope.view.flxPopup.isVisible = true;

     if (this.timerCounter == undefined || this.timerCounter == null)
            this.timerCounter = 0;
     this.timerCounter=parseInt(this.timerCounter)+1;
     var timerId="timerPopupSuccess"+this.timerCounter;
    scope.view.flxPopup.skin = "" + skin;
    scope.view.customPopup.imgPopup.src = "" + image;
    scope.view.customPopup.lblPopup.text = message;
    try{
      kony.print(timerId);
    kony.timer.schedule(timerId, function() {
        scope.view.flxPopup.isVisible = false;
        if (deviceUtilManager.isIPhone()) {
            if (scope.view.flxMainContainer != null || scope.view.flxMainContainer != undefined) {
                scope.view.flxMainContainer.top = "0dp";
            }
            if (scope.view.titleBarAttributes != null || scope.view.titleBarAttributes != undefined) {
                scope.view.titleBarAttributes = titleBarAttributes
            }
        }
      if(!(func === null || func === undefined))
                func.call(scope);
    }, 3, false);
    }
  catch(e)
    {
      kony.print(timerId);
      kony.print(e);
     }
};
/**
  * A UI function to get Card Description 
  * @param {JSON} response  -cards data from backend
  * @returns {JSON} - cards data with the Description to be shown in UI
*/ 
DataProcessorUtility.prototype.getCardDescription = function(data){
  var maskedCardNum;
  for(var i=0;i<data.length;i++)
    {    
      maskedCardNum = this.maskAccountNumber(data[i].cardNumber).substr(-5);
      data[i].cardDescription = data[i].cardType+" - "+maskedCardNum;
    }
  return data;
};

/**
  * A UI function to mask account Numbers
  * @param {String} accountNumber  -string to be masked.
  * @returns {String} - masked account number.
*/
 DataProcessorUtility.prototype.maskAccountNumber = function(accountNumber){
    accountNumber = accountNumber.replace(/\d(?=\d{4})/g, "X");
  return accountNumber;
 };
 
 /**
  * A UI function to mask account Email
  * @param {String} accountEmail  -string to be masked.
  * @returns {String} - masked account Email.
*/
 DataProcessorUtility.prototype.maskAccountEmail = function(accountEmail){
    var emailLength = accountEmail.indexOf("@");
    if(emailLength === 2){
      accountEmail = accountEmail.replace(/^(.)(.*)(@.*)$/,(_, a, b, c) => a + b.replace(/./g, '*') + c);
    }
   else if(emailLength === 3 || emailLength === 4){
     accountEmail = accountEmail.replace(/^(.)(.*)(.@.*)$/,(_, a, b, c) => a + b.replace(/./g, '*') + c);
   }
   else{
    accountEmail = accountEmail.replace(/^(..)(.*)(..@.*)$/,(_, a, b, c) => a + b.replace(/./g, '*') + c);
   }
  return accountEmail;
 }; 
 
/**
  * This function process the account data; helper function for processAccountsData
  * @param {string} data: accounts data to be processed
  * @returns {Object}  processed account data
  */
DataProcessorUtility.prototype.getAvailableBalanceCurrencyString = function(data)
 {
    
    var forUtility=applicationManager.getFormatUtilManager();
    var configManager = applicationManager.getConfigurationManager();
	var currencyCode = data["currencyCode"];
    switch(data.accountType)
    {
      case configManager.constants.SAVINGS: return forUtility.formatAmountandAppendCurrencySymbol(data["availableBalance"],currencyCode);
      case configManager.constants.CHECKING: return forUtility.formatAmountandAppendCurrencySymbol(data["availableBalance"],currencyCode);  
      case configManager.constants.CREDITCARD: return forUtility.formatAmountandAppendCurrencySymbol(data["currentBalance"],currencyCode);
      case configManager.constants.DEPOSIT: return forUtility.formatAmountandAppendCurrencySymbol(data["currentBalance"],currencyCode);
      case configManager.constants.MORTGAGE: return forUtility.formatAmountandAppendCurrencySymbol(data["outstandingBalance"],currencyCode);
      case configManager.constants.LOAN: return forUtility.formatAmountandAppendCurrencySymbol(data["outstandingBalance"],currencyCode);
      default:return forUtility.formatAmountandAppendCurrencySymbol(data["availableBalance"],currencyCode);
    }
 };

/**
  * This function process the account data; helper function for processAccountsData
  * @param {string} data: accounts data to be processed
  * @returns {Object}  processed account data
  */
DataProcessorUtility.prototype.getAvailableBalanceType = function(data)
  {
    var configManager = applicationManager.getConfigurationManager();
    switch(data.accountType)
    {
      case configManager.constants.SAVINGS: return kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
      case configManager.constants.CHECKING: return kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");  
      case configManager.constants.CREDITCARD: return kony.i18n.getLocalizedString("kony.mb.accdetails.currBal");
      case configManager.constants.DEPOSIT: return kony.i18n.getLocalizedString("kony.mb.accdetails.currBal");
      case configManager.constants.MORTGAGE: return kony.i18n.getLocalizedString("kony.mb.accdetails.outstandingBal");
      case configManager.constants.LOAN: return kony.i18n.getLocalizedString("kony.mb.accdetails.outstandingBal");
      default:return kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
    }
  };

 /**
  * This function process the account data that makes it possible to set in a segment
  * @param {string} data: accounts data to be processed
  * @returns {Object}  processed account data
  */
DataProcessorUtility.prototype.processAccountsData =  function(data)
  {
    var accProcessedData = [];
    for (var i = 0; i < data.length; i++) {
      accProcessedData[i] = {};
      accProcessedData[i].accountName = data[i].accountName;
      accProcessedData[i].availableBalance = this.getAvailableBalanceCurrencyString(data[i]);
      accProcessedData[i].accountID =data[i].accountID;
      accProcessedData[i].bankName =data[i].bankName;
      accProcessedData[i].accountBalanceType = this.getAvailableBalanceType(data[i]);
	  accProcessedData[i].nickName = data[i].nickName;
      accProcessedData[i].fromAccountCurrency = data[i].currencyCode;
      accProcessedData[i].fromAccountBalance = data[i].availableBalance;
    }
    return accProcessedData;
};

  /**
  * This function search on a single field with given text in a segment without section headers
  * @param {string} searchText:  entered search text 
  * @param {string} field:  field on which search should be performed on 
  * @param {string} data:  segment data 
  * @returns {Object}  search results in a json
  */
DataProcessorUtility.prototype.commonSegmentSearch=function(field,searchText,data)
{
 var searchdata=[];
  for (var i = 0; i < data.length; i++) {
      if(data[i][field]!=undefined&&data[i][field].toLowerCase().indexOf(searchText)>=0)
      {
        searchdata.push(data[i]);
      }
    }
  return searchdata;
};
  /**
  * This function search on a single field with given text in a segment with section headers
  * @param {string} searchText:  entered search text 
  * @param {string} field:  field on which search should be performed on 
  * @param {string} data:  segment data 
  * @param {string} headers: header name
  * @returns {Object}  search results in a json
  */
DataProcessorUtility.prototype.commonSectionSegmentSearch=function(field,searchText,data,headers)
{
  var searchdata=[],segEachData=[];
  for(var i=0;i<data.length;i++)
    {
      segEachData=[];
      for(var j=0;j<data[i].length;j++)
        {
         if(data[i][j][field]!=undefined&&data[i][j][field].toLowerCase().indexOf(searchText)>=0)
    {
      segEachData.push(data[i][j]);
    }  
        }
      if(segEachData.length>0)
        {
      var segData=[{"lblHeader":headers[i] },segEachData];
      searchdata.push(segData);
        }
    }
  return searchdata;
};
  
DataProcessorUtility.prototype.maskSSN=function(ssn){
 return "XX-XXX-"+ssn.slice(-4);
};

 /**
   * Method to mask  and return the username
   * @param {string} userName - user name
   * @returns {string} maskedUserName - masked user name 
   */
  DataProcessorUtility.prototype.maskUserName = function (userName) {
    var maskedUserName = '';
    var firstThree = userName.substring(0, 3);
    var lastTwo = userName.substring(userName.length - 2, userName.length);
    var xLength = userName.length - 5;
    var maskString = '';
    for (var i = 0; i < xLength; i++) {
      maskString = maskString + '*';
    }
    maskedUserName = firstThree + maskString + lastTwo;
    return maskedUserName;
  };
  
  /**
  * This function checks whether the userName is masked or not 
  * @param {string} userName entered username in user field
  * @returns {boolean}  true if the username is masked ,false if the username is not masked
  */
  DataProcessorUtility.prototype.isUserNameMasked = function (userName) {
    var userName = userName.substring(3, userName.length - 2);
    for (var i = 0; i < userName.length; i++) {
      if (userName.charAt(i) !== '*') {
        return false;
      }
    }
    return true;
  };


  /**
  * This masks given card number and returns the masked string 
  * @param {string} cardNumber card number to be masked
  * @returns {String}  Modified card number with XXXX
  */
  DataProcessorUtility.prototype.maskCardNumber = function (cardNumber) {
    cardNumber = cardNumber.replace(/\d(?=\d{4})/g, "X");
    return cardNumber;
  };


return DataProcessorUtility;
});