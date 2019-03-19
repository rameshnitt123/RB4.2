define({
  init : function(){

  },
  preShow: function() {
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
    this.setFlowActions();
  },
  setFlowActions : function(){
    var scope = this;
    this.view.flxSwitchSelectAll.onClick = function(){
      scope.ToggleAll();
    };
    this.view.flxSwitchSMS.onClick = function(){
      if(scope.view.flxSwitchToggleSMS.left === "4dp")
        scope.animate(scope.view.flxSwitchSMS,scope.view.flxSwitchToggleSMS,"21dp");
      else
        scope.animate(scope.view.flxSwitchSMS,scope.view.flxSwitchToggleSMS,"4dp");
    };
    this.view.flxSwitchEmail.onClick = function(){
      if(scope.view.flxSwitchToggleEmail.left === "4dp")
        scope.animate(scope.view.flxSwitchEmail,scope.view.flxSwitchToggleEmail,"21dp");
        else
          scope.animate(scope.view.flxSwitchEmail,scope.view.flxSwitchToggleEmail,"4dp");
          };
    this.view.flxSwitchPushNotification.onClick = function(){
      if(scope.view.flxSwitchTogglePushNotification.left === "4dp")
        scope.animate(scope.view.flxSwitchPushNotification,scope.view.flxSwitchTogglePushNotification,"21dp");
        else
          scope.animate(scope.view.flxSwitchPushNotification,scope.view.flxSwitchTogglePushNotification,"4dp");
          };
  },
  ToggleAll : function(){
    var self = this;
    if(this.view.flxSwitchToggleAll.left === "4dp"){
      self.animate(self.view.flxSwitchSelectAll,self.view.flxSwitchToggleAll,"21dp");
      self.animate(self.view.flxSwitchSMS,self.view.flxSwitchToggleSMS,"21dp");
      self.animate(self.view.flxSwitchEmail,self.view.flxSwitchToggleEmail,"21dp");
      self.animate(self.view.flxSwitchPushNotification,self.view.flxSwitchTogglePushNotification,"21dp");
      self.view.lblStatus.text = kony.i18n.getLocalizedString("kony.mb.Alerts.TurnAllOn")
    }
    else if(this.view.flxSwitchToggleAll.left === "21dp"){
      self.animate(self.view.flxSwitchSelectAll,self.view.flxSwitchToggleAll,"4dp");
      self.animate(self.view.flxSwitchSMS,self.view.flxSwitchToggleSMS,"4dp");
      self.animate(self.view.flxSwitchEmail,self.view.flxSwitchToggleEmail,"4dp");
      self.animate(self.view.flxSwitchPushNotification,self.view.flxSwitchTogglePushNotification,"4dp");
      self.view.lblStatus.text = kony.i18n.getLocalizedString("kony.mb.Alerts.TurnAllOff")
    }
  },
  animate : function(parentWidget,widget,value){
    var self = this;
    widget.animate(
      kony.ui.createAnimation({
        "100": {
          "left": value,
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
      }, {
        "animationEnd": function(){
          if(widget.left === "4dp" ){
            parentWidget.skin = "sknflxffffffBordera0a0a010px";
            widget.skin = "sknflxa0a0a0Bordera0a0a0Border100pxRadius";
          }
          else if(widget.left === "21dp"){
            parentWidget.skin = "sknflxffffffBorder0095e4Border10px";
            widget.skin = "sknflx0095e4Border0095e4Border100pxRadius";
          }
        }
      });
  }
});