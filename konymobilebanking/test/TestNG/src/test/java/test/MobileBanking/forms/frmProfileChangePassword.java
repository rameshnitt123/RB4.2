package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmProfileChangePassword {


  public frmProfileChangePassword() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileChangePassword_frmProfileChangePassword"));
  }


public void rtxCVV(String text) throws Exception{
  AppElement rtxCVV=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileChangePassword_rtxCVV"));
  rtxCVV.type(text);
  }
public void rtxSecurityCode(String text) throws Exception{
  AppElement rtxSecurityCode=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileChangePassword_rtxSecurityCode"));
  rtxSecurityCode.type(text);
  }



}