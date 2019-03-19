define(function() {

  function setupButton(button) {
    var	self = this;
    button.onClick = function() {
      var char = button.text;
      if (self.isAPIAvailable(self.onDigitEntered)) {
        self.onDigitEntered(char);
      }
    };
  }

  function setupActions(flxContainer) {
    var	self = this;
    var buttons = flxContainer.widgets();
    buttons.forEach(function(button) {
      setupButton.call(self, button);
    });
  }

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      var self = this;
      setupActions.call(this, this.view.flxKeypadRowOne);
      setupActions.call(this, this.view.flxKeypadRowTwo);
      setupActions.call(this, this.view.flxKeypadRowThree);
      setupButton.call(this, this.view.btnZero);
      this.view.btnDot.onClick = function() {
        if (self.isAPIAvailable(self.onDigitEntered)) {
          self.onDigitEntered(".");
        }
      };

      this.view.flxClear.onClick = function() {
        if (self.isAPIAvailable(self.onDigitRemoved)) {
          self.onDigitRemoved();
        }
      };
    },

    initGettersSetters: function() {
    },

    isAPIAvailable: function(API) {
      return API && (typeof API === "function");
    }
  };
});