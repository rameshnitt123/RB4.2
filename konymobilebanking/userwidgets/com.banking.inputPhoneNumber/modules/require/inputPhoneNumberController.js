define(function() {
  var template = "(___)___-____";
  var max = 10;	

  var updatePhoneView = function() {
    var text = template;
    var delta = 1;

    for (var i = 0; i < text.length; i++) {
      if (i === 3 || i === 6) {
        delta++;
      }

      if (i < this.phoneNumberString.length) {
        var index = i + delta;
        var replacement = this.phoneNumberString.charAt(i);
        text = text.substr(0, index) + replacement + text.substr(index + 1);
      }
    }

    this.view.lblInputPhoneNumber.textStyle = {
      "letterSpacing": 8
    };

    this.view.lblInputPhoneNumber.text = text;
  };

  var isAPIAvailable =  function(API) {
    return API && (typeof API === "function");
  };

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      var self = this;
      this.phoneNumberString = '';
      this.componentProperties = {
        mainFlxSkin: "",
        inputPhoneNumberSkin: "",
      }; 

      this.addDigit = function(char) {
        if (self.phoneNumberString.length < max) {
          self.phoneNumberString += char;
          updatePhoneView.call(self);
          if (self.phoneNumberString.length === max
              && isAPIAvailable(self.onPhoneNumberEntered)) {
            self.onPhoneNumberEntered();
          }
        }
      };

      this.removeDigits = function() {
        var length = self.phoneNumberString.length;

        if (length > 0) {
          self.phoneNumberString = self.phoneNumberString.slice(0, -1);
          updatePhoneView.call(self);
          if (length === max && isAPIAvailable(self.onPhoneNumberRemoved)) {
            self.onPhoneNumberRemoved();
          }
        }
      };

      this.getPhoneNumber = function() {
        return self.phoneNumberString;
      };

      this.setPhoneNumber = function(number) {
        self.phoneNumberString = number;
        if (number.length === max
            && isAPIAvailable(self.onPhoneNumberEntered)) {
          self.onPhoneNumberEntered();
        }
        updatePhoneView.call(self);
      };

      this.clearPhoneNumber = function() {
        self.phoneNumberString = "";
        updatePhoneView.call(self);
        if (isAPIAvailable(self.onPhoneNumberRemoved)) {
          self.onPhoneNumberRemoved();
        }
      };
    },

    initGettersSetters: function() {
      defineSetter(this, "mainFlx", function(val) {
        this.componentProperties.mainFlxSkin = val;
      });

      defineSetter(this, "inputPhoneNumber", function(val) {
        this.componentProperties.inputPhoneNumberSkin = val;
      });	
    },

    preShow: function() {
      this.view.skin =  this.componentProperties.mainFlxSkin;
      this.view.lblInputPhoneNumber.skin = this.componentProperties.inputPhoneNumberSkin;
    }
  };
});