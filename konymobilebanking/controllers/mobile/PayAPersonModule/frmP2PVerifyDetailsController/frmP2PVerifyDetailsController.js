define({

    init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },   
    frmPreShow: function() {
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
    renderTitleBar: function() {
        if (kony.os.deviceInfo().name === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        }
    },
     flxBackOnClick: function() {
      	var navManager = applicationManager.getNavigationManager();	
		navManager.goBack();
    },
    btnContinueOnClick: function() {
      var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
      applicationManager.getPresentationUtility().showLoadingScreen();   
      p2pMod.presentationController.addP2PRecipient(this.view.txtNickName.text);         
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
      var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
      var recipientDetails=p2pMod.presentationController.getP2PPayeeDetails();
      if(recipientDetails.name){
       this.view.lblRecipientNameValue.text=recipientDetails.name;
      }
      if(recipientDetails.phone){
        this.view.lblPhoneNo.text="Phone Number";
         this.view.lblPhoneValue.text=recipientDetails.phone;
      }
      if(recipientDetails.email){
         this.view.lblPhoneNo.text="Email";
         this.view.lblPhoneValue.text=recipientDetails.email;
      }
      if(recipientDetails.nickName){
        this.view.txtNickName.text=recipientDetails.nickName;
      }else if(recipientDetails.nickName===null || recipientDetails.nickName===undefined){
        this.view.txtNickName.text=recipientDetails.name;
      }
    },
   onClickCancel: function() {
     var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
     p2pMod.presentationController.navToFormBasedOnEntryPoint("createP2PPayee");
    }
});