define({
  segmentData:{},
  deletesegData:[],
  timerCounter:0,
   init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    preShow: function() {
      this.showPreshowSearch();
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
      this.deletesegData=[];
      this.initActions();
      this.setSegData();
      this.showPopUpSuccess();
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
        this.view.segAccounts.onRowClick = function() {
            scope.segmentRowClick();
        }
        this.view.tbxSearch.onTouchStart = this.showSearch;
        this.view.customSearchbox.btnCancel.onClick = this.showSearch;
        this.view.customHeader.btnRight.onClick = function() {
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
          billPayMod.presentationController.commonFunctionForNavigation("frmBillPay");
          
        }
        this.view.customSearchbox.tbxSearch.onTextChange=this.tbxSearchOnTextChange;
        this.view.btnAddPayee.onClick = function() {
         var navManager = applicationManager.getNavigationManager();
          navManager.setEntryPoint("createBillPayPayee","frmBillPayAllPayees");
          var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
          billPayMod.presentationController.setFlowType("createBillPayPayee");
          billPayMod.presentationController.clearBillPayPayeeData();
          billPayMod.presentationController.commonFunctionForNavigation("frmBillPaySearchPayee");
        }
    },
    segmentRowClick: function() {
        var rowid=this.view.segAccounts.selectedRowIndex[1];
        var selectedPayeeDetails = this.view.segAccounts.data[rowid];
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var segmentData=billPayMod.presentationController.navToPayeeDetails(selectedPayeeDetails,"frmBillPayPayeeDetails");
    },
	tbxSearchOnTextChange:function(){
        var scope=this;
      	var searchtext=this.view.customSearchbox.tbxSearch.text.toLowerCase();
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var data = this.segmentData;
        var searchSegmentData=applicationManager.getDataProcessorUtility().commonSegmentSearch("payeeNickName",searchtext,data);
        this.deletesegData=searchSegmentData;
        for (var i = 0; i < searchSegmentData.length; i++) {
          searchSegmentData[i].flxDelete={};
        }
        for(var i=0;i<searchSegmentData.length;i++){
          searchSegmentData[i].flxDelete.onClick = scope.deleteCallback;
        }
        //searchSegmentData=newSegmentData;
      	if(searchSegmentData.length===0){
      		this.view.flxNoTransactions.isVisible=true;
        	this.view.segAccounts.isVisible=false;
		}
		else{
    	    this.view.flxNoTransactions.isVisible=false;
	        this.view.segAccounts.isVisible=true;
      		this.view.segAccounts.setData(searchSegmentData);
        }
    },
   /* showSearch: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            if (this.view.flxHeaderSearchbox.isVisible == true) {
                this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxSearch.isVisible = true;
                this.view.flxMainContainer.top = "56dp";

            } else {
                this.view.flxSearch.isVisible = false;
                this.view.flxMainContainer.top = "40dp";
                this.view.flxHeaderSearchbox.isVisible = true;
                this.view.customSearchbox.tbxSearch.setFocus(true);
                this.setSegData();
            }
        } else {
            if (this.view.flxHeaderSearchbox.isVisible == true) {
                this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxSearch.isVisible = true;
                this.view.flxHeader.isVisible = true;
                this.view.flxMainContainer.top = "56dp";
            } else {
                this.view.flxSearch.isVisible = false;
                this.view.flxHeader.isVisible = false;
                this.view.flxMainContainer.top = "40dp";
                this.view.flxHeaderSearchbox.isVisible = true;
                this.view.customSearchbox.tbxSearch.setFocus(true);
            }
        }
    },*/
    showSearch: function() {
        if (this.view.flxHeaderSearchbox.isVisible == true) {
                this.view.flxHeaderSearchbox.isVisible = false;
              	this.view.segAccounts.setData(this.segmentData);
        		if (kony.os.deviceInfo().name === "iPhone") {
        			this.view.flxHeader.isVisible = false;
                  	this.view.flxMainContainer.top = "0dp";
      			}
      			else{
        			this.view.flxHeader.isVisible = true;
                    this.view.flxMainContainer.top = "56dp";
      			} 
        		if(this.segmentData.length===0){
      				this.view.flxNoTransactions.isVisible=true;
        			this.view.segAccounts.isVisible=false;
      			}
              	else{
         		   	this.view.flxNoTransactions.isVisible=false;
        			this.view.segAccounts.isVisible=true;
              this.deletesegData=this.segmentData;
        			this.view.segAccounts.setData(this.segmentData);
        		}
                this.view.flxSearch.isVisible = true;
                
            } else {
              	this.view.customSearchbox.tbxSearch.text="";
              	this.view.flxSearch.isVisible = false;
                this.view.flxHeader.isVisible = false;
                this.view.flxMainContainer.top = "40dp";
                this.view.flxHeaderSearchbox.isVisible = true;
                this.view.customSearchbox.tbxSearch.setFocus(true);
            }
    },
  setSegData:function(){
     var scope=this;
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    //var segmentData=billPayMod.presentationController.getAllBillPayPayees();
    var segmentData=[];
    this.view.segAccounts.widgetDataMap = {
            "lblAccountName":"payeeNickName",
            "lblAccountBal":"",
            "lblBankName":"addressLine1",
            "lblAccountBalValue":"",
			"template": "flxAccountsNoImage",
            "flxDelete":"flxDelete",
            "flxMain":"flxMain",
  			"imgebill":"imgebill",
        "lblAccountNumber":""
        	};
      //var newSegmentData=[];
      segmentData=billPayMod.presentationController.getAllBillPayPayees();
      for (var i = 0; i < segmentData.length; i++) {
        segmentData[i].flxDelete={};
         if(segmentData[i]["eBillSupport"]==="true")
      {
        if(segmentData[i]["eBillStatus"]==="1")
          {
          segmentData[i]["imgebill"]={
            "src":"ebill.png",
            "isVisible":true
          };
          
          }
        else
          segmentData[i]["imgebill"]={
            "src":"ebillinactive.png",
            "isVisible":true
          };
      }
      else{
        segmentData[i]["imgebill"]={
            //"src":"ebillinactive.png",
            "isVisible":false
          };
      }
      }
      for(var i=0;i<segmentData.length;i++){
        segmentData[i].flxDelete.onClick = scope.deleteCallback;
      }
      //segmentData=newSegmentData;
      if(segmentData.length===0){
        this.view.flxNoTransactions.isVisible=true;
        this.view.segAccounts.isVisible=false;
      }
      else{
        this.view.flxNoTransactions.isVisible=false;
        this.view.segAccounts.isVisible=true;
        this.view.segAccounts.setData(segmentData);
      }
    this.deletesegData=segmentData;
    this.segmentData=segmentData;
  },
 showPreshowSearch:function(){
  		if (this.view.flxHeaderSearchbox.isVisible == true) {
             this.view.flxHeaderSearchbox.isVisible = false;
             this.view.flxSearch.isVisible = true;
          	 this.view.flxHeader.isVisible = true;
             this.view.flxMainContainer.top = "56dp";
        }
  },
  showPopUpSuccess:function(){
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    if(billPayMod.presentationController.isDeleteSuccess){
      this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.deleteBillPayPayeeSuccess"));
      billPayMod.presentationController.isDeleteSuccess = false;
    }
    if(billPayMod.presentationController.isUpdateNickNameSuccess){
      this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.updateBillPayPayeeNickNameSuccess"));
      billPayMod.presentationController.isUpdateNickNameSuccess = false;
    }
    if(billPayMod.presentationController.isUpdateAddressSuccess){
      this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.updateBillPayPayeeAddressSuccess"));
      billPayMod.presentationController.isUpdateAddressSuccess = false;
    }
    if(billPayMod.presentationController.isPayeeAdded){
      this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.addedBillPayPayeeAddressSuccess"));
      billPayMod.presentationController.isPayeeAdded = false; 
    }
  },
    bindGenericSuccess : function(msg){
    	applicationManager.getPresentationUtility().dismissLoadingScreen();
    	applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,msg);
  	},
  deleteCallback:function(){
    var scope=this;
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
//     var rowid=scope.view.segAccounts.selectedRowIndex[1];
//     var selectedPayeeDetails = scope.view.segAccounts.data[rowid];
    var rowid= scope.view.segAccounts.selectedIndex[1];
    var selectedPayeeDetails=scope.deletesegData[rowid];
    billPayMod.presentationController.setBillPayPayeeData(selectedPayeeDetails);
    var basicConfig = {message: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.deleteRecipient","Do you want to delete the recipient"),
                       alertIcon:null,
                       alertType: constants.ALERT_TYPE_CONFIRMATION,
                       alertTitle: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfers.deleteAlertTitle"),
                       yesLabel:applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
                       noLabel: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"),
                       alertHandler: scope.deleteHandler
                      };
    var pspConfig = {};                                                                                           
    applicationManager.getPresentationUtility().showAlertMessage(basicConfig, pspConfig);
  },
    deleteHandler:function(response){
      if(response === true){                                       
        applicationManager.getPresentationUtility().showLoadingScreen();
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.deleteBillPayPayee();
      }
    },
});