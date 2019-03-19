package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBsetUserNamePwd {


  public frmOBsetUserNamePwd() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBsetUserNamePwd_frmOBsetUserNamePwd"));
  }
public void btnContinueUsernamePassword() throws Exception{ 
  AppElement btnContinueUsernamePassword=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBsetUserNamePwd_btnContinueUsernamePassword"));
  btnContinueUsernamePassword.click();
  }

public void txtPassword(String text) throws Exception{
  AppElement txtPassword=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBsetUserNamePwd_txtPassword"));
  txtPassword.type(text);
  }
public void txtReEnterPassword(String text) throws Exception{
  AppElement txtReEnterPassword=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBsetUserNamePwd_txtReEnterPassword"));
  txtReEnterPassword.type(text);
  }
public void txtUsername(String text) throws Exception{
  AppElement txtUsername=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBsetUserNamePwd_txtUsername"));
  txtUsername.type(text);
  }




}