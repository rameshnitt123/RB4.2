package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmForgotEnterSecurityCode {


  public frmForgotEnterSecurityCode() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgotEnterSecurityCode_frmForgotEnterSecurityCode"));
  }
public void btnReSend() throws Exception{ 
  AppElement btnReSend=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgotEnterSecurityCode_btnReSend"));
  btnReSend.click();
  }
public void btnVerify() throws Exception{ 
  AppElement btnVerify=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgotEnterSecurityCode_btnVerify"));
  btnVerify.click();
  }





}