package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmUpdatePassword {


  public frmUpdatePassword() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmUpdatePassword_frmUpdatePassword"));
  }
public void btnUpdatePassword() throws Exception{ 
  AppElement btnUpdatePassword=new AppElement(MobileBankingWidgetId.getWidgetId("frmUpdatePassword_btnUpdatePassword"));
  btnUpdatePassword.click();
  }

public void tbxPassword(String text) throws Exception{
  AppElement tbxPassword=new AppElement(MobileBankingWidgetId.getWidgetId("frmUpdatePassword_tbxPassword"));
  tbxPassword.type(text);
  }




}