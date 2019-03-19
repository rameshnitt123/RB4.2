define({ 
    objRec: '',
   init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    onNavigate: function(obj) {
        if (obj === undefined) {
            var newObj = {
                "view": "familyCheckingAcc"
            };
            obj = newObj;
        }
        this.objRec = obj;
    },
	txtNickNameTextChange : function (){
    if(this.view.txtNickName.text === "")
      {
    this.view.btnSave.skin = "sknBtnOnBoardingInactive";
    this.view.btnSave.setEnabled(false);
      }
    else
      {
       this.view.btnSave.skin = "sknBtn0095e426pxEnabled";
       this.view.btnSave.setEnabled(true);
      }
  },
  frmEditNickNamePreShow:function()
  {
    this.view.btnSave.onClick=this.btnSaveOnClick; 
    this.view.customHeader.flxBack.onClick=this.flxBackOnClick;
    this.view.customHeader.btnRight.onClick=this.flxBackOnClick;
    this.view.txtNickName.onTextChange=this.txtNickNameTextChange;
    this.view.txtNickName.onDone=this.btnSaveOnClick;
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
    var navigationManager=applicationManager.getNavigationManager();
    var nickName = navigationManager.getCustomInfo("frmAccInfoEdit");
    if(nickName!== null && nickName !== undefined){
      this.view.txtNickName.text = nickName ;
    }
    else {
      this.view.txtNickName.text = "" ;
    } 
    this.txtNickNameTextChange();
    var currentForm=navigationManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    this.view.txtNickName.setEnabled(true);
    this.view.txtNickName.setFocus(true);
  },
  btnSaveOnClick:function(){
    var accMod=kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
    if(this.view.txtNickName.text !== ""&&this.view.txtNickName.text !== null&&this.view.txtNickName.text !== undefined)
      {
          applicationManager.getPresentationUtility().showLoadingScreen();
          accMod.presentationController.editAccountNickName(this.view.txtNickName.text);
      }    
  },
  flxBackOnClick:function(){
  var navMan=applicationManager.getNavigationManager();
        this.accDetails =navMan.goBack();
   },

 });