package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmProfileSecurityCode {


  public frmProfileSecurityCode() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileSecurityCode_frmProfileSecurityCode"));
  }
public void btnResend() throws Exception{ 
  AppElement btnResend=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileSecurityCode_btnResend"));
  btnResend.click();
  }
public void btnVerifySecCode() throws Exception{ 
  AppElement btnVerifySecCode=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileSecurityCode_btnVerifySecCode"));
  btnVerifySecCode.click();
  }





}