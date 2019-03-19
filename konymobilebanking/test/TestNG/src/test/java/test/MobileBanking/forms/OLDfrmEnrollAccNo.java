package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class OLDfrmEnrollAccNo {


  public OLDfrmEnrollAccNo() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("OLDfrmEnrollAccNo_OLDfrmEnrollAccNo"));
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("OLDfrmEnrollAccNo_btnContinue"));
  btnContinue.click();
  }
public void btnVerify() throws Exception{ 
  AppElement btnVerify=new AppElement(MobileBankingWidgetId.getWidgetId("OLDfrmEnrollAccNo_btnVerify"));
  btnVerify.click();
  }





}