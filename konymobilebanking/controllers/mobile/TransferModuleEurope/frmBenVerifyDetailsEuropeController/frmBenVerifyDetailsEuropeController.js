define({
  	timerCounter:0,
	init:function(){
      	this.initActions();
    },
    frmPreShow: function() {
        this.renderTitleBar();
      	this.populateDetails();
      	var navManager = applicationManager.getNavigationManager();
    	var currentForm=navManager.getCurrentForm();
    	applicationManager.getPresentationUtility().dismissLoadingScreen();
    	applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
  initActions:function(){
    	var scope=this;
        var navManager = applicationManager.getNavigationManager();
    	var currentForm=navManager.getCurrentForm();
    	applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    	this.view.btnContinue.onClick = scope.btnContinueOnClick;
        this.view.customHeader.flxBack.onClick = scope.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = scope.onClickCancel;
  },
    btnRightOnClick: function() {
        
    },
    renderTitleBar: function() {
        if (kony.os.deviceInfo().name === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        }
    },
    flxBackOnClick: function() {
      	var navMan=applicationManager.getNavigationManager();
     	navMan.goBack();
    },
    btnContinueOnClick: function() {
      	applicationManager.getPresentationUtility().showLoadingScreen();
      	var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
    	var benificiaryData=transferModulePresentationController.getBenificiaryData();
        var bankName=transferModulePresentationController.getBankName();
      	var nickName=this.view.txtAccNickName.text;
      	if(nickName==="" || nickName===null || nickName===undefined){
          	nickName=benificiaryData.beneficiaryName;
        }
      	transferModulePresentationController.setNickName(nickName);
      	transferModulePresentationController.setIsVerified(true);
      	if(transferModulePresentationController.getFlowType()==="InternationalRecipients"){
          	transferModulePresentationController.setIsInternationalAccount(true);
        	transferModulePresentationController.setIsSameBankAccount(false);
          	transferModulePresentationController.setBankName(transferModulePresentationController.getBankNameFromResponse());
          	transferModulePresentationController.createInternationalBenificiary();
        } 
        else if(transferModulePresentationController.getFlowType()==="InternationalTransferCreateTransfer"){
          	transferModulePresentationController.setIsInternationalAccount(true);
        	transferModulePresentationController.setIsSameBankAccount(false);
          	transferModulePresentationController.setBankName(bankName);
          	transferModulePresentationController.createInternationalBenificiary();
          }
        else if(transferModulePresentationController.getFlowType()==="OtherBankRecipients"){
                transferModulePresentationController.setIsInternationalAccount(false);
                transferModulePresentationController.setIsSameBankAccount(false);
          		transferModulePresentationController.setBankName(transferModulePresentationController.getBankNameFromResponse());
          		transferModulePresentationController.createExternalBenificiary(benificiaryData);
      		}
        else {
                transferModulePresentationController.setIsInternationalAccount(false);
                transferModulePresentationController.setIsSameBankAccount(false);
          		transferModulePresentationController.setBankName(bankName);
          		transferModulePresentationController.createExternalBenificiary(benificiaryData);
      		}
        
        
    },
  	populateDetails:function(){
      	var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
    	var benificiaryData=transferModulePresentationController.getBenificiaryData();
      	var bankName=transferModulePresentationController.getBankName();
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
		if(transferModulePresentationController.getFlowType()==="InternationalRecipients"){
          		
                var accountNumber=JSON.parse(JSON.stringify(benificiaryData.accountNumber));
             	var maskedAccountNumber=applicationManager.getDataProcessorUtility().maskAccountNumber(accountNumber);
                this.view.lblAccHolderValue.text=benificiaryData.beneficiaryName;
	      		this.view.lblAccNoValue.text=maskedAccountNumber;
	      		this.view.lblAccTypeVal.text=benificiaryData.accountType;
	      		this.view.flxRoutingNo.setVisibility(true);
	          	this.view.flxBankName.isVisible=true;
                this.view.flxAccType.isVisible=false;
    	      	this.view.lblBankNameValue.isVisible=true;
                this.view.lblRoutingNo.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.SwiftCode");
				this.view.lblBankNameValue.text=transferModulePresentationController.getBankNameFromResponse();
	          	this.view.lblCardIssueDateVal.text=benificiaryData.swiftCode;
	          	this.view.txtAccNickName.text=benificiaryData.beneficiaryName;
                this.view.flxBankLocation.isVisible=false;
          		
        } 
         else if(transferModulePresentationController.getFlowType()==="InternationalTransferCreateTransfer"){
          		
                var accountNumber=JSON.parse(JSON.stringify(benificiaryData.accountNumber));
             	var maskedAccountNumber=applicationManager.getDataProcessorUtility().maskAccountNumber(accountNumber);
                this.view.lblAccHolderValue.text=benificiaryData.beneficiaryName;
	      		this.view.lblAccNoValue.text=maskedAccountNumber;
	      		this.view.lblAccTypeVal.text=benificiaryData.accountType;
	      		this.view.flxRoutingNo.setVisibility(true);
	          	this.view.flxBankName.isVisible=true;
                this.view.flxAccType.isVisible=false;
    	      	this.view.lblBankNameValue.isVisible=true;
                this.view.lblRoutingNo.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.SwiftCode");
				this.view.lblBankNameValue.text=bankName;
	          	this.view.lblCardIssueDateVal.text=benificiaryData.swiftCode;
	          	this.view.txtAccNickName.text=benificiaryData.beneficiaryName;
                this.view.flxBankLocation.isVisible=false;
          		
        } else if(transferModulePresentationController.getFlowType()==="OtherBankRecipients"){
           this.view.flxRoutingNo.setVisibility(true);
            this.view.lblRoutingNo.text= applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransfersEurope.IBAN");
            var formatUtil = applicationManager.getFormatUtilManager();            
            this.view.lblCardIssueDateVal.text=formatUtil.formatIBAN(benificiaryData.IBAN);            
            this.view.lblAccHolderValue.text=benificiaryData.beneficiaryName;
            this.view.flxBankName.isVisible=true;
			this.view.lblBankNameValue.text=transferModulePresentationController.getBankNameFromResponse();
            this.view.txtAccNickName.text=benificiaryData.beneficiaryName;
          	this.view.flxBankLocation.isVisible=false;
            this.view.flxAccNo.isVisible=false;
            this.view.flxAccType.isVisible=false;
        }
        else {
            this.view.flxRoutingNo.setVisibility(true);
            this.view.lblRoutingNo.text= applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransfersEurope.IBAN");
            var formatUtil = applicationManager.getFormatUtilManager();            
            this.view.lblCardIssueDateVal.text=formatUtil.formatIBAN(benificiaryData.IBAN);            
            this.view.lblAccHolderValue.text=benificiaryData.beneficiaryName;
            this.view.flxBankName.isVisible=true;
			this.view.lblBankNameValue.text=bankName;
            this.view.txtAccNickName.text=benificiaryData.beneficiaryName;
          	this.view.flxBankLocation.isVisible=false;
            this.view.flxAccNo.isVisible=false;
            this.view.flxAccType.isVisible=false;
        }
       
      
    },
	onClickCancel: function() {
      	applicationManager.getPresentationUtility().dismissLoadingScreen();
      	var navManager = applicationManager.getNavigationManager();	
      	var navigateToForm=navManager.getEntryPoint("createInternalBankBenificiary");
      	var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
      	transferModPresentationController.commonFunctionForNavigation(navigateToForm);
    },
  	bindGenericError: function (errorMsg) {
    	applicationManager.getPresentationUtility().dismissLoadingScreen();
    	var scopeObj = this;
    	applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
  	}
});
