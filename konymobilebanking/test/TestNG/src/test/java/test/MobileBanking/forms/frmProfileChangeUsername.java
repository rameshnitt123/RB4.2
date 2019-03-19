package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmProfileChangeUsername {


  public frmProfileChangeUsername() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileChangeUsername_frmProfileChangeUsername"));
  }


public void rtxCVV(String text) throws Exception{
  AppElement rtxCVV=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileChangeUsername_rtxCVV"));
  rtxCVV.type(text);
  }
public void rtxSecurityCode(String text) throws Exception{
  AppElement rtxSecurityCode=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileChangeUsername_rtxSecurityCode"));
  rtxSecurityCode.type(text);
  }



}