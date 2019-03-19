define({ 

   frmPreShow: function() {
      	if(kony.os.deviceInfo().name==="iPhone"){
            this.view.flxHeader.isVisible = false;
        }else{
            this.view.flxHeader.isVisible = true;
        }
    },

 });