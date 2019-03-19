package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmForgotMain {


  public frmForgotMain() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgotMain_frmForgotMain"));
  }


public void rtxForgotInfo(String text) throws Exception{
  AppElement rtxForgotInfo=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgotMain_rtxForgotInfo"));
  rtxForgotInfo.type(text);
  }
public void rtxSelectCVV(String text) throws Exception{
  AppElement rtxSelectCVV=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgotMain_rtxSelectCVV"));
  rtxSelectCVV.type(text);
  }
public void rtxSelectSecurityCode(String text) throws Exception{
  AppElement rtxSelectSecurityCode=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgotMain_rtxSelectSecurityCode"));
  rtxSelectSecurityCode.type(text);
  }



}