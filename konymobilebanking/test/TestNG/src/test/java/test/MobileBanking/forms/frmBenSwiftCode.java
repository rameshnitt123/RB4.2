package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmBenSwiftCode {


  public frmBenSwiftCode() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmBenSwiftCode_frmBenSwiftCode"));
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmBenSwiftCode_btnContinue"));
  btnContinue.click();
  }

public void txtSwiftCode(String text) throws Exception{
  AppElement txtSwiftCode=new AppElement(MobileBankingWidgetId.getWidgetId("frmBenSwiftCode_txtSwiftCode"));
  txtSwiftCode.type(text);
  }




}