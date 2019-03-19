define({
  transferType: '',
  internalAccounts:null,
  externalFreqAccounts:null,
  externalAllAcconts:null,
  segmentData:null,

  init : function()
  {
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

  preShow: function() 
  {
    try
    {
      //     if (this.view.flxHeaderSearchbox.isVisible === true) {
      //       this.view.flxHeaderSearchbox.isVisible = false;
      //       this.view.flxSearch.isVisible = true;
      //       this.view.flxHeader.isVisible = true;
      //       this.view.flxMainContainer.top = "56dp";
      //     } 
      this.renderTitleBar();      
      this.displayAccountsSegmentOrNoAccountsFlex(true);
      this.segmentDataSet();
      this.manageAddAccountOptionVisibility();
      //right pane
      this.setTransferType();
      
      this.initActions();
      this.showAddedToastMessage();     
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var navManager = applicationManager.getNavigationManager();
      var currentForm = navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().logFormName(currentForm);           
    }
    catch(ex)
    {

    }
  },
  
  postShow : function()
  {
    try
    {
      this.showPopUp();
    }
    catch(ex)
    {

    }
  },

  initActions : function() 
  {
    try
    {
      var scope = this;
      
      this.view.customHeaderTablet.flxBack.onClick = this.backNavigation;
      this.view.segAccounts.onRowClick = this.segmentRowClick;
      this.view.tbxSearch.onTextChange = this.searchdata;
      this.view.customHeaderTablet.btnRight.onClick = this.cancelOnClick; 
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

  showPopUp : function()
  {
    try
    {
       var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");

      if(transferModule.presentationController.getFlowType() === "OtherKonyBankMembersCreateTransfer"){
        if(transferModule.presentationController.sameBankBenificiaryAdded){
          applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.addBenificiary","Successfully recipient was added"));
          transferModule.presentationController.sameBankBenificiaryAdded = false;
        }
        if(transferModule.presentationController.isNickNameUpdated){
          applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.successUpdate","Successfully recipient nick name was updated"));
          transferModule.presentationController.isNickNameUpdated = false;
        }
        if(transferModule.presentationController.isRecipientDeleted){
          applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.deleteBenificiary","Successfully recipient deleted permanently"));
          transferModule.presentationController.isRecipientDeleted = false;
        }
      }
      else if(transferModule.presentationController.getFlowType() === "OtherBankAccountsCreateTransfer"){
        if(transferModule.presentationController.otherBankBenificiaryAdded){
          applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.addBenificiary","Successfully recipient was added"));
          transferModule.presentationController.otherBankBenificiaryAdded = false;
        }
        if(transferModule.presentationController.isNickNameUpdated){
          applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.successUpdate","Successfully recipient nick name was updated"));
          transferModule.presentationController.isNickNameUpdated = false;
        }
        if(transferModule.presentationController.isRecipientDeleted){
          applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.deleteBenificiary","Successfully recipient deleted permanently"));
          transferModule.presentationController.isRecipientDeleted = false;
        }
      }
      else{
        if(transferModule.presentationController.internationalBenificiaryAdded){
          applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.addBenificiary","Successfully recipient was added"));
          transferModule.presentationController.internationalBenificiaryAdded = false;
        }
      }        
    }
    catch(ex)
    {

    }    
  },

  cancelOnClick : function()
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

  segmentDataSet : function()
  {
    try
    {
      var scope = this;
      var navMan = applicationManager.getNavigationManager();
      var accdata = navMan.getCustomInfo("frmTransfersToAccount");
      if(accdata.type === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts"))
      {
        var internalAcc = accdata.internalAccounts;
        scope.myKonySegmentData(internalAcc);
      }
      else
      {
        var frequentExternalacc = accdata.frequentExternalAccounts; 
        var allExternalAccounts = accdata.allExternalAccounts;
        scope.myOtherSegmentData(frequentExternalacc,allExternalAccounts);
      }
      // applicationManager.getPresentationUtility().dismissLoadingScreen();        
    }
    catch(ex)
    {

    }    
  },

  segmentRowClick : function() 
  {
    try
    {
      var navMan = applicationManager.getNavigationManager();
      var accdata = navMan.getCustomInfo("frmTransfersToAccount");
      var rowindex = Math.floor(this.view.segAccounts.selectedRowIndex[1]);
      
      var selectedAccountData;
      if(accdata.type === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts"))
      {
        selectedAccountData = this.view.segAccounts.data[rowindex];
        accdata.selectedAccountData = selectedAccountData;
      }
      else
      {
        var secindex = Math.floor(this.view.segAccounts.selectedRowIndex[0]);
        selectedAccountData = this.view.segAccounts.data[secindex][1][rowindex]; 
        accdata.selectedAccountData = selectedAccountData;    
      }
      navMan.setCustomInfo("frmTransfersToAccount",accdata);
      var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      transMod.presentationController.navAfterToAcc();        
    }
    catch(ex)
    {

    }    
  },

  myKonySegmentData : function(data) 
  {
    try
    {
      //a//this.view.flxMainContainer.bottom = "0dp";
      //a//this.view.btnAccount.setVisibility(false);
      var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var processedData = transMod.presentationController.processAccountsData(data);
      if(processedData.length > 0)
      {
        this.view.flxNoAccount.isVisible = false;
        this.view.segAccounts.isVisible = true;
        this.view.segAccounts.widgetDataMap = {
          lblAccountName:"accountName",
          lblBankName:"bankName",
          lblAccountBalValue:"availableBalance",
          lblAccountBal:"accountBalanceType",
          accountNumber:"accountID",
          accountType:"accountType"
        };
        this.view.segAccounts.setData(processedData);
        this.segmentData = this.view.segAccounts.data;
        this.internalAccounts = this.view.segAccounts.data;
      }
      else
      {
        this.segmentData = [];
        this.internalAccounts = [];
        this.view.flxNoAccount.isVisible = true;
        this.view.segAccounts.isVisible = false;
      }        
    }
    catch(ex)
    {

    }    
  },

  myOtherSegmentData : function(freqAccount,allAccount) 
  {
    try
    {
      this.view.btnAccount.setVisibility(true);
      //this.view.flxMainContainer.bottom = "70dp";
      this.view.btnAccount.text = "ADD ACCOUNT";
      var navMan = applicationManager.getNavigationManager();
      var toacc = navMan.getCustomInfo("frmTransfersToAccount");

      this.view.btnAccount.onClick = this.btnAccountOnClick;

      this.view.segAccounts.widgetDataMap = {
        lblAccountName:"nickName",
        lblBankName:"bankName",
        lblAccountBal:"accountType",
        lblAccountBalValue:"",
        accountNumber:"accountNumber",
        lblHeader:"lblHeader",        
      };
      
      var data;
      if(freqAccount.length>0&&allAccount.length>0)
      {
        data = [[{ "lblHeader":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.frequentlyusertransactions")},freqAccount],[{ "lblHeader":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.allaccounts")},allAccount]];
        this.view.segAccounts.setData(data);
        this.segmentData = data;
        this.externalFreqAccounts = this.view.segAccounts.data[0][1];
        this.externalAllAcconts = this.view.segAccounts.data[1][1];
      }
      else if(freqAccount.length>0)
      {
        data = [[{ "lblHeader":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.frequentlyusertransactions")},freqAccount]];
        this.view.segAccounts.setData(data);
        this.segmentData = data;
        this.externalFreqAccounts = this.view.segAccounts.data[0][1];
        this.externalAllAcconts = [];
      }
      else if(allAccount.length>0)
      {
        data = [[{ "lblHeader":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.allaccounts")},allAccount]];
        this.view.segAccounts.setData(data);
        this.segmentData = data;
        this.externalAllAcconts = this.view.segAccounts.data[1][1];
        this.externalFreqAccounts = [];
      }
      else
      {
        this.segmentData = [];
        this.externalAllAcconts = [];
        this.externalFreqAccounts = [];
        this.view.flxNoAccount.isVisible = true;
        this.view.segAccounts.isVisible = false;
      }       
    }
    catch(ex)
    {

    }    
  },

  searchdata : function()
  {
    try
    {
      var accdatajson = {}, searchData;
      var navMan = applicationManager.getNavigationManager();
      //     var resMan=applicationManager.getRecipientsManager();
      var accdata = navMan.getCustomInfo("frmTransfersToAccount");
      var searchtext = this.view.tbxSearch.text.toLowerCase();
      if(searchtext)
      {
        var data = [],headers = [];
        this.view.segAccounts.removeAll();
        if(accdata.type === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts"))
        {
          data = this.internalAccounts;
          searchData = applicationManager.getDataProcessorUtility().commonSegmentSearch("accountName",searchtext,data);
          //         accdatajson.internalAccounts=this.internalAccounts;
          //         searchData=resMan.searchAccounts(searchtext,accdatajson,accdata.type);
        }
        else
        {
          headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.frequentlyusertransactions"));
          headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.allaccounts"));
          data.push(this.externalFreqAccounts);
          data.push(this.externalAllAcconts);
          searchData = applicationManager.getDataProcessorUtility().commonSectionSegmentSearch("nickName",searchtext,data,headers);
          //         accdatajson.externalFreqAccounts=this.externalFreqAccounts;
          //         accdatajson.externalAllAcconts=this.externalAllAcconts;
          //         searchData=resMan.searchAccounts(searchtext,accdatajson,accdata.type);
        }
        if(searchData.length > 0)
        {
          this.view.segAccounts.setData(searchData);
          this.view.flxNoAccount.isVisible = false;
          this.view.segAccounts.isVisible = true;
        }
        else
        {
          this.view.segAccounts.isVisible = false;
          this.view.flxNoAccount.isVisible = true;
        }
      }
      else
      {
        if(this.segmentData.length > 0)
        { 
          this.view.segAccounts.setData(this.segmentData);
          this.view.flxNoAccount.isVisible = false;
          this.view.segAccounts.isVisible = true;
        }
        else
        {
          this.view.flxNoAccount.isVisible = true;
          this.view.segAccounts.isVisible = false;
        }
      }        
    }
    catch(ex)
    {

    }    
  },

  btnAccountOnClick : function() 
  {
    try
    {
      var navManager=applicationManager.getNavigationManager();
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var flowType = transferModule.presentationController.getFlowType();
      
      switch(flowType)
      {
        case "OtherKonyBankMembersCreateTransfer" :
          navManager.setEntryPoint("createInternalBankBenificiary","frmTransfersToAccount");
          transferModule.presentationController.clearBenificiaryData();
          transferModule.presentationController.commonFunctionForNavigation("frmEnterBenAccNo");            
          break;
        case "OtherBankAccountsCreateTransfer" :
          navManager.setEntryPoint("createInternalBankBenificiary","frmTransfersToAccount");
          transferModule.presentationController.clearBenificiaryData();
          transferModule.presentationController.commonFunctionForNavigation("frmAddBenRoutNo");            
          break;
        case "InternationalTransferCreateTransfer" :
          applicationManager.getPresentationUtility().showLoadingScreen();
          navManager.setEntryPoint("createInternalBankBenificiary","frmTransfersToAccount");
          transferModule.presentationController.clearBenificiaryData();
          transferModule.presentationController.fetchCountriesList();            
          break;
      }        
    }
    catch(ex)
    {

    }    
  },

  btnAddRecipientOtherBankOnClick : function() 
  {
    try
    {
      var bankDetails = {"bankType":"OtherBank","entryPoint":"createTransfer"};
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      transferModule.presentationController.navigateToEnterBenificiaryRoutingNumber(bankDetails);        
    }
    catch(ex)
    {

    }    
  },

  showAddedToastMessage : function()
  {
    try
    {
      var navManager = applicationManager.getNavigationManager();
      var accdata = navManager.getCustomInfo("frmTransfersToAccount");
      if(accdata.addedFlag){
        this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.addBenificiary"));
        accdata.addedFlag = false;
        navManager.setCustomInfo("frmTransfersToAccount",accdata);
      }        
    }
    catch(ex)
    {

    }    
  },

  bindGenericSuccess : function(msg)
  {
    try
    {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,msg);        
    }
    catch(ex)
    {

    }    
  },

  renderTitleBar : function()
  {
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
  
  displayAccountsSegmentOrNoAccountsFlex : function(arAccountsAvailable)
  {
    try
    {
      this.view.segAccounts.isVisible = arAccountsAvailable;
      this.view.flxNoAccount.isVisible = !(arAccountsAvailable);
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
  
  manageAddAccountOptionVisibility : function()
  {
    try
    {
      var navigationManager = applicationManager.getNavigationManager();
      var accountData =  navigationManager.getCustomInfo("frmTransfersToAccount");

      if(accountData.type === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts"))
      {
        this.view.flxFooter.isVisible = false;
        this.view.flxSelectAccountLeft.bottom = "0dp";
      }
      else
      {
        this.view.flxFooter.isVisible = true;
        this.view.flxSelectAccountLeft.bottom = "90dp";
      }
      this.view.forceLayout();
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
      if(this.segmentData.length > 0)
      {         
        this.view.segAccounts.setData(this.segmentData);
        this.view.flxNoAccount.isVisible = false;
        this.view.segAccounts.isVisible = true;
      }
      else
      {
        this.view.flxNoAccount.isVisible = true;
        this.view.segAccounts.isVisible = false;
      }
    }
    catch(ex)
    {

    }
  },
  
  goToTransfers : function()
  {
    try
    {
      var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransactionModule");
      transMod.presentationController.getTransactions();        
    }
    catch(ex)
    {

    }
  }  
});