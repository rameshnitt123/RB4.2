package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmBillPayVerifyDetails {


  public frmBillPayVerifyDetails() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayVerifyDetails_frmBillPayVerifyDetails"));
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayVerifyDetails_btnContinue"));
  btnContinue.click();
  }

public void txtAccNickName(String text) throws Exception{
  AppElement txtAccNickName=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayVerifyDetails_txtAccNickName"));
  txtAccNickName.type(text);
  }
public void txtNameOnBill(String text) throws Exception{
  AppElement txtNameOnBill=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayVerifyDetails_txtNameOnBill"));
  txtNameOnBill.type(text);
  }




}