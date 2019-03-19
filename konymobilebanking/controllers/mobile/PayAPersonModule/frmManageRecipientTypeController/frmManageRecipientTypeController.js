define({

    
    init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        this.setSegmentData();
        this.initActions();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm=navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
      var scope = this;
      this.view.customHeader.flxBack.onClick = function() {
        var navMan=applicationManager.getNavigationManager();
        navMan.goBack();
      }
        this.view.segRecipientType.onRowClick = function() {
            scope.segmentRowClick();
        }
    },
    segmentRowClick: function() {
        var index = this.view.segRecipientType.data[this.view.segRecipientType.selectedIndex[0]][1][this.view.segRecipientType.selectedIndex[1]].lblTransactionMode;
        var type = {
			"Manage Kony Bank Recipients": function() {
              	applicationManager.getPresentationUtility().showLoadingScreen();
             	var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
    			transferModulePresentationController.fetchSameBankRecepients();
              transferModulePresentationController.setFlowType("SameBankRecipients");
            },
			"Manage Other Bank Recipients": function() {
              	applicationManager.getPresentationUtility().showLoadingScreen();
                var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
                transferModulePresentationController.fetchOtherBankRecepients();
              	transferModulePresentationController.setFlowType("OtherBankRecipients");
            },
            "Manage Recipients": function() {
              applicationManager.getPresentationUtility().showLoadingScreen();
                var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
                p2pMod.presentationController.setFlowType("P2P");
                p2pMod.presentationController.fetchAllP2PRecipients();
            },
          	"Manage International Recipients":function(){
        		applicationManager.getPresentationUtility().showLoadingScreen();
        		var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        		transferModulePresentationController.fetchInternationalRecepients();
        		transferModulePresentationController.setFlowType("InternationalRecipients");
      		}
        };
        type[index]();
    },
    setSegmentData: function() {
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
});
