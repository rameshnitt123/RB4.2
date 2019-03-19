package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmDepositAmountCD {


  public frmDepositAmountCD() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmDepositAmountCD_frmDepositAmountCD"));
  }
public void btnChange() throws Exception{ 
  AppElement btnChange=new AppElement(MobileBankingWidgetId.getWidgetId("frmDepositAmountCD_btnChange"));
  btnChange.click();
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmDepositAmountCD_btnContinue"));
  btnContinue.click();
  }
public void btnDot() throws Exception{ 
  AppElement btnDot=new AppElement(MobileBankingWidgetId.getWidgetId("frmDepositAmountCD_btnDot"));
  btnDot.click();
  }





}