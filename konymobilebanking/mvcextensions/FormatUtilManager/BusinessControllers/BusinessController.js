/**
  *@module FormatUtilManager
  */
 define([], function() {
	
	/**
   * FormatUtilManager is a utility class which provides the APIs for formating (viz. date time calendar)
   *@alias module:FormatUtilManager
   *@class
   */
   
function FormatUtilManager(){
	/**@member {string} BACKEND_DATE_TIME_FORMAT used for formating Backend Date Time*/
	this.BACKEND_DATE_TIME_FORMAT =   "Y-m-d H:i:s";
	/**@member {string} BACKEND_DATE_FORMAT used for formating Backedn Date*/
    this.BACKEND_DATE_FORMAT =   "Y-m-d";
	/**@member {string} APPLICATION_DATE_TIME_FORMAT used for formating Application Date Time*/
	this.APPLICATION_DATE_TIME_FORMAT =   "m/d/Y, g:i A";
	/**@member {string} APPLICATION_DATE_FORMAT used for formating Application Date*/
	this.APPLICATION_DATE_FORMAT =   "m/d/Y";
	/**@member {string} APPLICATION_TIME_FORMAT used for formating Application Time*/
	this.APPLICATION_TIME_FORMAT="g:i A";

/**
  * Helper function and property on Date class 
  * @member of  FormatUtilManager and Date
  * @param {String} format - date in required format
  * @returns {String} - formated date string
  */
    Date.prototype.format = function(format){
	 	var date = this;
	 	return format.replace(/(\\?)(.)/g, function (_, esc, chr) {
	   		return esc === "" && Date.replaceChars[chr] ? Date.replaceChars[chr].call(date) : chr
  		})
	}
	 /**@member {OBJECT}  contains all different types of calender notations*/
	Date.replaceChars = {
	    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	    longMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	    shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	    longDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	    longMonthsUpperCase: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'], 
	  d : function () {
	   return (this.getDate() < 10 ? "0" : "") + this.getDate();
	  },
	  D : function () {
	   return Date.replaceChars.shortDays[this.getDay()];
	  },
	  j : function () {
	   return this.getDate();
	  },
	  l : function () {
	   return Date.replaceChars.longDays[this.getDay()];
	  },
	  N : function () {
	   return this.getDay() === 0 ? 7 : this.getDay();
	  },
	  S : function () {
	   return this.getDate() % 10 == 1 && this.getDate() != 11 ? "st" : this.getDate() % 10 == 2 && this.getDate() != 12 ? "nd" : this.getDate() % 10 == 3 && this.getDate() != 13 ? "rd" : "th";
	  },
	  w : function () {
	   return this.getDay();
	  },
	  z : function () {
	   var d = new Date(this.getFullYear(), 0, 1);
	   return Math.ceil((this - d) / 864e5);
	  },
	  W : function () {
	   var target = new Date(this.valueOf());
	   var dayNr = (this.getDay() + 6) % 7;
	   target.setDate(target.getDate() - dayNr + 3);
	   var firstThursday = target.valueOf();
	   target.setMonth(0, 1);
	   if (target.getDay() !== 4) {
	    target.setMonth(0, 1 + (4 - target.getDay() + 7) % 7);
	   }
	   return 1 + Math.ceil((firstThursday - target) / 6048e5);
	  },
	  F : function () {
	   return Date.replaceChars.longMonths[this.getMonth()];
	  },
	  m : function () {
	   return (this.getMonth() < 9 ? "0" : "") + (this.getMonth() + 1);
	  },
	  M : function () {
	   return Date.replaceChars.shortMonths[this.getMonth()];
	  },
	  n : function () {
	   return this.getMonth() + 1;
	  },
	  t : function () {
	   var d = new Date();
	   return new Date(d.getFullYear(), d.getMonth(), 0).getDate();
	  },
	  L : function () {
	   var year = this.getFullYear();
	   return year % 400 === 0 || year % 100 !== 0 && year % 4 === 0;
	  },
	  o : function () {
	   var d = new Date(this.valueOf());
	   d.setDate(d.getDate() - (this.getDay() + 6) % 7 + 3);
	   return d.getFullYear();
	  },
	  Y : function () {
	   return this.getFullYear();
	  },
	  y : function () {
	   return ("" + this.getFullYear()).substr(2);
	  },
	  a : function () {
	   return this.getHours() < 12 ? "am" : "pm";
	  },
	  A : function () {
	   return this.getHours() < 12 ? "AM" : "PM";
	  },
	  B : function () {
	   return Math.floor(((this.getUTCHours() + 1) % 24 + this.getUTCMinutes() / 60 + this.getUTCSeconds() / 3600) * 1e3 / 24);
	  },
	  g : function () {
	   return this.getHours() % 12 || 12;
	  },
	  G : function () {
	   return this.getHours();
	  },
	  h : function () {
	   return ((this.getHours() % 12 || 12) < 10 ? "0" : "") + (this.getHours() % 12 || 12);
	  },
	  H : function () {
	   return (this.getHours() < 10 ? "0" : "") + this.getHours();
	  },
	  i : function () {
	   return (this.getMinutes() < 10 ? "0" : "") + this.getMinutes();
	  },
	  s : function () {
	   return (this.getSeconds() < 10 ? "0" : "") + this.getSeconds();
	  },
	  u : function () {
	   var m = this.getMilliseconds();
	   return (m < 10 ? "00" : m < 100 ? "0" : "") + m;
	  },
	  e : function () {
	   return "Not Yet Supported";
	  },
	  I : function () {
	   var DST = null;
	   for (var i = 0; i < 12; ++i) {
	    var d = new Date(this.getFullYear(), i, 1);
	    var offset = d.getTimezoneOffset();
	    if (DST === null)
	     DST = offset;
	    else if (offset < DST) {
	     DST = offset;
	     break;
	    } else if (offset > DST)
	     break;
	   }
	   return this.getTimezoneOffset() == DST | 0;
	  },
	  O : function () {
	   return (-this.getTimezoneOffset() < 0 ? "-" : "+") + (Math.abs(this.getTimezoneOffset() / 60) < 10 ? "0" : "") + Math.abs(this.getTimezoneOffset() / 60) + "00";
	  },
	  P : function () {
	   return (-this.getTimezoneOffset() < 0 ? "-" : "+") + (Math.abs(this.getTimezoneOffset() / 60) < 10 ? "0" : "") + Math.abs(this.getTimezoneOffset() / 60) + ":00";
	  },
	  T : function () {
	   return this.toTimeString().replace(/^.+ \(?([^\)]+)\)?$/, "$1");
	  },
	  Z : function () {
	   return -this.getTimezoneOffset() * 60;
	  },
	  c : function () {
	   return this.format("Y-m-d\\TH:i:sP");
	  },
	  r : function () {
	   return this.toString();
	  },
	  U : function () {
	   return this.getTime() / 1e3;
	  },
	  Q : function(){
	  	return Date.replaceChars.longMonthsUpperCase[this.getMonth()];
	  }
	 
	}

};

inheritsFrom(FormatUtilManager, kony.mvc.Business.Delegator);

FormatUtilManager.prototype.initializeBusinessController = function(){};

/**
  * Returns application date  and time format string
  * @returns {String} - application date time format
  */
FormatUtilManager.prototype.getApplicationDateTimeFormat = function(){
  var configurationManager = applicationManager.getConfigurationManager();
  return (configurationManager.getDateFormat()==null)?this.APPLICATION_DATE_TIME_FORMAT:configurationManager.getDateFormat() +", " +this.APPLICATION_TIME_FORMAT;
}; 

/**
  * Returns backend date and time format string
  * @returns {String} - backend date time format
  */
FormatUtilManager.prototype.getBackendDateTimeFormat = function(){
	return this.BACKEND_DATE_TIME_FORMAT;
}; 

/**
  * Returns application date format string
  * @returns {String} - application date format
  */ 
FormatUtilManager.prototype.getApplicationDateFormat = function(){
	var configurationManager = applicationManager.getConfigurationManager();
	return (configurationManager.getDateFormat() == null) ? this.APPLICATION_DATE_FORMAT : configurationManager.getDateFormat();
}; 



/**
  * Returns backend date format string
  * @returns {String} - backend date format
  */
FormatUtilManager.prototype.getBackendDateFormat = function(){
	return this.BACKEND_DATE_FORMAT;	
}; 

/**
  * Returns application time format string
  * @returns {String} - application time format
  */
FormatUtilManager.prototype.getApplicationTimeFormat = function(){
	return this.Application_TIME_FORMAT;	
}; 

/**
  * Helper function and property on Date class 
  * @param {Date} dateObj - a date object to format
  * @param {String} formatString - required formatString
  * @returns {String} - formated date string
  */
FormatUtilManager.prototype.getFormatedDateString = function(dateObj,formatString){
  var configurationManager = applicationManager.getConfigurationManager();
  if(configurationManager.getUTCDateFormattingFlag() === true){
    if(dateObj)return dateObj.format(formatString);
    return "";
  }
  return dateObj;
};

/**
* Helper function to get the date format required to set to kony cal widget.
*/
FormatUtilManager.prototype.getDateFormat = function() {
        var configurationManager = applicationManager.getConfigurationManager();
        var dateFormat = (configurationManager.getDateFormat() === null) ? this.APPLICATION_DATE_FORMAT : configurationManager.getDateFormat();
        var result = "";

        function getValue(text) {
            if (text == "m") {
                return "MM";
            } else if (text == "d") {
                return "DD";
            } else if (text == "y") {
                return "YY";
            } else if (text == "Y") {
                return "YYYY";
            }
        };
        result = getValue(dateFormat[0]) + dateFormat[1] + getValue(dateFormat[2]) + dateFormat[3] + getValue(dateFormat[4]);
        return result;
    };
FormatUtilManager.prototype.getFormattedCalendarDate = function(date)
{
    var forUtility=applicationManager.getFormatUtilManager();
    if(!kony.sdk.isNullOrUndefined(date))
    {
      var selDate = new Date(date);
      return forUtility.getFormatedDateString(selDate,forUtility.getApplicationDateFormat());
    }
	return date;
};
// date format function
FormatUtilManager.prototype.getFormattedSelectedDate = function(selDate){
 var date = selDate.getDate()<10 ? "0"+selDate.getDate() : selDate.getDate();
 var month = (selDate.getMonth()+1)<10 ? "0"+(selDate.getMonth()+1) : (selDate.getMonth()+1);
 var year = selDate.getFullYear();
  return month+"/"+date+"/"+year;
};
   
FormatUtilManager.prototype.getLocaleDateFormat = function()
{     
  var dummy = 'MM/DD/YYYY';
  var locale = kony.i18n.getCurrentLocale();
  locale=locale.toLowerCase();
  locale=locale.replace("_","-");
  if (this.selectedDate === '') {
    if(locale=="en-us" || locale=="en"){
      dummy = 'MM/DD/YYYY';
    }
    else if(locale=="en-gb" || locale === "fr-fr" || locale=="es-es"){
      dummy = 'DD/MM/YYYY';
    }
    else if(locale=="de-de"){
      dummy = 'DD.MM.YYYY';
    }
    else if(locale=="sv-se"){
      dummy = 'YYYY-DD-MM';
    }
  }        
  return dummy;
};
   
FormatUtilManager.prototype.getDateObjectFromCalendarString = function(dateString,format)
{
  try {
    var configurationManager = applicationManager.getConfigurationManager();
    var finalDateTime = null;
    if (dateString) {
      var formattype = format.toUpperCase();
      var yyyyIndex = formattype.indexOf("YYYY");
      var mmIndex = formattype.indexOf("MM");
      var ddIndex = formattype.indexOf("DD");
      var hhIndex = formattype.indexOf("HH");
      var minIndex = formattype.indexOf("MM", mmIndex + 1);
      var ssIndex = formattype.indexOf("SS");
      if (yyyyIndex > -1 && mmIndex > -1 && ddIndex > -1) {
        var newdd = parseInt(dateString.substr(ddIndex, 2), 10);
        var newmm = parseInt(dateString.substr(mmIndex, 2), 10);
        var newyyyy = parseInt(dateString.substr(yyyyIndex, 4), 10);
        if (newdd && (0 < newdd && newdd <= 31) && (newmm && (0 < newmm && newmm <= 12)) && (newyyyy && 0 <= newyyyy)) {
          finalDateTime = new Date(Date.UTC(newyyyy, newmm - 1, newdd, 0, 0, 0, 0));
        }

        var newTime = hhIndex > -1 ? dateString.substr(hhIndex, 2) : null;
        newTime = newTime ? parseInt(newTime, 10) : null;
        if (newTime && newTime < 24) {
          finalDateTime = finalDateTime ? finalDateTime.setHours(newTime, 0, 0) : null;
          finalDateTime = new Date(finalDateTime);
        }
        var newmin = minIndex > -1 ? dateString.substr(minIndex, 2) : null;
        newmin = newmin ? parseInt(newmin, 10) : null;
        if (newmin) {
          finalDateTime = finalDateTime ? finalDateTime.setMinutes(newmin) : null;
          finalDateTime = new Date(finalDateTime);
        }
        var newss = ssIndex > -1 ? dateString.substr(ssIndex, 4) : null;
        newss = newss ? parseInt(newss, 10) : null;
        if (newss) {
          finalDateTime = finalDateTime ? finalDateTime.setSeconds(newss) : null;
          finalDateTime = new Date(finalDateTime);
        }
      }
      var formatUtilManager = applicationManager.getFormatUtilManager();
      dateString = finalDateTime.toString();
      if(dateString.lastIndexOf(':') != -1)
      {
        dateString = dateString.substring(0,dateString.lastIndexOf(':')+3);
      }
      finalDateTime = formatUtilManager.convertDateToCurrentTimeZone(dateString);
      return finalDateTime; 
    }
  } catch (err) {
    kony.print("Error in ISO date formatting -->" + err);
  }
};

/**
  * returns date object from given date string
  * @param {String} dateString - a date string
  * @param {String} format - format of date 
  * @returns {Date} - date object
  */
FormatUtilManager.prototype.getDateObjectfromString = function(dateString, format) {
  try {
    var configurationManager = applicationManager.getConfigurationManager();
    if(configurationManager.getUTCDateFormattingFlag() === true){
      var finalDateTime = null;
      if (dateString) {
        var formatUTC = "YYYY-MM-DDThh:mm:ss.SSSZ";//ISO date time format
        var formattype = formatUTC.toUpperCase();
        var yyyyIndex = formattype.indexOf("YYYY");
        var mmIndex = formattype.indexOf("MM");
        var ddIndex = formattype.indexOf("DD");
        var hhIndex = formattype.indexOf("HH");
        var minIndex = formattype.indexOf("MM", mmIndex + 1);
        var ssIndex = formattype.indexOf("SS");
        if (yyyyIndex > -1 && mmIndex > -1 && ddIndex > -1) {
          var newdd = parseInt(dateString.substr(ddIndex, 2), 10);
          var newmm = parseInt(dateString.substr(mmIndex, 2), 10);
          var newyyyy = parseInt(dateString.substr(yyyyIndex, 4), 10);
          if (newdd && (0 < newdd && newdd <= 31) && (newmm && (0 < newmm && newmm <= 12)) && (newyyyy && 0 <= newyyyy)) {
            finalDateTime = new Date(Date.UTC(newyyyy, newmm - 1, newdd, 0, 0, 0, 0));
          }

          var newTime = hhIndex > -1 ? dateString.substr(hhIndex, 2) : null;
          newTime = newTime ? parseInt(newTime, 10) : null;
          if (newTime && newTime < 24) {
            finalDateTime = finalDateTime ? finalDateTime.setHours(newTime, 0, 0) : null;
            finalDateTime = new Date(finalDateTime);
          }
          var newmin = minIndex > -1 ? dateString.substr(minIndex, 2) : null;
          newmin = newmin ? parseInt(newmin, 10) : null;
          if (newmin) {
            finalDateTime = finalDateTime ? finalDateTime.setMinutes(newmin) : null;
            finalDateTime = new Date(finalDateTime);
          }
          var newss = ssIndex > -1 ? dateString.substr(ssIndex, 4) : null;
          newss = newss ? parseInt(newss, 10) : null;
          if (newss) {
            finalDateTime = finalDateTime ? finalDateTime.setSeconds(newss) : null;
            finalDateTime = new Date(finalDateTime);
          }
        }
      }
      var formatUtilManager = applicationManager.getFormatUtilManager();
      dateString = finalDateTime.toString();
      if(dateString.lastIndexOf(':') != -1)
      {
        dateString = dateString.substring(0,dateString.lastIndexOf(':')+3);
      }
      finalDateTime = formatUtilManager.convertDateToCurrentTimeZone(dateString);
      return finalDateTime; 
    }else{
      return dateString;//Date string is passed as is in case date received is not in utc format
    }
  } catch (err) {
    kony.print("Error in ISO date formatting -->" + err);
  }
};

/**
  * Formats given amount
  * @param {String} amount - amount string to format
  * @returns {String} - formated amount with seperator
  */
FormatUtilManager.prototype.formatAmount = function(amount){
	if(amount === null || amount === undefined || isNaN(amount)) {
		return;
	}
	var configurationManager = applicationManager.getConfigurationManager();
	var locale = configurationManager.getLocale().split("_").join("-");
	return new Intl.NumberFormat(locale, {minimumFractionDigits : 2}).format(amount);
};

/**
  * Extract the currency symbol
  * @param {String} currencySymbolCode - indicates the currency symbol code
  * @returns {String} - returns the currency symbol
  */
FormatUtilManager.prototype.getCurrencySymbol = function(currencySymbolCode) {
	var configurationManager = applicationManager.getConfigurationManager();
	if (currencySymbolCode && !configurationManager.getBackEndCurencySymbolFlag()){
		if(configurationManager.currencyCode[currencySymbolCode]) {
				return configurationManager.currencyCode[currencySymbolCode];
		}
		else{
				return currencySymbolCode;
		}
	} else {
		return configurationManager.getCurrencyCode();
	}
}

/**
  * Formats and appends currency symbol to given amount
	* @param {String} amount - amount string to format
	* @param {String} currencySymbolCode - indicates the currency symbol code
  * @returns {String} - formated and currency symbol appended
  */
FormatUtilManager.prototype.formatAmountandAppendCurrencySymbol = function(amount, currencySymbolCode){
    if(kony.sdk.isNullOrUndefined(amount)){
      amount="0.00";
    }
	var formatedAmount = this.formatAmount(amount);
	var currencySymbol = this.getCurrencySymbol(currencySymbolCode);
  	return formatedAmount[0] === '-' ? ('-' + currencySymbol + formatedAmount.split('-')[1]): currencySymbol + formatedAmount;
};

/**
  * Appends the currency symbol to the amount 
  * @member of  FormatUtilManager 
	* @param {String} amount - amount string to format
	* @param {String} currencySymbolCode - indicates the currency symbol code
  * @returns {String} - amount with appended currency code
  */
FormatUtilManager.prototype.appendCurrencySymbol = function(amount, currencySymbolCode){
	var configurationManager = applicationManager.getConfigurationManager();
	var currencySymbol = this.getCurrencySymbol(currencySymbolCode);
	return amount[0] === '-' ? ('-' + currencySymbol + amount.split('-')[1]): currencySymbol + amount;
};


/**
  * Returns date and time stamp 
  * @returns {String} - timeStamp for current date and time
  */
FormatUtilManager.prototype.getTimeStamp = function(){
	return new Date().format(this.APPLICATION_DATE_TIME_FORMAT);
};

/**
  * Returns list of uppercasemonths with give 
  * @param {String} - year(optional -> if not given it will consider current year)
  * @returns {String} - list of months with appended years
  */
FormatUtilManager.prototype.getYearAppendedPreviousMonths =function(year){
	var date = new Date();
	var longMonthsUpperCase= ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];

	var m = 12;
	if(year== null || year== undefined || year == date.getFullYear())m= date.getMonth();
  	var y = year||date.getFullYear();
  	if(y>date.getFullYear()) m =0;
  	for(i=0;i<m;i++){
  	 longMonthsUpperCase[i]=longMonthsUpperCase[i]+" "+y;
  	}
	return longMonthsUpperCase.slice(0,m);
};

