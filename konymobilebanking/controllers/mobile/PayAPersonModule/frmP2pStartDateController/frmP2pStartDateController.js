define({
     freq:'',
    startDateKey: '',
   init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    onNavigate: function (obj) {
        if(obj==undefined){
            return;
        }
        this.startDateKey = obj;
        if(this.startDateKey==="oneTime"){
            this.view.customHeader.lblLocateUs.text = "Send Date";
        }else{
            this.view.customHeader.lblLocateUs.text = "Start Date";
        }
    },
    preShow: function(){
      if(kony.os.deviceInfo().name==="iPhone"){
        this.view.flxHeader.isVisible = false;
      }
      this.view.customCalendar.preShow();
      this.view.customCalendar.selectedDate='';
      this.view.customCalendar.triggerContinueAction = true;
    //  this.view.customCalendar.isCalendarEndDateFrm = false;
    //  this.view.customCalendar.isOnceTransaction = false;
      this.view.customCalendar.updateDateBullets();
    //  this.view.customCalendar.unHighlightAllDays(); 
      this.view.customCalendar.setFirstEnabledDate();
      this.initActions();
      var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
      var data = payeeMod.presentationController.getP2PObject();
      this.freq=data.frequencyType;
//       if(this.freq==="Once"){
//         this.view.customCalendar.isOnceTransaction = true;
//       }
      this.duration = data.duration;
      var forUtility=applicationManager.getFormatUtilManager();
      if(data.scheduledCalendarDate!== null && data.scheduledCalendarDate !== undefined && data.scheduledCalendarDate !== ""){
          this.setDateToCalendar(data.scheduledCalendarDate);
        }
        else if(data.scheduledDate!== null && data.scheduledDate !== undefined && data.scheduledDate !== "")
        {
          this.setDateToCalendar(data.scheduledDate);
        }else{        
        var startDate = new Date();
        var startDateFeed1 = (startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear();
        this.view.customCalendar.setFirstEnabledDate(startDateFeed1);
       // this.view.customCalendar.setSelectedDateValue('');
      }
      if(this.freq==="Once"){
        //this.view.customHeader.lblLocateUs.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.sendDateCaps");
        this.view.customHeader.lblLocateUs.text = "Send Date";
        this.view.btnContinue.isVisible = true;
      //  this.view.customCalendar.isOnceTransaction = true;
        this.view.customCalendar.triggerContinueAction = false;
      }else{
        //this.view.customHeader.lblLocateUs.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.startDateCaps");
        this.view.customHeader.lblLocateUs.text = "Start Date";
        this.view.btnContinue.isVisible = false;
        this.view.customCalendar.triggerContinueAction = true;                 
      }
      if(this.view.customCalendar.selectedDate===''){
        this.view.btnContinue.setEnabled(false);    
      }else{
        this.view.btnContinue.setEnabled(true);
      }
      this.view.customCalendar.resetCal();
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().logFormName(currentForm);
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    },

    initActions: function(){
        var scope = this;
        this.view.customHeader.flxBack.onClick = this.backAction;
        this.view.btnContinue.onClick = this.continueAction;

        this.view.customHeader.btnRight.onClick = function(){
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.cancelCommon();
        };
    },
  setDateToCalendar:function(dateString){
    var forUtility=applicationManager.getFormatUtilManager();
    var configManager = applicationManager.getConfigurationManager();
    var scheduledDate = forUtility.getDateObjectFromCalendarString(dateString,configManager.getCalendarDateFormat());
    scheduledDate = forUtility.getFormattedSelectedDate(scheduledDate);
    this.view.customCalendar.setSelectedDate(scheduledDate);
  },
    backAction: function(){
       var navMan=applicationManager.getNavigationManager();
      		navMan.goBack();
    },
    continueAction: function(){
         if(this.freq==="Once"||this.duration===applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.RecurrenceNo"))
        {
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.transferScheduledDate(this.view.customCalendar.getSelectedDate()); 
        }
      else
        {
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.transferScheduledStrtDate(this.view.customCalendar.getSelectedDate());
        }
    }
});