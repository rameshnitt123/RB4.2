define({
  	transObj:{},
  	frequencyTypes:{},
    startDateKey: '',
	 init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    preShow: function(){
      if(kony.os.deviceInfo().name==="iPhone"){
        this.view.flxHeader.isVisible = false;
      }
      this.view.customCalendar.preShow();
      this.initActions();
      this.view.customCalendar.selectedDate='';
      //this.view.customCalendar.firstEnabledDate ="";
      this.view.customCalendar.triggerContinueAction = true;
      //this.view.customCalendar.isCalendarEndDateFrm = false;
    //  this.view.customCalendar.isOnceTransaction = false;
      this.view.customCalendar.updateDateBullets();
    //  this.view.customCalendar.unHighlightAllDays(); 
      this.view.customCalendar.setFirstEnabledDate();
      var forUtility=applicationManager.getFormatUtilManager();
      var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      this.transObj= billPayMod.presentationController.getTransObject();
      this.frequencyTypes=billPayMod.presentationController.getAvailableFrequencyType();
//       if(this.transObj.frequencyType==this.frequencyTypes.ONCE){
//         this.view.customCalendar.isOnceTransaction = true;
//       }
      if(this.transObj.scheduledCalendarDate!== null && this.transObj.scheduledCalendarDate !== undefined && this.transObj.scheduledCalendarDate !== ""){
          this.setDateToCalendar(this.transObj.scheduledCalendarDate);
        }
        else if(this.transObj.scheduledDate!== null && this.transObj.scheduledDate !== undefined && this.transObj.scheduledDate !== "")
        {
          this.setDateToCalendar(this.transObj.scheduledDate);
        }else{
        var startDate=new Date();
      	var startDateFeed1 = (startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear();
        this.view.customCalendar.setFirstEnabledDate(startDateFeed1);
        //this.view.customCalendar.setSelectedDateValue('');
      }
      if(this.view.customCalendar.selectedDate===''){
        this.view.btnContinue.setEnabled(false);    
      }else{
        this.view.btnContinue.setEnabled(true);
      }

      if(this.transObj.frequencyType==this.frequencyTypes.ONCE){
        // this.view.customHeader.lblLocateUs.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.sendDateCaps");
        this.view.customHeader.lblLocateUs.text = "Send Date";
        this.view.btnContinue.isVisible = true;
        this.view.customCalendar.triggerContinueAction = false;      
      }else{
        // this.view.customHeader.lblLocateUs.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.startDateCaps");
        this.view.customHeader.lblLocateUs.text = "Start Date";
        this.view.btnContinue.isVisible = false;
        this.view.customCalendar.triggerContinueAction = true;
      }
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
        var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayModule.presentationController.cancelCommon(); 
      }
    },
  setDateToCalendar:function(dateString){
    var forUtility=applicationManager.getFormatUtilManager();
    var configManager = applicationManager.getConfigurationManager();
    var scheduledDate = forUtility.getDateObjectFromCalendarString(dateString,configManager.getCalendarDateFormat());
    scheduledDate = forUtility.getFormattedSelectedDate(scheduledDate);
    this.view.customCalendar.setSelectedDate(scheduledDate);
  },
   continueAction: function(){
     
     if((this.transObj.frequencyType==this.frequencyTypes.ONCE||this.transObj.numberOfRecurrences)){
        var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayModule.presentationController.transferScheduledDate(this.view.customCalendar.getSelectedDate()); 
        }
      else
        {
        var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayModule.presentationController.transferScheduledStrtDate(this.view.customCalendar.getSelectedDate());
        }
       
    }
});