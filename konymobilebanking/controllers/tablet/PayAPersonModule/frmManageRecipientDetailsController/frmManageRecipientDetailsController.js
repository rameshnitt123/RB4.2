define({
      
  		//** IMPORTANT  NOTE ** //
  			// Uncomment the code in all the catch blocks once the global exceptional Handler is merged to the project
  		//** IMPORTANT  NOTE ** //
  
      init : function() {
        try {
          var navManager = applicationManager.getNavigationManager();
          var currentForm=navManager.getCurrentForm();
          applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
        }
        catch(err) {
          // throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
      },
  	
  	navBack: function(){
      var navMan=applicationManager.getNavigationManager();
      navMan.goBack();
    },

      preShow: function() {
        try {
            if (applicationManager.getDeviceUtilManager().isIpad()) {
              this.view.flxHeader.isVisible = false;
            }
            var navManager = applicationManager.getNavigationManager();
            var formData = navManager.getCustomInfo("frmManageRecipientDetails");

            if(!kony.sdk.isNullOrUndefined(formData) && formData.isNickUpdated) {
              formData.isNickUpdated = false;
              navManager.setCustomInfo("frmManageRecipientDetails", formData);
              applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, "Successfully updated account nickname" );         
            }

//             if(!kony.sdk.isNullOrUndefined(formData) && formData.isRecipientInvokedForDeleted) {
//               formData.isRecipientInvokedForDeleted = false;
//               navManager.setCustomInfo("frmManageRecipientDetails", formData);
//               this.deleteRecipient();        
//             }

            this.initActions();
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            var navManager = applicationManager.getNavigationManager();
            var currentForm=navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().logFormName(currentForm);
        }
        catch(err) {
          // throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
      },
  
      initActions: function() {
        try {
          
          this.view.customHeaderTablet.flxBack.onClick = function() {
            var navMan=applicationManager.getNavigationManager();
            navMan.goBack();
          };

          this.view.customHeaderTablet.btnRight.onClick = function() {
              var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransactionModule");
              transferMod.presentationController.commonFunctionForNavigation("TransactionModule/frmTransfer"); 
          };
          
          this.view.flxEditNickName.onClick = function() {
            applicationManager.getNavigationManager().navigateTo("PayAPersonModule/frmManageEditNickName");
          }
          
          this.view.btnDeleteReciepient.onClick = this.deleteRecipient;
          
        }
        catch(err) {
          // throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
      },
        
      deleteRecipient: function() {
        try {
            var alertCallback = function (response){
              if(!response) {
                var navManager = applicationManager.getNavigationManager();
                navManager.setCustomInfo("frmManageRecipientList",{isRecipientDeleted: true});
                navManager.navigateTo("PayAPersonModule/frmManageRecipientList");
              }
            };

          	var alertMsg = kony.i18n.getLocalizedString("kony.tab.PayAPerson.DeleteMsg");
            var yesText = kony.i18n.getLocalizedString("kony.tab.common.Yes");
          	var NoText = kony.i18n.getLocalizedString("kony.tab.common.No");
            
          	kony.ui.Alert({
              "alertType": constants.ALERT_TYPE_CONFIRMATION,
              "alertTitle": "",
              "message": "Are you sure do you want to delete recipient permanently",
              "alertHandler": alertCallback,
              "yesLabel": NoText,
              "noLabel" : yesText
            }, {});
        }
        catch(err) {
          // throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
      }
});