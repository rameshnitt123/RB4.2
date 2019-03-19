define({
	frmAccountsFlag:true,
  segmentData:null,
  	init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    preShow: function () {
        if (this.view.flxHeaderSearchbox.isVisible === true) {
             this.view.flxHeaderSearchbox.isVisible = false;
             this.view.flxSearch.isVisible = true;
          	 this.view.flxHeader.isVisible = true;
             this.view.flxMainContainer.top = "56dp";
        } 
       if (kony.os.deviceInfo().name === "iPhone") {
      this.view.flxHeader.isVisible = false;
      this.view.flxMainContainer.top = "0dp";
    }
      //this.setSegmentData();
      this.initActions();
      this.setSegData();
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().logFormName(currentForm);
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function () {
        var scope = this;
        this.view.customHeader.flxBack.onClick = function () {
            var navMan=applicationManager.getNavigationManager();    
           navMan.goBack(); 
        }
        this.view.segAccounts.onRowClick = function () {
            scope.segmentRowClick();
        }
        this.view.customHeader.btnRight.onClick = function () {
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.cancelCommon();;
        }
        this.view.tbxSearch.onTouchStart = this.showSearch;
        this.view.customSearchbox.btnCancel.onClick = this.showSearch;
    },
     showSearch: function () {
     //   if (kony.os.deviceInfo().name === "iPhone") {

  //      } 
  //else {
            if (this.view.flxHeaderSearchbox.isVisible === true) {
                this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxSearch.isVisible = true;
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
        this.view.flxNoTransactions.isVisible=false;
        // this.view.flxHeaderNT.isVisible=true;
        // this.view.flxSeperator3.isVisible=true;
        this.view.segAccounts.isVisible=true;
      }
      else
      {
        this.view.flxNoTransactions.isVisible=true;
        // this.view.flxHeaderNT.isVisible=false;
        // this.view.flxSeperator3.isVisible=false;
        this.view.segAccounts.isVisible=false;
      }
            }else {
              this.view.flxSearch.isVisible = false;
              this.view.flxHeader.isVisible = false;
              this.view.flxMainContainer.top = "40dp";
              this.view.customSearchbox.tbxSearch.text="";
              this.view.flxHeaderSearchbox.isVisible = true;
              this.view.customSearchbox.tbxSearch.setFocus(true);
              this.view.customSearchbox.tbxSearch.onTextChange=this.searchdata;
            }
    
       // }
    },
	setSegData:function(){
        var navManager = applicationManager.getNavigationManager();
        var accData = navManager.getCustomInfo("frmP2pFromAccount");
        var processedData = applicationManager.getDataProcessorUtility().processAccountsData(accData); 
        this.view.segAccounts.widgetDataMap={
              				lblAccountName:"nickName",
              				lblAccountBalValue:"availableBalance",              
	          				lblBankName:"bankName",
                            lblAccountId:"accountID",
	          				lblAccountBal:"accountBalanceType"                           
                             };
       this.view.segAccounts.setData(processedData);      
       this.segmentData=processedData;
    },
    segmentRowClick: function() {        
		var navManager = applicationManager.getNavigationManager();
        var data=this.view.segAccounts.selectedItems[0];
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.setFromAccountsForP2p(data);
        payeeMod.presentationController.commonFunctionForNavigation("frmP2pAmount");
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
      if(searchData.length>0)
      {
        this.view.segAccounts.setData(searchData);
        this.view.flxNoTransactions.isVisible=false;
        // this.view.flxHeaderNT.isVisible=true;
        // this.view.flxSeperator3.isVisible=true;
        this.view.segAccounts.isVisible=true;
      }
      else
      {
        this.view.segAccounts.isVisible=false;
        this.view.flxNoTransactions.isVisible=true;
        // this.view.flxHeaderNT.isVisible=false;
        // this.view.flxSeperator3.isVisible=false;
      }
    }
    else
    {

      if(this.segmentData.length>0)
      { 
        this.view.segAccounts.setData(this.segmentData);
        this.view.flxNoTransactions.isVisible=false;
        // this.view.flxHeaderNT.isVisible=true;
        // this.view.flxSeperator3.isVisible=true;
        this.view.segAccounts.isVisible=true;
      }
      else
      {
        this.view.flxNoTransactions.isVisible=true;
        // this.view.flxHeaderNT.isVisible=false;
        // this.view.flxSeperator3.isVisible=false;
        this.view.segAccounts.isVisible=false;
      }
    }
  }

});