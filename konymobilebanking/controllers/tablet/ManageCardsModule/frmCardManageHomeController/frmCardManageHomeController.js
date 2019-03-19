define({
    timerCounter: 0,
    dialPadNo: "",
    lengthOfDialNo: 0,
    cardList: [],
    cardListImages: [],
    cardListIndex: 0,
    cardListLastIndex: 0,
    cardListTotalCards: 0,
    cardListWidth: 0,
    cardListCards: [],
    cardListStartScale: 0.83,
    cardListScaleGrowth: 0.2,
    cardListNumbers: [],
    currCardNumber: "",
    popUpMsg: '',
    currentAction: '',
    keypadString: '',
    prevSelection: null,
    KEYPAD_MAX_LENGTH: 5,

    objToSend: {},
    init: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardManageHomeController : init ####");
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    preShow: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardManageHomeController : preShow ####");

            applicationManager.getPresentationUtility().showLoadingScreen();
          	this.initHeaderActions();	

            this.view.lblNoCards.text = kony.i18n.getLocalizedString("kony.mb.cardManage.FetchingCards");
            this.view.flxNoCards.onClick = function() {
                kony.print("Clicked on Flx No Crads");
            };
            this.view.btnCallCustomerCare.onClick = this.callCustomerCare;
            this.view.flxActiveOrInactive.onClick = this.flxActiveOrInactiveOnClick;
            this.view.flxReplaceCard.onClick = this.flxReplaceCardOnClick;
            this.view.flxReportStolenOrLost.onClick = this.flxReportStolenOrLostOnClick;
            this.view.flxCancelCard.onClick = this.flxCancelCardOnClick;
            this.view.flxChangePin.onClick = this.flxChangePinOnClick;
            this.view.btnContinue.onClick = this.onReasonContinue.bind(this);
            this.view.btnSendPin.onClick = this.performPinChangeDebit;
            this.view.btnContinuePinChange.onClick = this.updateNewPinCreditCard;
            this.view.btnSubmit.onClick = this.updateReplaceLostCancelCard;
            this.view.btnCancelOptions.onClick = this.resetScreenUI;
            this.view.btnEditAddress.onClick = this.navigateToBillingAddress;
          	this.view.btnAddNickname.onClick = this.navigateToEditNickname;
            this.view.btnEditNickname.onClick = this.navigateToEditNickname;
            this.view.btnCallCstmrCare.onClick = this.callCustomerCare;
          	this.view.btnCallCustomerCareFinal.onClick = this.callCustomerCare;
            this.view.flxCardNoToggleConfirmation.onClick = this.toggleOnClickOfView.bind(this);
          
          	this.resetScreenUI();
            //this.view.customHeader.flxSearch.onClick = this.navigateToCardMngDetails;
            this.view.btnManageTravelPlans.onClick = this.navigateToTravelManageHome;
            this.cardDetailsPreShow();
   
            var configManager = applicationManager.getConfigurationManager();
            var MenuHandler = applicationManager.getMenuHandler();
            MenuHandler.setUpHamburgerForForm(this, configManager.constants.MENUCARDMANAGEMENT);
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            manageCardsModule.presentationController.getCardsList(this.cardsFetchSuccess.bind(this), this.cardsFetchFailure.bind(this));

            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().logFormName(currentForm);
        } catch (err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    toggleOnClickOfView: function() {
        var cardData = this.getCardData();
        if (this.view.imgCardNoToggleConfirmation.src === "view.png") {
            this.view.imgCardNoToggleConfirmation.src = "viewactive.png";
            this.view.lblCardNoValueConfirmation.text = cardData.cardNumber; //"1122  3424  6273  2390";     
        } else {
            this.view.imgCardNoToggleConfirmation.src = "view.png";
            this.view.lblCardNoValueConfirmation.text = applicationManager.getDataProcessorUtility().maskAccountNumber(cardData.cardNumber); //"XXXX  XXXX  XXXX  2390";  
        }
        this.view.forceLayout();
    },
    setSecurityHeaderName: function(i18nkey) {
        this.view.lblSecurityCode.text = kony.i18n.getLocalizedString(i18nkey);
    },
    setCardDetailsConfirmHeaderName: function(i18nkey) {
        this.view.lblReplaceCardHeader.text = kony.i18n.getLocalizedString(i18nkey);
    },
    callCustomerCare: function() {
        kony.phone.dial("000-0000-0021-000-0000-0023");
    },
    setViewForSelectedOption: function(selected, unselected1, unselected2, unselected3, unselected4) {
        var blueSkin = "sknLblBg0424242P24pxBTab";
        var lightSkin = "sknLblBg0424242P24pxLTab";
        this.view[selected].skin = blueSkin;
        this.view[unselected1].skin = lightSkin;
        this.view[unselected2].skin = lightSkin;
        this.view[unselected3].skin = lightSkin;
        this.view[unselected4].skin = lightSkin;
    },
    setLeftViewForLockUnlock: function() {
        this.setViewForSelectedOption("lblActiveOrInactive", "lblChangePin", "lblReplaceCard", "lblReport", "lblCancelCard");
    },
    setLeftViewForReplaceCard: function() {
        this.setViewForSelectedOption("lblReplaceCard", "lblActiveOrInactive", "lblChangePin", "lblReport", "lblCancelCard");

    },
    setLeftForStolenCard: function() {
        this.setViewForSelectedOption("lblReport", "lblActiveOrInactive", "lblChangePin", "lblReplaceCard", "lblCancelCard");

    },
    setLeftViewForChangePin: function() {
        this.setViewForSelectedOption("lblChangePin", "lblActiveOrInactive", "lblReplaceCard", "lblReport", "lblCancelCard");

    },
    setLeftViewForCancelCard: function() {
        this.setViewForSelectedOption("lblCancelCard", "lblActiveOrInactive", "lblChangePin", "lblReplaceCard", "lblReport");
    },
    resetLeftContainerToDefault: function() {
        var defaultSkin = "sknLblBg0424242P24pxTab";
        this.view.lblActiveOrInactive.skin = defaultSkin;
        this.view.lblChangePin.skin = defaultSkin;
        this.view.lblReplaceCard.skin = defaultSkin;
        this.view.lblReport.skin = defaultSkin;
        this.view.lblCancelCard.skin = defaultSkin;
    },
    setCardView: function(cardStatus) {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardManageHomeController : setCardView ####");

            if (kony.sdk.isNullOrUndefined(cardStatus)) {
                this.view.customPopup.imgPopup.left = "37%";
                applicationManager.getDataProcessorUtility().showToastMessageError(this, kony.i18n.getLocalizedString("kony.mb.cardManage.errorFetchCards"));
                applicationManager.getPresentationUtility().dismissLoadingScreen();
            }
            var navManager = applicationManager.getNavigationManager();
            var frmData = navManager.getCustomInfo("frmCardManageHome");
            this.resetLeftContainerToDefault();
            this.prevSelection = null;
            if (!kony.sdk.isNullOrUndefined(frmData.cardData)) {
                if (frmData.cardData.view == "pinChange") {
                    this.view.customPopup.imgPopup.left = "10%";
                    if (kony.sdk.isNullOrUndefined(frmData.cardData.type)) {
                        this.view.customPopup.imgPopup.left = "32%";
                        this.popupMsg = kony.i18n.getLocalizedString("kony.mb.cardManage.pinChangeMsg");
                    } else if (frmData.cardData.type == "email") {

                        this.popupMsg = kony.i18n.getLocalizedString("kony.mb.cardManage.pinChangeMsgEmail");
                    } else if (frmData.cardData.type == "phoneNo") {
                        this.popupMsg = kony.i18n.getLocalizedString("kony.mb.cardManage.pinChangeMsgPhone");
                    } else if (frmData.cardData.type == "postalAddress") {
                        this.popupMsg = kony.i18n.getLocalizedString("kony.mb.cardManage.pinChangeMsgAddress");
                    }
                }

                frmData.cardData = null;
                navManager.setCustomInfo("frmCardManageHome", frmData);
                this.setViewForPinChange();
            } else {
                if (cardStatus === "Inactive") {
                    this.view.customPopup.imgPopup.left = "32%";
                    this.popupMsg = kony.i18n.getLocalizedString("kony.mb.cardManage.setInActiveMsg");
                    this.setCardInactive();
                } else if (cardStatus === "Active") {
                    this.view.customPopup.imgPopup.left = "30%";
                    this.popupMsg = kony.i18n.getLocalizedString("kony.mb.cardManage.setActiveMsg");
                    this.setCardActive();
                } else if (cardStatus === "pinChange") {
                    this.view.customPopup.imgPopup.left = "30%";
                    this.popupMsg = kony.i18n.getLocalizedString("kony.mb.cardManage.pinChangeMsg");
                    this.setViewForPinChange();
                } else if (cardStatus === "Replaced") {
                    this.view.customPopup.imgPopup.left = "13%";
                    this.popupMsg = kony.i18n.getLocalizedString("kony.tab.cardManage.replaceCard");
                    this.setViewForReplaceCard();
                } else if (cardStatus === "Reported Lost") {
                    this.view.customPopup.imgPopup.left = "30%";
                    this.popupMsg = kony.i18n.getLocalizedString("kony.mb.cardManage.reportMsg");
                    this.setViewForStolenCard();
                } else if (cardStatus === "Cancelled") {
                    this.view.customPopup.imgPopup.left = "37%";
                    this.popupMsg = kony.i18n.getLocalizedString("kony.mb.cardManage.cancelMsg");
                    this.setViewForCancelCard();
                }
            }
        } catch (err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    hideMainAndShowCLR: function() {
        this.view.flxCLRContainer.isVisible = true;
        this.view.flxInfoContainer.isVisible = false;
    },
    hideCLRAndShowMain: function() {
        this.view.flxCLRContainer.isVisible = false;
        this.view.flxInfoContainer.isVisible = true;
    },

    cardsFetchSuccess: function(response) {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardManageHomeController : cardsFetchSuccess ####");
            this.keypadString = '';
            this.updateInputBullets("flxInputSecurityCode");
            this.showCardDetailsContainer();
            if (!kony.sdk.isNullOrUndefined(response) && response.length > 0) {
                this.cardList = response;
                this.cardListTotalCards = response.length;
                this.carouselAnimationPreShow();
                this.getAndSetCards();
                this.resetLeftContainerToDefault();
                var manageCards = applicationManager.getCardsManager();
                kony.print("CardsObject in frmManageHomeController: " + JSON.stringify(manageCards.getCards));
            } else {
                applicationManager.getPresentationUtility().dismissLoadingScreen();
                this.cardListTotalCards = 0;
                this.view.lblNoCards.text = kony.i18n.getLocalizedString("kony.mb.cardManage.NoCards");
                this.view.flxNoCards.isVisible = true;
                //this.view.customHeader.flxSearch.isVisible = false;
            }
        } catch (err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },

    cardsFetchFailure: function(response) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardManageHomeController : cardsFetchFailure ####");
            this.keypadString = '';
            this.updateInputBullets("flxInputSecurityCode");
            if (response["isServerUnreachable"])
                applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", response);
            else {
                this.view.customPopup.imgPopup.left = "37%";
                applicationManager.getDataProcessorUtility().showToastMessageError(this, kony.i18n.getLocalizedString("kony.mb.cardManage.errorFetchCards"));
            }
        } catch (err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    handleUpdatedData: function(options) {
        var data = options.data;
        var isSuccess = data["isUpdate" + options.name + "Success"];
        var i18Text =  isSuccess ? options.i18SuccesText : options.i18ErrorText;
        this.popupMsg = applicationManager.getPresentationUtility().getStringFromi18n(i18Text);
      
        this[isSuccess ? "showPopupSuccess" : "showPopupError"]();

        data["isUpdate" + options.name + "Success"] = false;
        data["isUpdate" + options.name + "Error"] = false;

        var navManager = applicationManager.getNavigationManager();
        navManager.setCustomInfo("frmCardMng" + options.name, data);
    },
    postShow: function() {
        var navManager = applicationManager.getNavigationManager();
        var nickNameData = navManager.getCustomInfo("frmCardMngNickname");
        var addressData = navManager.getCustomInfo("frmCardMngBillAddress");
      
        var isNickNameUpdated = nickNameData && 
            (nickNameData.isUpdateNicknameSuccess || nickNameData.isUpdateNicknameError);

        if (isNickNameUpdated) {
            this.handleUpdatedData({
              data: nickNameData,
              name: "Nickname",
              i18SuccesText: "kony.mb.Settings.updatedNickName",
              i18ErrorText: "kony.mb.An.error.ccurred.while.making.the.request."
            });
        }
      
        var isAddressUpdated = addressData && 
            (addressData.isUpdateBillAddressSuccess || addressData.isUpdateBillAddressError);

        if (isAddressUpdated) {
              this.handleUpdatedData({
                data: addressData,
                name: "BillAddress",
                i18SuccesText: "kony.mb.pm.successfullyupdatedaddress",
                i18ErrorText: "kony.mb.An.error.ccurred.while.making.the.request."
              });
         }
    },
    getAndSetCards: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardManageHomeController : getAndSetCards ####");

            var navManager = applicationManager.getNavigationManager();
            var frmData = navManager.getCustomInfo("frmCardManageHome");
            var isMainScreen = false;
            if (!kony.sdk.isNullOrUndefined(frmData)) {
                isMainScreen = frmData.isMainScreen;
            }
            this.cardListGetCards();
            this.cardListScrollIndex();
            if (!kony.sdk.isNullOrUndefined(isMainScreen)) {
                this.popupMsg = "";
                navManager.setCustomInfo("frmCardManageHome", {
                    "isMainScreen": undefined
                });
                if (isMainScreen === true) {
                    this.cardListIndex = 0;
                }
            }
            if (this.popupMsg !== '') {
                this.showPopupSuccess();
            }
            this.view.flxNoCards.isVisible = false;
            this.view.forceLayout();
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        } catch (err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },

    setDataForCards: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardManageHomeController : setDataForCards ####");

            this.cardListImages = [
                "atmcardred.png",
                "atmcardblue.png",
                "atmcardgreen.png",
                "atmcardred.png",
                "atmcardblue.png",
                "atmcardgreen.png",
                "atmcardblue.png",
                "atmcardgreen.png",
            ];
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },

    carouselAnimationPreShow: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardManageHomeController : carouselAnimationPreShow ####");

            var no_of_cards = this.cardListTotalCards;
            var no_of_widgets = this.view.flxCardList.widgets().length;
            if (no_of_cards !== no_of_widgets) {
                this.cardListIndex = 0;
                this.removeExtraClonedCards();
                this.cardListCloneCards();
            }
            this.view.flxCardList.showFadingEdges = false;
            this.view.flxCardList.scrollToWidget(this.view.flxCardList.widgets()[this.cardListIndex]);
            this.setDataForCards();
            this.setCarouselAnimationActions();
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },

    removeExtraClonedCards: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardManageHomeController : removeExtraClonedCards ####");

            var totalCards = this.view.flxCardList.widgets().length;
            for (var i = totalCards - 1; i > 0; i--) {
                this.view.flxCardList.removeAt(i);
            }
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },

    cardListCloneCards: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardManageHomeController : cardListCloneCards ####");

            for (var i = 1; i < this.cardListTotalCards; i++) {
                var newPage = this.view.flxCard.clone("newPage" + i);
                this.view.flxCardList.add(newPage);
            }    
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },

    setCarouselAnimationActions: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardManageHomeController : setCarouselAnimationActions ####");

            var scopeObj = this;
            this.view.flxCardList.onScrollStart = function() {
                scopeObj.cardListScrollStart();
            };
            this.view.flxCardList.onScrolling = function() {
                scopeObj.cardListScroll();
            };
            this.view.flxCardList.onScrollEnd = function() {
                scopeObj.cardListScrollStop();
            };
            this.view.postShow = function() {
                scopeObj.postShow();
            };
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    cardListGetCards: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardManageHomeController : cardListGetCards ####");

            kony.print("-- cardListGetCards Start --");
            this.cardListCards = this.view.flxCardList.widgets();
            this.cardListWidth = this.view.flxCard.frame.width;
            kony.print("-- cardListWidth = " + this.cardListWidth);
            kony.print("-- cardListGetCards End --");
            this.cardListSetCards();
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },

    cardListSetCards: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardManageHomeController : cardListSetCards ####");

            this.lastSetIndex = this.clone(this.cardListIndex);
            var cardListStartTransform = kony.ui.makeAffineTransform();
            cardListStartTransform.scale(this.cardListStartScale, this.cardListStartScale);
            var growEnd = this.cardListStartScale + this.cardListScaleGrowth;
            var cardListEndTransform = kony.ui.makeAffineTransform();
            cardListEndTransform.scale(growEnd, growEnd);
            for (i = 0; i < this.cardListCards.length; i++) {
                this.cardListCards[i].transform = cardListStartTransform;
                var cardListChildWidgets = this.cardListCards[i].widgets();

                var cardNumbers = cardListChildWidgets[1].widgets();
                var cardNumber4 = cardNumbers[3].widgets();
                cardNumber4[0].text = this.cardList[i]['cardNumber'].slice(-4);
                this.cardListCards[i].opacity = 0.5;
                if (this.cardList[i]['cardType'].trim() == "Debit") {
                    cardListChildWidgets[0].src = "atmcardred.png";
                } else if (this.cardList[i]['cardType'].trim() == "Credit") {
                    cardListChildWidgets[0].src = "atmcardblue.png";
                } else {
                    cardListChildWidgets[0].src = "atmcardgreen.png";
                }
            }
            this.cardListCards[this.cardListIndex].opacity = 1;
            this.cardListCards[this.cardListIndex].transform = cardListEndTransform;
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },

    cardListScrollStart: function() {
        this.cardListLastIndex = this.cardListIndex;
    },

    cardListScroll: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardManageHomeController : cardListScroll ####");
            var scrollPosX = 0;
            if(!kony.sdk.isNullOrUndefined(this.view.flxCardList.contentOffsetMeasured))
				scrollPosX = this.view.flxCardList.contentOffsetMeasured.x;
            var cardListFactor = [];
            var cardListScaleFactor = [];
            var cardListScale = [];
            var cardListScrollTransform = [];
            var cardListOpacity = [];
            for (var i = 0; i < this.cardListCards.length; i++) {
                cardListFactor[i] = this.roundNum(Math.min(2, (Math.max(0, (scrollPosX - (this.cardListWidth * (i - 1)))) / (this.cardListWidth))), 3);
                kony.print("-- cardListFactor " + i + " " + cardListFactor[i]);
                if (cardListFactor[i] < 1) {
                    cardListScaleFactor[i] = cardListFactor[i];
                } else {
                    cardListScaleFactor[i] = this.roundNum((2 - cardListFactor[i]), 3);
                }
                kony.print("-- cardListScaleFactor " + i + " " + cardListScaleFactor[i]);
                cardListScale[i] = (this.cardListStartScale + (cardListScaleFactor[i] * (this.cardListScaleGrowth)));
    
                cardListScrollTransform[i] = kony.ui.makeAffineTransform();
                cardListScrollTransform[i].scale(cardListScale[i], cardListScale[i]);
                this.cardListCards[i].transform = cardListScrollTransform[i];
                cardListOpacity[i] = Math.max(0.5, (cardListScaleFactor[i]));
                this.cardListCards[i].opacity = cardListOpacity[i];
            }
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },

    cardListScrollStop: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardManageHomeController : cardListScrollStop ####");


            var scrollPosX = parseInt(this.view.flxCardList.contentOffsetMeasured.x);
            var cardFrameWidth = parseInt(this.view.flxCardList.frame.width);
            this.cardListIndex = parseInt((scrollPosX + 1) / cardFrameWidth);
            this.cardListScrollIndex();

            kony.print("-- cardListLastIndex = " + this.cardListLastIndex);
            kony.print("-- cardListIndex = " + this.cardListIndex);
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    setCurrentCardDetails: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardManageHomeController : setCurrentCardDetails ####");


            var formatUtil = applicationManager.getFormatUtilManager();
            this.view.lblAvailBal.text = kony.i18n.getLocalizedString("kony.mb.accdetails.creditLimit");
            this.view.lblAvailBalValue.text = ((this.cardList[this.cardListIndex].creditLimit != null) ? (formatUtil.formatAmountandAppendCurrencySymbol(this.cardList[this.cardListIndex].creditLimit)) : "$0.00");
            if (this.cardList[this.cardListIndex].cardType == "Debit") {
                this.view.lblAvailBal.text = kony.i18n.getLocalizedString("kony.mb.cardManage.withdrawlLimit");
                this.view.lblAvailBalValue.text = ((this.cardList[this.cardListIndex].withdrawlLimit != null) ? (formatUtil.formatAmountandAppendCurrencySymbol(this.cardList[this.cardListIndex].withdrawlLimit)) : "$0.00");
            }
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    cardListScrollIndex: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardManageHomeController : cardListScrollIndex ####");

            kony.print("-- cardListScrollIndex Start --");
            this.currCardNumber = this.cardList[this.cardListIndex]['cardNumber'];
            var cardStatus = this.cardList[this.cardListIndex]['cardStatus'];
            this.view.imgCardNoToggle.src = "view.png";
            this.setCurrentCardDetails();
            this.setCardView(cardStatus);
            this.setCardDetails(this.cardList[this.cardListIndex]);
            this.showCardDetailsContainer();
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    roundNum: function(num, decimals) {
        try {

            var roundedNumber = Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
            return roundedNumber.toFixed(decimals);
        } catch (exception) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    flxActiveOrInactiveOnClick: function() {
        try {
            this.setLeftViewForLockUnlock();
            var cardDetails = {
                "cardId": this.getCurrentCardDetails().cardId
            };
            if (kony.sdk.isNullOrUndefined(this.prevSelection)) {
                this.prevSelection = this.view.imgActiveOrInactive.src;
                if (this.view.imgActiveOrInactive.src == "unlocked.png") {

                    cardDetails.view = "lockCard";
                    this.setSecurityHeaderName("kony.mb.cardManage.lockCard");
                    this.view.imgActiveOrInactive.src = "locked.png";
                    this.setCardInactive();

                } else {
                    cardDetails.view = "unlockCard";
                    this.setSecurityHeaderName("kony.mb.cardManage.unlockCard");
                    this.view.imgActiveOrInactive.src = "unlocked.png";
                }
                this.onSecurityPinProceedClick(cardDetails);
                this.currentAction = "lockUnlock";
            } else {
                this.showCardDetailsContainer();
                this.resetLeftContainerToDefault();
                if (this.prevSelection == "unlocked.png") {
                    this.view.imgActiveOrInactive.src = "unlocked.png";
                    this.setCardActive();
                } else {
                    this.view.imgActiveOrInactive.src = "locked.png";
                    this.setCardInactive();
                }
                this.prevSelection = null;
            }

        } catch (err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    showCardDetailsContainer: function() {
        this.view.flxCardDetailsContainer.isVisible = true;
        this.view.flxEnterPinContainer.isVisible = false;
        this.view.flxReasonsContainer.isVisible = false;
        this.view.flxSendPinViaContainer.isVisible = false;
        this.view.flxNewPinContainer.isVisible = false;
        this.view.flxReplacePinContainer.isVisible = false;
        this.view.flxPinChangeFinalContainer.isVisible = false;
    },
    showReplacePinContainer: function() {
        this.view.flxCardDetailsContainer.isVisible = false;
        this.view.flxEnterPinContainer.isVisible = false;
        this.view.flxReasonsContainer.isVisible = false;
        this.view.flxSendPinViaContainer.isVisible = false;
        this.view.flxNewPinContainer.isVisible = false;
        this.view.flxReplacePinContainer.isVisible = true;
        this.view.flxPinChangeFinalContainer.isVisible = false;
    },
    showSecurityCodeContainer: function() {
        this.view.flxCardDetailsContainer.isVisible = false;
        this.view.flxEnterPinContainer.isVisible = true;
        this.view.flxReasonsContainer.isVisible = false;
        this.view.flxSendPinViaContainer.isVisible = false;
        this.view.flxNewPinContainer.isVisible = false;
        this.view.flxReplacePinContainer.isVisible = false;
        this.view.flxPinChangeFinalContainer.isVisible = false;
    },
    showReasonsContainer: function() {
        this.view.flxCardDetailsContainer.isVisible = false;
        this.view.flxEnterPinContainer.isVisible = false;
        this.view.flxReasonsContainer.isVisible = true;
        this.view.flxSendPinViaContainer.isVisible = false;
        this.view.flxNewPinContainer.isVisible = false;
        this.view.flxReplacePinContainer.isVisible = false;
        this.view.flxPinChangeFinalContainer.isVisible = false;
    },
    showPinSendOptionsContainer: function(cardData) {
        this.view.flxCardDetailsContainer.isVisible = false;
        this.view.flxEnterPinContainer.isVisible = false;
        this.view.flxReasonsContainer.isVisible = false;
        this.view.flxPinChangeFinalContainer.isVisible = false;
        var cardType = cardData.cardType;
        if (cardType == 'Credit') {
            this.setUpdateNewPinActions();
            this.view.flxNewPinContainer.isVisible = true;
            this.view.flxSendPinViaContainer.isVisible = false;
        } else if (cardType == "Debit") {
            this.view.flxNewPinContainer.isVisible = false;
            this.view.flxSendPinViaContainer.isVisible = true;
        }
        this.view.flxReplacePinContainer.isVisible = false;
    },
    showPinChangeFinalContainer: function(type) {
        this.view.lblEmail.isVisible = false;
        this.view.txtEmail.isVisible = false;
        this.view.lblPhoneNumber.isVisible = false;
        this.view.txtPhoneNumber.isVisible = false;
        this.view.lblAddress.isVisible = false;
        this.view.txtPostalAddress.isVisible = false;
        if (type == "Email") {
          this.view.lblEmail.isVisible = true;
          this.view.txtEmail.isVisible = true;
        } 
        else if (type == "Phone Number") {
          this.view.lblPhoneNumber.isVisible = true;
          this.view.txtPhoneNumber.isVisible = true;
        } 
        else if (type == "Postal Address") {
          this.view.lblAddress.isVisible = true;
          this.view.txtPostalAddress.isVisible = true;
        }
      this.view.forceLayout();
        this.view.flxCardDetailsContainer.isVisible = false;
        this.view.flxEnterPinContainer.isVisible = false;
        this.view.flxPinChangeFinalContainer.isVisible = true;
        this.view.flxReasonsContainer.isVisible = false;
        this.view.flxSendPinViaContainer.isVisible = false;
        this.view.flxNewPinContainer.isVisible = false;
        this.view.flxReplacePinContainer.isVisible = false;
    },

    setReasonForPinChange: function() {
        this.view.flxReasonsPinChange.isVisible = true;
        this.view.flxReasonsReplacingCard.isVisible = false;
        this.view.flxReasonsCancelCard.isVisible = false;
        this.view.flxReasonStolenCard.isVisible = false;
    },
    setReasonsForReplaceCard: function() {
        this.view.flxReasonsPinChange.isVisible = false;
        this.view.flxReasonsReplacingCard.isVisible = true;
        this.view.flxReasonsCancelCard.isVisible = false;
        this.view.flxReasonStolenCard.isVisible = false;
    },
    setReasonsForStolenCard: function() {
        this.view.flxReasonsPinChange.isVisible = false;
        this.view.flxReasonsReplacingCard.isVisible = false;
        this.view.flxReasonsCancelCard.isVisible = false;
        this.view.flxReasonStolenCard.isVisible = true;
    },
    setReasonsForCancelCard: function() {
        this.view.flxReasonsPinChange.isVisible = false;
        this.view.flxReasonsReplacingCard.isVisible = false;
        this.view.flxReasonsCancelCard.isVisible = true;
        this.view.flxReasonStolenCard.isVisible = false;
    },
    validatePin: function() {
        //Dummy function for validating pin
    },
    onSecurityPinProceedClick: function(cardData) {
        this.showSecurityCodeContainer();
        this.validatePin();
        this.keypadString = '';
        this.updateInputBullets("flxInputSecurityCode");
        this.incompleteSecurityCodeView();
        this.cardList[this.cardListIndex].view = cardData.view;
        if (cardData.view == "unlockCard") {
            this.setFunctionalityForUnlockCard(cardData);
        } else if (cardData.view == "lockCard") {
            this.setFunctionalityForLockCard(cardData);
        } else if (cardData.view == "pinChange") {
            this.setFunctionalityForPinChange(cardData);
        } else if (cardData.view == "replaceCard") {
            this.setFunctionalityForReplaceCard(cardData);
        } else if (cardData.view == "lostCard") {
            this.setFunctionalityForLostCard(cardData);
        } else if (cardData.view == "cancelCard") {
            this.setFunctionalityForCancelCard(cardData);
        }
    },
    setFunctionalityForLostCard: function(cardDetails) {
        var scope = this;
        this.cardList[this.cardListIndex].Action = "Report Lost";
        this.view.btnProceed.onClick = function() {
            scope.setReasonsForStolenCard();
            scope.showReasonsContainer();
        };
    },
    setFunctionalityForCancelCard: function(cardDetails) {
        var scope = this;
        this.cardList[this.cardListIndex].Action = "Cancel";
        this.view.btnProceed.onClick = function() {
            scope.setReasonsForCancelCard();
            scope.showReasonsContainer();
        };
    },
    setFunctionalityForReplaceCard: function(cardDetails) {
        var scope = this;
        this.cardList[this.cardListIndex].Action = "Replace";
        this.view.btnProceed.onClick = function() {
            scope.setReasonsForReplaceCard();
            scope.showReasonsContainer();
        };
    },
    setFunctionalityForPinChange: function(cardDetails) {
        var scope = this;
        this.cardList[this.cardListIndex].Action = "PinChange";
        this.view.btnProceed.onClick = function() {
            scope.setReasonForPinChange();
            scope.showReasonsContainer();
        };
    },
    setFunctionalityForLockCard: function(cardData) {
        var scope = this;
        this.cardList[this.cardListIndex].Action = "Deactivate";
        cardData.Action = "Deactivate";
        cardData.Reason = "Lock";
        this.view.btnProceed.onClick = function() {
            scope.lockUnlockCard(cardData);
        };
    },
    setFunctionalityForUnlockCard: function(cardData) {
        var scope = this;
        this.cardList[this.cardListIndex].Action = "Activate";
        cardData.Action = "Activate";
        cardData.Reason = "Unlock";
        this.view.btnProceed.onClick = function() {

            scope.lockUnlockCard(cardData);
        };
    },

    lockUnlockCard: function(cardData) {
        try {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            manageCardsModule.presentationController.updateCardData(cardData, this.lockUnlockSuccess.bind(this), this.lockUnlockFailure.bind(this));
        } catch (err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    lockUnlockSuccess: function(response) {
        try {
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            this.prevSelection = null;
            manageCardsModule.presentationController.getCardsList(this.cardsFetchSuccess.bind(this), this.cardsFetchFailure.bind(this));
        } catch (err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    lockUnlockFailure: function(response) {
        try {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            if (response["isServerUnreachable"])
                applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", response);
            else {
                this.view.customPopup.imgPopup.left = "35%";
                applicationManager.getDataProcessorUtility().showToastMessageError(this, kony.i18n.getLocalizedString("kony.mb.cardManage.failLockUnlock"));
            }
        } catch (err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    setCardInactive: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardManageHomeController : setCardInactive ####");
            this.view.flxInfoContainer.setVisibility(true);
            this.view.flxCLRContainer.setVisibility(false);
            this.view.flxOptionsContainer.setVisibility(true);
            this.view.flxChangePin.setVisibility(false);
            this.view.flxSeperator3.setVisibility(false);
            this.view.flxReplaceCard.setVisibility(false);
            this.view.flxSeperator4.setVisibility(false);
            this.view.flxReportStolenOrLost.setVisibility(false);
            this.view.flxSeperator5.setVisibility(false);
            this.view.flxCancelCard.setVisibility(false);
            this.view.flxSeperator6.setVisibility(false);
            this.view.flxCustomerCare.setVisibility(false);
            this.view.imgActiveOrInactive.src = "locked.png";
            this.view.lblActiveOrInactive.text = kony.i18n.getLocalizedString("kony.mb.cardManage.cardActive");


            this.view.flxAccDetailContainer.isVisible = false;
            this.view.flxUnlockCardContainer.isVisible = true;
            this.view.flxActiveOrInactive.forceLayout();
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    setCardActive: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardManageHomeController : setCardActive ####");
            this.view.flxInfoContainer.setVisibility(true);
            this.view.flxCLRContainer.setVisibility(false);
            this.view.flxOptionsContainer.setVisibility(true);
            this.view.flxChangePin.setVisibility(true);
            this.view.flxSeperator3.setVisibility(true);
            this.view.flxReplaceCard.setVisibility(true);
            this.view.flxSeperator4.setVisibility(true);
            this.view.flxReportStolenOrLost.setVisibility(true);
            this.view.flxSeperator5.setVisibility(true);
            this.view.flxCancelCard.setVisibility(true);
            this.view.flxSeperator6.setVisibility(false);
            this.view.flxCustomerCare.setVisibility(false);
            this.view.lblActiveOrInactive.text = kony.i18n.getLocalizedString("kony.mb.cardManage.cardActive");
            this.view.imgActiveOrInactive.src = "unlocked.png";

            this.view.flxAccDetailContainer.isVisible = true;
            this.view.flxUnlockCardContainer.isVisible = false;
            this.view.flxActiveOrInactive.forceLayout();
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    showPopupSuccess: function() {
        applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, this.popupMsg);
    },
    showPopupError: function() {
        applicationManager.getDataProcessorUtility().showToastMessageError(this, this.popupMsg);
    },

    flxChangePinOnClick: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardManageHomeController : flxChangePinOnClick ####");
            this.setLeftViewForChangePin();
            this.setSecurityHeaderName("kony.mb.cardManage.requestingPinChange");
            var cardDetails = {
                "cardId": this.getCurrentCardDetails().cardId,
                "view": "pinChange",
                "cardType": this.getCurrentCardDetails().cardType
            };
            this.onSecurityPinProceedClick(cardDetails);
        } catch (err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },

    flxReplaceCardOnClick: function() {
        try {
            var currentCardDetails = this.getCurrentCardDetails();
            var bankName = applicationManager.getUserPreferencesManager().getBankName();
            this.setLeftViewForReplaceCard();
            this.setSecurityHeaderName("kony.tab.cardManage.replacingCard");
            var cardDetails = {
                "cardId": this.getCurrentCardDetails().cardId,
                "view": "replaceCard",
                "cardNumber": currentCardDetails.cardNumber,
                "cardHolderName": currentCardDetails.cardHolderName,
                "expiryDate": currentCardDetails.expiryDate,
                "issuerName": bankName,
                "cardType": currentCardDetails.cardType
            };
            this.onSecurityPinProceedClick(cardDetails);
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    flxReportStolenOrLostOnClick: function() {
        try {
            var currentCardDetails = this.getCurrentCardDetails();
            var bankName = applicationManager.getUserPreferencesManager().getBankName();
            this.setLeftForStolenCard();
            this.setSecurityHeaderName("kony.mb.cardManage.stolenCreditCard");

            var cardDetails = {
                "cardId": this.getCurrentCardDetails().cardId,
                "view": "lostCard",
                "cardNumber": currentCardDetails.cardNumber,
                "cardHolderName": currentCardDetails.cardHolderName,
                "expiryDate": currentCardDetails.expiryDate,
                "issuerName": bankName,
                "cardType": currentCardDetails.cardType
            };
            this.onSecurityPinProceedClick(cardDetails);
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    flxCancelCardOnClick: function() {
        try {
            this.setSecurityHeaderName("kony.mb.cardManage.cancelCard");
            var currentCardDetails = this.getCurrentCardDetails();
            var bankName = applicationManager.getUserPreferencesManager().getBankName();
            this.setLeftViewForCancelCard();
            var cardDetails = {
                "cardId": currentCardDetails.cardId,
                "view": "cancelCard",
                "cardNumber": currentCardDetails.cardNumber,
                "cardHolderName": currentCardDetails.cardHolderName,
                "expiryDate": currentCardDetails.expiryDate,
                "issuerName": bankName,
                "cardType": currentCardDetails.cardType
            };

            this.onSecurityPinProceedClick(cardDetails);
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    setViewForPinChange: function() {
        this.view.flxCLRContainer.setVisibility(false);
        this.view.flxInfoContainer.setVisibility(true);
        this.view.flxOptionsContainer.setVisibility(true);
        this.view.flxCustomerCare.setVisibility(false);
        this.clearConfirmPin();
        this.view.txtNewPin.text = "";
        this.view.txtCurrentPinValue = "";
    },
    setViewForReplaceCard: function() {
        this.view.flxCLRContainer.setVisibility(false);
        this.view.flxInfoContainer.setVisibility(true);
        this.view.flxOptionsContainer.setVisibility(true);
        this.view.flxCustomerCare.setVisibility(false);
    },
    setViewForStolenCard: function() {
        this.view.flxInfoContainer.setVisibility(false);
        this.view.flxCLRContainer.setVisibility(true);
        this.view.lblCLRHeader.text = kony.i18n.getLocalizedString("kony.mb.cardManage.stolenCreditCard");
        this.view.lblCLRMessage.text = kony.i18n.getLocalizedString("kony.mb.cardManage.LostOrStolenMsg");
        this.view.btnCallCstmrCare.setVisibility(true);
    },
    setViewForCancelCard: function() {
        this.view.flxInfoContainer.setVisibility(false);
        this.view.flxCLRContainer.setVisibility(true);
        this.view.lblCLRHeader.text = kony.i18n.getLocalizedString("kony.mb.cardManage.cancelCard");
        this.view.lblCLRMessage.text = kony.i18n.getLocalizedString("kony.mb.cardManage.cancelMessage");
        this.view.btnCallCstmrCare.setVisibility(true);
    },
    setViewForReplacedCard: function() {
        this.view.flxInfoContainer.setVisibility(false);
        this.view.flxCLRContainer.setVisibility(true);
        this.view.lblCLRHeader.text = kony.i18n.getLocalizedString("kony.mb.cardManage.replaceCard");
        this.view.lblCLRMessage.text = kony.i18n.getLocalizedString("kony.mb.cardManage.replaceMessage");
        this.view.btnCallCstmrCare.setVisibility(true);
    },
    getCurrentCardDetails: function() {
        return this.cardList[this.cardListIndex];
    },

    clone: function(obj) {
        if (null === obj || "object" != typeof obj) return obj;
        var copy = obj.constructor();
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
        }
        return copy;
    },


    /**
     * @function
     * Entry to Travel Notification Management Home
     * form: frmManageTravelPlans
     */
    navigateToTravelManageHome: function() {
        var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
        manageCardsModule.presentationController.fetchTravelPlans();
    },
    isIpad: function() {
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        return deviceUtilManager.isIpad();
    },

    getBillPayModule: function() {
        if (!this.billPayModule) {
            this.billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        }

        return this.billPayModule;
    },



    // CardDetails Container Code
    //-----------------------------------------------------------------------------------------------------------------------------------------------------
    cardDetailsPreShow: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardManageDetailsController : preShow ####");
            //this.resetVisibilityOfDetails();
            //this.addDataIntoSegment(this.getCardData());
            //this.view.btnAddNickname.onClick = this.btnAddNicknameOnClick;
            //this.view.btnEditBillingAddtess.onClick = this.btnEditBillingAddressOnClick;
            //this.view.btnEditNickName.onClick = this.btnAddNicknameOnClick;
            this.view.flxCardNoToggle.onClick = this.flxCardNoToggleOnClick;
            //           	var navManager = applicationManager.getNavigationManager();
            //           	var frmData = {
            //             	"isMainScreen": false
            //         	};
            //         	navManager.setCustomInfo("frmCardManageHome", frmData);
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    setCardDetails: function() {
        this.addDataIntoSegment(this.getCardData());
    },
    resetVisibilityOfDetails: function() {
        try {
            this.view.flxAvailableBal.setVisibility(true);
            this.view.flxSeperator5.setVisibility(true);
            this.view.flxValidThrough.setVisibility(true);
            this.view.flxSeperator4.setVisibility(true);
            this.view.flxBillingAddress.setVisibility(true);
            this.view.flxSeperator8.setVisibility(true);
            this.view.imgCardNoToggle.src = "view.png";
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    getCardData: function() {
        try {
            var loggerManager = applicationManager.getLoggerManager();
            loggerManager.log("#### start frmExternalBankLoginController : getCardData ####");
            var cardDetails = this.cardList[this.cardListIndex];
            return cardDetails;
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },

    addDataIntoSegment: function(cardDetails) {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardManageDetailsController : addDataIntoSegment ####");
          
          	var cardHeader = applicationManager.getUserPreferencesManager().getBankName();
          	if(!kony.sdk.isNullOrUndefined(cardDetails.bankName) && cardDetails.bankName!=""){
              cardHeader = cardDetails.bankName;
            }
            var formatUtil = applicationManager.getFormatUtilManager();
            this.view.lblCardNoValue.text = applicationManager.getDataProcessorUtility().maskAccountNumber(cardDetails['cardNumber']); //1234 5678 9123 XXXX
            this.view.lblAccHolderValue.text = cardDetails['cardHolderName'];
            this.view.lblCardTypeValue.text = cardDetails['cardType'];
            this.view.lblIssuingBankValue.text = cardHeader;
          	this.view.lblBillingAddressValue.text = cardDetails['billingAddress'];
          
          	var isIpad = applicationManager.getDeviceUtilManager().isIpad();
          	cardHeader = cardHeader + " " +cardDetails.serviceProvider;
          	
          	if(isIpad){
              this.view.title = cardHeader;
            }
          	else{
              this.view.customHeader.lblHeaderTitle.text = cardHeader;
            }
          

            var withdrawalLimit = cardDetails['withdrawlLimit'];
            var expiryDate = cardDetails['expiryDate'];
            var cardType = cardDetails['cardType'];
            if (cardType === 'Credit') {
                var availableCredit = cardDetails['creditLimit'];
                this.view.lblAvailBalance.text = kony.i18n.getLocalizedString("kony.mb.accdetails.creditLimit");
                this.view.lblAvailBalanceValue.text = ((availableCredit != null) ? (formatUtil.formatAmountandAppendCurrencySymbol(availableCredit)) : "$0.00");
                if (availableCredit === null || availableCredit === undefined || availableCredit === "") {
                    this.view.flxAvailableBal.setVisibility(false);
                    this.view.flxSeperator5.setVisibility(false);
                }
            } else {
                if (cardType === "Debit")

                    this.view.lblAvailBalance.text = kony.i18n.getLocalizedString("kony.mb.cardManage.withdrawlLimit");
                this.view.lblAvailBalanceValue.text = ((withdrawalLimit != null) ? (formatUtil.formatAmountandAppendCurrencySymbol(withdrawalLimit)) : "$0.00");
                if (kony.sdk.isNullOrUndefined(withdrawalLimit)) {
                    this.view.flxAvailableBal.setVisibility(false);
                    this.view.flxSeperator5.setVisibility(false);
                }
            }
            if (expiryDate === null || expiryDate === undefined || expiryDate === "") {
                this.view.flxValidThrough.setVisibility(false);
                this.view.flxSeperator4.setVisibility(false);
            } else {
                var dateFormat = new Date(expiryDate);
                var formatedDate = formatUtil.getFormatedDateString(dateFormat, formatUtil.getApplicationDateFormat());
                this.view.lblValidThroughVal.text = formatedDate.slice(0, 2) + "/" + formatedDate.slice(-4);
            }

            var billingAddress = cardDetails['billingAddress'];
            if (billingAddress === null || billingAddress === undefined || billingAddress === "") {
                this.view.flxBillingAddress.setVisibility(false);
                this.view.flxSeperator8.setVisibility(false);
            }
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    flxCardNoToggleOnClick: function() {
        try {
            var loggerManager = applicationManager.getLoggerManager();
            loggerManager.log("#### start frmExternalBankLoginController : flxCardNoToggleOnClick ####");
            var cardData = this.getCardData();
            var navigationManager = applicationManager.getNavigationManager();
            var IsMaskedNumberEnabled = navigationManager.getCustomInfo("frmCardManageDetailsController_IsMaskedNumberEnabled");
            if (IsMaskedNumberEnabled === true) {
                this.view.imgCardNoToggle.src = "viewactive.png";
                this.view.lblCardNoValue.text = cardData["cardNumber"];
                navigationManager.setCustomInfo("frmCardManageDetailsController_IsMaskedNumberEnabled", false);
                this.view.flxMainContainer.forceLayout();
            } else {
                this.view.imgCardNoToggle.src = "view.png";
                this.view.lblCardNoValue.text = applicationManager.getDataProcessorUtility().maskAccountNumber(cardData['cardNumber']); //1234 5678 9123 XXXX
                navigationManager.setCustomInfo("frmCardManageDetailsController_IsMaskedNumberEnabled", true);
                this.view.flxMainContainer.forceLayout();
            }
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },

    btnRightOnClick: function() {
        this.view.flxPopupNickName.setVisibility(true);
        this.view.btnAddNickname.setEnabled(false);
        this.view.flxMainContainer.setEnabled(false);
        this.view.flxHeader.setEnabled(false);
    },

    btnAddNicknameOnClick: function() {
        try {
            var loggerManager = applicationManager.getLoggerManager();
            loggerManager.log("#### start frmExternalBankLoginController : btnAddNicknameOnClick ####");

            var navManager = applicationManager.getNavigationManager();
            navManager.setCustomInfo("frmCardMngNickName", this.getCardData());
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            manageCardsModule.presentationController.commonFunctionForNavigation("frmCardMngNickName");
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    btnEditBillingAddressOnClick: function() {
        try {
            var loggerManager = applicationManager.getLoggerManager();
            loggerManager.log("#### start frmExternalBankLoginController : btnEditBillingAddressOnClick ####");

            var navManager = applicationManager.getNavigationManager();
            navManager.setCustomInfo("frmCardMngBillAddress", this.getCardData());
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            manageCardsModule.presentationController.commonFunctionForNavigation("frmCardMngBillAddress");
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    //-------------------------------------------------------------------------------------------------------------
    // Security pin code

    setKeypadChar: function(char) {
        try {
            this.keypadString = this.keypadString + char;
            if (this.keypadString.length === this.KEYPAD_MAX_LENGTH) {
                this.enterSecurityCodePostAction();
            } else if (this.keypadString.length < this.KEYPAD_MAX_LENGTH) {
                this.incompleteSecurityCodeView();
            } else if (this.keypadString.length > this.KEYPAD_MAX_LENGTH) {
                this.keypadString = this.keypadString.slice(0, this.KEYPAD_MAX_LENGTH);
                return;
            }
            this.updateInputBullets("flxInputSecurityCode");
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },

    clearKeypadChar: function() {
        try {
            if (this.keypadString.length === 1) {
                this.keypadString = '';
                this.updateInputBullets("flxInputSecurityCode");
            }
            if (this.keypadString.length !== 0) {
                this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
                if (this.keypadString.length < this.KEYPAD_MAX_LENGTH) {
                    this.incompleteSecurityCodeView();
                }
                this.updateInputBullets("flxInputSecurityCode");
            }
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    updateInputBullet: function(parentWidget, isActive) {
        var inactiveBullet = parentWidget.widgets()[1];
        var activeBullet = parentWidget.widgets()[2];
        var underscore = parentWidget.widgets()[0];
        underscore.isVisible = !isActive;
        inactiveBullet.isVisible = !isActive;
        activeBullet.isVisible = isActive;
    },
    updateInputBullets: function(inputFlx) {
        try {
            var i;
            var widgets = this.view[inputFlx].widgets();
            for (i = 0; i < this.keypadString.length; i++) {
                this.updateInputBullet(widgets[i], true);
            }
            for (i = this.keypadString.length; i < widgets.length; i++) {
                this.updateInputBullet(widgets[i], false);
            }
            this.view.forceLayout();
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    enterSecurityCodePostAction: function() {
        this.view.btnProceed.setEnabled(true);
        this.view.btnProceed.skin = "sknBtnBg0A78D1SSP30PxTab";
        this.view.flxMainContainer.forceLayout();
    },
    incompleteSecurityCodeView: function() {
        this.view.btnProceed.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnProceed.setEnabled(false);
        this.view.flxMainContainer.forceLayout();
    },

    //------------------------------------------------------------------------------------------------------------------------------------------------------
    onReasonContinue: function() {
        var scope = this;
        var cardData = this.cardList[this.cardListIndex];
        if (cardData.view == "replaceCard" || cardData.view == "lostCard" || cardData.view == "cancelCard") {
            if (cardData.view == "replaceCard") {
                this.setCardDetailsConfirmHeaderName("kony.tab.cardManage.replacingCard");
            }
            if (cardData.view == "lostCard") {
                this.setCardDetailsConfirmHeaderName("kony.mb.cardManage.stolenCreditCard");
            }
            if (cardData.view == "cancelCard") {
                this.setCardDetailsConfirmHeaderName("kony.mb.cardManage.cancelCard");
            }
            this.showReplacePinContainer();
            this.setDataForConfirmation(cardData);
        } else if (cardData.view == "pinChange") {
            this.view.btnPinContinue.onClick = this.flxOnClick.bind(this);
            this.showPinSendOptionsContainer(cardData);
        }
    },
    setDataForConfirmation: function(cardData) {
        //this.view.txtReason.text = cardData.Reason;
        this.view.lblAccHolderValueConfirmation.text = cardData.cardHolderName;
      	this.view.imgCardNoToggleConfirmation.src = "view.png";
        this.view.lblCardNoValueConfirmation.text = applicationManager.getDataProcessorUtility().maskAccountNumber(cardData.cardNumber);
        this.view.lblCardTypeValueConfirmation.text = cardData.cardType;
        this.view.lblIssuingBankValueConfirmation.text = cardData.issuerName;
        var expiryDate = new Date(cardData.expiryDate);
        var formatUtil = applicationManager.getFormatUtilManager();
        var formatedDate = formatUtil.getFormatedDateString(expiryDate, formatUtil.getApplicationDateFormat());
        this.view.lblValidThroughValConfirmation.text = formatedDate.slice(0, 2) + "/" + formatedDate.slice(-4);
    },
    updateReplaceLostCancelCard: function() {
        var cardData = this.cardList[this.cardListIndex];
        this.updateCurrentCardRLC(cardData);
    },
    updateCurrentCardRLC: function(cardData) {
        try {
            var updateCardDetails = {
                "cardId": cardData.cardId,
                "Action": cardData.Action,
                "Reason": this.view.txtReason.text
            };
            applicationManager.getPresentationUtility().showLoadingScreen();
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            manageCardsModule.presentationController.updateCardData(updateCardDetails, this.updateCardSuccess.bind(this), this.updateCardFailure.bind(this));
        } catch (err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    flxOnClick: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardMngPinChgTypesController : flxOnClick ####");

            var cardData = this.cardList[this.cardListIndex];
            var segData = this.view.segPinReasons.selectedRowItems;
            if (kony.sdk.isNullOrUndefined(segData)) {
                alert("Please select Reason");
                return;
            }
            segData = segData[0];
            if (segData.lblReason == "Email") {
                cardData.type = "email";
            } else if (segData.lblReason == "Phone Number") {
                cardData.type = "phoneNo";
            } else if (segData.lblReason == "Postal Address") {
                cardData.type = "postalAddress";
            }

            var navManager = applicationManager.getNavigationManager();
            navManager.setCustomInfo("frmCardManageHome", {
                'cardData': cardData
            });
            var userPrefMang = applicationManager.getUserPreferencesManager();
        	var regPhoneNo = userPrefMang.getUserPhone();
            var regEmail = userPrefMang.getUserEmail();
            var userAddressJSON = userPrefMang.getUserAddress();
            var regAddress = "";
            for (var key in userAddressJSON){
              if(userAddressJSON[key] !== "" && userAddressJSON[key] !== null && userAddressJSON[key] !== undefined){
                regAddress = 	userAddressJSON.addressLine1 + " "+ 
                  userAddressJSON.addressLine2 + " "+
                  userAddressJSON.city + " " + 
                  userAddressJSON.country + " " + 
                  userAddressJSON.zipcode;
                break;
              }
            }
            this.view.txtEmail.text = regEmail;
            this.view.txtNote.text = "";
            this.view.txtPhoneNumber.text = regPhoneNo;
            this.view.txtPostalAddress.text = regAddress;
            this.view.txtEmail.setEnabled(false);
            this.view.txtPhoneNumber.setEnabled(false);
            this.view.txtPostalAddress.setEnabled(false);
            this.showPinChangeFinalContainer(segData.lblReason);
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    performPinChangeDebit: function() {
        var cardData = this.cardList[this.cardListIndex];
        this.updateCurrentCard(cardData);
    },
    updateCurrentCard: function(cardData) {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardMngPinChgOptionsController : updateCurrentCard ####");
            applicationManager.getPresentationUtility().showLoadingScreen();
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            manageCardsModule.presentationController.updateCardData(cardData, this.updateCardSuccess.bind(this), this.updateCardFailure.bind(this));
        } catch (err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },

    updateCardSuccess: function(response) {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardMngPinChgOptionsController : updateCardSuccess ####");
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            manageCardsModule.presentationController.getCardsList(this.cardsFetchSuccess.bind(this), this.cardsFetchFailure.bind(this));

        } catch (err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },

    updateCardFailure: function(response) {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardMngPinChgOptionsController : updateCardFailure ####");
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            if (response["isServerUnreachable"])
                applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", response);
            else {
                alert("Something went wrong - card request");
            }
        } catch (err) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    setUpdateNewPinActions: function() {
        this.clearConfirmPin();
        this.view.txtCurrentPinValue.onTextChange = this.validatePins;
        this.view.imgMaskUnmask.onTouchEnd = this.imgMaskUnmaskToggle;
        this.view.txtConfirmPin.onTextChange = this.validatePins;
        this.view.txtNewPin.onTextChange = this.validatePins;
    },
    clearConfirmPin: function() {
        this.view.txtConfirmPin.text = "";
        this.view.imgPinMatch.src = "tickmark.png";
    },
    updateNewPinCreditCard: function() {
        //Must be changed with credit logic
        this.cardList[this.cardListIndex]['cardStatus'] = 'pinChange';
        this.cardList[this.cardListIndex]['view'] = 'pinChange';

        var navManager = applicationManager.getNavigationManager();
        navManager.setCustomInfo("frmCardManageHome", {
            'cardData': this.cardList[this.cardListIndex]
        });
        this.performPinChangeDebit();
    },
    imgMaskUnmaskToggle: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardMngNewPinController : imgMaskUnmaskToggle ####");

            if (this.view.imgMaskUnmask.src === "view.png") {
                this.view.imgMaskUnmask.src = "viewactive.png";
                this.view.txtNewPin.secureTextEntry = false;
                this.view.flxNewPin.forceLayout();
            } else {
                this.view.imgMaskUnmask.src = "view.png";
                this.view.txtNewPin.secureTextEntry = true;
                this.view.flxNewPin.forceLayout();
            }
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.processingError", GlobalExceptionHandler.ActionConstants.LOG, arguments.callee.name);
        }
    },

    validatePins: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardMngNewPinController : validatePins ####");
            var newPin = this.view.txtNewPin.text;
            var confirmNewPin = this.view.txtConfirmPin.text;
            var oldPin = this.view.txtCurrentPinValue.text;
            if (newPin === confirmNewPin && newPin.length === 6 && oldPin.length === 6) {
                this.view.imgPinMatch.src = "greentick.png";
                this.view.btnContinuePinChange.setEnabled(true);
                this.view.btnContinuePinChange.skin = "sknBtnBg0A78D1SSP30PxTab";
            } else {
                this.view.imgPinMatch.src = "tickmark.png";
                this.view.btnContinuePinChange.setEnabled(false);
                this.view.btnContinuePinChange.skin = "sknBtnBgf9f9f9SSP36Pxa0a0a0Tab";
            }
            this.view.flxConfirmPin.forceLayout();
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.processingError", GlobalExceptionHandler.ActionConstants.LOG, arguments.callee.name);
        }
    },
    isConsecutive: function(pin, length) {
        for (var i = 0; i < length - 1; i++) {
            if (parseInt(pin[i]) + 1 === parseInt(pin[i + 1])) {
                continue;
            } else
                return false;
        }
        return true;
    },
  
    showEditOptions: function() {
      this.view.flxOptions.setVisibility(true);
    },
  
    resetScreenUI: function() {
        this.view.flxOptions.isVisible = false;
    },
    navigateToBillingAddress: function() {
        var cardData = this.cardList[this.cardListIndex];
        var navManager = applicationManager.getNavigationManager();
        navManager.setCustomInfo("frmCardMngBillAddress", cardData);
        var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
        manageCardsModule.presentationController.commonFunctionForNavigation("frmCardMngBillAddress");
        this.resetScreenUI();
    },
    navigateToEditNickname: function() {
        var cardData = this.cardList[this.cardListIndex];
        var navManager = applicationManager.getNavigationManager();
        navManager.setCustomInfo("frmCardMngNickname", cardData);
        var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
        manageCardsModule.presentationController.commonFunctionForNavigation("frmCardMngNickname");
        this.resetScreenUI();
    },
  
  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    this.view.flxShadow.isVisible = !isIpad;
    if (!isIpad) {
      this.view.customHeader.flxBack.onClick = this.navigateBack;
      this.view.customHeader.btnRight.onClick = this.showEditOptions;
    }
  },

  navigateBack: function() {
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  }
  
});