define({
      init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    frmPreShow: function() {
        this.view.txtRecipientName.onTextChange = this.btnContinueHandler;
        this.view.txtLastName.onTextChange = this.btnContinueHandler;
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = this.flxBackOnClick;
        this.view.btnContinue.onClick = this.btnContinueOnClick;
        this.view.customHeader.btnRight.onClick = this.onClickCancel;
        this.renderTitleBar();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm=navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    btnRightOnClick: function() {
    },
    renderTitleBar: function() {
        if (kony.os.deviceInfo().name === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        }
    },
  
});