/**
  * Return weather given date is todays date or not
  * @param {Object} dateObj -  input date object.
  * @returns {boolean} - true if if the input date is today's date
  */
FormatUtilManager.prototype.isTodayDate = function(dateObj){
	var  today = new Date();
	if(today.getDate()=== dateObj.getDate() && today.getMonth()=== dateObj.getMonth() && today.getFullYear()=== dateObj.getFullYear()){
		return true;
	}	
	return false;
}; 

/**
  * Return date object with date set as noOfDays before the current date
  * @param {Number} noOfDays -  Number of days.
  * @returns {Object} - 
  */
FormatUtilManager.prototype.getPreviousDate = function(noOfDays){
var date = new Date();
return new Date(date.getFullYear(), date.getMonth(), date.getDate()-noOfDays);
};
/**
  * De-Formats given amount with or without given seperator 
  * @param {String} amountStr - Already formated amount 
  * @param {String} sep - if any is used other than default seperator (default  is ',')
  * @returns {String} - deformated amount
  */
FormatUtilManager.prototype.deFormatAmount = function(amountStr){
	amountStr = "" + amountStr;
	var configurationManager = applicationManager.getConfigurationManager();
	if(amountStr) {
		var isAlreadyDeformatted = (/^\d+(?:\.\d{1,2})?$/g).test(amountStr);
		if(!isAlreadyDeformatted) {
			if(amountStr.indexOf(configurationManager.getCurrencyCode()) !== -1) {
				amountStr = amountStr.split(configurationManager.getCurrencyCode()).join("").trim();
			}
			var locale = configurationManager.getLocale().split("_").join("-");
			var group = new Intl.NumberFormat(locale).format(1111).replace(/1/g, '');
			var decimal = new Intl.NumberFormat(locale).format(1.1).replace(/1/g, '');
			var reversedVal = amountStr.replace(new RegExp('\\' + group, 'g'), '');
			reversedVal = reversedVal.replace(new RegExp('\\' + decimal, 'g'), '.');
			return isNaN(reversedVal)?0:reversedVal;
		} else {
			return amountStr;
		}
	}
};
   
