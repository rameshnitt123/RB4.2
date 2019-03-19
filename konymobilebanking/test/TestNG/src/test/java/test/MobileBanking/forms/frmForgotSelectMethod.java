package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmForgotSelectMethod {


  public frmForgotSelectMethod() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgotSelectMethod_frmForgotSelectMethod"));
  }


public void rtxForgotInfo(String text) throws Exception{
  AppElement rtxForgotInfo=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgotSelectMethod_rtxForgotInfo"));
  rtxForgotInfo.type(text);
  }
public void rtxSelectCVV(String text) throws Exception{
  AppElement rtxSelectCVV=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgotSelectMethod_rtxSelectCVV"));
  rtxSelectCVV.type(text);
  }
public void rtxSelectSecurityCode(String text) throws Exception{
  AppElement rtxSelectSecurityCode=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgotSelectMethod_rtxSelectSecurityCode"));
  rtxSelectSecurityCode.type(text);
  }



}