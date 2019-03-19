define({
      init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    frmPreShow: function() {
        this.renderTitleBar();
      	this.initActions();
      	this.setRecipientName();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm=navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
  initActions : function(){
    this.view.txtRecipientName.onTextChange = this.btnContinueHandler;
    this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
    this.view.customHeader.btnRight.onClick = this.btnRightOnClick;
    this.view.btnContinue.onClick = this.btnContinueOnClick;    
  },
  setRecipientName : function(){
    var navManager = applicationManager.getNavigationManager();
    var accdata = navManager.getCustomInfo("frmTransfersToAccount");
    if(!kony.sdk.isNullOrUndefined(accdata.selectedAccountData.beneficiaryName)){
      this.view.txtRecipientName.text = accdata.selectedAccountData.beneficiaryName;
      this.view.txtRecipientName.setEnabled(false);
      this.activeteContBtn();
    }
    else{
      this.view.txtRecipientName.text = "";
      this.view.txtRecipientName.setEnabled(true);
      this.deactivateContBtn();
    }
  },
  btnContinueHandler : function(){
    if(this.view.txtRecipientName.text!==""){
      this.activeteContBtn();
    }
    else
      this.deactivateContBtn();
  },
  flxBackOnClick : function(){
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },
    btnRightOnClick: function() {
      var TransModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
      TransModPresentationController.cancelCommon();
    },
  btnContinueOnClick : function(){
    var navMan = applicationManager.getNavigationManager();
    var accdata =  navMan.getCustomInfo("frmTransfersToAccount");
    accdata.selectedAccountData.beneficiaryName = this.view.txtRecipientName.text;
    navMan.setCustomInfo("frmTransfersToAccount",accdata);
    var TransModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
    TransModPresentationController.navFromRecipName();
  },
  activeteContBtn : function(){
    this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
      this.view.btnContinue.setEnabled(true);
  },
  deactivateContBtn : function(){
    this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
      this.view.btnContinue.setEnabled(false);
  },
  validateIBAN : function(){
    var transferModule = applicationManager.getModulesPresentationController("TransferModule");
    transferModule.navAfterToAcc();
  },
    renderTitleBar: function() {
        if (kony.os.deviceInfo().name === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        }
    },
  
});