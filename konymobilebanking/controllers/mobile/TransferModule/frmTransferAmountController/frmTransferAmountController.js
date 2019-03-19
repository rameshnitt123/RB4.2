define({ 
  keypadString:'0.00',
  isPeriodUsed : false,
  timerCounter: 0,
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
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
  preShow: function(){
    if(kony.os.deviceInfo().name==="iPhone"){
      // this.view.flxHeader.isVisible = false;
      this.view.flxHeader.setVisibility(false);
    }
    var configManager = applicationManager.getConfigurationManager();
    this.view.lblDollar.text=configManager.getCurrencyCode();
  var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
      var transObj= transModPresentationController.getTransObject();
    var amount= transObj.amount;
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
    this.initActions();
        var navManager = applicationManager.getNavigationManager();
        var currentForm=navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm); 
    if(transModPresentationController.internationalBenificiaryAdded || transModPresentationController.otherBankBenificiaryAdded || transModPresentationController.sameBankBenificiaryAdded){
      applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.addBenificiaryDuringPayment","Successfully added recipient account. Please proceed with your transaction."));
      transModPresentationController.internationalBenificiaryAdded = false;
      transModPresentationController.otherBankBenificiaryAdded = false;
      transModPresentationController.sameBankBenificiaryAdded = false;
    } 
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  initActions: function(){
    this.setFromAccountData();
    this.view.btnContinue.onClick =this.continueOnClick; 
    this.view.btnChange.onClick = function(){
      applicationManager.getPresentationUtility().showLoadingScreen();
      var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
      transModPresentationController.commonFunctionForNavigation("frmTransfersFromAccount");
    }
    this.view.customHeader.flxBack.onClick = function(){
      var navMan=applicationManager.getNavigationManager();
      navMan.goBack();
    }
    this.view.customHeader.btnRight.onClick =this.cancelOnClick; 
  },
  cancelOnClick:function()
  {
    var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModulePresentationController.cancelCommon();
  },
  setFromAccountData:function()
  {
     var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
    var fromaccountdata= transModPresentationController.getTransferObjectById();
    this.view.lblFromAccountValue.text=fromaccountdata[0].accountName;
    this.view.lblBalanceValue.text=fromaccountdata[0].availableBalance;
    this.view.lblBank.text=fromaccountdata[0].bankName;
    this.view.lblavailableBalance.text=fromaccountdata[0].accountBalanceType;
  },
  setKeypadChar: function (char) {
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
  },
  clearKeypadChar: function () {
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
  },
  updateAmountValue: function(){
    if(this.keypadString==='0.00'){
      this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
      this.view.btnContinue.setEnabled(false);
      this.view.lblAmount.text = this.view.keypad.formatAmount(this.keypadString);
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
      this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
      this.view.btnContinue.setEnabled(true);
      this.view.lblAmount.text = this.view.keypad.formatAmount(keypadStringCommas);
    }
  },
  continueOnClick :function()
  {
//     var amount= this.view.lblAmount.text;
    var configManager = applicationManager.getConfigurationManager();
    var amount= this.keypadString;
    //var fromAvlBal = this.view.lblBalanceValue.text;  
    var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
    var fromaccountdata = transferModulePresentationController.getTransferObjectById();
    transferModulePresentationController.setFromAccountsForTransactions(fromaccountdata[0]);
    var fromAvlBal = fromaccountdata[0].fromAccountBalance;
    var evalAmountLimits = transferModulePresentationController.evaluateMinMaxAmountLimits(amount);
    if(evalAmountLimits == "valid")
      transferModulePresentationController.evaluateAmount(amount,fromAvlBal);
    else if(evalAmountLimits["max"]){
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      this.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.entitlements.maxTransactionLimitExceeded")+" "+configManager.getCurrencyCode()+evalAmountLimits["max"]);
    }
    else if(evalAmountLimits["min"]){
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      this.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.entitlements.minTransactionLimitUnreached")+" "+configManager.getCurrencyCode()+evalAmountLimits["min"]);
    }
  },
  bindGenericError: function (errorMsg) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var scopeObj = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
  }
});
