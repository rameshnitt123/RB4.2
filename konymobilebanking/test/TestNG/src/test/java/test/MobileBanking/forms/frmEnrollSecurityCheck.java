package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmEnrollSecurityCheck {


  public frmEnrollSecurityCheck() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmEnrollSecurityCheck_frmEnrollSecurityCheck"));
  }


public void rtxCVV(String text) throws Exception{
  AppElement rtxCVV=new AppElement(MobileBankingWidgetId.getWidgetId("frmEnrollSecurityCheck_rtxCVV"));
  rtxCVV.type(text);
  }
public void rtxSecurityCode(String text) throws Exception{
  AppElement rtxSecurityCode=new AppElement(MobileBankingWidgetId.getWidgetId("frmEnrollSecurityCheck_rtxSecurityCode"));
  rtxSecurityCode.type(text);
  }

public frmEnrollCVV flxCVV() throws Exception{
	  AppElement flxCVV=new AppElement(MobileBankingWidgetId.getWidgetId("frmEnrollSecurityCheck_flxCVV"));
	  flxCVV.click();
	  Thread.sleep(130000);
	  return new frmEnrollCVV();
	  }

public frmEnrollSecurity flxSecurityCode() throws Exception{
	  AppElement flxSecurityCode=new AppElement(MobileBankingWidgetId.getWidgetId("frmEnrollSecurityCheck_flxSecurityCode"));
	  flxSecurityCode.click();
	  Thread.sleep(130000);
	  return new frmEnrollSecurity();
	  }


}