define(function() {

  function getI18n(key) {
    return kony.i18n.getLocalizedString(key);
  }

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.componentSkins = {
        firstRow: "",
        secondRow: "",
        activeBtn: "",
        componentSkin: "",
        titleSkin: ""
      };
    },

    initGettersSetters: function() {
      defineSetter(this, "firstRowSkin", function(val) {
        this.componentSkins.firstRow = val;
      });

      defineSetter(this, "secondRowSkin", function(val) {
        this.componentSkins.secondRow = val;
      });

      defineSetter(this, "activeBtn", function(val) {
        this.componentSkins.activeBtn = val;
      });

      defineSetter(this, "componentSkin", function(val) {
        this.componentSkins.componentSkin = val;
      });

      defineSetter(this, "titleSkin", function(val) {
        this.componentSkins.titleSkin = val;
      });
    },

    setData: function(accountName, bankName, accountBalance, balanceStatus) {
    	this.view.lblFromAccountValue.text = accountName;
    	this.view.lblBank.text = bankName;
    	this.view.lblBalanceValue.text = accountBalance;
    	this.view.lblavailableBalance.text = balanceStatus;
    },

    initSkins: function() {
    	this.view.lblFromAccountValue.skin = this.componentSkins.firstRow;
    	this.view.lblBank.skin = this.componentSkins.secondRow;
    	this.view.lblBalanceValue.skin =  this.componentSkins.firstRow;
    	this.view.lblavailableBalance.skin = this.componentSkins.secondRow;
    	this.view.skin = this.componentSkins.componentSkin;
    	this.view.btnChange.skin = this.componentSkins.activeBtn;
    	this.view.lblFromAccount.skin = this.componentSkins.titleSkin;
    },

    setTitleName: function(name) {
    	this.view.lblFromAccount.text = name;  
    },

    setTitleI18Name: function(key) {
    	this.setTitleName(getI18n(key)); 
    },

    setActionTitle: function(value) {
    	this.view.btnChange.text = value;
    },

    setActionI18Title: function(key) {
    	this.setActionTitle(getI18n(key));
    }
  };
});