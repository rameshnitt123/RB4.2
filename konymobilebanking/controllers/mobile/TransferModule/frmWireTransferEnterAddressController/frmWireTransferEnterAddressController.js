define({
  timerCounter: 0,
  init : function(){
  },
  preShow: function () {
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeaderPersonalInfo.isVisible = true;
    }
    else{
      this.view.flxHeaderPersonalInfo.isVisible = false;
    }
  },
});