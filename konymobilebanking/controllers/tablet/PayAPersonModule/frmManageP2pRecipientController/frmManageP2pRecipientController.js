define({

    /**
     * Description
     * @method init
     * @return 
     */
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    /**
     * Description
     * @method preShow
     * @return 
     */
    preShow: function() {
        if (applicationManager.getDeviceUtilManager().isIpad()) {
            this.view.flxHeader.isVisible = false;
        }
        this.initActions();
        this.setDataToForm();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    /**
     * Description
     * @method initActions
     * @return 
     */
    initActions: function() {
        var scope = this;
        /**
         * Description
         * @method onClick
         * @return 
         */
        this.view.customHeader.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        }

        /**
         * Description
         * @method onClick
         * @return 
         */
        this.view.flxPopSureDelete.onClick = function() {
            scope.view.flxPopSureDelete.isVisible = false;
        };

        /**
         * Description
         * @method onClick
         * @return 
         */
        this.view.btnDeleteReciepient.onClick = function() {
            //kony.ui.Alert("Are You sure do you want to delete this user permanently", confirmDelete, constants.ALERT_TYPE_CONFIRMATION, "Yes", "No", "");
            var basicConfig = {
                "alertType": constants.ALERT_TYPE_CONFIRMATION,
                "alertTitle": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfers.deleteAlertTitle"),
                "yesLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
                "noLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"),
                "message": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.deleteRecipient", "Do you want to delete the recipient"),
                "alertHandler": scope.confirmDelete
            };
            applicationManager.getPresentationUtility().showAlertMessage(basicConfig, {});;
        }
        /**
         * Description
         * @method onClick
         * @return 
         */
        this.view.btnPayAPerson.onClick = function() {
            var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
            var data = payeeMod.presentationController.getP2PPayeeDetails();
            var navMan = applicationManager.getNavigationManager();
            navMan.setEntryPoint("payaperson", "frmManageP2pRecipient");
            payeeMod.presentationController.getP2pAccounts(data);
        }
    },
  
  navigateBack: function(){
      var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      billPayMod.presentationController.commonFunctionForNavigation("frmBillPay");
    },
  
    /**
     * Description
     * @method setDataToForm
     * @return 
     */
    setDataToForm: function() {
        var scope = this;
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        var recipientData = payeeMod.presentationController.getP2PPayeeDetails();
        if (recipientData) {
            scope.view.lblRecipientNameValue.text = recipientData.name;
            scope.view.lblRecipientContact.text = recipientData.phone;
            scope.view.lblRecipientNickNameValue.text = recipientData.nickName;
        }
    },
    /**
     * Description
     * @method confirmDelete
     * @param {} response
     * @return 
     */
    confirmDelete: function(response) {
        if (response === true) {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
            p2pMod.presentationController.deleteP2PRecipient();
        } else {
            kony.print("don't delete");
        }
    },
    /**
     * Description
     * @method onClickEditNickName
     * @return 
     */
    onClickEditNickName: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        var accountDetails = p2pMod.presentationController.getP2PPayeeDetails();
        p2pMod.presentationController.editBenificiaryNickName(accountDetails);

    }
});