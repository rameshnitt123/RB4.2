define({ 

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

  preShow : function(){
    try
    {
      this.renderTitleBar();
      this.initialUiSetup();
      this.getData();
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

  initActions : function(){
    try
    {
      var scope=this;
      this.view.customHeaderTablet.flxBack.onClick = this.backNavigation;
      this.view.customHeaderTablet.btnRight.onClick = function(){
        scope.cancelOnClick();
      }
      this.view.btnConfirm.onClick = this.continueOnClick;          
    }
    catch(ex)
    {

    }
  },
  
  initialUiSetup : function()
  {
    try
    {
      this.view.flxTransferFrequencyType.setVisibility(false);
      this.view.flxEndDate.setVisibility(false);
      this.view.flxStartDate.setVisibility(false); 
      this.view.flxRecurrence.setVisibility(false); 
      this.view.flxFrequency.setVisibility(false);
      this.view.flxTransferDate.setVisibility(false);
      
      //right pane ui settings
      this.setTransferType();
      this.setBenificiaryAccount();
      this.setFromAccount();
      this.setTransactionFrequency();
      this.setTransferAmount();
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
  getData : function()
  {
    try
    {
      var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      this.data= transMod.presentationController.getTransObject();  
      var forUtility=applicationManager.getFormatUtilManager();
      var amount=forUtility.formatAmountandAppendCurrencySymbol(this.data.amount);
      this.view.lblFromAccount.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.TransferAmount");
      this.view.lblFromAccountValue.text=amount;
      this.view.lblFromAccountValueDetails.text=this.data.fromAccountName;
      this.view.lblPayeeNameValue.text=this.data.toAccountName;
      if(this.data.transactionsNotes)
        this.view.txtareaDescription.text = this.data.transactionsNotes;
      else
        this.view.txtareaDescription.text = "";
      if(this.data.transactionType==="InternalTransfer"){
        this.view.lblBank.text=this.data.fromAccountType;
        this.view.lblPayeeAddress.text=this.data.toAccountType;
      }
      else
      {
        this.view.lblBank.text=this.data.fromBankName;
        this.view.lblPayeeAddress.text=scope_TransfersPresentationController.getToBankName();
      }
      this.view.segDetailsDate.widgetDataMap={
        lblKey:"key",
        lblValue:"value"
      };
      this.segData = [];
      if(this.data.isScheduled==="0")
      {
        var data = 
            {
              "key":"Frequency",
              "value":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.TransferNow")
            };
        this.segData.push(data);
      }
      else if(this.data.isScheduled==="1"&&this.data.frequencyType==="Once")
      {
        var data = 
            {
              "key":"Frequency",
              "value":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.OneTime")
            };
        this.segData.push(data);
      }
      else
      {
        var data = 
            {
              "key":"Frequency",
              "value":this.data.frequencyType
            };
        this.segData.push(data);
      }
      if(this.data.frequencyType==="Once")
      {
        this.createViewForOnce();  
      }
      else
      {
        if(this.data.numberOfRecurrences!="")
        {
          this.createViewForReccurence();
        }
        else
        {
          this.createViewForDateRange();
        }
      }       
    }
    catch(ex)
    {

    }
  },

  createViewForOnce : function()
  {  
    try
    {
      var data = 
          {
            "key":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.transfersDate"),
            "value":this.data.scheduledDate
          };
      this.segData.push(data);
      this.view.segDetailsDate.setData(this.segData);        
    }
    catch(ex)
    {

    }
  },

  createViewForReccurence : function()
  {
    try
    {
      var data = 
          {
            "key":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.Duration"),
            "value":scope_TransfersPresentationController.getDuration() 
          };
      this.segData.push(data);
      var data = 
          {
            "key":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.StartDate"),
            "value":this.data.scheduledDate
          };
      this.segData.push(data);
      data =
        {
        "key":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.NumberofRecurrence"),
        "value":this.data.numberOfRecurrences
      };
      this.segData.push(data);
      this.view.segDetailsDate.setData(this.segData);
      //    this.view.lblStartDate.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.StartDate");
      //     this.view.lblTransferFrequencyValue.text=this.data.frequencyType;
      //     this.view.lblFrequencyTypeValue.text=this.data.duration;
       this.view.lblStartDateValue.text=this.data.scheduledDate;
      //     this.view.lblNumberOfRecc.text= applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.NumberofRecurrence");
      //     this.view.lblNumberOfReccValue.text=this.data.numberOfRecurrences;      
    }
    catch(ex)
    {

    }
  },

  createViewForDateRange : function()
  {
    try
    {
      var data = 
          {
            "key":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.Duration"),
            "value":scope_TransfersPresentationController.getDuration() 
          };
      var data = 
          {
            "key":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.StartDate"),
            "value":this.data.frequencyStartDate
          };
      this.segData.push(data);
      data =
        {
        "key":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.EndDate"),
        "value":this.data.frequencyEndDate
      };
      this.segData.push(data);
      this.view.segDetailsDate.setData(this.segData);
      //     this.view.lblStartDate.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.StartDate");
      //     this.view.lblTransferFrequencyValue.text=this.data.frequencyType;
      //     this.view.lblFrequencyTypeValue.text=this.data.duration;
          this.view.lblStartDateValue.text=this.data.frequencyStartDate;
      //     this.view.lblEndDateValue.text=this.data.frequencyEndDate;        
    }
    catch(ex)
    {

    }
  },

  continueOnClick : function()
  {
    try
    {
      applicationManager.getPresentationUtility().showLoadingScreen();
      var description=this.view.txtareaDescription.text;
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      transferModule.presentationController.makeATransfer(description);          
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
  
  setTransferType : function()
  {
    try
    {
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
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
      this.view.RightPane.lblSecondCheckedRowName.text = transactionObject.toAccountName + "-" +transactionObject.toAccountNumber.slice(-4);
    }
    catch(ex)
    {

    }
  },
  
  setFromAccount : function()
  {
    try
      {
      var transactionManager = applicationManager.getTransactionManager();
      var transactionObject = transactionManager.getTransactionObject();
      this.view.RightPane.lblThirdCheckedRowName.text = transactionObject.fromAccountName + "-" + transactionObject.fromAccountNumber.slice(-4);        
      }
    catch(ex)
      {
        
      }
  },

  setTransactionFrequency : function()
  {
    try
    {
      var transactionManager = applicationManager.getTransactionManager();
      var transactionObject = transactionManager.getTransactionObject();
      this.view.RightPane.lblFifthCheckedRowName.text = transactionObject.frequencyType;         
    }
    catch(ex)
    {

    }
  },

  setTransferAmount : function()
  {
    try
      {
      var transactionManager = applicationManager.getTransactionManager();
      var transactionObject = transactionManager.getTransactionObject();
      var configManager = applicationManager.getConfigurationManager();
        
      this.view.RightPane.lblFourthCheckedRowName.text = configManager.getCurrencyCode() + transactionObject.amount;        
      }
    catch(ex)
      {
        
      }    
  }  

});