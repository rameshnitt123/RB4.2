define({

  timerCounter:0,
  keypadString: '',
  init:function(){
  },
  frmPreshow: function() {
    this.keypadString = '';
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
  },
  setKeypadChar: function(char) {

    this.keypadString = this.keypadString + char;
    if (this.keypadString.length > 0 && this.keypadString.length < 17) {
      this.enterCodePostAction();
    } else if (this.keypadString.length < 1) {
      this.incompleteCodeView();
    } else if (this.keypadString.length > 16) {
      this.keypadString = this.keypadString.slice(0, 16);
      return;
    }
    this.updateInputBullets("flxInputAccNo");
  },

  clearKeypadChar: function() {
    if (this.keypadString.length === 1) {
      this.keypadString = '';
      this.updateInputBullets("flxInputAccNo");
    }
    if (this.keypadString.length !== 0) {
      this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
      if (this.keypadString.length < 1) {
        this.incompleteCodeView();
      }
      this.updateInputBullets("flxInputAccNo");
    }
    if (this.keypadString.length < 1) {
      this.incompleteCodeView();
    }
  },
  updateInputBullets: function(inputFlx) {
    var widgets = this.view[inputFlx].widgets();
    for (var i = 0; i < this.keypadString.length; i++) {
      // widgets[i].skin = "sknLbl484848sspReg50px";
      widgets[i].text = this.keypadString[i];
    }
    for (var i = this.keypadString.length; i < widgets.length; i++) {
      //widgets[i].skin = "sknLble3e3e3SSP60px";
      widgets[i].text = '_';
    }
    this.view.forceLayout();
  },
  enterCodePostAction: function() {
        this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
    },
    incompleteCodeView: function() {
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnContinue.setEnabled(false);
    },
});