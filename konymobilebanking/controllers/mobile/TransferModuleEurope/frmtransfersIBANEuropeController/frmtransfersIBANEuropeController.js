define({
	keypadString: '',
	init: function() {
	    this.initActions();
	},
  preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
      	var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var IBAN=transferModulePresentationController.getIBAN();
      	if(IBAN){
        	this.view.tbxIBAN.text=IBAN;
      	}
      	else{
          	this.view.tbxIBAN.text="";
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
        this.view.tbxIBAN.onTextChange=scope.navigateToAccountNumber;
        this.view.customHeader.flxBack.onClick = scope.flxBackOnClick;
        this.view.btnContinue.onClick = function() {
          	var IBAN=scope.view.tbxIBAN.text;
          	var transferModule = applicationManager.getModulesPresentationController("TransferModule");
            var isValidIBAN=transferModule.isValidIBAN(IBAN,"frmtransfersIBANEurope");
          	if(isValidIBAN){
                //transferModule.navigateToEnterBenificiaryNameFromIBAN(IBAN);
                 scope.fetchBankDetailsForDomestic();
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
      fetchBankDetailsForDomestic:function(){
        applicationManager.getPresentationUtility().showLoadingScreen();
        var scope = this;
        var InternationalBankServiceName = "Internation Account to Account Fund Transfer";
        var IBAN=scope.view.tbxIBAN.text;
        var serviceName = scope.getServiceName("InternationalAccountsTransfer");
        if(IBAN!==""){
          var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
          transferModulePresentationController.fetchBankDetailsForDomesticTransfer(IBAN, serviceName);
         }
      },

   validateIBAN: function(response){
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    	var scope = this;
        if(response !==""){
            var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
          	var IBAN=scope.view.tbxIBAN.text;
            transferModulePresentationController.navigateToEnterBenificiaryNameFromIBAN(IBAN, response);
        }
      else{
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
          	var IBAN=scope.view.tbxIBAN.text;
            response = "KonyBank";
            transferModulePresentationController.navigateToEnterBenificiaryNameFromIBAN(IBAN, response);
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
      	var IBAN=this.view.tbxIBAN.text;
      	if(IBAN.length>0){
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
