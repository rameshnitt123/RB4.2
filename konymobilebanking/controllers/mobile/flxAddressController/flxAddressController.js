define({ 
  onCreateView: function() {
    return "flxAddress";
  },
  onViewCreated: function() {
    var self = this;
    this.view.addGestureRecognizer(constants.GESTURE_TYPE_SWIPE, {
      fingers: 1
    }, function(widgetRef, gestureInfo, context) {
      if(gestureInfo.swipeDirection === 1.0){
        self.animateLeft(context.rowIndex);
      }
      else if(gestureInfo.swipeDirection == 2.0){
        self.animateRight(context.rowIndex);
      }
    });
  },
  animateLeft : function(rowNumber){
    if(rowNumber !== 0){
    this.animObj = this.getTransAnimDefinition("-50dp");
    kony.application.getCurrentForm().segAddress.animateRows({
      rows: [{
        sectionIndex:0,
        rowIndex: rowNumber
      }],
      widgets: ["flxDetails"],
      animation : this.swipeObj
    });
    }
  },
  animateRight : function(rowNumber){
    this.animObj = this.getTransAnimDefinition("0%");
    kony.application.getCurrentForm().segAddress.animateRows({
      rows: [{
        sectionIndex:0,
        rowIndex: rowNumber
      }],
      widgets: ["flxDetails"],
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