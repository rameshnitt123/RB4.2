package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmBenAccountType {


  public frmBenAccountType() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmBenAccountType_frmBenAccountType"));
  }
public void btnCheckingAcc() throws Exception{ 
  AppElement btnCheckingAcc=new AppElement(MobileBankingWidgetId.getWidgetId("frmBenAccountType_btnCheckingAcc"));
  btnCheckingAcc.click();
  }
public void btnFdAccount() throws Exception{ 
  AppElement btnFdAccount=new AppElement(MobileBankingWidgetId.getWidgetId("frmBenAccountType_btnFdAccount"));
  btnFdAccount.click();
  }
public void btnLoanAcc() throws Exception{ 
  AppElement btnLoanAcc=new AppElement(MobileBankingWidgetId.getWidgetId("frmBenAccountType_btnLoanAcc"));
  btnLoanAcc.click();
  }
public void btnSavingAccount() throws Exception{ 
  AppElement btnSavingAccount=new AppElement(MobileBankingWidgetId.getWidgetId("frmBenAccountType_btnSavingAccount"));
  btnSavingAccount.click();
  }





}