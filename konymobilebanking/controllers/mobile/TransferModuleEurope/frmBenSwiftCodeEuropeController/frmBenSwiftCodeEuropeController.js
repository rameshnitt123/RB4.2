define({
    
  	timerCounter:0,
  	init:function(){
    	this.initActions();
  	},
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
      	var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
    	var swiftCode=transferModulePresentationController.getSwiftCode();
      	this.view.txtSwiftCode.setFocus(true);
      	if(swiftCode){
        	this.view.txtSwiftCode.text=swiftCode;
      	}
      	else{
          	this.view.txtSwiftCode.text="";
          	this.disableContinueButton();
        }
      	var navManager = applicationManager.getNavigationManager();
    	var currentForm=navManager.getCurrentForm();
    	applicationManager.getPresentationUtility().dismissLoadingScreen();
    	applicationManager.getPresentationFormUtility().logFormName(currentForm);
	},

    initActions: function() {
        var scope = this;
        var navManager = applicationManager.getNavigationManager();
    	var currentForm=navManager.getCurrentForm();
    	applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
        this.view.txtSwiftCode.onTextChange=scope.navigateToAccountNumber;
        this.view.customHeader.flxBack.onClick = scope.flxBackOnClick;
        this.view.btnContinue.onClick = function() {
          	var swiftCode=scope.view.txtSwiftCode.text;
          	var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");           
          	var isValidSwiftCode=transferModulePresentationController.isValidSwiftCode(swiftCode,"frmBenSwiftCodeEurope");
          	if(isValidSwiftCode){
				 scope.fetchBankDetailsForInternational();
            }else{
               return;
              }
        };
        this.view.customHeader.btnRight.onClick = scope.onClickCancel;
    },
    
    getServiceName : function(displayName) {
        var serviceName;
        if(displayName === "InternationalAccountsTransfer") {
        serviceName = "International Account to Account Fund Transfer";
        } else if (displayName === "OtherBankAccountsTransfer") {
        serviceName = "Interbank Account to Account Fund Transfer";
        }
        var servicesForUser = applicationManager.getConfigurationManager().getServicesListForUser();
        if (servicesForUser) {
        serviceName = servicesForUser.filter(function(dataItem){
        if(dataItem.displayName === displayName) return true;
        });
        if(serviceName && serviceName.length > 0) {
        serviceName = serviceName[0].serviceName;
        }
      }
    return serviceName
    }, 
   /** Fetches bank details of international bank
     */
      fetchBankDetailsForInternational:function(){
        applicationManager.getPresentationUtility().showLoadingScreen();
        var scope = this;
        var InternationalBankServiceName = "Internation Account to Account Fund Transfer";
        var swiftCode=scope.view.txtSwiftCode.text;
        var serviceName = scope.getServiceName("InternationalAccountsTransfer");
        if(swiftCode!==""){
          var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
          transferModulePresentationController.fetchBankDetailsForInternationalTransfer(swiftCode, serviceName);
         }
      },
 
    validateSwiftcode: function(response){
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    	var scope = this;
        if(response !==""){
            var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
          	var swiftCode=scope.view.txtSwiftCode.text;
            transferModulePresentationController.navigateToEnterBenificiaryAccountNumberFromSwiftCode(swiftCode, response);
        }
      else{
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
          	var swiftCode=scope.view.txtSwiftCode.text;
            response = "KonyBank";
            transferModulePresentationController.navigateToEnterBenificiaryAccountNumberFromSwiftCode(swiftCode, response);
      }
    },
  onClickCancel: function() {
    	applicationManager.getPresentationUtility().showLoadingScreen();
      	var navManager = applicationManager.getNavigationManager();
      	var navigateToForm=navManager.getEntryPoint("createInternalBankBenificiary");
      	var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
      	transferModPresentationController.commonFunctionForNavigation(navigateToForm);
        
	},
  	flxBackOnClick: function() {
      	var navMan=applicationManager.getNavigationManager();
      	navMan.goBack(); 
    },
  	navigateToAccountNumber:function(){
      	var swiftCode=this.view.txtSwiftCode.text;
      	if(swiftCode.length>0){
        	this.enableContinueButton();
      	}
      	else{
          	this.disableContinueButton();
        }
    },
  	enableContinueButton:function(){
    	this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
  	},
  	disableContinueButton: function() {
        this.view.btnContinue.setEnabled(false);
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
    },
  bindGenericError: function (errorMsg) {
    	applicationManager.getPresentationUtility().dismissLoadingScreen();
    	var scopeObj = this;
    	applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
  	}
});
