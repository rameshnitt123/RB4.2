define({
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        this.initActions();
    },
    initActions: function() {
        var scope = this;
      this.view.customHeader.flxBack.onClick = function() {
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.commonFunctionForNavigation("frmBillPaySearchPayee");
      }
      this.view.customHeader.btnRight.onClick = function() {
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.commonFunctionForNavigation("frmBillPay");
      }
      this.view.segAddresses.onRowClick = function(){
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.commonFunctionForNavigation("frmBillPayEnterAccNo");  
      }
      this.view.flxAddManually.onClick = function(){
        var ntf = new kony.mvc.Navigation("frmBillPayEditName");
        ntf.navigate("addManually");    
      }
        this.view.tbxSearch.onTouchStart = this.showSearch;
        this.view.customSearchbox.btnCancel.onClick = this.showSearch;
    },
    showSearch: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            if (this.view.flxHeaderSearchbox.isVisible == true) {
                this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxSearch.isVisible = true;
                this.view.flxMainContainer.top = "56dp";

            } else {
                this.view.flxSearch.isVisible = false;
                this.view.flxMainContainer.top = "40dp";
                this.view.flxHeaderSearchbox.isVisible = true;
                this.view.customSearchbox.tbxSearch.setFocus(true);
            }
        } else {
            if (this.view.flxHeaderSearchbox.isVisible == true) {
                this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxSearch.isVisible = true;
                this.view.flxHeader.isVisible = true;
                this.view.flxMainContainer.top = "56dp";
            } else {
                this.view.flxSearch.isVisible = false;
                this.view.flxHeader.isVisible = false;
                this.view.flxMainContainer.top = "40dp";
                this.view.flxHeaderSearchbox.isVisible = true;
                this.view.customSearchbox.tbxSearch.setFocus(true);
            }
        }
    }

});