package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardMngNickName {


  public frmCardMngNickName() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngNickName_frmCardMngNickName"));
  }
public void btnUpdate() throws Exception{ 
  AppElement btnUpdate=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngNickName_btnUpdate"));
  btnUpdate.click();
  }

public void txtNickname(String text) throws Exception{
  AppElement txtNickname=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngNickName_txtNickname"));
  txtNickname.type(text);
  }




}