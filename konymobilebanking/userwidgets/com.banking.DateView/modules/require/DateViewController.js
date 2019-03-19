define(function() {
  var isApiAvailable = function(API) {
    return API && (typeof API === "function");
  };

  var updateDateView = function() {
    var text = this.hintText;
    var delta = 0;
    for (var i = 0; i < this.hintText.length; i++) {
      delta = (i === 2 || i === 4) ? delta + 1 : delta;
      if (i < this.enteredDateString.length) {
        var index = i + delta;
        var replacementChar =  this.enteredDateString.charAt(i);
        text = text.substr(0, index) + replacementChar + text.substr(index + 1);
      }
    }
    this.view.rtDate.text = styleText(text);
  };

  var styleText = function(text) {
    var styledText = "";
    for (var i = 0; i < text.length; i++) {
      var char = text.charAt(i);
      var isDigit = !Number.isNaN(parseInt(char));
      var fontColor = (isDigit  || char === "/") ? "#424242" : "#A0A0A0";
      styledText += char.toString().fontcolor(fontColor);
    }
    return styledText;
  };

  var parseDateString = function() {
    // Fixed mounth's and day's value as it starts from "0" in Date class
    var mounth = parseInt(this.enteredDateString.slice(0, 2)) - 1;
    var day = parseInt(this.enteredDateString.slice(2, 4)) + 1;
    var year = this.enteredDateString.slice(4, 9);

    return new Date(year, mounth, day);
  };

  var constructDateString = function() {
    var mounth = this.enteredDateString.slice(0, 2);
    var day = this.enteredDateString.slice(2, 4);
    var year = this.enteredDateString.slice(4, 9);

    return mounth + "/" + day + "/" + year;
  };

  var isInvalidInput = function(char) {
    /*
    	Mounth's value should be in 01-12 range
      Day's value should be in 01-31 range
      Year's value should be in 1900-2099 range
    */
    var digit = parseInt(char);
    var length = this.enteredDateString.length;
    return (length === 0 && digit > 1) 
      || (length === 1 
          && (parseInt(this.enteredDateString + char) > 12 
              || parseInt(this.enteredDateString + char) === 0))
      || (length === 2 && digit > 3)
      || (length === 3 
          && (parseInt(this.enteredDateString.charAt(2) + char) > 31
              || parseInt(this.enteredDateString.charAt(2) + char) === 0))
      || (length === 4 && (digit > 2 || digit < 1))
      || (length === 5 
          && (parseInt(this.enteredDateString.charAt(4) + char) < 19 
              || parseInt(this.enteredDateString.charAt(4) + char) > 20));
  };

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.enteredDateString = "";
      this.maxDateLength = 8;
      this.hintText = "MM/DD/YYYY";
      this.view.rtDate.text = "";
      updateDateView.call(this);
      var self = this;

      this.addChar = function(char) {
        if (!isInvalidInput.call(self, char)) {
          var length = self.enteredDateString.length;

          if (length < self.maxDateLength) {
            self.enteredDateString += char;
            updateDateView.call(self);
          }
          if (self.enteredDateString.length === self.maxDateLength && isApiAvailable(self.onDateEntered)) {
            self.onDateEntered();
          }
        }
      };

      this.removeChar = function() {
        var length = self.enteredDateString.length;
        if (length > 0) {
          self.enteredDateString = self.enteredDateString.slice(0, -1);
          updateDateView.call(self);
        }
        if (length === self.maxDateLength && isApiAvailable(self.onDateRemoved)) {
          self.onDateRemoved();
        }
      };

      this.getDate = function() {
        return parseDateString.call(self);
      };

      this.clear = function() {
        self.enteredDateString = "";
        updateDateView.call(self);
        if (isApiAvailable(self.onDateRemoved)) {
          self.onDateRemoved();
        }
      };

      this.setDate = function(date) {
        if (!date) {
          self.clear();
        } else {
          self.enteredDateString = date;
          self.view.rtDate.text = self.hintText;
          updateDateView.call(self);
          if (self.enteredDateString.length === self.maxDateLength && isApiAvailable(self.onDateEntered)) {
            self.onDateEntered();
          }
        }
      };

      this.getDateString = function() {
        return constructDateString.call(self);
      };
    },

    initGettersSetters: function() {

    }
  };
});