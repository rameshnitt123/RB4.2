define({

    init:function(){
    	
    },
  	frmPreShow: function() {
       if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
	}
});