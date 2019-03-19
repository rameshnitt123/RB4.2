package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmChatbot {


  public frmChatbot() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmChatbot_frmChatbot"));
  }

public void tbxChatbot(String text) throws Exception{
  AppElement tbxChatbot=new AppElement(MobileBankingWidgetId.getWidgetId("frmChatbot_tbxChatbot"));
  tbxChatbot.type(text);
  }




}