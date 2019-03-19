package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBLogin {


  public frmOBLogin() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBLogin_frmOBLogin"));
  }
public void btnCancel() throws Exception{ 
  AppElement btnCancel=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBLogin_btnCancel"));
  btnCancel.click();
  }
public void btnLogIn() throws Exception{ 
  AppElement btnLogIn=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBLogin_btnLogIn"));
  btnLogIn.click();
  }

public void tbxPassword(String text) throws Exception{
  AppElement tbxPassword=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBLogin_tbxPassword"));
  tbxPassword.type(text);
  }
public void tbxUsername(String text) throws Exception{
  AppElement tbxUsername=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBLogin_tbxUsername"));
  tbxUsername.type(text);
  }




}