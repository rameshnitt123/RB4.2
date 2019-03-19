package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardMngReplaceCardConfirm {


  public frmCardMngReplaceCardConfirm() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngReplaceCardConfirm_frmCardMngReplaceCardConfirm"));
  }
public void btnSubmit() throws Exception{ 
  AppElement btnSubmit=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngReplaceCardConfirm_btnSubmit"));
  btnSubmit.click();
  }

public void txtNote(String text) throws Exception{
  AppElement txtNote=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngReplaceCardConfirm_txtNote"));
  txtNote.type(text);
  }




}