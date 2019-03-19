package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmBillPayZipCode {


  public frmBillPayZipCode() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayZipCode_frmBillPayZipCode"));
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayZipCode_btnContinue"));
  btnContinue.click();
  }

public void txtZipCode(String text) throws Exception{
  AppElement txtZipCode=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayZipCode_txtZipCode"));
  txtZipCode.type(text);
  }




}