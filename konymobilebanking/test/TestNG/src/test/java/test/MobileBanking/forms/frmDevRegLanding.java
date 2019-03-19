package test.MobileBanking.forms;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppElement;

public class frmDevRegLanding {


  public frmDevRegLanding() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmDevRegLanding_frmDevRegLanding"));
  }
public void btnNoThanks() throws Exception{ 
  AppElement btnNoThanks=new AppElement(MobileBankingWidgetId.getWidgetId("frmDevRegLanding_btnNoThanks"));
  btnNoThanks.click();
  }
public void btnRegNow() throws Exception{ 
  AppElement btnRegNow=new AppElement(MobileBankingWidgetId.getWidgetId("frmDevRegLanding_btnRegNow"));
  btnRegNow.click();
  }

}