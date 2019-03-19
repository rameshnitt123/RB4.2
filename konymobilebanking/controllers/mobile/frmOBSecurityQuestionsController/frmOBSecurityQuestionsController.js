define({
  init:function()
  {
  var FormValidator = require("FormValidatorManager")
  this.fv = new FormValidator(3);  
  },
preShow: function () {
    var self = this;
  if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
    var scope = this;
  this.fv.submissionView(this.view.btnContinueSecurityQuestions);
  this.showSecurityQuestions();
   this.view.txtQuestionOne.onTextChange = function(){
      var text = scope.view.txtQuestionOne.text;
      scope.fv.checkAndUpdateStatusForNull(0, text);    
    };
   this.view.txtQuestionTwo.onTextChange = function(){
      var text = scope.view.txtQuestionTwo.text;
      scope.fv.checkAndUpdateStatusForNull(1, text);   
    };
   this.view.txtQuestionThree.onTextChange = function(){
      var text = scope.view.txtQuestionThree.text;
      scope.fv.checkAndUpdateStatusForNull(2, text);    
    };
  
    },
   showSecurityQuestions: function () {
        var scope = this;
     this.setHeaderData(function(){
            scope.navToDocuments();
        }, function(){
            var ntf = new kony.mvc.Navigation("frmLogin");
            ntf.navigate();
        }, 'LOGOUT', 'SECURITY QUESTIONS');
        this.view.btnContinueSecurityQuestions.onClick = function () {
            scope.showPopupFillingComplete();
        }
        var navMan=applicationManager.getNavigationManager();
         var seQues=navMan.getCustomInfo("frmOBSecurityQuestions");
     this.view.lblQuestionOne.text=seQues.questions[0]["question"];
     this.view.lblQuestionTwo.text=seQues.questions[1]["question"];
     this.view.lblQuestionThree.text=seQues.questions[2]["question"];
     
    },
  navToDocuments : function(){
     var nav2 = new kony.mvc.Navigation("frmOBDocumentsNew");
    nav2.navigate();
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
  showPopupFillingComplete: function () {
        var scope = this;
        this.view.flxPopupFillingComplete.isVisible = true;
        this.view.btnCompleteCancel.onClick = function () {
            scope.view.flxPopupFillingComplete.isVisible = false;
        }
        this.view.btnCompleteContinue.onClick = function () {
            scope.view.flxPopupFillingComplete.isVisible = false;
            scope.navToCreditCheck();
        }
    },
  navToCreditCheck : function(){
    var ans1=this.view.txtQuestionOne.text;
    var ans2=this.view.txtQuestionTwo.text;
    var ans3=this.view.txtQuestionThree.text;
    var ans = [{
            "answer": ans1,
            "question_id": "1"
        },
        {
            "answer": ans2,
            "question_id": "2"
        },
        {
            "answer": ans3,
            "question_id": "3"
        }
    ];
     ans = JSON.stringify(ans);
    var x = ans.replace(/"/g, '\'');
    var parms = {
        "userSecurityQuestionsList": x
    };

    var nuoMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    nuoMod.presentationController.verifySecurityQuestions(parms);
//      var nav2 = new kony.mvc.Navigation("frmOBCreditCheck");
//     nav2.navigate();
  },
  bindGenericError : function(msg)
  {
    applicationManager.getDataProcessorUtility().showToastMessageError(this,msg);
  }
});