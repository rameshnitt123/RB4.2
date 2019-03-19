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

      preShow: function() {
        try {
          if (applicationManager.getDeviceUtilManager().isIpad()) {
            this.view.flxHeader.isVisible = false;
          }
          this.setSegmentData();
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
          var scope = this;
          this.view.customHeaderTablet.flxBack.onClick = function() {
            scope.navigateBack();
          };
          
          this.view.customHeaderTablet.btnRight.onClick = function() {
              var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransactionModule");
              transferMod.presentationController.commonFunctionForNavigation("TransactionModule/frmTransfer"); 
          };
          
          this.view.segRecipientType.onRowClick = function() {
            scope.segmentRowClick();
          };
        }
        catch(err) {
          // throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
      },
  	  navigateBack: function() {
        var navMan=applicationManager.getNavigationManager();
            navMan.goBack();
      },
      segmentRowClick: function() {
        try {
          var index = this.view.segRecipientType.data[this.view.segRecipientType.selectedIndex[0]][1][this.view.segRecipientType.selectedIndex[1]].lblTransactionMode;
          var type = {
            "Manage Kony Bank Recipients": function() {
              applicationManager.getPresentationUtility().showLoadingScreen();
              var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
              transferModule.presentationController.fetchSameBankRecepients();
              transferModule.presentationController.setFlowType("SameBankRecipients");
            },
            "Manage Other Bank Recipients": function() {
              applicationManager.getPresentationUtility().showLoadingScreen();
              var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
              transferModule.presentationController.fetchOtherBankRecepients();
              transferModule.presentationController.setFlowType("OtherBankRecipients");
            },
            "Manage Recipients": function() {
              applicationManager.getPresentationUtility().showLoadingScreen();
              var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
              p2pMod.presentationController.setFlowType("P2P");
              p2pMod.presentationController.fetchAllP2PRecipients();
            },
            "Manage International Recipients":function(){
              applicationManager.getPresentationUtility().showLoadingScreen();
              var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
              transferModule.presentationController.fetchInternationalRecepients();
              transferModule.presentationController.setFlowType("InternationalRecipients");
            }
        };

          type[index]();

          //These below 2 lines of code needs to be removed when we map backend services and uncoment the above line.
//           var navManager = applicationManager.getNavigationManager();
//           var currentForm=navManager.navigateTo("PayAPersonModule/frmManageRecipientList");
        }
        catch(err) {
          // throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
      },

      setSegmentData: function() {
        try {
          var scope = this;
          var data = [
            [{
              "lblHeader": "Bank Accounts",
            },
             [{
               "imgArrow": "chevron.png",
               "lblTransactionMode": "Manage Kony Bank Recipients",
               "lblTransactionModeDescription": "Edit, Delete or transfer to domestic accounts"

             }, {
               "imgArrow": "chevron.png",
               "lblTransactionMode": "Manage Other Bank Recipients",
               "lblTransactionModeDescription": "Edit, Delete or transfer to Other Bank accounts"

             }, {
               "imgArrow": "chevron.png",
               "lblTransactionMode": "Manage International Recipients",
               "lblTransactionModeDescription": "Edit, Delete or transfer to International accounts"
             }]
            ],
            [{
              "lblHeader": "Pay a Person Recipients"
            },
             [{
               "imgArrow": "chevron.png",
               "lblTransactionMode": "Manage Recipients",
               "lblTransactionModeDescription": "Edit, Delete or transfer to recipients"

             }]
            ]
          ];
          this.view.segRecipientType.setData(data);
        }
        catch(err) {
          // throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
      }
});