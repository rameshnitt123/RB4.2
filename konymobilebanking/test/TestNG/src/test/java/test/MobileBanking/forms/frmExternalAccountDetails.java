package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmExternalAccountDetails {


  public frmExternalAccountDetails() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmExternalAccountDetails_frmExternalAccountDetails"));
  }
public void btnDeleteAccount() throws Exception{ 
  AppElement btnDeleteAccount=new AppElement(MobileBankingWidgetId.getWidgetId("frmExternalAccountDetails_btnDeleteAccount"));
  btnDeleteAccount.click();
  }
public void btnMakeTransfer() throws Exception{ 
  AppElement btnMakeTransfer=new AppElement(MobileBankingWidgetId.getWidgetId("frmExternalAccountDetails_btnMakeTransfer"));
  btnMakeTransfer.click();
  }





}