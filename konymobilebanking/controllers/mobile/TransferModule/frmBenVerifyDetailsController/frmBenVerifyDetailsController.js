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
      	var nickName=this.view.txtAccNickName.text;
      	if(nickName==="" || nickName===null || nickName===undefined){
          	nickName=benificiaryData.beneficiaryName;
        }
      	transferModulePresentationController.setNickName(nickName);
      	transferModulePresentationController.setIsVerified(true);
      	if(transferModulePresentationController.getFlowType()==="InternationalRecipients" || transferModulePresentationController.getFlowType()==="InternationalTransferCreateTransfer"){
          	transferModulePresentationController.setIsInternationalAccount(true);
        	transferModulePresentationController.setIsSameBankAccount(false);
          	transferModulePresentationController.setBankName(this.view.lblBankNameValue.text);
          	transferModulePresentationController.createInternationalBenificiary();
        }
      	else{
      		transferModulePresentationController.setIsInternationalAccount(false);
          	if(transferModulePresentationController.getFlowType()==="SameBankRecipients"|| transferModulePresentationController.getFlowType()==="OtherKonyBankMembersCreateTransfer"){
              	transferModulePresentationController.setIsSameBankAccount(true);
      			transferModulePresentationController.setBankName(this.view.lblBankNameValue.text);
              	transferModulePresentationController.createInternalBenificiary();
          	}
      		else{
              	transferModulePresentationController.setIsSameBankAccount(false);
          		transferModulePresentationController.setBankName(this.view.lblBankNameValue.text);
          		transferModulePresentationController.createExternalBenificiary(benificiaryData);
      		}
        }
    },
  	populateDetails:function(){
      	var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
    	var benificiaryData=transferModulePresentationController.getBenificiaryData();
      	var bankName=transferModulePresentationController.getBankName();
      	var accountNumber=JSON.parse(JSON.stringify(benificiaryData.accountNumber));
      	var maskedAccountNumber=applicationManager.getDataProcessorUtility().maskAccountNumber(accountNumber);
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
		if(transferModulePresentationController.getFlowType()==="InternationalRecipients" || transferModulePresentationController.getFlowType()==="InternationalTransferCreateTransfer"){
          		this.view.lblAccHolderValue.text=benificiaryData.beneficiaryName;
	      		this.view.lblAccNoValue.text=maskedAccountNumber;
	      		this.view.lblAccTypeVal.text=benificiaryData.accountType;
	      		this.view.flxRoutingNo.setVisibility(true);
	          	this.view.flxBankName.isVisible=true;
    	      	this.view.lblBankNameValue.isVisible=true;
                this.view.lblRoutingNo.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.SwiftCode");
				this.view.lblBankNameValue.text="Chase Bank";
	          	this.view.lblCardIssueDateVal.text=benificiaryData.swiftCode;
	          	this.view.txtAccNickName.text=benificiaryData.beneficiaryName;
                this.view.flxBankLocation.isVisible=true;
          		this.view.lblBankLocationValue.text=benificiaryData.countryName;
        }
      else{
      	if(transferModulePresentationController.getFlowType()==="SameBankRecipients" || transferModulePresentationController.getFlowType()==="OtherKonyBankMembersCreateTransfer"){
      		this.view.lblAccHolderValue.text=benificiaryData.beneficiaryName;
      		this.view.lblAccNoValue.text=maskedAccountNumber;
      		this.view.lblAccTypeVal.text=benificiaryData.accountType;
      		this.view.lblBankNameValue.text=bankName;
            this.view.flxRoutingNo.setVisibility(false);
          	this.view.txtAccNickName.text=benificiaryData.beneficiaryName;
          	this.view.flxBankLocation.isVisible=false;
        }
        else{
      		this.view.lblAccHolderValue.text=benificiaryData.beneficiaryName;
      		this.view.lblAccNoValue.text=maskedAccountNumber;
      		this.view.lblAccTypeVal.text=benificiaryData.accountType;
      		this.view.flxRoutingNo.setVisibility(true);
          	this.view.lblRoutingNo.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.RoutingNumber");
          	this.view.flxBankName.isVisible=true;
          	this.view.lblBankNameValue.isVisible=true;
			this.view.lblBankNameValue.text="Chase Bank";
          	this.view.lblCardIssueDateVal.text=benificiaryData.routingNumber;
          	this.view.txtAccNickName.text=benificiaryData.beneficiaryName;
          	this.view.flxBankLocation.isVisible=false;
        }
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