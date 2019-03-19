define(function() {

	return {
		keypadChar: '',
		setChar: function(par){
			this.keypadChar = par;
			this.view.txtKeypad.text = par;
		},
		clearChar: function(){
			this.view.txtKeypad.text = '';
			this.keypadChar = '';
		},
      
        callOnPreshow : function()
      {
        this.view.btnOne.focusSkin = this.view.btnOne.skin;
        this.view.btnTwo.focusSkin = this.view.btnTwo.skin;
        this.view.btnThree.focusSkin = this.view.btnThree.skin;
        this.view.btnFour.focusSkin = this.view.btnFour.skin;
        this.view.btnFive.focusSkin = this.view.btnFive.skin;
        this.view.btnSix.focusSkin = this.view.btnSix.skin;
        this.view.btnSeven.focusSkin = this.view.btnSeven.skin;
        this.view.btnEight.focusSkin = this.view.btnEight.skin;
        this.view.btnNine.focusSkin = this.view.btnNine.skin;
        this.view.btnZero.focusSkin = this.view.btnZero.skin;
      }
	};
});