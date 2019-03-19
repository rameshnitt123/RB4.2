define({
  segName:"noAnimation",
  "onCreateView": function() {
    return "flxAlertWithSwitch";
  },
  "onViewCreated": function() {
    var previousSection = -1;
//     if(formName === "frmBillPay"){
//       this.segName="segTransactions";
//     }
//     else if(formName === "frmBillPayAllPayees"){
//       this.segName="noAnimation";
//     }
//     if(this.segName=="noAnimation"){
//       return;
//     }
    var self = this;
    this.view.addGestureRecognizer(constants.GESTURE_TYPE_TAP, {
      fingers: 1
    }, function(widgetRef, gestureInfo, context) {
      previousSection = context.sectionIndex;
    	
    });
  },
  toggleInactive : function(rowNumber,sectionNumber){
    this.animObj = this.getTransAnimDefinition("21dp");
    kony.application.getCurrentForm()[this.segName].animateRows({
      rows: [{
        sectionIndex:sectionNumber,
        rowIndex: rowNumber
      }],
      widgets: ["flxSwitch"],
      animation : this.swipeObj
    });
  },
  toggleActive : function(rowNumber,sectionNumber){
    this.animObj = this.getTransAnimDefinition("2dp");
    kony.application.getCurrentForm()[this.segName].animateRows({
      rows: [{
        sectionIndex:sectionNumber,
        rowIndex: rowNumber
      }],
      widgets: ["flxSwitch"],
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
    };
  } 
});