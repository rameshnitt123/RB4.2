define({ 
  segName:"noAnimation",
  "onCreateView": function() {
    return "flxMain";
  },
  "onViewCreated": function() {
 	var navManager = applicationManager.getNavigationManager();
    var formName=navManager.getCurrentForm();
    if(formName === "frmProfileEditPhoneNumbers"){
      this.segName="segPhoneNumbers";
    }
    else if(formName === "frmProfileEditEmails"){
      this.segName="segEmails";
    }
    if(this.segName=="noAnimation"){
      return;
    }
    var self = this;
    this.view.addGestureRecognizer(constants.GESTURE_TYPE_SWIPE, {
      fingers: 1
    }, function(widgetRef, gestureInfo, context) {
       if(applicationManager.getPresentationUtility().rowIndexforSwipe>=0)
        self.animateRight(applicationManager.getPresentationUtility().rowIndexforSwipe);
      applicationManager.getPresentationUtility().rowIndexforSwipe=context.rowIndex;
      if(context.rowIndex > 0){
        if(gestureInfo.swipeDirection === 1.0){
          self.animateLeft(context.rowIndex);
        }
        else if(gestureInfo.swipeDirection == 2.0){
          self.animateRight(context.rowIndex);
        }
      }
    });
  },
  animateLeft : function(rowNumber){
    this.animObj = this.getTransAnimDefinition("-20%");
    kony.application.getCurrentForm()[this.segName].animateRows({
      rows: [{
        sectionIndex:0,
        rowIndex: rowNumber
      }],
      widgets: ["flxSwipe"],
      animation : this.swipeObj
    });
  },
  animateRight : function(rowNumber){
    this.animObj = this.getTransAnimDefinition("0%");
    kony.application.getCurrentForm()[this.segName].animateRows({
      rows: [{
        sectionIndex:0,
        rowIndex: rowNumber
      }],
      widgets: ["flxSwipe"],
      animation : this.swipeObj
    });
  },
  getTransAnimDefinition : function(leftVal) {
    var transAnimDef1 = {
      "100": {
        "left": leftVal,
        "stepConfig": {
          "timingFunction": kony.anim.LINEAR
        },
        "rectified": true
      }
    };
    var animConf = {
      "delay": 0,
      "iterationCount": 1,
      "fillMode": kony.anim.FILL_MODE_FORWARDS,
      "duration": 0.5
    };
    this.swipeObj = {
      definition: kony.ui.createAnimation(transAnimDef1),
      config :animConf,
      callbacks:null
    }
  }
});