define({ 
  date:null,
   init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
  frmAccountStatementsPreshow:function()
  {
     if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
      this.view.flxFooter.isVisible = false;
    }
    else{
      this.view.flxHeader.isVisible = false;
      this.view.flxFooter.isVisible = true;
    }
    var scope=this;
    this.date=new Date();
    this.view.flxSegStatements.isVisible=true;
    this.view.flxNoStatements.isVisible=false;
    this.setSegStatementsData();
   this.view.customFooter.lblAccounts.skin="sknLbl424242SSP20px";
    this.view.customFooter.flxAccSelect.setVisibility(true);
    this.view.customFooter.lblTransfer.skin="sknLblA0A0A0SSP20px";
    this.view.customFooter.flxTransferSel.setVisibility(false);
    this.view.customFooter.lblBillPay.skin="sknLblA0A0A0SSP20px";
    this.view.customFooter.flxBillSelected.setVisibility(false);
    this.view.customFooter.lblMore.skin="sknLblA0A0A0SSP20px";
    this.view.customFooter.flxMoreSelect.setVisibility(false);
    this.view.customHeader.flxBack.onClick=this.flxBackOnClick;
    this.view.lblYear1.skin="sknLblda8b08SSPReg22px";
    this.view.lblYear2.skin="sknLbl727272SSPReg22px";
    this.view.lblYear1.text=this.date.getFullYear()+" "+applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.statements");
    this.view.lblYear2.text=this.date.getFullYear()-1+" "+applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.statements");
    this.view.segStatements.onRowClick=this.onClicksegStatements;
    this.view.flxStatementYr1.onClick=this.flxStatementYr1OnClick;
    this.view.flxStatementYr2.onClick=this.flxStatementYr2OnClick;
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  setSegStatementsData:function()
  {
    var navMan=applicationManager.getNavigationManager();
    var statements=navMan.getCustomInfo("frmAccStatements");
    this.view.lblAccValue.text=statements.accountdata["nickName"];
    this.view.lblShowValue.text=this.date.getFullYear()+" "+applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.statements");
    var statementdata=[];
    var formatUtil=applicationManager.getFormatUtilManager();
    var months=  formatUtil.getYearAppendedPreviousMonths();
    if(months.length>0)
    {
      this.view.flxSegStatements.isVisible=true;
      this.view.flxNoStatements.isVisible=false;
      for(var i=months.length-1;i>=0;i--)
      {
        var statedata={   "lblStatementMonth":months[i]};
        statementdata.push(statedata);
      }
      this.view.segStatements.setData(statementdata);
    }
    else
    {
      this.view.flxSegStatements.isVisible=false;
      this.view.flxNoStatements.isVisible=true;
    }
  },
  flxStatementYr1OnClick:function()
  {
    this.flxArrowOnclick();
    this.view.lblYear1.skin="sknLblda8b08SSPReg22px";
    this.view.lblYear2.skin="sknLbl727272SSPReg22px";
    this.setSegStatementsData();
  },
  flxStatementYr2OnClick:function()
  { 
    this.flxArrowOnclick();
    this.view.flxSegStatements.isVisible=true;
    this.view.flxNoStatements.isVisible=false;
    this.view.lblShowValue.text=this.date.getFullYear()-1+"  "+applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.statements");
    this.view.lblYear1.skin="sknLbl727272SSPReg22px";
    this.view.lblYear2.skin="sknLblda8b08SSPReg22px";
    var statementdata=[];
    var formatUtil=applicationManager.getFormatUtilManager();
    var months=  formatUtil.getYearAppendedPreviousMonths(this.date.getFullYear()-1);
    for(var i=months.length-1;i>=0;i--)
    {
      var statedata={   "lblStatementMonth":months[i]};
      statementdata.push(statedata);
    }
    this.view.segStatements.setData(statementdata);
  },
  flxArrowOnclick:function(){
    if(this.view.imgArrow.src==="arrowdown.png")
    {
      this.view.flxSelectYear.setVisibility(true);
      this.view.imgArrow.src="arrowup.png";
      this.animateFlxSelectYear();

    }
    else
    {
      this.view.imgArrow.src="arrowdown.png";
      this.animateFlxSelectYearBack();
    }
  },
  animateFlxSelectYear:function()
  {
    var flxheight,segHeight;
    if(kony.os.deviceInfo().name !== "iPhone"){
      flxheight = "115dp";
        segHeight = "200dp";
    }
    else{
      flxheight = "65dp";
        segHeight = "150dp";
    }
    this.view.flxSelectYear.animate(
      kony.ui.createAnimation({
        "100": {
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          },
          "rectified": true,
          "top": flxheight,
          "opacity":1
        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.35
      }, {
        "animationEnd": function() {
        }
      });
    this.view.flxSegStatements.animate(
      kony.ui.createAnimation({
        "100": {
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          },
          "rectified": true,
          "top": segHeight,
          "bottom":"60dp"
        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.35
      }, {
        "animationEnd": function() {
        }
      });
  },
  animateFlxSelectYearBack:function()
  {
    var flxheight,segHeight;
    if(kony.os.deviceInfo().name !== "iPhone"){
      flxheight = "55dp";
        segHeight = "120dp";
    }
    else{
      flxheight = "16dp";
        segHeight = "70dp";
    }
    var scopeObj=this;
    this.view.flxSelectYear.animate(
      kony.ui.createAnimation({
        "100": {
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          },
          "rectified": true,
          "top": flxheight,
          "opacity":0
        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.35
      }, {
        "animationEnd": function() {
          scopeObj.view.flxSelectYear.setVisibility(false);
          scopeObj.view.imgArrow.src="arrowdown.png";
          scopeObj.view.flxArrow.forceLayout();
        }
      });
    this.view.flxSegStatements.animate(
      kony.ui.createAnimation({
        "100": {
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          },
          "rectified": true,
          "top": segHeight,
          "bottom":"60dp"
        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.35
      }, {
        "animationEnd": function() {
        }
      });
  },
  flxBackOnClick:function(){
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },
  onClicksegStatements:function()
  {
    var scopeObj=this;
    applicationManager.getPresentationUtility().showLoadingScreen();
    var navMan=applicationManager.getNavigationManager();
    var statements=navMan.getCustomInfo("frmAccStatements");
    var accountID=statements.accountdata["accountID"];
    var index=scopeObj.view.segStatements.selectedRowIndex[1];
    var month=scopeObj.view.segStatements.data[index]["lblStatementMonth"].split(' ')[0];
    var year=scopeObj.view.segStatements.data[index]["lblStatementMonth"].split(' ')[1];
    var paramns={
      "accountID": accountID,
      "format": "",
      "year": year,
      "StatementMonth": month
    };
    var accMod=kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
    accMod.presentationController.fetchAccountStatamentsLink(paramns);
  }
});