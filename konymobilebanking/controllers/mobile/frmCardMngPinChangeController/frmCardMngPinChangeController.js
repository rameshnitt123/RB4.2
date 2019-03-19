define({
    titleText: '',
    objReturn: null,
    onNavigate: function(obj) {
        if (obj === undefined) {
            var newObj = {
                "popup": "none"
            };
            obj = newObj;
        }
        if (obj.popup === "pinChange") {
            this.titleText = kony.i18n.getLocalizedString("kony.mb.cardManage.requestingPinChange");
            this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.cardManage.requestingPinChange");
            this.renderViewForPinChange();
        }
        if (obj.popup === "replaceCard") {
            this.titleText = kony.i18n.getLocalizedString("kony.mb.cardManage.replacingCard");
            this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.cardManage.replacingCard");
            this.renderViewForReplaceCard();
        }
        if (obj.popup === "lostCard") {
            this.titleText = kony.i18n.getLocalizedString("kony.mb.cardManage.stolenCreditCard");
            this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.cardManage.stolenCreditCard");
            this.renderViewForStolenCard();
        }
        if (obj.popup === "cancelCard") {
            this.titleText = kony.i18n.getLocalizedString("kony.mb.cardManage.cancelCardTitle");
            this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.cardManage.cancelCardTitle");
            this.renderViewForChangeCard();
        }
        if (obj.popup === "none") {
            this.popupMsg = '';
        }
        this.objReturn = obj;
    },
    preShow: function() {
        this.renderTitleBar();
        this.view.btnSubmit.onClick = this.btnSubmitOnClick;
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        if(kony.os.deviceInfo().name !== "iPhone"){
          this.view.flxHeader.isVisible = true;
        }
        else{
          this.view.flxHeader.isVisible = false;
        }
    },
    renderTitleBar: function() {
        if (kony.os.deviceInfo().name === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
            if ((this.titleText !== null) && (this.titleText !== '')) {
                this.view.title = this.titleText;
            }
        }
    },
    btnSubmitOnClick: function() {
        var ntf = new kony.mvc.Navigation("frmCardManageHome");
        ntf.navigate(this.objReturn);
    },
    renderViewForPinChange:function(){
        this.view.flxCallCusCare.setVisibility(false);
        this.view.flxSeperator1.setVisibility(false);
    },
    renderViewForReplaceCard:function(){
        this.view.flxCallCusCare.setVisibility(false);
        this.view.flxSeperator1.setVisibility(false);
    },
    renderViewForStolenCard:function(){
        this.view.flxCallCusCare.setVisibility(true);
        this.view.flxSeperator1.setVisibility(true);
    },
    renderViewForChangeCard:function(){
        this.view.flxCallCusCare.setVisibility(true);
        this.view.flxSeperator1.setVisibility(true);
    },
    flxBackOnClick:function(){
        var ntf = new kony.mvc.Navigation("frmCardManageHome");
        ntf.navigate(this.objReturn);
    }

});