define({
  init: function() {
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },

  preShow: function() {
    this.view.segAccounts.rowFocusSkin = "sknFlxf9f9f9";
    this.view.segAccounts.retainSelection = true;
    this.view.flxNoTransactions.isVisible = false;
    this.view.segAccounts.isVisible = true;                 
    this.setSegmentData();
    this.initActions();
    this.initHeaderActions();
    this.setSegment();
    this.showSuccessToastMessage();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  initActions: function() {
    var self = this;
	this.view.tbxSearch.text = "";
    this.view.segAccounts.setFocus(true);
    this.view.segAccounts.onRowClick = this.segmentRowClick;
    this.view.tbxSearch.onTextChange = this.tbxSearchOnTextChange;
    this.view.btnAddPayee.onClick = function() {
      var navManager = applicationManager.getNavigationManager();
      var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
      navManager.setEntryPoint("createP2PPayee", "frmP2pSelectRecipient");
      p2pMod.presentationController.setFlowType("createP2PPayeeFromransactionFlow");
      p2pMod.presentationController.clearP2PPayeeData();
      p2pMod.presentationController.commonFunctionForNavigation("frmRegP2PContactType");
    };
    
    this.view.flxCancel.onClick = function() {
      self.view.tbxSearch.text = "";
      self.view.tbxSearch.setFocus(false);
      self.tbxSearchOnTextChange();
    };
  },
  
  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.navBack;
      this.view.customHeaderTablet.btnRight.onClick = this.navBack;
    }
  },

  navBack: function() {
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    payeeMod.presentationController.cancelCommon();  
  },

  segmentRowClick: function() {
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var data = this.view.segAccounts.selectedItems[0];
    payeeMod.presentationController.getP2pAccounts(data);
  },

  setSegmentData: function() {
    var data = [
      [
        {
          lblHeader: "Frequently used accounts"
        },
        [
          {
            lblAccountName: "Houman",
            lblBankName: "Bank of America",
            lblAccountBalValue: "",
            lblAccountBal: "",
            template: "flxAccountsNoImage"
          }, 
          {
            lblAccountName: "Someone",
            lblBankName: "Citi Bank",
            lblAccountBalValue: "",
            lblAccountBal: "",
            template: "flxAccountsNoImage"
          }
        ]
      ],
      [
        {
          lblHeader: "All Recipientss"
        },
        [
          {
            lblAccountName: "Elisa",
            lblBankName: "Bank of America",
            lblAccountBalValue: "",
            lblAccountBal: "",
            template: "flxAccountsNoImage"
          }, 
          {
            lblAccountName: "John Snow",
            lblBankName: "Citi Bank",
            lblAccountBalValue: "",
            lblAccountBal: "",
            template: "flxAccountsNoImage"
          }
        ]
      ],
    ];

    this.view.segAccounts.setData(data);
  },
  
  setSegment: function() {
    var navMan = applicationManager.getNavigationManager();
    var payeeDetails = navMan.getCustomInfo("frmP2pSelectRecipient");
    var recentPayees = payeeDetails.recentPayees;
    var allPayees = payeeDetails.allPayees;
    this.view.segAccounts.widgetDataMap = {
      lblAccountName: "nickName",
      lblHeader: "lblHeader",
      lblBankName: "phone",
    };
    var data = null;
    if (recentPayees.length > 0 && allPayees.length > 0) {
      data = [
        [
          {
            lblHeader: "Recent Payees"
          },
          recentPayees
        ],
        [
          {
            lblHeader: "All Payees"
          },
          allPayees
        ]
      ];
      this.segmentData = data;
      this.view.segAccounts.setData(data);
      this.recentPayees = this.view.segAccounts.data[0][1];
      this.allPayees = this.view.segAccounts.data[1][1];
    } else if (recentPayees.length > 0) {
      data = [
        [
          {
            lblHeader: "Recent Payees"
          },
          recentPayees
        ]
      ];

      this.segmentData = data;
      this.view.segAccounts.setData(data);
      this.recentPayees = this.view.segAccounts.data[0][1];
      this.allPayees = [];
    } else if (allPayees.length > 0) {
      data = [
        [
          {
            lblHeader: "All payees"
          },
          allPayees
        ]
      ];
      this.segmentData = data;
      this.view.segAccounts.setData(data);
      this.allPayees = this.view.segAccounts.data[0][1];
      this.recentPayees = [];
    } else {
      this.segmentData = [];
      this.recentPayees = [];
      this.allPayees = [];
      this.view.segAccounts.isVisible = false;
      this.view.flxNoTransactions.isVisible = true;  
    }
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var selPersonId = payeeMod.presentationController.goBackToSelectRecipient();
    if (selPersonId && selPersonId !== "") {
      this.view.segAccounts.selectedRowIndices = [[1, [selPersonId]]];
    }
    this.view.segAccounts.rowFocusSkin = "sknFlxf9f9f9";
    this.view.segAccounts.retainSelection = true;
  },
  
  tbxSearchOnTextChange: function() {
    var navObj = applicationManager.getNavigationManager();
    var searchtext = this.view.tbxSearch.text.toLowerCase();
    var hasSearchText = searchtext.length > 0;
    this.view.flxCancel.setVisibility(hasSearchText);
    if (hasSearchText) {
      this.view.segAccounts.isVisible = true;
      this.view.flxNoTransactions.isVisible = false;
      this.view.segAccounts.removeAll();
      var data = [];
      var headers = [];
      data.push(this.recentPayees);
      data.push(this.allPayees);
      headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.recentpayees"));
      headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.allpayees"));
      var searchData = applicationManager.getDataProcessorUtility().commonSectionSegmentSearch("nickName", searchtext, data, headers);
      if (searchData.length > 0) {
        this.view.segAccounts.setData(searchData);
      } else {
        this.view.segAccounts.isVisible = false;
        this.view.flxNoTransactions.isVisible = true; 
      }
    } else {
      if (this.segmentData.length > 0) {
        this.view.segAccounts.setData(this.segmentData);
        this.view.segAccounts.isVisible = true;
        this.view.flxNoTransactions.isVisible = false;
      } else {
        this.view.segAccounts.isVisible = false;
        this.view.flxNoTransactions.isVisible = true;  
      }
    }     
  },

  showSuccessToastMessage: function() {
    var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    if (p2pMod.presentationController.isPayeeAdded) {
      this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.addBenificiary"));
      p2pMod.presentationController.isPayeeAdded = false;
    }
  },

  bindGenericSuccess: function(msg) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
  }
});
