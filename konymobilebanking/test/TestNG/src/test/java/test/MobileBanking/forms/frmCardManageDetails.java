package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardManageDetails {


  public frmCardManageDetails() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardManageDetails_frmCardManageDetails"));
  }
public void btnAddNickname() throws Exception{ 
  AppElement btnAddNickname=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardManageDetails_btnAddNickname"));
  btnAddNickname.click();
  }
public void btnEditBillingAddtess() throws Exception{ 
  AppElement btnEditBillingAddtess=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardManageDetails_btnEditBillingAddtess"));
  btnEditBillingAddtess.click();
  }
public void btnEditNickName() throws Exception{ 
  AppElement btnEditNickName=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardManageDetails_btnEditNickName"));
  btnEditNickName.click();
  }





}