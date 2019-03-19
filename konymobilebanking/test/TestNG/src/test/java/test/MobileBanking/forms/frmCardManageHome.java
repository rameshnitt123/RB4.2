package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardManageHome {


  public frmCardManageHome() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardManageHome_frmCardManageHome"));
  }
public void btnCallCustomerCare() throws Exception{ 
  AppElement btnCallCustomerCare=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardManageHome_btnCallCustomerCare"));
  btnCallCustomerCare.click();
  }
public void btnManageTravelPlans() throws Exception{ 
  AppElement btnManageTravelPlans=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardManageHome_btnManageTravelPlans"));
  btnManageTravelPlans.click();
  }





}