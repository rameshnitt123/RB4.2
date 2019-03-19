define(function() {

  function getI18n(key) {
    return kony.i18n.getLocalizedString(key);
  }

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.componentSkins = {
        labelNameSkin: "",
        labelValueSkin: "",
        activeTabSkin: "",
        frequencyView: "",
      }; 
    },

    initGettersSetters: function() {
      defineSetter(this, "labelNameSkin", function(val) {
        this.componentSkins.labelNameSkin = val;
      });

      defineSetter(this, "labelValueSkin", function(val) {
        this.componentSkins.labelValueSkin = val;
      });

      defineSetter(this, "activeTabSkin", function(val) {
        this.componentSkins.activeTabSkin = val;
      });

      defineSetter(this, "frequencyView", function(val) {
        this.componentSkins.frequencyView = val;
      });
    },

    preShow: function() {
      this.view.lblTransferFrequency.skin = this.componentSkins.labelNameSkin;
      this.view.lblDaily.skin = this.componentSkins.labelValueSkin;
      this.view.lblDateStart.skin = this.componentSkins.labelNameSkin;
      this.view.lblDateStartValue.skin = this.componentSkins.labelValueSkin;
      this.view.lblFrequency.skin = this.componentSkins.labelNameSkin;
      this.view.lblFrequencyRange.skin = this.componentSkins.labelValueSkin;
      this.view.skin = this.componentSkins.frequencyView;
      this.view.lblSetFrequency.skin = this.componentSkins.activeTabSkin;
    },

    setFirstRowName: function(name) {
      this.view.lblTransferFrequency.text = name;
    },

    setFirstRowNamei18: function(key) {
      this.setFirstRowName(getI18n(key));
    },
    
    setFirstRowValue: function(value) {
      this.view.lblDaily.text = value;
    }, 

    setSecondRowName: function(name) {
      this.view.lblDateStart.text = name;
    },
    
    setSecondRowNamei18: function(key) {
      this.setSecondRowName(getI18n(key));
    },
    
    setSecondRowValue: function(value) {
      this.view.flxDate.lblDateStartValue.text = value;
    },
    
    setThirdRowName: function(name) {
      this.view.flxRange.lblFrequency.text = name;
    },
    
    setThirdRowNamei18: function(key) {
      this.setThirdRowName(getI18n(key));
    },
    
    setThirdRowValue: function(value) {
      this.view.flxRange.lblFrequencyRange.text = value;
    },
    
    setActiveTabValue: function(name) {
      this.view.flxSetFrequency.lblSetFrequency.text = name;
    },
  };
});