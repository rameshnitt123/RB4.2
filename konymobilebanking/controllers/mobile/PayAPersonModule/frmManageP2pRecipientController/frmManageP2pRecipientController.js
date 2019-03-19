define({
      
    init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    preShow: function () {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }

      this.initActions();
      this.setDataToForm();
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function () {
        var scope = this;
        this.view.customHeader.flxBack.onClick = function () {
            var navMan=applicationManager.getNavigationManager();
          	navMan.goBack();
        }
        
        this.view.customHeader.btnRight.onClick = function () {
         scope.onClickEdit();         
        }
        this.view.btnDeleteRecipient.onClick = function(){
          //kony.ui.Alert("Are You sure do you want to delete this user permanently", confirmDelete, constants.ALERT_TYPE_CONFIRMATION, "Yes", "No", "");
          var basicConfig={
            "alertType": constants.ALERT_TYPE_CONFIRMATION,
            "alertTitle": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfers.deleteAlertTitle"),
            "yesLabel":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
            "noLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"),
            "message": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.deleteRecipient","Do you want to delete the recipient"),
            "alertHandler": scope.confirmDelete
          };
          applicationManager.getPresentationUtility().showAlertMessage(basicConfig,{});;
        }
        this.view.btnPayAPerson.onClick = function(){
          var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
          var data=payeeMod.presentationController.getP2PPayeeDetails();
          var navMan=applicationManager.getNavigationManager();
          navMan.setEntryPoint("payaperson","frmManageP2pRecipient");
          payeeMod.presentationController.getP2pAccounts(data); 
        }
    },
  setDataToForm : function(){
    var scope = this;
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var recipientData=payeeMod.presentationController.getP2PPayeeDetails();
    if(recipientData){
    scope.view.lblRecipientNameValue.text=recipientData.name;
    scope.view.lblRecipientContact.text=recipientData.phone;
    scope.view.lblRecipientNickNameValue.text=recipientData.nickName;
   }
  },
  confirmDelete:function(response){
    if(response===true){
      applicationManager.getPresentationUtility().showLoadingScreen();
      var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
      p2pMod.presentationController.deleteP2PRecipient();
    } else{
      kony.print("don't delete");
    }
  },
  onClickEdit :function(){
              applicationManager.getPresentationUtility().showLoadingScreen();
         	var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
            var accountDetails=p2pMod.presentationController.getP2PPayeeDetails();
    		p2pMod.presentationController.editBenificiaryNickName(accountDetails);
 
}
});