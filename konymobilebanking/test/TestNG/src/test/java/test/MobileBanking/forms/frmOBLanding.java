package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBLanding {


  public frmOBLanding() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBLanding_frmOBLanding"));
  }
public void btnCompleteCancel() throws Exception{ 
  AppElement btnCompleteCancel=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBLanding_btnCompleteCancel"));
  btnCompleteCancel.click();
  }
public void btnCompleteContinue() throws Exception{ 
  AppElement btnCompleteContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBLanding_btnCompleteContinue"));
  btnCompleteContinue.click();
  }
public void btnLandingOne() throws Exception{ 
  AppElement btnLandingOne=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBLanding_btnLandingOne"));
  btnLandingOne.click();
  }
public void btnLandingTwo() throws Exception{ 
  AppElement btnLandingTwo=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBLanding_btnLandingTwo"));
  btnLandingTwo.click();
  }
public void btnLogoutLanding() throws Exception{ 
  AppElement btnLogoutLanding=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBLanding_btnLogoutLanding"));
  btnLogoutLanding.click();
  }


public void rtxCompleteMessage(String text) throws Exception{
  AppElement rtxCompleteMessage=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBLanding_rtxCompleteMessage"));
  rtxCompleteMessage.type(text);
  }



}