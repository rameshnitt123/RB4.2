define({ 

  keypadString:'0.00',
  isPeriodUsed : false,
  timerCounter: 0,
  
  init : function()
  {
    try
    {
      var navManager = applicationManager.getNavigationManager();
      var currentForm = navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);        
    }
    catch(ex)
    {

    }
  },
  //     onNavigate: function (obj) {
  //         if(obj==undefined){
  //             return;
  //         }
  //         var scope = this;
  //         var setType = {
  //             "mykony": function () {
  //             },
  //             "myother": function () {
  //             },
  //             "otherkony": function () {
  //             },
  //             "otherbank": function () {
  //             },
  //             "international": function () {
  //             },
  //             "wire": function () {
  //             },
  //         };
  //         setType[obj];
  //     },
  preShow : function()
  {
    try
    {
      this.renderTitleBar();
      var configManager = applicationManager.getConfigurationManager();
      this.view.lblDollar.text=configManager.getCurrencyCode();
      var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var transObj= transMod.presentationController.getTransObject();
      var amount= transObj.amount;
      //alert("amount = " + amount);
      if(amount&&amount!==undefined&&amount!==""&&amount!==null)
      {
        this.keypadString = amount;
        if(amount.indexOf(".")==-1)
        {
          this.isPeriodUsed = false;
        }
        else
        {
          this.isPeriodUsed = true;
        }
      }
      else
      {
        this.keypadString ='0.00';
      }

      // this.view.lblAmount.text = "0.00";
      this.updateAmountValue();
      this.setFromAccountData();
      this.initActions();
      
      //right pane
      this.setTransferType();
      this.setBenificiaryAccount();
      this.setFromAccount();
      
      //this.setToAccount();
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().logFormName(currentForm);        
    }
    catch(ex)
    {

    }
  },

  initActions : function(){
    try
    {
      this.view.btnContinue.onClick =this.continueOnClick; 
      this.view.btnChange.onClick = function(){
        applicationManager.getPresentationUtility().showLoadingScreen();
        var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        transMod.presentationController.commonFunctionForNavigation("frmTransfersFromAccount");
      }
      this.view.customHeaderTablet.flxBack.onClick = this.backNavigation;
      this.view.customHeaderTablet.btnRight.onClick =this.cancelOnClick;  
      this.setKeypadActions();
    }
    catch(ex)
    {

    }    
  },
  
  backNavigation : function()
  {
    try
    {
      var navMan=applicationManager.getNavigationManager();
      navMan.goBack();     
    }
    catch(ex)
    {

    }
  },
  
  cancelOnClick : function()
  {
    try
    {
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      transferModule.presentationController.cancelCommon();      
    }
    catch(ex)
    {

    }    
  },
  
  setFromAccountData : function()
  {
    try
    {
      var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var fromaccountdata= transMod.presentationController.getTransferObjectById();
      this.view.lblFromAccountValue.text=fromaccountdata[0].accountName;
      this.view.lblBalanceValue.text=fromaccountdata[0].availableBalance;
      this.view.lblBank.text=fromaccountdata[0].bankName;
      this.view.lblavailableBalance.text=fromaccountdata[0].accountBalanceType;      
    }
    catch(ex)
    {

    }    
  },

  setKeypadChar : function (char) 
  {
    try
    {
      if(char=='.'){
        if(this.isPeriodUsed==false){
          this.isPeriodUsed = true;
        }else{
          return;
        }
      }
      this.keypadString = this.keypadString + char;
      var firstChar = this.keypadString[0];
      this.keypadString = this.keypadString.split("");
      for(var i=1; i<this.keypadString.length; i++){
        if(this.keypadString[i]=='.'){
          this.keypadString[i-1] = this.keypadString[i+1];
          i++;
        }else{
          this.keypadString[i-1]=this.keypadString[i];
        }
      }
      this.keypadString = this.keypadString.join("");
      this.keypadString = this.keypadString.substr(0, this.keypadString.length-1);
      if(firstChar!=='0'){
        this.keypadString = firstChar + this.keypadString;
      }
      this.updateAmountValue();      
    }
    catch(ex)
    {

    }    
  },

  clearKeypadChar : function () 
  {
    try
    {
      if(this.keypadString ==='0.00') return;

      this.keypadString = this.keypadString.split("");
      for(var i=this.keypadString.length-2; i>=0; i--){
        if(this.keypadString[i]=='.'){
          this.keypadString[i+1] = this.keypadString[i-1];
          i--;
        }else{
          this.keypadString[i+1] = this.keypadString[i];
        }
      } 
      this.keypadString = this.keypadString.join("");
      this.keypadString = this.keypadString.substr(1);
      if(this.keypadString[0]=='.'){
        this.keypadString = '0'+ this.keypadString;
      }
      this.updateAmountValue();      
    }
    catch(ex)
    {

    }    
  },

  updateAmountValue : function()
  {
    try
    {
      if(this.keypadString==='0.00'){
        this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
        this.view.btnContinue.setEnabled(false);
        this.view.lblAmount.text = '0.00';
      }else{
        var keypadStringCommas = '';
        var beforeDecimal = this.keypadString.split('.')[0];
        var afterDecimal = this.keypadString.split('.')[1];
        if(beforeDecimal.length>3){
          var withCommas = (beforeDecimal.length)/3;
          var withoutCommas = (beforeDecimal.length)%3;
          var temp = '';
          if(withoutCommas!=0){
            temp = beforeDecimal.substr(0, withoutCommas)+',';
          }
          for(var i = withoutCommas; i<beforeDecimal.length; i+=3){
            temp+=beforeDecimal.substr(i, 3)+',';
          }
          beforeDecimal = temp.substr(0, temp.length-1);
        }
        keypadStringCommas = beforeDecimal + '.'+afterDecimal;
        this.view.btnContinue.skin = "sknBtnBg0A78D1SSP30PxTab";
        this.view.btnContinue.setEnabled(true);
        this.view.lblAmount.text = keypadStringCommas;
      }      
    }
    catch(ex)
    {

    }    
  },

  continueOnClick: function() {
    try {
        var amount = this.keypadString;
        var fromAvlBal = this.view.lblBalanceValue.text;
        var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        var fromaccountdata = transferModule.presentationController.getTransferObjectById();
        transferModule.presentationController.setFromAccountsForTransactions(fromaccountdata[0]);
        var evalAmountLimits = transferModule.presentationController.evaluateMinMaxAmountLimits(amount);
        if (evalAmountLimits == "valid")
            transferModule.presentationController.evaluateAmount(amount, fromAvlBal);
        else if (evalAmountLimits["max"]) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            this.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.entitlements.maxTransactionLimitExceeded") + evalAmountLimits["max"]);
        } else if (evalAmountLimits["min"]) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            this.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.entitlements.minTransactionLimitUnreached") + evalAmountLimits["min"]);
        }
    } catch (ex) {

    }
},

  bindGenericError : function (errorMsg) 
  {
    try
    {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var scopeObj = this;
      applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);      
    }
    catch(ex)
    {

    }    
  },

  renderTitleBar : function()
  {
    try
    {
      var deviceUtilManager = applicationManager.getDeviceUtilManager();
      var isIpad = deviceUtilManager.isIpad();
      if(!isIpad){
        this.view.flxHeader.isVisible = true;
      }
      else{
        this.view.flxHeader.isVisible = false;
      }         
    }
    catch(ex)
    {

    }   
  },   
  
  setKeypadActions : function()
  {
    try
    {
      var self = this;
      self.view.keypadTablet.btnOne.onClick = function(){
        self.setKeypadChar(1);
      };
        
      self.view.keypadTablet.btnTwo.onClick = function(){
        self.setKeypadChar(2);
      };
        
      self.view.keypadTablet.btnThree.onClick = function(){
        self.setKeypadChar(3);
      };
        
      self.view.keypadTablet.btnFour.onClick = function(){
        self.setKeypadChar(4);
      };
        
      self.view.keypadTablet.btnFive.onClick = function(){
        self.setKeypadChar(5);
      };
        
      self.view.keypadTablet.btnSix.onClick = function(){
        self.setKeypadChar(6);
      };
      
      self.view.keypadTablet.btnSeven.onClick = function(){
        self.setKeypadChar(7);
      };
        
      self.view.keypadTablet.btnEight.onClick = function(){
        self.setKeypadChar(8);
      };
        
      self.view.keypadTablet.btnNine.onClick = function(){
        self.setKeypadChar(9);
      };
        
      self.view.keypadTablet.btnZero.onClick = function(){
        self.setKeypadChar(0);
      };
        
      self.view.keypadTablet.imgClearKeypad.onTouchStart = function(){
        self.clearKeypadChar();
      };
        
    }
    catch(ex)
    {

    }
  },
  
  setTransferType : function()
  {
    try
    {
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var transferFlowType = transferModule.presentationController.getFlowType();

      switch(transferFlowType)
      {
        case "MyKonyAccounts":
          this.view.RightPane.lblCheckedRowName.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccountsTablet");
          break;
        case "OtherKonyBankMembersCreateTransfer":
          this.view.RightPane.lblCheckedRowName.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.tab.transfers.myKonyBankBenificiary");
          break;
        case "OtherBankAccountsCreateTransfer":
          this.view.RightPane.lblCheckedRowName.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyOtherAccounts");
          break;
        case "InternationalTransferCreateTransfer":
          this.view.RightPane.lblCheckedRowName.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.tab.transfers.internationalTransferType");
      }
    }
    catch(ex)
    {

    }
  },
  
  setBenificiaryAccount : function()
  {
    try
    {       
      var transactionManager = applicationManager.getTransactionManager();
      var transactionObject = transactionManager.getTransactionObject();
      this.view.RightPane.lblSecondCheckedRowName.text = transactionObject.toAccountName + "-" +transactionObject.toAccountNumber.slice(-4);
    }
    catch(ex)
    {

    }
  },
  
  setFromAccount : function()
  {
    try
      {
      var transactionManager = applicationManager.getTransactionManager();
      var transactionObject = transactionManager.getTransactionObject();
      this.view.RightPane.lblThirdCheckedRowName.text = transactionObject.fromAccountName + "-" + transactionObject.fromAccountNumber.slice(-4);        
      }
    catch(ex)
      {
        
      }
  },

});