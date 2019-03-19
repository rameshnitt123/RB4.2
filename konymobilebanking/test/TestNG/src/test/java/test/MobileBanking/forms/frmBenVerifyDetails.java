package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmBenVerifyDetails {


  public frmBenVerifyDetails() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmBenVerifyDetails_frmBenVerifyDetails"));
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmBenVerifyDetails_btnContinue"));
  btnContinue.click();
  }

public void txtAccNickName(String text) throws Exception{
  AppElement txtAccNickName=new AppElement(MobileBankingWidgetId.getWidgetId("frmBenVerifyDetails_txtAccNickName"));
  txtAccNickName.type(text);
  }




}