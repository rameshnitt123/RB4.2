/**
*@module ChatBot_PresentationController
*/
define([], function() {

  /**
   *@alias module:ChatBot_PresentationController
   *@class
   */
  function ChatBot_PresentationController() {
    kony.mvc.Presentation.BasePresenter.call(this);
    this.isFirstTimeOpened = true;
    this.lastTyped = "bot";
    this.latitude = null;
    this.longitude = null;
    this.logger = applicationManager.getLoggerManager();
  }

  inheritsFrom(ChatBot_PresentationController, kony.mvc.Presentation.BasePresenter);

  ChatBot_PresentationController.prototype.initializePresentationController = function() {

  };
  /**
  * updates the last typed field
  * @param {string} lastTyped bot or user
  */
  ChatBot_PresentationController.prototype.setLastTyped = function(lastTyped){
    this.lastTyped = lastTyped;
  };
  /**
  * cleans the chatbot and exit the chatbot
  */
  ChatBot_PresentationController.prototype.clean = function(){
    this.isFirstTimeOpened = true;
    //this.lastTyped = "bot";
    this.predictString(null,'exit');
  };
  /**
  * it will open the chatbot
  */
  ChatBot_PresentationController.prototype.handleFirstTimeOpen = function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var controller = applicationManager.getPresentationUtility().getController('frmChatbot', true);
    if(this.isFirstTimeOpened){
      controller.clearChatBotMessages();
      this.isFirstTimeOpened = true;
      this.lastTyped = "bot";
      this.predictString(null,"introduction");
      var userObj = applicationManager.getUserPreferencesManager();
      var userFirstName = userObj.getUserFirstName();
      var userLastName = userObj.getUserLastName();
      controller.addMessageWithIcon("Hi "+userFirstName+" "+userLastName+"!");
      this.lastTyped = "bot";   
    }
  };

  /**
  *it predict the user text
  *@param {string} type 
  *@param {string} str contains the user text
  */
  ChatBot_PresentationController.prototype.predictString = function(type,str){
    var chatBotManager = applicationManager.getChatBotManager();
    this.predictStr = str;
    chatBotManager.predict(type,str,this.predictReply.bind(this));
  };

  /**
  * it call another function to show the bot message
  */
  ChatBot_PresentationController.prototype.predictReply = function(response){
    if(response){
      this.botMessage(response);
    }
  };

  /**
  * it process the msg and calls the appropriate function to dispaly the response properly
  *@param {string} msg contains response from server
  */
  ChatBot_PresentationController.prototype.botMessage = function(msg){
    var message = msg.reply;
    var action = msg.action;
    var parameters = msg.parameters;
    var isExit = false;
    if(action !== null && action !== undefined){
      switch(action){
        case 'showOptions' : 
          var options = parameters.options;
          this.showOptions(message,action,options);
          break;
        case 'showAccountBalance':
          var mesg = parameters.message;
          this.showAccountBalance(message,mesg);
          break;
        case 'showATM' :
          var type = parameters.type;
          kony.runOnMainThread(this.showATMs.bind(this),[message,action,type]);
          //this.showATMs(message,action,type);
          break;
        case 'displayATMS' :
          var data = parameters.data;
          this.displayATMS(message,data);
          break;
        case 'payCreditCard' :
          var amount = parameters.amount;
          this.displayBotText(["This feature is not available"]);
          //this.payCreditCard(message,action,amount);
          break;
        case 'callCustomerService' :
          this.displayBotText(["This feature is not available"]);
          //this.callCustomerService(message);
          break;
        case 'showTransactions':
          var accountType = parameters.accountType;
          this.displayBotText(["This feature is not available"]);
          //this.showTransactions(message,accountType);
          break;
        case 'payPerson' :
          var fromAccount = parameters.fromAccount;
          var amountPay = parameters.amount;
          this.displayBotText(["This feature is not available"]);
          //this.payPerson(message,fromAccount,amountPay);
          break;
        case 'exit' : 
          isExit = true;
          kony.print("exit bot");
          break;
      }
    }
    else{
      this.displayBotText(message);
    }
    var navigationManager = applicationManager.getNavigationManager();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if(navigationManager.getCurrentForm() !== 'frmChatBot' && isExit === false && this.predictStr !== "exit"){
        navigationManager.navigateTo('frmChatbot');
    }
  };

  /**
  * it call the ui functions to display the buttons on ui
  *@param {string} text - text need to dispay before showing the buttons
  *@param {Array} options- contains no of buttons and button text 
  */
  ChatBot_PresentationController.prototype.showOptions = function(text,action,options){
    this.displayBotText(text);
    var data = [];
    for(var i=0;i<options.length;i++){
      var temp = {};
      temp.text = options[i];
      temp.onClickCallback = this.onClickOfOption.bind(this);
      temp.parameter = options[i];
      data.push(temp);
    }
    var controller = applicationManager.getPresentationUtility().getController('frmChatbot', true);
    controller.addButtons(data);
  };

  /**
  * it call ui function to show the Account balance
  * @param {string} text - text to display on ui
  * @param {Array} message - list of accounts with balaces 
  */
  ChatBot_PresentationController.prototype.showAccountBalance = function(text,message){
    this.logger.log("##### showing Account Balance #####");
    this.displayBotText(text);
    var noOfAccounts = message.length;
    var noOfRecordsToDisplay = 1;
    var controller = applicationManager.getPresentationUtility().getController('frmChatbot', true);
    for(var i=0;i<noOfRecordsToDisplay;i++){
      var accountName = message[i].accountType;
      var accountBalance = message[i].accountBalance;
      var displayBalance = this.getCurrencyCode()+""+accountBalance;
      var msg = accountName+" \n\n"+"Available Balance : "+displayBalance;
      if(i === 0){
        this.logger.log("##### adding message with Icon ####");
        controller.addMessageWithIcon(msg);
      }
      else{
        this.logger.log("##### adding just message #####");
        controller.addMessage(false,msg);
      }
    }
    if(noOfAccounts > noOfRecordsToDisplay){
      this.logger.log("#### adding more flex ####");
      var displayText = "More ("+(noOfAccounts-noOfRecordsToDisplay)+")";
      controller.addMoreItemsForAccountBalance(message,displayText,noOfRecordsToDisplay,null);
    }
    controller.addTime();
    this.lastTyped = "bot";
  };

  /**
  * it returns currency code from configuration manager
  * @returns {string} currencyCode
  */
  ChatBot_PresentationController.prototype.getCurrencyCode = function(){
    var configurationManager = applicationManager.getConfigurationManager();
    var currencyCode = configurationManager.getCurrencyCode();
    return currencyCode;
  };

  /**
  * callback function of button click
  * @param {string} option - which button clicked
  * @param {string} text - text of the button user clicked 
  */
  ChatBot_PresentationController.prototype.onClickOfOption = function(option,text){
    var userText = text;
    var controller = applicationManager.getPresentationUtility().getController('frmChatbot', true);
    controller.addUserMessage(userText);
    controller.addUserTime();
    controller.showLoading();
    //kony.chatbots.bot.showLoading();
    this.lastTyped = "user";
    this.predictString(null,text);
  };

  /**
  * it expands the list of accounts shown in ui
  * @param {Array} data - response which contains all account details
  * @param {number} noOfRecordsDisplayed - no of records already displayed
  * @param {number} string - index where we need to insert the data
  */
  ChatBot_PresentationController.prototype.onClickMoreAccountBalanceHandler = function(data,noOfRecordsDisplayed,index){
    var controller = applicationManager.getPresentationUtility().getController('frmChatbot', true);
    controller.flxBodyRemoveAt(index);
    index = index - 1;
    var length = data.length;
    var currentLength = 1;

    for(var i=0;i<currentLength;i++){
      index = index +1;
      var accountName = data[noOfRecordsDisplayed+i].accountType;
      var accountBalance = data[noOfRecordsDisplayed+i].accountBalance;
      var displayBalance = this.getCurrencyCode()+""+accountBalance;
      var msg = accountName+" \n\n"+"Available Balance : "+displayBalance;
      controller.addMessageAt(false,msg,index);
    }
    index = index + 1;
    var remaining = length - noOfRecordsDisplayed - currentLength;
    if(remaining > 0){
      var displayText = "More ("+remaining+")";
      controller.addMoreItemsForAccountBalance(data,displayText,(noOfRecordsDisplayed+currentLength),index);
    }
  };

  /**
  * it dispaly the bot message
  * @param {Array} data - contains list of messages to dispaly
  */
  ChatBot_PresentationController.prototype.displayBotText = function(data){
    var controller = applicationManager.getPresentationUtility().getController('frmChatbot', true);
    controller.dismissLoading();
    if(data !== null && data !== undefined){
      var length = data.length;
      if(length > 0){
        if(this.lastTyped === "bot"){
          controller.addMessage(false,data[0]);
        }
        else{
          controller.addMessageWithIcon(data[0]);
          this.lastTyped = "bot";
        }
        for(var i = 1;i<length;i++){
          controller.addMessage(false,data[i]);
        }
        controller.addBotTime();
      }
    }
  };

  /**
  *Helper function to get the current time
  */
  ChatBot_PresentationController.prototype.getCurrentTime = function(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var tailString = "A.M.";
    if(hours >=0 && hours <12){
      tailString = "A.M.";
    }
    if(hours === 12){
      tailString = "P.M.";
    }
    if(hours >12 && hours <24){
      hours = hours - 12;
      tailString = "P.M.";
    }

    hours = (String(hours).length > 1) ? (hours) : ("0"+hours);
    minutes = (String(minutes).length >1) ? (minutes) : ("0"+minutes);

    var timeString = hours+":"+minutes+" "+tailString;
    return timeString;
  };

  /**
  * it returns the random string
  */
  ChatBot_PresentationController.prototype.getRandomString = function(){
    var random = Math.random();
    random = String(random);
    if(random){
      random = random.split(".")[1];
    }
    return random;
  };

  /**
  * it send the lat and long to the server to ge the list of atms or branches
  */
  ChatBot_PresentationController.prototype.showATMs = function(text,action,type){
    var self = this;
    kony.location.getCurrentPosition(function(response){
      if(response && response.coords && response.coords.latitude && response.coords.longitude){
        try{
          var latitude =response.coords.latitude;
          var longitude =response.coords.longitude;
          self.latitude = latitude;
          self.longitude = longitude;
          var str = {};
          str.type = type;
          str.lat = String(latitude);
          str.lon = String(longitude);
          str.str = "showATMS";
          self.predictString("showATMS",str);
        }catch(err){
          alert(err+JSON.stringify(err));
        }
      }
    },function(err){
      var str = {};
      str.type = type;
      str.lat = null;
      str.lon = null;
      str.str = "showATMS";
      self.predictString("showATMS",str);
      //var errorMsg = "Error code: "+err.code;
      //errorMsg = errorMsg+" message: "+err.message;
      //#ifdef android
      if(err.code == 2){
        var i18n_turnOnLocationAlert = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.turnOnLocationAlert");
        kony.ui.Alert(i18n_turnOnLocationAlert,self.onClickSettingsOrCancelHandler,constants.ALERT_TYPE_CONFIRMATION,"Cancel","Settings","");
      }
      //#endif
    },{timeout:32000,fastestInterval:0,minimumTime : 0});
  };

  /**
  * if location is turned off then we need to show custom popup to enable the location. it will handle the actions on custom popup
  *@param {boolean} response - true or false
  */
  ChatBot_PresentationController.prototype.onClickSettingsOrCancelHandler = function(response){
    if (response === false) {
      var  locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
      locateUsModule.presentationController.openLocationSettings();
    }
  };

  /**
  * it display the atms or branches
  * @param {string} text - need to display before atms/branches
  * @param {Array} data - list of atms
  */
  ChatBot_PresentationController.prototype.displayATMS = function(text,data){
    this.displayBotText(text);
    var length = data.length;
    var noOfRecordsToDispaly = 3;
    if(length < 3){
      noOfRecordsToDispaly = length;
    }
    var controller = applicationManager.getPresentationUtility().getController('frmChatbot', true);
    for(var i=0;i<noOfRecordsToDispaly;i++){
      controller.addAtmDetailFlex(data[i],null);
    }
    var temp = {};
    temp.callback = this.onClickOfMap.bind(this);
    temp.locationData = data;
    temp.noOfRecordsDisplayed = 3;
    var remaining = length - noOfRecordsToDispaly;
    if(noOfRecordsToDispaly === 3 && remaining > 0){
      var displayText = "More ("+remaining+")";
      controller.addMoreItemsFlexForMaps(temp,displayText,null);
    }
  };

  /**
  * it expand the list of atms shown
  */
  ChatBot_PresentationController.prototype.onClickOfMap = function(locationData,noOfRecordsDisplayed,index){
    if(noOfRecordsDisplayed >= locationData.length){
      alert("done");
      return;
    }
    var controller = applicationManager.getPresentationUtility().getController('frmChatbot', true);
    controller.flxBodyRemoveAt(index);
    index = index-1;
    var length = locationData.length;
    var currentLength = 3;
    if(length-noOfRecordsDisplayed < 3){
      currentLength = length-noOfRecordsDisplayed;
    }
    for(var i=0;i<currentLength;i++){
      index = index+1;
      controller.addAtmDetailFlex(locationData[noOfRecordsDisplayed+i],index);
    }
    index = index+1;
    var temp = {};
    temp.callback = this.onClickOfMap.bind(this);
    temp.locationData = locationData;
    temp.noOfRecordsDisplayed = noOfRecordsDisplayed +currentLength;

    var remaining = length - noOfRecordsDisplayed - currentLength;
    if(noOfRecordsDisplayed+currentLength < length && remaining > 0){
      var displayText = "More ("+remaining+")";
      controller.addMoreItemsFlexForMaps(temp,displayText,index);
    }
  };
  /**
  * it navigates to the map
  */
  ChatBot_PresentationController.prototype.navigateToMapWithOneRecord = function(data){
     var locationData = [];
     locationData.push(data);
     var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
     if(this.latitude !== null && this.latitude !== undefined && this.longitude !== null && this.longitude !== undefined){
       locateUsModule.presentationController.setLatLong(this.latitude,this.longitude);  
     }
    locateUsModule.presentationController.showLocateViewWithData(locationData);  
  };
  
  /**
  * it navigates to the atm details screen
  */
  ChatBot_PresentationController.prototype.navigateToATMDetailsScreen = function(data){
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
     locateUsModule.presentationController.navigateToDetailsFromChatBot(data);
  };
  return ChatBot_PresentationController;
});