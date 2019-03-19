package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmEditNickName {


  public frmEditNickName() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmEditNickName_frmEditNickName"));
  }
public void btnUpdateNickName() throws Exception{ 
  AppElement btnUpdateNickName=new AppElement(MobileBankingWidgetId.getWidgetId("frmEditNickName_btnUpdateNickName"));
  btnUpdateNickName.click();
  }

public void tbxNickname(String text) throws Exception{
  AppElement tbxNickname=new AppElement(MobileBankingWidgetId.getWidgetId("frmEditNickName_tbxNickname"));
  tbxNickname.type(text);
  }




}