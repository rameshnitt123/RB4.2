define({
    freq:'',
    startDateKey: '',
    onNavigate: function (obj) {
        if(obj==undefined){
            return;
        }
        this.startDateKey = obj;
        if(this.startDateKey==="oneTime"){
            this.view.customHeader.lblLocateUs.text = "SEND DATE";
        }else{
            this.view.customHeader.lblLocateUs.text = "START DATE";
        }
    },
    init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm = navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    preShow: function(){
      if(kony.os.deviceInfo().name==="iPhone"){
        this.view.flxHeader.isVisible = false;
      }
      this.view.customCalendar.preShow();
      if(this.view.customCalendar.selectedDate===''){
        this.view.btnContinue.setEnabled(false);    
      }else{
        this.view.btnContinue.setEnabled(true);
      }
      this.initActions();
      
      this.view.customCalendar.selectedDate='';
      this.view.customCalendar.firstEnabledDate ="";
    // this.view.customCalendar.isCalendarEndDateFrm = false;
      this.view.customCalendar.triggerContinueAction = true;
    // this.view.customCalendar.isOnceTransaction = false;
      this.view.customCalendar.updateDateBullets();
    // this.view.customCalendar.unHighlightAllDays(); 
      this.view.customCalendar.setFirstEnabledDate();
      var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
      var startdate= transModPresentationController.getTransObject();
      var navMan=applicationManager.getNavigationManager();
      var data=navMan.getCustomInfo("frmTransfersStartDate");
      this.freq=data.freq;
    //       if(this.freq==="Once"){
    //         this.view.customCalendar.isOnceTransaction = true;
    //       }
      var info=navMan.getCustomInfo("frmTransfersDuration");
      if(info)
        if(startdate.scheduledCalendarDate!== null && startdate.scheduledCalendarDate !== undefined && startdate.scheduledCalendarDate !== ""){
          this.setDateToCalendar(startdate.scheduledCalendarDate);
        }
        else if(startdate.scheduledDate!== null && startdate.scheduledDate !== undefined && startdate.scheduledDate !== "")
        {
          this.setDateToCalendar(startdate.scheduledDate);
        }else{
          var startDate = new Date();
          var startDateFeed1 = (startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear();
          this.view.customCalendar.setFirstEnabledDate(startDateFeed1);
        //   this.view.customCalendar.setSelectedDateValue('');
        }
      if(this.freq==="Once"){
        // this.view.customHeader.lblLocateUs.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.sendDateCaps");
        this.view.customHeader.lblLocateUs.text = "SEND DATE";
        this.view.btnContinue.isVisible = true;
        this.view.customCalendar.triggerContinueAction = false;
      }else{
        // this.view.customHeader.lblLocateUs.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.startDateCaps");
        this.view.customHeader.lblLocateUs.text = "START DATE";
        this.view.btnContinue.isVisible = false;
        this.view.customCalendar.triggerContinueAction = true;
      }        
      this.view.customCalendar.setLastEnabledDate();
      this.view.customCalendar.resetCal();
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().logFormName(currentForm);  
    },
    initActions: function(){
      var scope = this;
      this.view.customHeader.flxBack.onClick = function(){
        var navMan=applicationManager.getNavigationManager();    
        navMan.goBack();   
      }
      this.view.btnContinue.onClick = this.continueAction;
      this.view.customHeader.btnRight.onClick = function(){
        scope.cancelOnClick();
      }
    },
  setDateToCalendar:function(dateString){
    var forUtility=applicationManager.getFormatUtilManager();
    var configManager = applicationManager.getConfigurationManager();
    var scheduledDate = forUtility.getDateObjectFromCalendarString(dateString,configManager.getCalendarDateFormat());
    scheduledDate = forUtility.getFormattedSelectedDate(scheduledDate);
    this.view.customCalendar.setSelectedDate(scheduledDate);
  },
    cancelOnClick:function()
    {
      var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
          transferModulePresentationController.cancelCommon(); 
    },
    backAction: function(){
       var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
      if(this.startDateKey==="oneTime"){
        transferModulePresentationController.commonFunctionForNavigation("frmTransferFrequency"); 
      }else if(this.startDateKey === "recurrence"){
        transferModulePresentationController.commonFunctionForNavigation("frmTransfersRecurrence"); 
      }else{
        transferModulePresentationController.commonFunctionForNavigation("frmTransfersDuration"); 
      }
    },
    continueAction: function(){
     if(this.freq==="Once"||this.freq==="NofRR")
        {
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModulePresentationController.transferScheduledDate(this.view.customCalendar.getSelectedDate()); 
        }
      else
        {
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModulePresentationController.transferScheduledStrtDate(this.view.customCalendar.getSelectedDate());

        }
       
    }
});