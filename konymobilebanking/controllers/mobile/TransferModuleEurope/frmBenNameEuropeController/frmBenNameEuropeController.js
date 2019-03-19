define({
init:function(){
     	this.initActions();
    },
    frmPreShow: function() {
		this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
    	var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
    	var benificiaryData=transferModulePresentationController.getBenificiaryData();
      	var beneficiaryName=benificiaryData.beneficiaryName;
      	if(beneficiaryName){
        	this.view.txtRecipientName.text=beneficiaryName;
      	}
      	else{
          	this.view.txtRecipientName.text="";
          	this.disableContinueButton();
        }
      	this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = this.flxBackOnClick;
        this.view.btnContinue.onClick = this.btnContinueOnClick;
        this.view.customHeader.btnRight.onClick = this.onClickCancel;
		this.view.txtRecipientName.onTextChange=this.navigateToVerifyDetails;
	    this.view.txtRecipientName.setFocus(true);
        this.renderTitleBar();
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
    	this.view.customHeader.flxBack.onClick = scope.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = scope.flxBackOnClick;
        this.view.btnContinue.onClick = scope.btnContinueOnClick;
        this.view.customHeader.btnRight.onClick = scope.onClickCancel;
  	},
    btnRightOnClick: function() {
    },
    renderTitleBar: function() {
        if (kony.os.deviceInfo().name === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        }
    },
	navigateToVerifyDetails:function(){
      	var recipientName=this.view.txtRecipientName.text;
      	if(recipientName.length>0){
        	this.enableContinueButton();
      	}
      	else{
          	this.disableContinueButton();
        }
    },
    btnContinueHandler: function() {
        if ((this.view.txtFirstName.text !== '') && (this.view.txtFirstName.text !== null) && (this.view.txtLastName.text !== '') && (this.view.txtLastName.text !== null)) {
            this.enableContinueButton();
        } else {
            this.disableContinueButton();
        }
    },
    flxBackOnClick: function() {
      	var navMan=applicationManager.getNavigationManager();
     	navMan.goBack();
    },
    btnContinueOnClick: function() {
      	var recipientName=this.view.txtRecipientName.text;
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
      	transferModulePresentationController.navigateToBenificiaryVerifyDetails(recipientName);
    },
    enableContinueButton: function() {
        this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
    },
    disableContinueButton: function() {
        this.view.btnContinue.setEnabled(false);
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
    },
  	onClickCancel: function() {
      	applicationManager.getPresentationUtility().dismissLoadingScreen();
      	var navManager = applicationManager.getNavigationManager();	
      	var navigateToForm=navManager.getEntryPoint("createInternalBankBenificiary");
      	var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
      	transferModPresentationController.commonFunctionForNavigation(navigateToForm);
	}
});
