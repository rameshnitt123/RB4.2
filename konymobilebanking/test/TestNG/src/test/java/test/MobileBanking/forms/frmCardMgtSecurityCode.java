package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardMgtSecurityCode {


  public frmCardMgtSecurityCode() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMgtSecurityCode_frmCardMgtSecurityCode"));
  }
public void btnProceed() throws Exception{ 
  AppElement btnProceed=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMgtSecurityCode_btnProceed"));
  btnProceed.click();
  }
public void btnResend() throws Exception{ 
  AppElement btnResend=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMgtSecurityCode_btnResend"));
  btnResend.click();
  }





}