package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardMngNewPin {


  public frmCardMngNewPin() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngNewPin_frmCardMngNewPin"));
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngNewPin_btnContinue"));
  btnContinue.click();
  }

public void txtConfirmPin(String text) throws Exception{
  AppElement txtConfirmPin=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngNewPin_txtConfirmPin"));
  txtConfirmPin.type(text);
  }
public void txtCurrentPinValue(String text) throws Exception{
  AppElement txtCurrentPinValue=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngNewPin_txtCurrentPinValue"));
  txtCurrentPinValue.type(text);
  }
public void txtNewPin(String text) throws Exception{
  AppElement txtNewPin=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardMngNewPin_txtNewPin"));
  txtNewPin.type(text);
  }




}