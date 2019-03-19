define({
    keypadString: '',
    currentInputModule: 'cvv',
    timerCounter: 0,
    onNavigate: function (obj) {
        if (obj === "forgotUsername") {
            this.showEnterSSN();
        } else if (obj === "forgotPassword") {
            this.showForgotMain();
        }
    },

    preShow: function () {
        this.view.flxPopup.setVisibility(false);
        if(kony.os.deviceInfo().name !== "iPhone"){
  		  this.view.flxHeader.isVisible = true;
   		}
   		else{
          this.view.flxHeader.isVisible = false;
        }
    },
    showForgotMain: function () {
        var scope = this;
        this.view.flxForgotMain.isVisible = true;
        this.view.flxEnterInfo.isVisible = false;
        this.view.flxKeypad.isVisible = false;
        this.view.flxCreatePassword.isVisible = false;

        this.view.lblUserName.text = "Hi! John Doe";
        this.view.rtxForgotInfo.text = "Please select the below verification method for security reasons";
        this.view.imgSelectCVV.src = "entercvvicon.png";
        this.view.rtxSelectCVV.text = "Enter <b>CVV Code</b> </br>of your Credit/debit card";
        this.view.flxSelectCVV.onClick = function(){
            scope.showEnterCVV();
        }
        this.view.imgSelectSecurityCode.src = "securitycode.png";
        this.view.rtxSelectSecurityCode.text = "Send <b>SECURITY CODE</b> to registered</br>Mobile Number 79XXXXXXX654";
        this.view.flxSelectSecurityCode.onClick = function(){
            scope.showEnterSecurityCode();
        }
    },
    showForgotOptions: function () {
        var scope = this;
        this.view.flxForgotMain.isVisible = true;
        this.view.flxEnterInfo.isVisible = false;
        this.view.flxKeypad.isVisible = false;
        this.view.flxCreatePassword.isVisible = false;

        this.view.lblUserName.text = "Welcome Back";
        this.view.rtxForgotInfo.text = "We found you with </br>username: <b>john.bailey</b>";
        this.view.imgSelectCVV.src = "loginicon.png";
        this.view.rtxSelectCVV.text = "Login as john.bailey";
        this.view.flxSelectCVV.onClick = function(){
          var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
          authModule.presentationController.commonFunctionForNavigation("frmLogin"); 
        }
        this.view.imgSelectSecurityCode.src = "resetpassword.png";
        this.view.rtxSelectSecurityCode.text = "Reset your password";
        this.view.flxSelectSecurityCode.onClick = function(){
            scope.showForgotMain();
        }
    },
    showEnterView: function (view, title, subtitle, resendAction, verifyAction, verifyActionText) {
        this.view.flxForgotMain.isVisible = false;
        this.view.flxEnterInfo.isVisible = true;
        this.view.flxKeypad.isVisible = true;
        this.view.flxCreatePassword.isVisible = false;

        this.view.flxEnterInfo.flxInputDOB.isVisible = false;
        this.view.flxEnterInfo.flxInputSecurityCode.isVisible = false;
        this.view.flxEnterInfo.flxInputCVV.isVisible = false;
        this.view.flxEnterInfo.flxInputSSN.isVisible = false;

        this.view.flxEnterInfo[view].isVisible = true;
        if (view === "flxInputSSN" || view === "flxInputDOB") {
            this.view.btnReSend.isVisible = false;
        }
        this.view.lblEnterInfoTitle.text = title;
        this.view.lblEnterInfoSubtitle.text = subtitle;
        this.view.btnReSend.onClick = resendAction;
        this.view.btnVerify.onClick = verifyAction;
        this.view.btnVerify.text = verifyActionText;
    },
    //CVV OPS:
    showEnterCVV: function () {
        var scope = this;
        this.keypadString = '';
        this.currentInputModule = 'cvv';
        this.updateInputBullets();

        this.showEnterView("flxInputCVV", "Enter CVV Number", "Please enter the CVV code of your credit/debit card", function () {
            alert('Resend action comes here.');
        }, function () {
            scope.showCreatePassword();
        }, "VERIFY");
    },
    //SECURITY CODE OPS:
    showEnterSecurityCode: function () {
        var scope = this;
        this.keypadString = '';
        this.currentInputModule = 'securitycode';
        this.updateInputBullets();

        this.showEnterView("flxInputSecurityCode", "Enter security code", "Please enter the 5 digit security code sent to your phone number 9XXXXXX876",
            function () {
                alert("Resend action comes here");
            },
            function () {
                scope.showCreatePassword();
            }, "VERIFY");
    },
    //SSN OPS:
    showEnterSSN: function () {
        var scope = this;
        this.keypadString = '';
        this.currentInputModule = 'ssn';
        this.updateInputBullets();
		var ssn = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Forgot.EnterSSNTitle");
        this.showEnterView("flxInputSSN", "Enter your information below to find you", ssn ,
            null,
            function () {
                scope.showEnterDOB();
            }, "NEXT");
    },
    //DOB OPS:
    showEnterDOB: function () {
        var scope = this;
        this.keypadString = '';
        this.currentInputModule = 'dob';
        this.updateInputBullets();

        this.showEnterView("flxInputDOB", "Enter your information below to find you", "Date of Birth (DOB)",
            null,
            function () {
                scope.showForgotOptions();
            }, "DONE");
    },
    //PASSWORD OPS:
    showCreatePassword: function () {
        this.view.flxCreatePassword.isVisible = true;
        this.view.flxForgotMain.isVisible = false;
        this.view.flxEnterInfo.isVisible = false;
        this.view.flxKeypad.isVisible = false;
        this.view.txtNewPassword.text = '';
        this.view.txtReEnterPassword.text = '';
        this.view.imgMaskUnmask.src = "viewicon.png";
        this.view.imgPasswordsMatch.src = "tickmark.png";
    },
    maskUnmaskPassword: function () {
        if (this.view.txtNewPassword.secureTextEntry === true) {
            this.view.txtNewPassword.secureTextEntry = false;
            this.view.imgMaskUnmask.src = "viewactive.png";
        } else {
            this.view.txtNewPassword.secureTextEntry = true;
            this.view.imgMaskUnmask.src = "viewicon.png";
        }
    },
    matchPasswords: function () {
        if (this.view.txtNewPassword.text === this.view.txtReEnterPassword.text) {
            this.view.imgPasswordsMatch.src = "greentick.png";
            this.view.forceLayout();
        } else {
            this.view.imgPasswordsMatch.src = "tickmark.png";
            this.view.forceLayout();
        }
    },
    updatePasswordAction: function () {
        if (this.view.imgPasswordsMatch.src === "greentick.png") {
            this.showPopupUpdatePasswordSuccessful();
        } else {
            //ERROR SCENARIO:
        }
    },

    //KEYPAD OPS:
    updateInputBullets: function () {
        var scope = this;
        var updateBullets = {
            'cvv': function () {
                scope.updateInputBulletsOf("flxInputCVV");
            },
            'securitycode': function () {
                scope.updateInputBulletsOf("flxInputSecurityCode");
            },
            'ssn': function () {
                scope.updateInputBulletsOf("flxInputSSN");
            },
            'dob': function () {
                scope.updateInputBulletsDOB("flxInputDOB");
            }
        };
        updateBullets[this.currentInputModule]();
    },
    updateInputBulletsDOB: function (inputFlx) {
        var dummyString = 'MM/DD/YYYY';
        if (this.keypadString.length === 3 || this.keypadString.length === 6) {
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
        } else if (this.keypadString.length === 2 || this.keypadString.length === 5) {
            this.keypadString = this.keypadString + '/';
        }

        var widgets = this.view[inputFlx].widgets();
        for (var i = 0; i < this.keypadString.length; i++) {
            widgets[i].skin = "sknLbl979797SSP60px";
            widgets[i].text = this.keypadString[i];
        }
        for (var i = this.keypadString.length; i < widgets.length; i++) {
            widgets[i].skin = "sknLble3e3e3SSP60px";
            widgets[i].text = dummyString[i];
        }
        this.view.forceLayout();
    },
    updateInputBulletsOf: function (inputFlx) {
        var widgets = this.view[inputFlx].widgets();
        for (var i = 0; i < this.keypadString.length; i++) {
            widgets[i].skin = "sknLbl979797SSP60px";
        }
        for (var i = this.keypadString.length; i < widgets.length - 1; i++) {
            widgets[i].skin = "sknLble3e3e3SSP60px";
        }
        this.view.forceLayout();
    },
    setKeypadChar: function (char) {
        if (this.keypadString.length === 3 && this.currentInputModule === 'cvv') return;
        if (this.keypadString.length === 5 && this.currentInputModule === 'securitycode') return;
        if (this.keypadString.length === 9 && this.currentInputModule === 'ssn') return;
        if (this.keypadString.length === 10 && this.currentInputModule === 'dob') return;

        this.keypadString = this.keypadString + char;
        this.updateInputBullets();
    },
    clearKeypadChar: function () {
        if (this.keypadString.length === 1) {
            this.keypadString = '';
            this.updateInputBullets();
        }
        if (this.keypadString.length !== 0) {
            if (this.keypadString[this.keypadString.length - 1] == '/') {
                this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            }
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            this.updateInputBullets();
        }
    },
    showPopupUpdatePasswordSuccessful: function () {
        var scopeObj = this;
        this.timerCounter = parseInt(this.timerCounter) + 1;
        var timerId = "timerPopupPwdSuccess" + this.timerCounter;
        this.view.flxPopup.skin = "sknFlx43ce6e";
        this.view.customPopup.imgPopup.src = "confirmation.png";
        this.view.customPopup.lblPopup.text = kony.i18n.getLocalizedString("kony.mb.login.pwdUpdateMsg");
        this.view.flxPopup.setVisibility(true);
        kony.timer.schedule(timerId, function () {
          scopeObj.view.flxPopup.setVisibility(false);
          var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
          authModule.presentationController.commonFunctionForNavigation("frmLogin"); 
        }, 1.5, false);
    },
});