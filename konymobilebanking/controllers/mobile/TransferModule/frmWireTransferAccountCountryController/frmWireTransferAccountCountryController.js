define({
  	segmentData:null,
    init:function(){
      
    },
  	preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
          this.view.flxMainContainer.top = "0dp";
        }
       
    },
    
});