define({
  init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
  preShow: function() {
    var self = this;
    if (this.view.flxHeaderSearchbox.isVisible === true) {
      this.view.flxHeaderSearchbox.isVisible = false;
      this.view.flxSearch.isVisible = true;
      this.view.flxHeader.isVisible = true;
      this.view.flxMainContainer.top = "56dp";
    } 
    if (kony.os.deviceInfo().name === "iPhone") {
      this.view.flxHeader.isVisible = false;
    }
    this.view.segAccounts.rowFocusSkin = "sknFlxf9f9f9";
    this.view.segAccounts.retainSelection = true;
    this.view.flxNoTransactions.isVisible=false;
    this.view.segAccounts.isVisible=true;                 
    this.setSegmentData();
    this.addDummyRows();
    this.initActions();
    this.setSegment();
	this.showSuccessToastMessage();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    this.view.segAccounts.onScrolling = function () {
            self.transactionsSegmentOnScrolling();
        };
  },
   addDummyRows: function () {
        var segWidgetDataMap = this.view.segAccounts.widgetDataMap;
        segWidgetDataMap["flxEmptyHeader"] = "flxEmptyHeader";
        segWidgetDataMap["flxEmptyRow"] = "flxEmptyRow";
        this.view.segAccounts.widgetDataMap = segWidgetDataMap;
        var segData = this.view.segAccounts.data;
        var segLength = 0;
        for (let i = 0; i < segData.length; i++) {
            segLength = segLength + (segData[i][1].length * 70) + 49; //66 is the row height and 49 is the header height
        }
                if(segData == null || segData == undefined){
          segData = [];
        }
        segData.unshift([{
                "template": "flxEmptyHeader",
                "flxEmptyHeader": {
                    "height": "0dp"
                }
            },
            [{
                "template": "flxEmptyRow",
                "flxEmptyRow": {
                    "height": "55dp"
                }
            }]
        ]);
        segLength = segLength + 55;
        this.view.segAccounts.setData(segData);
        this.segLength = segLength;
    },
    transactionsSegmentOnScrolling: function () {
        var parallaxSpeed = 1;
        var yOffset = this.view.segAccounts.contentOffsetMeasured.y;
        this.view.flxSearch.top = 0 - (yOffset * parallaxSpeed) + "dp";
    },
  removeDummyRows : function(){
    var data=this.view.segAccounts.data;
    if(data == null || data == undefined){
      kony.print("no data");
    }
    else{
      data.shift();
      this.view.segAccounts.setData(data);
    }
  },
  initActions: function() {
    var scope = this;
    this.view.customHeader.flxBack.onClick = function() {
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.cancelCommon();
    };
    this.view.segAccounts.onRowClick = function() {
      scope.segmentRowClick();
    };
    this.view.tbxSearch.onTouchStart = this.showSearch;
    this.view.customSearchbox.btnCancel.onClick = this.showSearch;
    //this.view.tbxSearch.onTextChange=this.tbxSearchOnTextChange;
    this.view.customHeader.btnRight.onClick = function() {
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.cancelCommon();
    }
  },
  segmentRowClick: function() {
    var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var data=this.view.segAccounts.selectedItems[0];
    payeeMod.presentationController.getP2pAccounts(data);
  },
  setSegmentData: function() {
    this.view.btnAddRecipient.onClick = function() {
      /* var navManager = applicationManager.getNavigationManager();
      var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
      navManager.setCustomInfo("frmRegP2PContactType",{"entryPoint":"createRecipient"});
      p2pMod.presentationController.navigateToAddP2PRecipient("frmRegP2PContactType"); */
      var navManager=applicationManager.getNavigationManager();
      var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
      navManager.setEntryPoint("createP2PPayee","frmP2pSelectRecipient");
      p2pMod.presentationController.setFlowType("createP2PPayeeFromransactionFlow");
      p2pMod.presentationController.clearP2PPayeeData();
      p2pMod.presentationController.commonFunctionForNavigation("frmRegP2PContactType");
    }
                var data = [
            [{
                    "lblHeader": "Frequently used accounts"
                },
                [{
                    "lblAccountName": "Houman",
                    "lblBankName": "Bank of America",
                    "lblAccountBalValue": "",
                    "lblAccountBal": "",
                    "template": "flxAccountsNoImage"
                }, {
                    "lblAccountName": "Someone",
                    "lblBankName": "Citi Bank",
                    "lblAccountBalValue": "",
                    "lblAccountBal": "",
                    "template": "flxAccountsNoImage"
                }]
            ],
            [{
                    "lblHeader": "All Recipientss"
                },
                [{
                    "lblAccountName": "Elisa",
                    "lblBankName": "Bank of America",
                    "lblAccountBalValue": "",
                    "lblAccountBal": "",
                    "template": "flxAccountsNoImage"
                }, {
                    "lblAccountName": "John Snow",
                    "lblBankName": "Citi Bank",
                    "lblAccountBalValue": "",
                    "lblAccountBal": "",
                    "template": "flxAccountsNoImage"
                }]
            ],
        ];

    this.view.segAccounts.setData(data);
  },
  showSearch: function() {    
    if (this.view.flxHeaderSearchbox.isVisible == true) {
      this.view.flxHeaderSearchbox.isVisible = false;
      this.view.flxSearch.isVisible = true;
      this.view.customSearchbox.tbxSearch.text="";
      if (kony.os.deviceInfo().name === "iPhone") {
        this.view.flxHeader.isVisible = false;
        this.view.flxMainContainer.top = "0dp";
      }
      else{
        this.view.flxHeader.isVisible = true;
        this.view.flxMainContainer.top = "56dp";
      }

      if(this.segmentData.length>0)
      {
        this.view.segAccounts.setData(this.segmentData);
        this.addDummyRows();
        this.view.segAccounts.isVisible=true;
        this.view.flxNoTransactions.isVisible=false;
      }
      else
      {
        this.view.segAccounts.isVisible=false;
        this.view.flxNoTransactions.isVisible=true;  
      }
    } else {
      this.view.flxSearch.isVisible = false;
      this.view.flxHeader.isVisible = false;
      this.view.flxMainContainer.top = "40dp";
      this.removeDummyRows();
      this.view.flxHeaderSearchbox.isVisible = true;
      this.view.customSearchbox.tbxSearch.setFocus(true);
      this.view.customSearchbox.tbxSearch.onTextChange=this.tbxSearchOnTextChange;
    }   
  },
  setSegment:function(){
    var navMan = applicationManager.getNavigationManager();
    var payeeDetails = navMan.getCustomInfo("frmP2pSelectRecipient");
    var recentPayees = payeeDetails.recentPayees;
    var allPayees = payeeDetails.allPayees;
    this.view.segAccounts.widgetDataMap={
      lblAccountName:"nickName",
      lblHeader:"lblHeader",
      lblBankName:"phone",
      lblAccountBalValue:" ",
      lblAccountBal:" "
    };
    if(recentPayees.length>0 && allPayees.length>0)
    {
      var data=  [[{"lblHeader": "Recent Recipients"},recentPayees],
                  [{"lblHeader": "All Recipients" },allPayees]];
      this.segmentData=data;
      this.view.segAccounts.setData(data);
      this.recentPayees=this.view.segAccounts.data[0][1];
      this.allPayees=this.view.segAccounts.data[1][1];

    }
    else if(recentPayees.length>0)
    {
      var data=  [[{"lblHeader": "Recent Payees"},recentPayees]];

      this.segmentData=data;
      this.view.segAccounts.setData(data);
      this.recentPayees=this.view.segAccounts.data[0][1];
      this.allPayees=[];

    }
    else if(allPayees.length>0)
    {
      var data=  [[{ "lblHeader": "All payees"},allPayees]];
      this.segmentData=data;
      this.view.segAccounts.setData(data);
      this.allPayees=this.view.segAccounts.data[0][1];
      this.recentPayees=[];
    }
    else
    {
      this.segmentData=[];
      this.recentPayees=[];
      this.allPayees=[];
      this.view.segAccounts.isVisible=false;
      this.view.flxNoTransactions.isVisible=true;  
    }
   var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
   var selPersonId = payeeMod.presentationController.goBackToSelectRecipient();
   if(selPersonId!== undefined && selPersonId!== null && selPersonId!== "")
   {
    this.view.segAccounts.selectedRowIndices = [[1,[selPersonId]]];
   }
    this.view.segAccounts.rowFocusSkin = "sknFlxf9f9f9";
    this.view.segAccounts.retainSelection = true;
    this.addDummyRows();
  },
  tbxSearchOnTextChange:function(){
    var navObj=applicationManager.getNavigationManager();
    var searchtext=this.view.customSearchbox.tbxSearch.text.toLowerCase();
    if(searchtext)
    {               
      this.view.segAccounts.isVisible=true;
      this.view.flxNoTransactions.isVisible=false;
      this.view.segAccounts.removeAll();
      var data = [],headers = [];
      data.push(this.recentPayees);
      data.push(this.allPayees);
      headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.recentpayees"));
      headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.allpayees"));
      var searchData =    applicationManager.getDataProcessorUtility().commonSectionSegmentSearch("nickName",searchtext,data,headers);
      if(searchData.length>0)
      {
        this.view.segAccounts.setData(searchData);
        this.addDummyRows();
        //this.view.segAccounts.forceLayout();
      }
      else
      {
        this.view.segAccounts.isVisible=false;
        this.view.flxNoTransactions.isVisible=true; 
      }
    }
    else
    {
      if(this.segmentData.length>0)
      {
        this.view.segAccounts.setData(this.segmentData);
        this.addDummyRows();
        this.view.segAccounts.isVisible=true;
        this.view.flxNoTransactions.isVisible=false;
      }
      else
      {
        this.view.segAccounts.isVisible=false;
        this.view.flxNoTransactions.isVisible=true;  
      }
    }     
  },
  showSuccessToastMessage:function(){
    var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    if(p2pMod.presentationController.isPayeeAdded){
      this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.addBenificiary"));
      p2pMod.presentationController.isPayeeAdded = false;
    }
  },
  bindGenericSuccess : function(msg){
    	applicationManager.getPresentationUtility().dismissLoadingScreen();
    	applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,msg);
  }
});
