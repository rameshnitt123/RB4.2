package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmForgotEnterLastName {


  public frmForgotEnterLastName() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgotEnterLastName_frmForgotEnterLastName"));
  }
public void btnUpdatePassword() throws Exception{ 
  AppElement btnUpdatePassword=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgotEnterLastName_btnUpdatePassword"));
  btnUpdatePassword.click();
  }

public void txtNewPassword(String text) throws Exception{
  AppElement txtNewPassword=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgotEnterLastName_txtNewPassword"));
  txtNewPassword.type(text);
  }




}