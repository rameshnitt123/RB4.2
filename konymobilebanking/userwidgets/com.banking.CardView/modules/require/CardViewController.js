define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
		},

		initGettersSetters: function() {

		},
    
    setI18Text: function(i18Key) {
      this.setText(kony.i18n.getLocalizedString(i18Key));
    },
    
    setText: function(text) {
			this.view.rtxCardView.text = text;   
    },
    
    onHandleClick: function() {
      if (this.isAPIInitialized(this.onSelected)) {
        this.onSelected();
      }
    },
    
    isAPIInitialized: function(API) {
      return API && (typeof API === "function");
    }
	};
});