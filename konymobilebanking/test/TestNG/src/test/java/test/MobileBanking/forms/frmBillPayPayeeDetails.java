package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmBillPayPayeeDetails {


  public frmBillPayPayeeDetails() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayPayeeDetails_frmBillPayPayeeDetails"));
  }
public void btnActivateEBill() throws Exception{ 
  AppElement btnActivateEBill=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayPayeeDetails_btnActivateEBill"));
  btnActivateEBill.click();
  }
public void btnDeactivateEBill() throws Exception{ 
  AppElement btnDeactivateEBill=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayPayeeDetails_btnDeactivateEBill"));
  btnDeactivateEBill.click();
  }
public void btnDeleteRecipient() throws Exception{ 
  AppElement btnDeleteRecipient=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayPayeeDetails_btnDeleteRecipient"));
  btnDeleteRecipient.click();
  }
public void btnEditNickName() throws Exception{ 
  AppElement btnEditNickName=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayPayeeDetails_btnEditNickName"));
  btnEditNickName.click();
  }
public void btnEditPayeeAddress() throws Exception{ 
  AppElement btnEditPayeeAddress=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayPayeeDetails_btnEditPayeeAddress"));
  btnEditPayeeAddress.click();
  }
public void btnPayAPerson() throws Exception{ 
  AppElement btnPayAPerson=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayPayeeDetails_btnPayAPerson"));
  btnPayAPerson.click();
  }
public void btnPayBill() throws Exception{ 
  AppElement btnPayBill=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayPayeeDetails_btnPayBill"));
  btnPayBill.click();
  }
public void btnViewBill() throws Exception{ 
  AppElement btnViewBill=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayPayeeDetails_btnViewBill"));
  btnViewBill.click();
  }





}