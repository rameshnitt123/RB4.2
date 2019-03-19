package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBRegularSavings {


  public frmOBRegularSavings() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBRegularSavings_frmOBRegularSavings"));
  }
public void btnCharges() throws Exception{ 
  AppElement btnCharges=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBRegularSavings_btnCharges"));
  btnCharges.click();
  }
public void btnFeatures() throws Exception{ 
  AppElement btnFeatures=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBRegularSavings_btnFeatures"));
  btnFeatures.click();
  }
public void btnInfo() throws Exception{ 
  AppElement btnInfo=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBRegularSavings_btnInfo"));
  btnInfo.click();
  }


public void rtxData(String text) throws Exception{
  AppElement rtxData=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBRegularSavings_rtxData"));
  rtxData.type(text);
  }



}