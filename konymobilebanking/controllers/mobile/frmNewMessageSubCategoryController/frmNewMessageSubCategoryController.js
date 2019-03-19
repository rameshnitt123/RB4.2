define({ 
  onNavigate : function(lblValue){
    this.view.lblWithinValue.text = lblValue;
  },
  frmMessagesSubCategoryPreShow : function(){
    this.setPreshowData();
    this.setFlowActions();
  },
  setPreshowData : function(){
    this.setSubCategoryData();
    this.view.customHeader.flxSearch.isVisible = false;
    this.view.customHeader.lblLocateUs.text = "NEW MESSAGE";
    this.view.customHeader.btnRight.text = "CANCEL";
    this.view.customHeader.btnRight.isVisible = true;
    if(kony.os.deviceInfo().name !== "iPhone"){
      this.view.flxHeader.isVisible = true;
      this.view.flxPickSubCategory.top = "56dp";
      this.view.flxSubCategory.top = "116dp";
    }
    else{
      this.view.flxHeader.isVisible = false;
      this.view.flxPickSubCategory.top = "0dp";
      this.view.flxSubCategory.top = "60dp";
    }
  },
  setFlowActions : function(){
    var scopeObj = this;
    this.view.customHeader.flxBack.onClick = function(){
      scopeObj.navToCategory();
    };
    this.view.customHeader.btnRight.onClick = function(){
      scopeObj.navToMenu();
    };
    this.view.segSubCategory.onRowClick = function(){
      scopeObj.navToNewMessage();
    };
  },
  navToCategory : function(){
    var nav = new kony.mvc.Navigation("frmNewMessageCategory");
    nav.navigate();
  },
  navToMenu : function(){
    var nav = new kony.mvc.Navigation("frmMenu");
    nav.navigate();
  },
  navToNewMessage : function(){
    var nav = new kony.mvc.Navigation("frmNewMessage");
    nav.navigate();
  },
  setSubCategoryData : function(){
    var dataMap = {
      "flxArrow": "flxArrow",
      "flxCategory": "flxCategory",
      "lblSeparator": "lblSeparator",
      "imgArrow": "imgArrow",
      "lblCategory": "lblCategory",
    };
    var data = [
      {
        "lblSeparator": ".",
        "imgArrow": {"src" : "chevron.png"},
        "lblCategory": "Stolen Card",
        "template": "flxCategory"
      },
      {
        "lblSeparator": ".",
        "imgArrow": {"src" : "chevron.png"},
        "lblCategory": "Update PIN",
        "template": "flxCategory"
      },
      {
        "lblSeparator": ".",
        "imgArrow": {"src" : "chevron.png"},
        "lblCategory": "Change Contact Address",
        "template": "flxCategory"
      }
    ];
    this.view.segSubCategory.widgetDataMap = dataMap;
    this.view.segSubCategory.setData(data);
    this.view.forceLayout();
  },
});