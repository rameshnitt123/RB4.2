define({

    //Type your controller code here 
    handleCancelClick: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    }
});