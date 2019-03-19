define({ 
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
    preShow: function(){
        if(kony.os.deviceInfo().name==="iPhone"){
            this.view.flxHeader.isVisible = false;
        }
      this.view.flxFrequencyType.setVisibility(false);
      this.view.flxEndDate.setVisibility(false);
      this.view.flxRecurrence.setVisibility(false); 
      this.view.flxTransferFrequency.setVisibility(false);
      this.view.flxTransferDate.setVisibility(false);
      this.view.flxStartDate.setVisibility(false);
      this.getData();
      this.initActions();
      applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm=navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);  
    },
    initActions: function(){
      var scope=this;
        this.view.customHeader.flxBack.onClick = function(){
           var navMan=applicationManager.getNavigationManager();    
           navMan.goBack();   
        }
        this.view.customHeader.btnRight.onClick = function(){
        scope.cancelOnClick();
        }
        this.view.btnContinue.onClick = this.continueOnClick;
    },
  cancelOnClick:function()
  {
    var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModulePresentationController.cancelCommon(); 
  },
  getData:function()
  {
    
     var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
      this.data= transModPresentationController.getTransObject();  
    // this.data=navMan.getCustomInfo("frmTransferConfirmation");
     var forUtility=applicationManager.getFormatUtilManager();
     var amount=forUtility.formatAmountandAppendCurrencySymbol(this.data.amount,this.data.transactionCurrency);
     this.view.lblFromAccount.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.TransferAmount");
     this.view.lblFromAccountValue.text=amount;
     this.view.lblFromAccountValueDetails.text=this.data.fromAccountName;
     this.view.lblPayeeNameValue.text=this.data.toAccountName;
     if(this.data.transactionsNotes)
      this.view.txtDescription.text = this.data.transactionsNotes;
    else
      this.view.txtDescription.text = "";
     if(this.data.transactionType==="InternalTransfer"){
        this.view.lblBank.text=this.data.fromAccountType;
        this.view.lblPayeeAddress.text=this.data.toAccountType;
       }
    else
      {
        this.view.lblBank.text=this.data.fromBankName;
        this.view.lblPayeeAddress.text=scope_TransfersPresentationController.getToBankName();
      }
     this.view.segDetails.widgetDataMap={
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
  },
  createViewForOnce:function()
  {  
  var forUtility=applicationManager.getFormatUtilManager();
  var data = 
          {
           "key":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.transfersDate"),
           "value":forUtility.getFormattedCalendarDate(this.data.scheduledDate)
          };
   this.segData.push(data);
   this.view.segDetails.setData(this.segData);
  },
  createViewForReccurence:function()
  {
    var forUtility=applicationManager.getFormatUtilManager();

    var data = 
          {
           "key":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.Duration"),
           "value":scope_TransfersPresentationController.getDuration() 
          };
    this.segData.push(data);
     var data = 
          {
           "key":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.StartDate"),
           "value":forUtility.getFormattedCalendarDate(this.data.scheduledDate)
          };
    this.segData.push(data);
    data =
          {
           "key":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.NumberofRecurrence"),
           "value":this.data.numberOfRecurrences
          };
    this.segData.push(data);
    this.view.segDetails.setData(this.segData);
//    this.view.lblStartDate.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.StartDate");
//     this.view.lblTransferFrequencyValue.text=this.data.frequencyType;
//     this.view.lblFrequencyTypeValue.text=this.data.duration;
//  this.view.lblStartDateValue.text=this.data.scheduledDate;
//     this.view.lblNumberOfRecc.text= applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.NumberofRecurrence");
//     this.view.lblNumberOfReccValue.text=this.data.numberOfRecurrences;
   },
  createViewForDateRange:function()
  {
    var forUtility=applicationManager.getFormatUtilManager();

    var data = 
          {
           "key":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.Duration"),
           "value":scope_TransfersPresentationController.getDuration() 
          };
    var data = 
          {
           "key":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.StartDate"),
           "value":forUtility.getFormattedCalendarDate(this.data.frequencyStartDate)
          };
    this.segData.push(data);
    data =
          {
           "key":applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.EndDate"),
           "value":forUtility.getFormattedCalendarDate(this.data.frequencyEndDate)
          };
      this.segData.push(data);
        this.view.segDetails.setData(this.segData);
//     this.view.lblStartDate.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.StartDate");
//     this.view.lblTransferFrequencyValue.text=this.data.frequencyType;
//     this.view.lblFrequencyTypeValue.text=this.data.duration;
//     this.view.lblStartDateValue.text=this.data.frequencyStartDate;
//     this.view.lblEndDateValue.text=this.data.frequencyEndDate;
  },
   continueOnClick: function(){
     applicationManager.getPresentationUtility().showLoadingScreen();
    var description=this.view.txtDescription.text;
    var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModulePresentationController.makeATransfer(description); 
   }
  
 });