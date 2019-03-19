package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardLessWithdrawQR {


  public frmCardLessWithdrawQR() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessWithdrawQR_frmCardLessWithdrawQR"));
  }
public void btnChange() throws Exception{ 
  AppElement btnChange=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessWithdrawQR_btnChange"));
  btnChange.click();
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessWithdrawQR_btnContinue"));
  btnContinue.click();
  }
public void btnDot() throws Exception{ 
  AppElement btnDot=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessWithdrawQR_btnDot"));
  btnDot.click();
  }

public void tbxAmount(String text) throws Exception{
  AppElement tbxAmount=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessWithdrawQR_tbxAmount"));
  tbxAmount.type(text);
  }




}