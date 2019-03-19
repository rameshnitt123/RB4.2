package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmPFMTransactionDetails {


  public frmPFMTransactionDetails() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmPFMTransactionDetails_frmPFMTransactionDetails"));
  }
public void btnCancelTransaction() throws Exception{ 
  AppElement btnCancelTransaction=new AppElement(MobileBankingWidgetId.getWidgetId("frmPFMTransactionDetails_btnCancelTransaction"));
  btnCancelTransaction.click();
  }
public void btnDisputeTransaction() throws Exception{ 
  AppElement btnDisputeTransaction=new AppElement(MobileBankingWidgetId.getWidgetId("frmPFMTransactionDetails_btnDisputeTransaction"));
  btnDisputeTransaction.click();
  }
public void btnRepeatTransactionTrans() throws Exception{ 
  AppElement btnRepeatTransactionTrans=new AppElement(MobileBankingWidgetId.getWidgetId("frmPFMTransactionDetails_btnRepeatTransactionTrans"));
  btnRepeatTransactionTrans.click();
  }
public void btnSetCategory() throws Exception{ 
  AppElement btnSetCategory=new AppElement(MobileBankingWidgetId.getWidgetId("frmPFMTransactionDetails_btnSetCategory"));
  btnSetCategory.click();
  }





}