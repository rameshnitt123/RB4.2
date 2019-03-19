package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBSignInWithPhoneNumber {


  public frmOBSignInWithPhoneNumber() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSignInWithPhoneNumber_frmOBSignInWithPhoneNumber"));
  }
public void btnVerifyPhoneNumber() throws Exception{ 
  AppElement btnVerifyPhoneNumber=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSignInWithPhoneNumber_btnVerifyPhoneNumber"));
  btnVerifyPhoneNumber.click();
  }





}