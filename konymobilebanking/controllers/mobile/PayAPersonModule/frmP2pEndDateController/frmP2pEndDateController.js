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
      this.view.customCalendar.preShow();
      kony.print("form preshow for cal ended");
      this.view.customCalendar.selectedDate='';
      this.view.customCalendar.triggerContinueAction = false;
     // this.view.customCalendar.isCalendarEndDateFrm = true;
   //   this.view.customCalendar.isOnceTransaction = false;
      this.view.customCalendar.updateDateBullets();
    //  this.view.customCalendar.unHighlightAllDays(); 
      var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
      var data = payeeMod.presentationController.getP2PObject();
      this.view.customCalendar.setFirstEnabledDate(data.scheduledDate);
      var forUtility=applicationManager.getFormatUtilManager();
     if(data.endCalendarDate!== null && data.endCalendarDate !== undefined && data.endCalendarDate !== ""){
        this.setDateToCalendar(data.endCalendarDate);
      }
      else if(data.frequencyEndDate!== null && data.frequencyEndDate !== undefined && data.frequencyEndDate !== ""){
        this.setDateToCalendar(data.endCalendarDate);
      }else{
        this.view.customCalendar.setSelectedDate(data.scheduledDate); 
      }      
      if(this.view.customCalendar.selectedDate===''){
        this.view.btnContinue.setEnabled(false);    
      }else{
        this.view.btnContinue.setEnabled(true);
      }
      this.view.customCalendar.resetCal();
      this.initActions();
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().logFormName(currentForm);
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function(){
        var scope = this;
        this.view.btnContinue.onClick = this.btnContOnclick;
        this.view.customHeader.btnRight.onClick = function(){
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.cancelCommon();
        }
        this.view.customHeader.flxBack.onClick = function(){
      		var navMan=applicationManager.getNavigationManager();
      		navMan.goBack();
        }
    },
  setDateToCalendar:function(dateString){
    var forUtility=applicationManager.getFormatUtilManager();
    var configManager = applicationManager.getConfigurationManager();
    var frequencyEndDate = forUtility.getDateObjectFromCalendarString(dateString,configManager.getCalendarDateFormat());
    frequencyEndDate = forUtility.getFormattedSelectedDate(frequencyEndDate);
    this.view.customCalendar.setSelectedDate(frequencyEndDate); 
  },
	btnContOnclick: function(){ 
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.transferScheduledEndDate(this.view.customCalendar.getSelectedDate());
      }
});