define({ 

 showDownlaodpopup : function(){
     var controller = applicationManager.getPresentationUtility().getController('frmMessagesDetails', true);
     var scope=controller.getScope();
     var i18nKey = applicationManager.getPresentationUtility().getStringFromi18n("i18n.messages.showDownlaodPopup");
        applicationManager.getDataProcessorUtility().showToastMessageError(scope, i18nKey);
  }

 });