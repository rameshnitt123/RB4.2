package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmAccInfoEdit {


  public frmAccInfoEdit() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmAccInfoEdit_frmAccInfoEdit"));
  }
public void btnSave() throws Exception{ 
  AppElement btnSave=new AppElement(MobileBankingWidgetId.getWidgetId("frmAccInfoEdit_btnSave"));
  btnSave.click();
  }

public void txtNickName(String text) throws Exception{
  AppElement txtNickName=new AppElement(MobileBankingWidgetId.getWidgetId("frmAccInfoEdit_txtNickName"));
  txtNickName.type(text);
  }




}