/**
	 * Get Decimal Seperator based on locale
	 * @returns {String} - decimal separator
	 */
	FormatUtilManager.prototype.getDecimalSeparator = function() {
		var locale = applicationManager.getConfigurationManager().getLocale().split("_").join("-");
		return new Intl.NumberFormat(locale).format(1.1).replace(/1/g, '');
	};    

/**
  * De-Formats and provides absolute value of given amount with or without given seperator 
  * @param {String} amountStr - Already formated amount 
  * @param {String} sep - if any is used other than default seperator (default  is ',')
  * @returns {String} - deformated and absolute value
  */
FormatUtilManager.prototype.deFormatAbsoluteAmount = function(amountStr,sep){
	var configurationManager = applicationManager.getConfigurationManager();
	if(sep==".") sep="\.";
	return amountStr.replace(configurationManager.getCurrencyCode(),"").replace((new RegExp(sep||",","g")),"").replace("-","");

};
/**
  * Function to Find difference between current date and a date
  * @param {Date} date format is yyyymmddhhmmss
*/
FormatUtilManager.prototype.getTimeDiferenceOfDate = function(date){
  var yyyy = date.substring(0, 4);
  var mon =  date.substring(4, 6);
  var dd = date.substring(6, 8);
  var hh =  date.substring(8, 10);
  var mm = date.substring(10, 12);
  var ss =  date.substring(12);
  var date1 = new Date(yyyy, parseInt(mon, 10) - 1, dd, hh, mm, ss);
  var date1_ms = date1.getTime();
  var dateTemp = new Date();
  var utcDate = dateTemp.getUTCDate();
  var utcMonth = dateTemp.getUTCMonth();
  var utcYear = dateTemp.getUTCFullYear();
  var utcHour = dateTemp.getUTCHours();
  var utcMins = dateTemp.getUTCMinutes();
  var utcSecs = dateTemp.getUTCSeconds();
  var date2 = new Date(utcYear, utcMonth, utcDate, utcHour, utcMins, utcSecs);
  var date2_ms = date2.getTime();
  var difference_ms = date2_ms - date1_ms;
  
  
  var one_year= 365*1000*60*60*24;
  var one_month= 30*1000*60*60*24;
  var one_day=1000*60*60*24;
  var one_hour=1000*60*60;
  var one_min = 1000*60;
  var one_sec = 1000;
  
  var timeDiff="just now";
  
  var yearDiff= difference_ms/one_year;
  var monthDiff= difference_ms/one_month;
  var daysDiff=difference_ms/one_day;
  var hoursDiff=difference_ms/one_hour;
  var minutesDiff=difference_ms/one_min;
  var secondsDiff=difference_ms/one_sec;

  
  if(Math.floor(yearDiff)>0){
		
		if(Math.floor(yearDiff)==1){
		timeDiff="year";
		}
		else{
		timeDiff="years";
		}
		
  return Math.floor(yearDiff)+" " + timeDiff + " ago";
  }
  else if(Math.floor(monthDiff)>0){
		
		if(Math.floor(monthDiff)==1){
		timeDiff="month";
		}
		else{
		timeDiff="months";
		}
		
  return Math.floor(monthDiff)+" " + timeDiff + " ago";
  }
  else if(Math.floor(daysDiff)>0){
		
		if(Math.floor(daysDiff)==1){
		timeDiff="day";
		}
		else{
		timeDiff="days";
		}
		
  return Math.floor(daysDiff)+" " + timeDiff + " ago";
  }
  else if(Math.floor(hoursDiff)>0){
		
		if(Math.floor(hoursDiff)==1){
		timeDiff="hour";
		}
		else{
		timeDiff="hours";
		}
		
  return Math.floor(hoursDiff)+" " + timeDiff + " ago";
  }
  else if(Math.floor(minutesDiff)>0){
		
		if(Math.floor(minutesDiff)==1){
		timeDiff="minute";
		}
		else{
		timeDiff="minutes";
		}
		
  return Math.floor(minutesDiff)+" " + timeDiff + " ago";
  }
  else if(Math.floor(secondsDiff)>0){
		
		if(Math.floor(secondsDiff)==1){
		timeDiff="second";
		}
		else{
		timeDiff="seconds";
		}
		
  return Math.floor(secondsDiff)+" " + timeDiff +" "+ " ago";
  }
  
  return timeDiff;
};
FormatUtilManager.prototype.convertDateToCurrentTimeZone = function(dateString){
  var finalDateString = dateString.split(".")[0].replace(/-/g,"/");
  var configManager = applicationManager.getConfigurationManager();
  var dtString = finalDateString+" "+configManager.getServerTimeZone();
  var currTimeZoneDate = new Date(dtString);
  return currTimeZoneDate;
};

  /**
  * Formats and provides the IBAN 
  * @param {String} IBAN - unformatted string
  * @returns {String} - Formatted IBAN
  */
   FormatUtilManager.prototype.formatIBAN = function(IBAN){
    var strippedString = IBAN.replace(/\s/g,'');
    strippedString = strippedString.replace(/ /g, '').replace(/(.{4})/g, '$1 ').trim();
    return strippedString;
  }; 
 
	/**
	 * Get Decimal Seperator based on locale
	 * @returns {String} - decimal separator
	 */
	FormatUtilManager.prototype.getDecimalSeparator = function() {
		var locale = applicationManager.getConfigurationManager().getLocale().split("_").join("-");
		return new Intl.NumberFormat(locale).format(1.1).replace(/1/g, '');
	};
	

	/**
  * Deformats and provides the IBAN 
  * @param {String} IBAN - formatted string
  * @returns {String} - deformatted IBAN
  */
 FormatUtilManager.prototype.deFormatIBAN = function(IBAN){
	return IBAN.split(' ').join('');
 }; 

return FormatUtilManager;
});