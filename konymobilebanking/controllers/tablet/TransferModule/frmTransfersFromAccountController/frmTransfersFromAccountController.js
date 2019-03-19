define({
  transferType: '',
  segmentData:null,

  init : function(){
    try
    {
      var navManager = applicationManager.getNavigationManager();
      var currentForm = navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);        
    }
    catch(ex)
    {

    }
  },

  preShow: function () {
    try
    {
      /* //a//
      if (this.view.flxHeaderSearchbox.isVisible === true) {
        this.view.flxHeaderSearchbox.isVisible = false;
        this.view.flxSearch.isVisible = true;
        this.view.flxHeader.isVisible = true;
        this.view.flxMainContainer.top = "56dp";
      } 
      */
      this.renderTitleBar();
      this.initialUiSettings();
      this.setSegmentData();
      this.initActions();
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().logFormName(currentForm);         
    }
    catch(ex)
    {

    } 
  },

  initialUiSettings : function()
  {
    try
    {
      this.view.flxNoAccount.isVisible=false;
      // this.view.flxHeaderNT.isVisible=true;
      // this.view.flxSeperator3.isVisible=true;
      this.view.segAccounts.isVisible=true;
      this.view.tbxSearch.text="";   
      
      //right pane
      this.setTransferType();
      this.setBenificiaryAccount();
    }
    catch(ex)
    {

    }
  },

  initActions: function () {
    try
    {
      var scope = this;


      this.view.customHeaderTablet.flxBack.onClick = this.backNavigation;
      this.view.segAccounts.onRowClick = function () {
        scope.segmentRowClick();
      }
      this.view.customHeaderTablet.btnRight.onClick = this.cancelOnClick;
      this.view.tbxSearch.onTextChange = this.searchdata;
      this.view.flxCancel.onClick = this.onSerachCancel;
     
    }
    catch(ex)
    {

    }    
  },
  
  backNavigation : function()
  {
    try
    {
      var navMan=applicationManager.getNavigationManager();
      navMan.goBack();     
    }
    catch(ex)
    {

    }
  },
  
  cancelOnClick:function()
  {
    try
    {
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      transferModule.presentationController.cancelCommon();        
    }
    catch(ex)
    {

    }    
  },
  segmentRowClick: function () {
    try
    {
      var selaccdata=[];
      var navMan=applicationManager.getNavigationManager();
      var rowindex=this.view.segAccounts.selectedRowIndex[1];
      var frmaccdata=this.view.segAccounts.data[rowindex];
      selaccdata.push(frmaccdata);
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var tranAmt=navMan.getCustomInfo("frmTransferAmount");
      transferModule.presentationController.setFromAccountsForTransactions(selaccdata[0]);

      transferModule.presentationController.commonFunctionForNavigation("frmTransferAmountTab");        
    }
    catch(ex)
    {

    }    
  },
  //     myKonySegmentData: function () {
  //         scope.myOtherSegmentData();
  //     },
  setSegmentData: function () {
    try
    {
      var frmaccdata=[];
      var navMan=applicationManager.getNavigationManager();
      var accdata=  navMan.getCustomInfo("frmTransfersFromAccount");
      //   var toaccdata=navMan.getCustomInfo("frmTransfersToAccount");
      var transaMan=applicationManager.getTransactionManager();
      //  var frmdata= navMan.getCustomInfo("frmTransferAmount");
      var accountsData=accdata.fromaccounts;
      //  if(toaccdata.type===applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts"))
      if( transaMan.getTransactionObject().transactionType!=null&&transaMan.getTransactionObject().transactionType!=undefined&&transaMan.getTransactionObject().transactionType!=""&&transaMan.getTransactionObject().transactionType==="InternalTransfer")
      {
        for(var i=0;i<accountsData.length;i++)
        {
          if(accountsData[i]["accountID"]!==transaMan.getTransactionObject().toAccountNumber)
          {
            frmaccdata.push(accountsData[i]);
          }
        }
      }
      else
      {
        frmaccdata=accountsData;
      }
      var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var processedData=transMod.presentationController.processAccountsData(frmaccdata);
      if(processedData.length>0)
      {
        this.view.flxNoAccount.isVisible=false;
        this.view.segAccounts.isVisible=true;
        this.view.segAccounts.widgetDataMap={
          lblAccountName:"accountName",
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
        this.view.flxNoAccount.isVisible=true;
        // this.view.flxHeaderNT.isVisible=false;
        // this.view.flxSeperator3.isVisible=false;
        this.view.segAccounts.isVisible=false;
      }
      // applicationManager.getPresentationUtility().dismissLoadingScreen();        
    }
    catch(ex)
    {

    }    
  },
  //     otherKonySegmentData: function () {
  //         scope.myOtherSegmentData();
  //     },
  //     otherBankSegmentData: function () {
  //         scope.myOtherSegmentData();
  //     },
  //     internationalSegmentData: function () {

  //     },
  //     wireSegmentData: function () {

  //     },

  searchdata:function()
  {
    try
    {
      var searchData;
      var navMan=applicationManager.getNavigationManager();
      var searchtext=this.view.tbxSearch.text.toLowerCase();
      if(searchtext)
      {
        this.view.segAccounts.removeAll();
        var data = this.segmentData;
        searchData = applicationManager.getDataProcessorUtility().commonSegmentSearch("accountName",searchtext,data);
        if(searchData.length>0)
        {
          this.view.segAccounts.setData(searchData);
          this.view.flxNoAccount.isVisible=false;
          // this.view.flxHeaderNT.isVisible=true;
          // this.view.flxSeperator3.isVisible=true;
          this.view.segAccounts.isVisible=true;
        }
        else
        {
          this.view.segAccounts.isVisible=false;
          this.view.flxNoAccount.isVisible=true;
          // this.view.flxHeaderNT.isVisible=false;
          // this.view.flxSeperator3.isVisible=false;
        }
      }
      else
      {

        if(this.segmentData.length>0)
        { 
          this.view.segAccounts.setData(this.segmentData);
          this.view.flxNoAccount.isVisible=false;
          // this.view.flxHeaderNT.isVisible=true;
          // this.view.flxSeperator3.isVisible=true;
          this.view.segAccounts.isVisible=true;
        }
        else
        {
          this.view.flxNoAccount.isVisible=true;
          // this.view.flxHeaderNT.isVisible=false;
          // this.view.flxSeperator3.isVisible=false;
          this.view.segAccounts.isVisible=false;
        }
      }        
    }
    catch(ex)
    {

    }    
  },

  renderTitleBar :function(){
    try
    {
      var deviceUtilManager = applicationManager.getDeviceUtilManager();
      var isIpad = deviceUtilManager.isIpad();
      if(!isIpad){
        this.view.flxHeader.isVisible = true;
      }
      else{
        this.view.flxHeader.isVisible = false;
      }         
    }
    catch(ex)
    {

    }   
  },
  
  setTransferType : function()
  {
    try
    {
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var transferFlowType = transferModule.presentationController.getFlowType();

      switch(transferFlowType)
      {
        case "MyKonyAccounts":
          this.view.RightPane.lblCheckedRowName.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccountsTablet");
          break;
        case "OtherKonyBankMembersCreateTransfer":
          this.view.RightPane.lblCheckedRowName.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.tab.transfers.myKonyBankBenificiary");
          break;
        case "OtherBankAccountsCreateTransfer":
          this.view.RightPane.lblCheckedRowName.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyOtherAccounts");
          break;
        case "InternationalTransferCreateTransfer":
          this.view.RightPane.lblCheckedRowName.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.tab.transfers.internationalTransferType");
      }
    }
    catch(ex)
    {

    }
  },
  
  setBenificiaryAccount : function()
  {
    try
    {       
      var transactionManager = applicationManager.getTransactionManager();
      var transactionObject = transactionManager.getTransactionObject();
      this.view.RightPane.lblSecondCheckedRowName.text = transactionObject.toAccountName +  "-" + transactionObject.toAccountNumber.slice(-4);
    }
    catch(ex)
    {

    }
  },
  
  onSerachCancel : function()
  {
    try
    {
      this.view.tbxSearch.text = "";
      if(this.segmentData.length>0)
      {         
        this.view.segAccounts.setData(this.segmentData);
        this.view.flxNoAccount.isVisible=false;
        this.view.segAccounts.isVisible=true;
      }
      else
      {
        this.view.flxNoAccount.isVisible=true;
        this.view.segAccounts.isVisible=false;
      }
    }
    catch(ex)
    {

    }
  }  

});