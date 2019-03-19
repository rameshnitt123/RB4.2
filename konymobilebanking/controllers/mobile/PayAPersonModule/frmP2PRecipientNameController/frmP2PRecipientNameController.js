define({
      init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    frmPreShow: function() {
        this.view.txtRecipientName.onTextChange = this.btnContinueHandler;
        this.view.txtLastName.onTextChange = this.btnContinueHandler;
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = this.flxBackOnClick;
        this.view.btnContinue.onClick = this.btnContinueOnClick;
        this.view.customHeader.btnRight.onClick = this.onClickCancel;
        this.renderTitleBar();
        this.setDataToForm();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm=navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    btnRightOnClick: function() {
    },
    renderTitleBar: function() {
        if (kony.os.deviceInfo().name === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        }
    },
    btnContinueHandler: function() {
        if ((this.view.txtRecipientName.text !== '') && (this.view.txtRecipientName.text !== null) ) {
            this.enableContinueButton();
        } else {
            this.disableContinueButton();
        }
    },
    flxBackOnClick: function() {
      	var navMan = applicationManager.getNavigationManager();
      	navMan.goBack(); 
    },
    btnContinueOnClick: function() {
      if(this.view.txtRecipientName.text){        
      var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
      p2pMod.presentationController.navigateToP2PVerifyDetails("frmP2PVerifyDetails",this.view.txtRecipientName.text); 
      }
    },
    enableContinueButton: function() {
        this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
    },
    disableContinueButton: function() {
        this.view.btnContinue.setEnabled(false);
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
    },
  setDataToForm : function(){    
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var recipientData=payeeMod.presentationController.getP2PPayeeDetails();
    if(recipientData && recipientData.name){
      this.view.txtRecipientName.text=recipientData.name;
      this.enableContinueButton();
    }
    else{
      this.view.txtRecipientName.text="";
      this.disableContinueButton();
    }
  },
     onClickCancel: function() {
       var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
       p2pMod.presentationController.navToFormBasedOnEntryPoint("createP2PPayee");
     }
});