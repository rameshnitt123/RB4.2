package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmEnrollAccinfo {


  public frmEnrollAccinfo() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmEnrollAccinfo_frmEnrollAccinfo"));
  }
public void btnContinueAccountInfo() throws Exception{ 
  AppElement btnContinueAccountInfo=new AppElement(MobileBankingWidgetId.getWidgetId("frmEnrollAccinfo_btnContinueAccountInfo"));
  btnContinueAccountInfo.click();
  }
public void btnEdit() throws Exception{ 
  AppElement btnEdit=new AppElement(MobileBankingWidgetId.getWidgetId("frmEnrollAccinfo_btnEdit"));
  btnEdit.click();
  }


public void rtxtnc(String text) throws Exception{
  AppElement rtxtnc=new AppElement(MobileBankingWidgetId.getWidgetId("frmEnrollAccinfo_rtxtnc"));
  rtxtnc.type(text);
  }


public void segAccounts(String label) throws Exception{
    try {
    AppElement.scrollUntilVisible(label);
    Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmEnrollAccinfo_segAccounts"),MobileBankingWidgetId.getWidgetId("frmEnrollAccinfo_flxAccountInfo"));
    lblStatusKA.clickSegRowElementbyLabel(label);
    }catch(Exception e){
      e.printStackTrace();
    }
  } 

}