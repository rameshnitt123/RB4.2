define({
  	init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    preShow: function () {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
     if (this.view.flxHeaderSearchbox.isVisible === true) {
             this.view.flxHeaderSearchbox.isVisible = false;
             this.view.flxSearch.isVisible = true;
             this.view.flxHeader.isVisible = true;
             this.view.flxMainContainer.top = "56dp";
        } 
    if (kony.os.deviceInfo().name === "iPhone") {
      this.view.flxHeader.isVisible = false;
    }
     else
        this.view.flxHeader.isVisible = true;
      this.initActions();
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().logFormName(currentForm);
      applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
    initActions: function () {
        var scope = this;
    this.view.flxNoTransactions.isVisible=false;
    this.view.flxHeaderNT.isVisible=true;
    this.view.flxSeperator3.isVisible=true;
    this.view.segAccounts.isVisible=true;
    this.view.tbxSearch.text="";
    this.setSegmentData();
    this.view.customHeader.flxBack.onClick = function () {
      var navMan=applicationManager.getNavigationManager();
      navMan.goBack();
    }
    this.view.segAccounts.onRowClick = function () {
      scope.segmentRowClick();
    }
    this.view.customHeader.btnRight.onClick = function () {
       var bPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        bPayModule.presentationController.cancelCommon();
    }
    this.view.tbxSearch.onTouchStart = this.showSearch;
    // this.view.tbxSearch.onTextChange = this.showSearch;
    this.view.customSearchbox.btnCancel.onClick = this.showSearch;
    },
    segmentRowClick: function () {
        var selaccdata=[];
        var navMan=applicationManager.getNavigationManager();
        var rowindex=this.view.segAccounts.selectedRowIndex[1];
        var frmaccdata=this.view.segAccounts.data[rowindex];
        selaccdata.push(frmaccdata);
        var bPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      	bPayModule.presentationController.setFromAccountsForTransactions(selaccdata[0]);
      	var isFromAcc = bPayModule.presentationController.isDefaultFromAccount();
      	var showPopup = bPayModule.presentationController.isSetAccountPopupEnabled();
      if(!isFromAcc && showPopup){
      	var basicConfig={
            "alertType": constants.ALERT_TYPE_CONFIRMATION,
            "alertTitle": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.BillPay.setDefaultAccountTitle"),
            "yesLabel":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.yesSetAsDefault"),
            "noLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.notnow"),
            "message": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.BillPay.setDefaultAccountMessage"),
            "alertHandler": this.setDefaultAcc
          };
          applicationManager.getPresentationUtility().showAlertMessage(basicConfig,{});
      }
        else{
          bPayModule.presentationController.commonFunctionForNavigation("frmBillPayAmount");
        }
    },
  	setDefaultAcc: function (response) {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var dataJSON={};
      if(response){
      	var selectedAcntRow = this.view.segAccounts.selectedItems[0];
        this.selAccountId = selectedAcntRow.accountID; 
        dataJSON["default_account_billPay"] = this.selAccountId;
      }
      dataJSON.showBillPayFromAccPopup = false;
      var bPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      bPayModule.presentationController.updateBillPayFromAcc(dataJSON);
    },
    setSegmentData: function () {
        var frmaccdata=[];
        var navMan=applicationManager.getNavigationManager();
        var accdata=  navMan.getCustomInfo("frmBillPayFromAccount");
        var accountsData=accdata.fromaccounts;
        frmaccdata=accountsData;
        var bPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var processedData=bPayModule.presentationController.processAccountsData(frmaccdata);
        if(processedData.length>0)
        {
          this.view.flxNoTransactions.isVisible=false;
          this.view.segAccounts.isVisible=true;
          this.view.segAccounts.widgetDataMap={
            lblAccountName:"nickName",
            lblBankName:"bankName",
            lblAccountBalValue:"availableBalance",
            lblAccountBal:"accountBalanceType", 
            accountNumber:"accountNumber"
          };
          this.view.segAccounts.setData(processedData);
          this.segmentData=this.view.segAccounts.data;
        }
        else
        {
          this.segmentData=[];
          this.view.flxNoTransactions.isVisible=true;
          this.view.flxHeaderNT.isVisible=false;
          this.view.flxSeperator3.isVisible=false;
          this.view.segAccounts.isVisible=false;
        }
      },
    showSearch: function () {
        if (this.view.flxHeaderSearchbox.isVisible == true) {
          this.view.customSearchbox.tbxSearch.text = ""
          this.view.flxHeaderSearchbox.isVisible = false;
          this.view.flxSearch.isVisible = true;
          if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
          }
          else{
            this.view.flxHeader.isVisible = true;
          }
          this.view.flxMainContainer.top = "56dp";
          if(this.segmentData && this.segmentData.length>0)
          { 
            this.view.segAccounts.setData(this.segmentData);
            this.view.flxNoTransactions.isVisible=false;
            this.view.flxHeaderNT.isVisible=true;
            this.view.flxSeperator3.isVisible=true;
            this.view.segAccounts.isVisible=true;
          }
          else
          {
            this.view.flxNoTransactions.isVisible=true;
            this.view.flxHeaderNT.isVisible=false;
            this.view.flxSeperator3.isVisible=false;
            this.view.segAccounts.isVisible=false;
          }
        } else {
          this.view.flxSearch.isVisible = false;
          this.view.flxHeader.isVisible = false;
          this.view.flxMainContainer.top = "40dp";
          this.view.customSearchbox.tbxSearch.text="";
          this.view.flxHeaderSearchbox.isVisible = true;
          this.view.customSearchbox.tbxSearch.setFocus(true);
          this.view.customSearchbox.tbxSearch.onTextChange=this.searchdata;
        }
    },
  searchdata:function()
  {
    var searchData;
    var navMan=applicationManager.getNavigationManager();
    var searchtext=this.view.customSearchbox.tbxSearch.text.toLowerCase();
    if(searchtext)
    {
      this.view.segAccounts.removeAll();
      var data = this.segmentData;
      searchData = applicationManager.getDataProcessorUtility().commonSegmentSearch("accountName",searchtext,data);
      if(searchData && searchData.length>0)
      {
        this.view.segAccounts.setData(searchData);
        this.view.flxNoTransactions.isVisible=false;
        this.view.flxHeaderNT.isVisible=true;
        this.view.flxSeperator3.isVisible=true;
        this.view.segAccounts.isVisible=true;
      }
      else
      {
        this.view.segAccounts.isVisible=false;
        this.view.flxNoTransactions.isVisible=true;
        this.view.flxHeaderNT.isVisible=false;
        this.view.flxSeperator3.isVisible=false;
      }
    }
    else
    {

      if(this.segmentData && this.segmentData.length>0)
      { 
        this.view.segAccounts.setData(this.segmentData);
        this.view.flxNoTransactions.isVisible=false;
        this.view.flxHeaderNT.isVisible=true;
        this.view.flxSeperator3.isVisible=true;
        this.view.segAccounts.isVisible=true;
      }
      else
      {
        this.view.flxNoTransactions.isVisible=true;
        this.view.flxHeaderNT.isVisible=false;
        this.view.flxSeperator3.isVisible=false;
        this.view.segAccounts.isVisible=false;
      }
    }
  }
});