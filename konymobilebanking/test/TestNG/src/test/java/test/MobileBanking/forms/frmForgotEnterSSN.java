package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmForgotEnterSSN {


  public frmForgotEnterSSN() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgotEnterSSN_frmForgotEnterSSN"));
  }
public void btnVerify() throws Exception{ 
  AppElement btnVerify=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgotEnterSSN_btnVerify"));
  btnVerify.click();
  }





}