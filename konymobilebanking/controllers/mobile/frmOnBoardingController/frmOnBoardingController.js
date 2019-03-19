define({
    keypadString: '',
    currentInputModule: 'dob',
    selectedGender: -1,
    selectedMaritalStatus: -1,
    selectedYearsCurrentPosition: -1,
    selectedDependents: -1,
    selectedAnnualIncome: -1,
    selectedEmploymentType: -1,
    selectedAssets: -1,
    selectedExpenditure: -1,

    preShow: function () {
        this.showEnterPhoneNumber();
    },
    showEnterPhoneNumber: function () {
        var scope = this;
        this.keypadString='';
        this.currentInputModule = 'phonenumber';
        this.updateInputBullets();

        this.setHeaderData(null, function(){
            var ntf = new kony.mvc.Navigation("frmLogin");
            ntf.navigate();
        }, 'CANCEL', 'SIGN UP');
        this.showView("flxEnterPhoneNumber");
        this.showKeypad();

        this.view.btnVerifyPhoneNumber.onClick = function () {
            scope.showEnterEmail();
            scope.hideKeypad();
        }
    },
    showEnterEmail: function () {
        var scope = this;

        this.showView("flxEnterEmail");
        this.view.txtEnterEmail.setFocus(true);
        this.view.imgCheckbox.onTouchEnd = function(){
            if(scope.view.imgCheckbox.src ==="remeberme.png"){
                scope.view.imgCheckbox.src = "remembermetick.png";
            }else{
                scope.view.imgCheckbox.src = "remeberme.png";
            }
        }
        this.view.rtxAgreeTermsConditions.onTouchEnd = function () {
            scope.showTermsAndConditions();
        }
        this.view.btnContinueEmail.onClick = function () {
            scope.showEnterSecurityCode();
        }
    },
    showTermsAndConditions: function () {
        var scope = this;

        this.showView("flxTermsConditions");
        this.view.customHeaderTermsConditions.flxBack.onClick = function () {
            scope.closeTermsAndCondition();
        }
    },
    closeTermsAndCondition: function () {
        this.showView("flxEnterEmail");
    },
    showEnterSecurityCode: function () {
        var scope = this;
        this.keypadString='';
        this.currentInputModule = 'securitycode';
        this.updateInputBullets();

        scope.showView("flxEnterSecurityCode");
        scope.showKeypad();
        this.view.btnContinueSecurityCode.onClick = function () {
            scope.showEnterUsernamePassword();
        }
    },
    showEnterUsernamePassword: function () {
        var scope = this;

        this.hideKeypad();
        this.showView("flxUsernamePassword");
        this.view.txtUsername.setFocus(true);
        this.view.imgMaskUnmask.onTouchEnd = function(){
            if (scope.view.txtPassword.secureTextEntry == true) {
                scope.view.txtPassword.secureTextEntry = false;
                scope.view.imgMaskUnmask.src = "viewactive.png";
            } else {
                scope.view.txtPassword.secureTextEntry = true;
                scope.view.imgMaskUnmask.src = "viewicon.png";
            }
        }
        this.view.txtReEnterPassword.onTextChange = function(){
            if (scope.view.txtPassword.text === scope.view.txtReEnterPassword.text) {
                scope.view.imgPasswordsMatch.src = "greentick.png";
                scope.view.forceLayout();
            } else {
                scope.view.imgPasswordsMatch.src = "tickmark.png";
                scope.view.forceLayout();
            }
        }
        this.view.btnContinueUsernamePassword.onClick = function () {
            scope.showSelectProducts();
        }
    },
    showSelectProducts: function () {
        var scope = this;

        this.showView("flxSelectProducts");

        var data= [
            {
                "btnViewDetails": {
                    "text": "VIEW DETAILS"
                },
                "imgCheckbox": {
                    "src": "remeberme.png"
                },
                "lblProductInfo": {
                    "text": "A straightforward personal checking solution…"
                },
                "lblProductSubTitle": {
                    "text": "Checking Account"
                },
                "lblProductTitle": {
                    "text": "Classic Checking Account"
                }
            },
            {
                "btnViewDetails": {
                    "text": "VIEW DETAILS"
                },
                "imgCheckbox": {
                    "src": "remeberme.png"
                },
                "lblProductInfo": {
                    "text": "Interest earning account with higher balance req…"
                },
                "lblProductSubTitle": {
                    "text": "Checking Account"
                },
                "lblProductTitle": {
                    "text": "Interest Checking"
                }
            },
            {
                "btnViewDetails": {
                    "text": "VIEW DETAILS"
                },
                "imgCheckbox": {
                    "src": "remeberme.png"
                },
                "lblProductInfo": {
                    "text": "A simple personal savings account with low minim…"
                },
                "lblProductSubTitle": {
                    "text": "Savings Account"
                },
                "lblProductTitle": {
                    "text": "Regular Savings"
                }
            },
            {
                "btnViewDetails": {
                    "text": "VIEW DETAILS"
                },
                "imgCheckbox": {
                    "src": "remeberme.png"
                },
                "lblProductInfo": {
                    "text": "High Interest earning account with higher balance…"
                },
                "lblProductSubTitle": {
                    "text": "Savings Account"
                },
                "lblProductTitle": {
                    "text": "Premium Savings Account"
                }
            }
        ];
        for(var i = 0; i<data.length; i++){
            data[i].btnViewDetails.onClick = function(){
                scope.showProductDetails();
            }
            data[i].imgCheckbox.onTouchEnd = function(){
                if(data[this.view.segSelectProducts.id].imgCheckbox.src==="remeberme.png"){
                    data[this.view.segSelectProducts.id].imgCheckbox.src = "remembermetick.png";
                }else{
                    data[this.view.segSelectProducts.id].imgCheckbox.src = "remeberme.png";
                }
                scope.view.segSelectProducts.setData(data);
            }
        }
        this.view.segSelectProducts.setData(data);
        this.view.customHeaderSelectProducts.btnLeft.onClick = function () {
            scope.showLanding(true, 'Welcome John Bruce', '', 'CONTINUE', function () {
                scope.showSelectProducts();
            }, 'START NEW APPLICATION', function () {

            });
        }
        this.view.btnContinueSelectProducts.onClick = function () {
            scope.showViewPersonalInfo();
        }
    },
    showProductDetails: function () {
        var scope = this;

        this.showView("flxProductDetails");
        this.view.customHeaderProductDetails.flxBack.onClick = function () {
            scope.showSelectProducts();
        }
    },
    setHeaderData: function (backAction, cancelAction, cancelTitle, title) {
        this.view.customHeader.lblLocateUs.text = title;
        if(cancelAction!==null){
            this.view.customHeader.btnRight.onClick = cancelAction;
            this.view.customHeader.btnRight.isVisible = true;
            this.view.customHeader.btnRight.text = cancelTitle;
        }else{
            this.view.customHeader.btnRight.isVisible = false;
        }
        if(backAction!==null){
            this.view.customHeader.flxBack.onClick = backAction;
            this.view.customHeader.flxBack.isVisible = true;
        }else{
            this.view.customHeader.flxBack.isVisible = false;
        }
    },
    setProgress: function (progress) {

    },
    showView: function (viewName) {
        this.view.flxLanding.isVisible = false;
        this.view.flxTermsConditions.isVisible = false;
        this.view.flxResult.isVisible = false;
        this.view.flxSignature.isVisible = false;
        this.view.flxSelectProducts.isVisible = false;
        this.view.flxProductDetails.isVisible = false;
        this.view.flxPersonalInfo.isVisible = false;
        this.view.flxSearchAddress.isVisible = false;
        this.view.flxEnterPhoneNumber.isVisible = false;
        this.view.flxEnterEmail.isVisible = false;
        this.view.flxUsernamePassword.isVisible = false;
        this.view.flxSecurityQuestions.isVisible = false;
        this.view.flxEnterSecurityCode.isVisible = false;
        this.view.flxEnterSSN.isVisible = false;
        this.view.flxKeypad.isVisible = false;

        this.view[viewName].isVisible = true;
    },
    showKeypad: function () {
        this.view.flxKeypad.isVisible = true;
    },
    hideKeypad: function () {
        this.view.flxKeypad.isVisible = false;
    },
    showLanding: function (showProgress, title, subTitle, btnOneText, btnOneAction, btnTwoText, btnTwoAction) {
        this.showView("flxLanding");

        if (showProgress) {
            this.view.flxProgressLanding.isVisible = true;
        } else {
            this.view.flxProgressLanding.isVisible = false;
        }

        this.view.lblLandingTitle.text = title;
        if (subTitle == '') {
            this.view.lblLandingSubtitle.isVisible = false;
        } else {
            this.view.lblLandingSubtitle.isVisible = true;
            this.view.lblLandingSubtitle.text = subTitle;
        }
        this.view.btnLandingOne.text = btnOneText;
        this.view.btnLandingOne.onClick = btnOneAction;
        this.view.btnLandingTwo.text = btnTwoText;
        this.view.btnLandingTwo.onClick = btnTwoAction;
    },
    showResult: function (isSuccess, title, subTitle, btnContinueAction, btnCancelAction, btnCallNowAction) {
        this.showView("flxResult");

        if (isSuccess) {
            this.view.imgResult.src = "confirmation.png";
        } else {
            this.view.imgResult.src = "error.png";
        }
        this.view.rtxTitle.text = title;
        this.view.lblSubTitle.text = subTitle;
        if (subTitle == '') {
            this.view.lblSubTitle.isVisible = false;
        } else {
            this.view.lblSubTitle.isVisible = true;
        }

        if (btnContinueAction != null) {
            this.view.btnContinueResult.onClick = btnContinueAction;
            this.view.btnContinueResult.isVisible = true;
        } else {
            this.view.btnContinueResult.isVisible = false
        }
        if (btnCancelAction != null) {
            this.view.btnCancelResult.onClick = btnCancelAction;
            this.view.btnCancelResult.isVisible = true;
        } else {
            this.view.btnCancelResult.isVisible = false;
        }
        if (btnCallNowAction != null) {
            this.view.flxCallNow.onClick = btnCallNowAction();
            this.view.flxCallNow.isVisible = true;
        } else {
            this.view.flxCallNow.isVisible = false;
        }
    },
    showEnterPersonalInfoView: function (viewName, headerTitle, backAction, continueAction) {
        var scope = this;

        this.view.flxEnterPersonalInfoHeader.isVisible = false;
        this.view.flxFirstLastName.isVisible = false;
        this.view.flxEmploymentInfo.isVisible = false;
        this.view.flxSpouseName.isVisible = false;
        this.view.flxDependents.isVisible = false;
        this.view.flxDOB.isVisible = false;
        this.view.flxResidentialAddress.isVisible = false;
        this.view.flxDocuments.isVisible = false;

        this.view[viewName].isVisible = true;
        if(viewName==="flxDocuments"){
            this.view.btnContinueEnterPersonalInfo.isVisible = false;
        }if(viewName==="flxResidentialAddress"){
            this.view.btnContinueEnterPersonalInfo.isVisible = false;
        }

        this.view.lblEnterPersonalInfoHeader.text = headerTitle;
        if (headerTitle === '') {
            this.view.flxEnterPersonalInfoHeader.isVisible = false;
        } else {
            this.view.flxEnterPersonalInfoHeader.isVisible = true;
        }
        this.view.customHeaderPersonalInfo.flxBack.onClick = backAction;
        if (continueAction !== null) {
            this.view.btnContinueEnterPersonalInfo.onClick = continueAction;
            this.view.btnContinueEnterPersonalInfo.isVisible = true;
        }else{
            this.view.btnContinueEnterPersonalInfo.isVisible = false;
        }
    },
    showViewPersonalInfo: function () {
        var scope = this;

        this.showView("flxPersonalInfo");
        this.view.flxEnterPersonalInfo.isVisible = false;
        this.view.flxResidentialAddress.isVisible = false;
        this.view.flxViewPersonalInfo.isVisible = true;
        this.view.btnContinuePersonalInfo.isVisible = true;
        this.view.btnChangeIDPersonalInfo.isVisible = true;

        this.view.btnEditPersonalInfo.onClick = function () {
            scope.showEnterPersonalInfo();
        }
    },
    showEnterPersonalInfo: function () {
        this.showView("flxPersonalInfo");
        this.view.flxViewPersonalInfo.isVisible = false;
        this.view.flxEnterPersonalInfo.isVisible = true;
        this.view.btnContinuePersonalInfo.isVisible = false;
        this.view.btnChangeIDPersonalInfo.isVisible = false;
        this.showEnterPersonalInfoFirstLastName();
    },
    setEnterPersonalInfoSegmentData: function (data) {
        this.view.segDependents.setData(data);
    },
    setEnterPersonalInfoSegmentIndex: function (indexType, value) {
        var scope = this;
        var setSelectedIndex = {
            'gender': function () {
                scope.selectedGender = value;
            },
            'maritalStatus': function () {
                scope.selectedMaritalStatus = value;
            },
            'yearsCurrentPosition': function () {
                scope.selectedYearsCurrentPosition = value;
            },
            'dependents': function () {
                scope.selectedDependents = value;
            },
            'annualIncome': function () {
                scope.selectedAnnualIncome = value;
            },
            'employmentType': function () {
                scope.selectedEmploymentType = value;
            },
            'assets': function () {
                scope.selectedAssets = value;
            },
            'expenditure': function () {
                scope.selectedExpenditure = value;
            }
        };
        setSelectedIndex[indexType]();
    },
    showEnterPersonalInfoFirstLastName: function () {
        var scope = this;
        this.view.txtFirstName.setFocus(true);
        this.showEnterPersonalInfoView("flxFirstLastName", '', function () {
            scope.showViewPersonalInfo();
        }, function () {
            scope.showEnterPersonalInfoDOB();
        });
    },
    showEnterPersonalInfoDOB: function () {
        var scope = this;
        this.keypadString='';
        this.currentInputModule = 'dob';
        this.updateInputBullets();

        this.showKeypad();
        this.showEnterPersonalInfoView("flxDOB", 'Enter your Date of Birth', function () {
            scope.showEnterPersonalInfoFirstLastName();
            scope.hideKeypad();
        }, function () {
            scope.showEnterPersonalInfoGender();
            scope.hideKeypad();
        });
    },
    showEnterPersonalInfoGender: function () {
        var scope = this;
        var data = [{
            "btnOption": {
                "text": "Male"
            }
        }, {
            "btnOption": {
                "text": "Female"
            }
        }];
        for (var i = 0; i < data.length; i++) {
            data[i].btnOption.skin = "sknBtnOnBoardingOptionsInActive";
            data[i].btnOption.onClick = function () {
                scope.setEnterPersonalInfoSegmentIndex("gender", scope.view.segDependents.selectedIndex[1]);
                scope.showEnterPersonalInfoResidentialAddress();
            }
        }
        if (this.selectedGender !== -1) {
            data[this.selectedGender].btnOption.skin = "sknBtnOnBoardingOptionsActive";
        }
        scope.view.segDependents.data = data;
        this.showEnterPersonalInfoView("flxDependents", 'Select your Gender', function () {
            scope.showEnterPersonalInfoDOB();
        }, null);
    },
    showEnterPersonalInfoResidentialAddress: function () {
        var scope = this;

        this.view.btnContinueEnterPersonalInfo.isVisible = false;
        this.view.txtSearchResidentialAddress.onTouchEnd = function () {
            scope.showSearchAddress();
        }
        this.view.btnContinueResidentialAddress.onClick = function () {
            scope.showEnterPersonalInfoMaritalStatus();
        }
        this.showEnterPersonalInfoView("flxResidentialAddress", 'Enter your residential address', function () {
            scope.showEnterPersonalInfoGender();
        }, null);
    },
    showSearchAddress: function () {
        var scope = this;

        var data = [
            {
                "lblAddress": {
                    "text": "2211 Oberlin Avenur, Orlando, FL, United States"
                },
                "flxSeparator":{
                    "isVisible": false
                }
            },
            {
                "lblAddress": {
                    "text": "2211 Oberlin Avenur Trail, Orlando, FL, United States United States"
                }
            },
            {
                "lblAddress": {
                    "text": "2211 Oberlin Avenur, Orlando, FL, United States"
                }
            }
        ];
        this.view.segAddresses.setData(data);
        this.view.flxPersonalInfo.isVisible = false;
        this.view.flxSearchAddress.isVisible = true;
        this.view.btnCancelSearchAddress.onClick = function () {
            scope.view.flxSearchAddress.isVisible = false;
            scope.view.flxPersonalInfo.isVisible = true;
            scope.showEnterPersonalInfoResidentialAddress();
        }
    },
    showEnterPersonalInfoMaritalStatus: function () {
        var scope = this;
        var data = [{
            "btnOption": {
                "text": "Single"
            }
        }, {
            "btnOption": {
                "text": "Married"
            }
        }, {
            "btnOption": {
                "text": "Widowed"
            }
        }, {
            "btnOption": {
                "text": "Divorced"
            }
        }];
        for (var i = 0; i < data.length; i++) {
            data[i].btnOption.skin = "sknBtnOnBoardingOptionsInActive";
            data[i].btnOption.onClick = function () {
                scope.setEnterPersonalInfoSegmentIndex("maritalStatus", scope.view.segDependents.selectedIndex[1]);
                //Enter logic to show spose name
                if(scope.view.segDependents.selectedIndex[1]===1){
                    scope.showEnterPersonalInfoSpouseName();
                }else{
                    scope.showEnterPersonalInfoDependents();
                }
            }
        }
        if (this.selectedMaritalStatus !== -1) {
            data[this.selectedMaritalStatus].btnOption.skin = "sknBtnOnBoardingOptionsActive";
        }
        scope.view.segDependents.data = data;
        this.showEnterPersonalInfoView("flxDependents", 'Select your Marital Status', function () {
            scope.showEnterPersonalInfoResidentialAddress();
        }, null);
    },
    showEnterPersonalInfoSpouseName: function(){
        var scope = this;

        this.showEnterPersonalInfoView("flxSpouseName", 'Enter your spouse name', function(){
            scope.showEnterPersonalInfoMaritalStatus();
        }, function(){
            scope.showEnterPersonalInfoDependents();
        });
    },
    showEnterPersonalInfoDependents: function () {
        var scope = this;
        var data = [{
            "btnOption": {
                "text": "00"
            }
        }, {
            "btnOption": {
                "text": "01"
            }
        }, {
            "btnOption": {
                "text": "02"
            }
        }, {
            "btnOption": {
                "text": "03"
            }
        }];
        for (var i = 0; i < data.length; i++) {
            data[i].btnOption.skin = "sknBtnOnBoardingOptionsInActive";
            data[i].btnOption.onClick = function () {
                scope.setEnterPersonalInfoSegmentIndex("dependents", scope.view.segDependents.selectedIndex[1]);
                //Enter spouse name logic
                scope.showEnterPersonalInfoEmploymentType();
            }
        }
        if (this.selectedDependents !== -1) {
            data[this.selectedDependents].btnOption.skin = "sknBtnOnBoardingOptionsActive";
        }
        this.setEnterPersonalInfoSegmentData(data);
        this.showEnterPersonalInfoView("flxDependents", 'Number of Dependents', function () {
            scope.showEnterPersonalInfoMaritalStatus();
        }, null);
    },
    showEnterPersonalInfoEmploymentType: function () {
        var scope = this;
        var data = [{
            "btnOption": {
                "text": "Employed"
            }
        }, {
            "btnOption": {
                "text": "Unemployed"
            }
        }, {
            "btnOption": {
                "text": "Retired"
            }
        }, {
            "btnOption": {
                "text": "Student"
            }
        }];
        for (var i = 0; i < data.length; i++) {
            data[i].btnOption.skin = "sknBtnOnBoardingOptionsInActive";
            data[i].btnOption.onClick = function () {
                scope.setEnterPersonalInfoSegmentIndex("employmentType", scope.view.segDependents.selectedIndex[1]);
                //Enter employment type logic to show emp info
                if(scope.view.segDependents.selectedIndex[1]==1){
                    scope.showEmploymentInfo();
                }else{
                    scope.showEnterPersonalInfoYearsCurrentPosition();        
                }
            }
        }
        if (this.selectedEmploymentType !== -1) {
            data[this.selectedEmploymentType].btnOption.skin = "sknBtnOnBoardingOptionsActive";
        }
        scope.view.segDependents.data = data;
        this.showEnterPersonalInfoView("flxDependents", 'Select your employment type', function () {
            scope.showEnterPersonalInfoDependents();
        }, null);
    },
    showEmploymentInfo: function () {
        var scope = this;

        this.showEnterPersonalInfoView("flxEmploymentInfo", '', function () {
            scope.showEnterPersonalInfoDependents();
        }, function () {
            scope.showEnterPersonalInfoYearsCurrentPosition();
        });
    },
    showEnterPersonalInfoYearsCurrentPosition: function () {
        var scope = this;
        var data = [{
            "btnOption": {
                "text": "1year   -   2years"
            }
        }, {
            "btnOption": {
                "text": "2years   -   3years"
            }
        }, {
            "btnOption": {
                "text": "3years   -   4years"
            }
        }, {
            "btnOption": {
                "text": "4years   -   5years"
            }
        }, {
            "btnOption": {
                "text": "5years   -   6years"
            }
        }, {
            "btnOption": {
                "text": "6years   -   7years"
            }
        }, {
            "btnOption": {
                "text": "7years   -   8years"
            }
        }, {
            "btnOption": {
                "text": "8years   -   9years"
            }
        }];
        for (var i = 0; i < data.length; i++) {
            data[i].btnOption.skin = "sknBtnOnBoardingOptionsInActive";
            data[i].btnOption.onClick = function () {
                scope.setEnterPersonalInfoSegmentIndex("yearsCurrentPosition", scope.view.segDependents.selectedIndex[1]);
                scope.showEnterPersonalInfoAnnualIncome();
            }
        }
        if (this.selectedYearsCurrentPosition !== -1) {
            data[this.selectedYearsCurrentPosition].btnOption.skin = "sknBtnOnBoardingOptionsActive";
        }
        scope.view.segDependents.data = data;
        this.showEnterPersonalInfoView("flxDependents", 'Years at current position', function () {
            scope.showEnterPersonalInfoEmploymentType();
        }, null);
    },
    showEnterPersonalInfoAnnualIncome: function () {
        var scope = this;
        var data = [{
            "btnOption": {
                "text": "0  -   $25,000"
            }
        }, {
            "btnOption": {
                "text": "$25,000  -   $50,000"
            }
        }, {
            "btnOption": {
                "text": "$50,000  -   $100,000"
            }
        }, {
            "btnOption": {
                "text": "$100,000  -   $200,000"
            }
        }];
        for (var i = 0; i < data.length; i++) {
            data[i].btnOption.skin = "sknBtnOnBoardingOptionsInActive";
            data[i].btnOption.onClick = function () {
                scope.setEnterPersonalInfoSegmentIndex("annualIncome", scope.view.segDependents.selectedIndex[1]);
                //Enter spouse name logic
                scope.showEnterPersonalInfoAssets();
            }
        }
        if (this.selectedAnnualIncome !== -1) {
            data[this.selectedAnnualIncome].btnOption.skin = "sknBtnOnBoardingOptionsActive";
        }
        scope.view.segDependents.data = data;
        this.showEnterPersonalInfoView("flxDependents", 'What is your annual income before taxes?', function () {
            scope.showEnterPersonalInfoYearsCurrentPosition();
        }, null);
    },
    showEnterPersonalInfoAssets: function () {
        var scope = this;
        var data = [{
            "btnOption": {
                "text": "0  -   $25,000"
            }
        }, {
            "btnOption": {
                "text": "$25,000  -   $50,000"
            }
        }, {
            "btnOption": {
                "text": "$50,000  -   $100,000"
            }
        }, {
            "btnOption": {
                "text": "$100,000  -   $200,000"
            }
        }];
        for (var i = 0; i < data.length; i++) {
            data[i].btnOption.skin = "sknBtnOnBoardingOptionsInActive";
            data[i].btnOption.onClick = function () {
                scope.setEnterPersonalInfoSegmentIndex("assets", scope.view.segDependents.selectedIndex[1]);
                //Enter spouse name logic
                scope.showEnterPersonalInfoExpenditure();
            }
        }
        if (this.selectedAssets !== -1) {
            data[this.selectedAssets].btnOption.skin = "sknBtnOnBoardingOptionsActive";
        }
        scope.view.segDependents.data = data;
        this.showEnterPersonalInfoView("flxDependents", 'Value of the assets you own?', function () {
            scope.showEnterPersonalInfoAnnualIncome();
        }, null);
    },
    showEnterPersonalInfoExpenditure: function () {
        var scope = this;
        var data = [{
            "btnOption": {
                "text": "0  -   $25,000"
            }
        }, {
            "btnOption": {
                "text": "$25,000  -   $50,000"
            }
        }, {
            "btnOption": {
                "text": "$50,000  -   $100,000"
            }
        }, {
            "btnOption": {
                "text": "$100,000  -   $200,000"
            }
        }];
        for (var i = 0; i < data.length; i++) {
            data[i].btnOption.skin = "sknBtnOnBoardingOptionsInActive";
            data[i].btnOption.onClick = function () {
                scope.setEnterPersonalInfoSegmentIndex("expenditure", scope.view.segDependents.selectedIndex[1]);
                //Enter spouse name logic
                scope.showEnterPersonalInfoDocuments();
            }
        }
        if (this.selectedExpenditure !== -1) {
            data[this.selectedExpenditure].btnOption.skin = "sknBtnOnBoardingOptionsActive";
        }
        scope.view.segDependents.data = data;
        this.showEnterPersonalInfoView("flxDependents", 'Monthly expenditure', function () {
            scope.showEnterPersonalInfoAssets();
        }, null);
    },
    showEnterPersonalInfoDocuments: function () {
        var scope = this;

        this.view.flxAddressProof.onClick = function () {
            scope.showPopupDocuments();
        }
        this.view.flxEmploymentProof.onClick = function () {
            scope.showPopupDocuments();
        }
        this.view.flxIncomeProof.onClick = function () {
            scope.showPopupDocuments();
        }
        this.view.btnContinueDocuments.onClick = function () {
            scope.showSecurityQuestions();
        }
        this.view.btnSkipDocuments.onClick = function () {

        }
        this.showEnterPersonalInfoView("flxDocuments", '', function () {
            scope.showEnterPersonalInfoExpenditure();
        }, null);
    },
    showPopupDocuments: function () {
        var scope = this;
        this.view.flxPopupDocuments.isVisible = true;
        this.view.flxPopupDocuments.onClick = function () {
            scope.view.flxPopupDocuments.isVisible = false;
        }
        this.view.btnTakeAPicture.onClick = function () {

            scope.view.flxPopupDocuments.isVisible = false;
        }
        this.view.btnChooseFromGallery.onClick = function () {

            scope.view.flxPopupDocuments.isVisible = false;
        }
    },
    showSecurityQuestions: function () {
        var scope = this;

        this.showView("flxSecurityQuestions");
        this.setHeaderData(function(){
            scope.showEnterPersonalInfoDocuments();
        }, function(){
            var ntf = new kony.mvc.Navigation("frmLogin");
            ntf.navigate();
        }, 'LOGOUT', 'SECURITY QUESTIONS');
        this.view.btnContinueSecurityQuestions.onClick = function () {
            scope.showPopupFillingComplete();
        }
    },
    showPopupFillingComplete: function () {
        var scope = this;
        this.view.flxPopupFillingComplete.isVisible = true;
        this.view.btnCompleteCancel.onClick = function () {
            scope.view.flxPopupFillingComplete.isVisible = false;
        }
        this.view.btnCompleteContinue.onClick = function () {
            scope.view.flxPopupFillingComplete.isVisible = false;
            scope.showENterSSN();
        }
    },
    showENterSSN: function () {
        var scope = this;
        this.keypadString='';
        this.currentInputModule = 'ssn';
        this.updateInputBullets();

        this.setHeaderData(null, function(){
            var ntf = new kony.mvc.Navigation("frmLogin");
            ntf.navigate();
        }, 'LOGOUT', 'CREDIT CHECK');
        this.showView("flxEnterSSN");
        this.showKeypad();
        this.view.btnSSNReject.onClick = function () {

        }
        this.view.btnSSNAccept.onClick = function () {
            scope.showResult(true, 'Successfully verified','', function () {
                var ntf = new kony.mvc.Navigation("frmLogin");
                ntf.navigate();
            }, null, null);
        }
    },
    //KEYPAD OPS:
    updateInputBullets: function () {
        var scope = this;
        var updateBullets = {
            'phonenumber': function(){
                scope.updateInputBulletsOf('(___)___-____', "flxInputPhoneNumber");
            },
            'securitycode': function () {
                scope.updateInputBulletsOf('_____', "flxInputSecurityCode");
            },
            'ssn': function () {
                scope.updateInputBulletsOf('___-__-____', "flxInputSSN");
            },
            'dob': function () {
                scope.updateInputBulletsOf('MM/DD/YYYY', "flxDOB");
            }
        };
        updateBullets[this.currentInputModule]();
    },
    updateInputBulletsOf: function (dummyString, inputFlx) {
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
    setKeypadChar: function (char) {
        var scope = this;
        if (this.keypadString.length === 13 && this.currentInputModule === 'phonenumber') return;
        if (this.keypadString.length === 5 && this.currentInputModule === 'securitycode') return;
        if (this.keypadString.length === 11 && this.currentInputModule === 'ssn') return;
        if (this.keypadString.length === 10 && this.currentInputModule === 'dob') return;

        this.keypadString = this.keypadString + char;
        var manageString = {
            'phonenumber': function(){
                if(scope.keypadString.length===1){
                    scope.keypadString = '('+scope.keypadString;
                }else if(scope.keypadString.length===4){
                    scope.keypadString += ')';
                }else if(scope.keypadString.length===8){
                    scope.keypadString += '-';
                }
            },
            'securitycode': function(){

            },
            'ssn': function(){
                if(scope.keypadString.length===3||scope.keypadString.length===6){
                    scope.keypadString+='-';
                }
            },
            'dob': function(){
                if(scope.keypadString.length===2||scope.keypadString.length===5){
                    scope.keypadString+='/';
                }
            }
        };
        manageString[this.currentInputModule]();
        this.updateInputBullets();
    },
    clearKeypadChar: function () {
        var scope = this;
        if (this.keypadString.length === 1) {
            this.keypadString = '';
            this.updateInputBullets();
        }
        if (this.keypadString.length !== 0) {
            var manageString = {
                'phonenumber': function(){
                    if(scope.keypadString.length===2){
                        scope.keypadString = '';
                    }else if(scope.keypadString[scope.keypadString.length-1]===')'||scope.keypadString[scope.keypadString.length-1]==='-'){
                        scope.keypadString = scope.keypadString.substr(0, scope.keypadString.length-2);
                    }else{
                        scope.keypadString = scope.keypadString.substr(0, scope.keypadString.length-1);
                    }
                },
                'securitycode': function(){
                    scope.keypadString = scope.keypadString.substr(0, scope.keypadString.length-1);
                },
                'ssn': function(){
                    if(scope.keypadString[scope.keypadString.length-1]==='-'){
                        scope.keypadString = scope.keypadString.substr(0, scope.keypadString.length-2);
                    }else{
                        scope.keypadString = scope.keypadString.substr(0, scope.keypadString.length-1);
                    }
                },
                'dob': function(){
                    if(scope.keypadString[scope.keypadString.length-1]==='/'){
                        scope.keypadString = scope.keypadString.substr(0, scope.keypadString.length-2);
                    }else{
                        scope.keypadString = scope.keypadString.substr(0, scope.keypadString.length-1);
                    }
                }
            };
            manageString[this.currentInputModule]();
            
            this.updateInputBullets();
        }
    }
});