define({
  transferType: '',
  segmentData:null,

  init : function(){
  },
  preShow: function () {
    if (this.view.flxHeaderSearchbox.isVisible === true) {
      this.view.flxHeaderSearchbox.isVisible = false;
      this.view.flxSearch.isVisible = true;
      this.view.flxHeader.isVisible = true;
      this.view.flxMainContainer.top = "56dp";
    } 
    if (kony.os.deviceInfo().name === "iPhone") {
      this.view.flxHeader.isVisible = false;
      this.view.flxMainContainer.top = "0dp";
    }
  },
});