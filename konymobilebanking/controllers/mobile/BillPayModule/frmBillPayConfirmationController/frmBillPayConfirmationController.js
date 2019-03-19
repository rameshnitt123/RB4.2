define({ 
  	init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    preShow: function(){
      if(kony.os.deviceInfo().name==="iPhone"){
        this.view.flxHeader.isVisible = false;
      }
      this.populateData();
      this.initActions();
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function(){
        this.view.customHeader.flxBack.onClick = function(){
           var navMan=applicationManager.getNavigationManager();    
           navMan.goBack();    
        }
        this.view.customHeader.btnRight.onClick = function(){
           var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
           billPayModule.presentationController.cancelCommon(); 
        }
        this.view.btnContinue.onClick = this.continueOnClick;
    },
  continueOnClick: function(){
    var description=this.view.txtDescription.text;
    var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayModule.presentationController.makeATransfer(description); 
   },
  populateData:function(){
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var transObj= billPayMod.presentationController.getTransObject();
    var forUtility=applicationManager.getFormatUtilManager();
    var amount=forUtility.formatAmountandAppendCurrencySymbol(transObj.amount,transObj.transactionCurrency);
    var dataobj;
    this.view.lblPaymentAmountValue.text=amount;
    this.view.lblFromAccountValue.text=transObj.fromAccNickName;
    this.view.lblBank.text=transObj.fromBankName;
    this.view.lblToPayeeValue.text=transObj.payeeNickName;
    this.view.lblPayeeAddress.text=transObj.payeeAdress;
    this.view.segDetails.widgetDataMap={
              				lblKey:"key",
              				lblValue:"value",              
	          				 };
    if(transObj.transactionsNotes)
      this.view.txtDescription.text = transObj.transactionsNotes;
    else
      this.view.txtDescription.text = "";
    if(transObj.isScheduled=="0"){
       dataobj=[
      {"key":kony.i18n.getLocalizedString("kony.mb.transaction.frequency"), "value":kony.i18n.getLocalizedString("kony.mb.frequency.TransferNow")},{"key":kony.i18n.getLocalizedString("kony.mb.Transfers.transfersDate"),"value":forUtility.getFormattedCalendarDate(transObj.scheduledDate)}
    ]
    }
    else  {
      if(transObj.frequencyType=="Once"){
       dataobj=[
      		{"key":kony.i18n.getLocalizedString("kony.mb.transaction.frequency"), "value":kony.i18n.getLocalizedString("kony.mb.frequency.OneTime")},{"key":kony.i18n.getLocalizedString("kony.mb.Transfers.transfersDate"),"value":forUtility.getFormattedCalendarDate(transObj.scheduledDate)}
    	]
       }
      else if(scope_BillPayPresentationController.getDuration()==applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.DateRange"))  {
         dataobj=[
      		{"key":kony.i18n.getLocalizedString("kony.mb.transaction.frequency"), "value":transObj.frequencyType},{"key":kony.i18n.getLocalizedString("kony.mb.Transfers.Duration"), "value":kony.i18n.getLocalizedString("kony.mb.frequency.DateRange")},{"key":kony.i18n.getLocalizedString("kony.mb.Transfers.StartDate"),"value":transObj.frequencyStartDate},{"key":kony.i18n.getLocalizedString("kony.mb.Transfers.EndDate"),"value":forUtility.getFormattedCalendarDate(transObj.frequencyEndDate)}
      	]
      }
      else if(scope_BillPayPresentationController.getDuration()==applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.RecurrenceNo"))  {
         dataobj=[
      		{"key":kony.i18n.getLocalizedString("kony.mb.transaction.frequency"), "value":transObj.frequencyType},{"key":kony.i18n.getLocalizedString("kony.mb.Transfers.Duration"), "value":kony.i18n.getLocalizedString("kony.mb.Transfers.RecurrenceNo")},{"key":kony.i18n.getLocalizedString("kony.mb.frequency.NumberofRecurrence"),"value":transObj.numberOfRecurrences},{"key":kony.i18n.getLocalizedString("kony.mb.Transfers.StartDate"),"value":forUtility.getFormattedCalendarDate(transObj.scheduledDate)}
      	]
      } 
    }
    this.view.segDetails.setData(dataobj);
  }
 });