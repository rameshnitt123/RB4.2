package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmBillPayEditName {


  public frmBillPayEditName() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayEditName_frmBillPayEditName"));
  }
public void btnSave() throws Exception{ 
  AppElement btnSave=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayEditName_btnSave"));
  btnSave.click();
  }

public void txtName(String text) throws Exception{
  AppElement txtName=new AppElement(MobileBankingWidgetId.getWidgetId("frmBillPayEditName_txtName"));
  txtName.type(text);
  }




}