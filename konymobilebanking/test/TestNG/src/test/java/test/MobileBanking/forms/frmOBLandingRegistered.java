package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBLandingRegistered {


  public frmOBLandingRegistered() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBLandingRegistered_frmOBLandingRegistered"));
  }
public void btnChangeEmail() throws Exception{ 
  AppElement btnChangeEmail=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBLandingRegistered_btnChangeEmail"));
  btnChangeEmail.click();
  }
public void btnChangePhoneNumber() throws Exception{ 
  AppElement btnChangePhoneNumber=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBLandingRegistered_btnChangePhoneNumber"));
  btnChangePhoneNumber.click();
  }
public void btnCompleteCancel() throws Exception{ 
  AppElement btnCompleteCancel=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBLandingRegistered_btnCompleteCancel"));
  btnCompleteCancel.click();
  }
public void btnCompleteContinue() throws Exception{ 
  AppElement btnCompleteContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBLandingRegistered_btnCompleteContinue"));
  btnCompleteContinue.click();
  }
public void btnLandingOne() throws Exception{ 
  AppElement btnLandingOne=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBLandingRegistered_btnLandingOne"));
  btnLandingOne.click();
  }


public void rtxCompleteMessage(String text) throws Exception{
  AppElement rtxCompleteMessage=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBLandingRegistered_rtxCompleteMessage"));
  rtxCompleteMessage.type(text);
  }



}