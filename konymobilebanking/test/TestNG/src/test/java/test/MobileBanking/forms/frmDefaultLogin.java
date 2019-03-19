package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmDefaultLogin {


  public frmDefaultLogin() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmDefaultLogin_frmDefaultLogin"));
  }
public void btnChange() throws Exception{ 
  AppElement btnChange=new AppElement(MobileBankingWidgetId.getWidgetId("frmDefaultLogin_btnChange"));
  btnChange.click();
  }
public void btnDone() throws Exception{ 
  AppElement btnDone=new AppElement(MobileBankingWidgetId.getWidgetId("frmDefaultLogin_btnDone"));
  btnDone.click();
  }


public void rtxNoteMsg(String text) throws Exception{
  AppElement rtxNoteMsg=new AppElement(MobileBankingWidgetId.getWidgetId("frmDefaultLogin_rtxNoteMsg"));
  rtxNoteMsg.type(text);
  }



}