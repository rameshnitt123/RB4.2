define({
    preshow: function () {
      try {
        if (kony.os.deviceInfo().name === "iPhone") {
          this.view.flxHeader.isVisible = false;
        } else {
          this.view.flxHeader.isVisible = true;
        }
        var navManager = applicationManager.getNavigationManager();
        var currentTransactionRecord = navManager.getCustomInfo("frmPFMEditNote");
        this.view.txtNote.text = currentTransactionRecord.transactionNotes;
        this.setFlowActions();
      }
      catch(err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      }        
    },
    /**
     * Description
     * @method updateNote
     * @return 
     */
    updateNote: function() {
        try {
            applicationManager.getPresentationUtility().showLoadingScreen();
          	var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            var navManager = applicationManager.getNavigationManager();
            var currentTransactionRecord = navManager.getCustomInfo("frmPFMEditNote");
            var transactionRecord = {
                "transactionId": currentTransactionRecord.transactionId,
                "transactionNotes": this.view.txtNote.text,
            };
            accountMod.presentationController.updatePFMTransaction(transactionRecord, this.updateNoteSuccess.bind(this), this.updateNoteFailure.bind(this));
        }
        catch(err) {
          applicationManager.getPresentationUtility().dismissLoadingScreen();
          throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
      /**
     * Description
     * @method updateNoteSuccess
     * @param {} response
     * @return 
     */
    updateNoteSuccess: function(response) {
        try {
          var self = this;
          var navManager = applicationManager.getNavigationManager();
          var currentTransactionRecord = navManager.getCustomInfo("frmPFMEditNote");
          var currentTransaction = navManager.getCustomInfo("frmPFMTransactionDetails");
          currentTransaction.categoryId = currentTransactionRecord.transactionId;
          currentTransaction.transactionNotes = this.view.txtNote.text;
          navManager.setCustomInfo("frmPFMTransactionDetails", currentTransaction);
          var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
          accountModule.presentationController.commonFunctionForNavigation("frmPFMTransactionDetails");
        }
        catch(err) {
          applicationManager.getPresentationUtility().dismissLoadingScreen();
          throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    /**
     * Description
     * @method updateNoteFailure
     * @param {} response
     * @return 
     */
    updateNoteFailure: function(response) {
        try {
          	applicationManager.getPresentationUtility().dismissLoadingScreen();
            alert("Snap : " + JSON.stringify(response));
        }
        catch(err) {
          applicationManager.getPresentationUtility().dismissLoadingScreen();
          throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },

    setFlowActions: function () {
      try {
        var scopeObj = this;
        this.view.btnSave.isVisible = true;
        this.view.btnSave.onClick =  scopeObj.updateNote;
        this.view.customHeader.flxBack.onClick = function () {
          var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
          accountModule.presentationController.commonFunctionForNavigation("frmPFMTransactionDetails");
        };
      }
      catch(err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
      }        
    }
});