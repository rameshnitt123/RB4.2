package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmDevRegSecCode {


  public frmDevRegSecCode() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmDevRegSecCode_frmDevRegSecCode"));
  }
public void btnResend() throws Exception{ 
  AppElement btnResend=new AppElement(MobileBankingWidgetId.getWidgetId("frmDevRegSecCode_btnResend"));
  btnResend.click();
  }
public void btnVerifySecCode() throws Exception{ 
  AppElement btnVerifySecCode=new AppElement(MobileBankingWidgetId.getWidgetId("frmDevRegSecCode_btnVerifySecCode"));
  btnVerifySecCode.click();
  }





}