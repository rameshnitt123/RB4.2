define({ 
  init : function(){
  },
  preShow: function(){
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
    this.setFlowActions();
    this.view.flxSegRecipientDetails.isVisible = false;
    scope.view.segBankDetails.isVisible = false;
  },
  setFlowActions : function(){
    var scope = this;
    this.view.flxRecipientDetails.onClick = function(){
      scope.view.flxSegRecipientDetails.isVisible = true;
    };
    this.view.flxBankDetails.onClick = function(){
      scope.view.segBankDetails.isVisible = true;
    };
  },

});