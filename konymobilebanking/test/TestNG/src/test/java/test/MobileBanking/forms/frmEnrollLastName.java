package test.MobileBanking.forms;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppElement;

public class frmEnrollLastName {


  public frmEnrollLastName() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmEnrollLastName_frmEnrollLastName"));
  }
public frmEnrollDOB btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmEnrollLastName_btnContinue"));
  btnContinue.click();
  return new frmEnrollDOB();
  }

public void tbxLastName(String text) throws Exception{
  AppElement tbxLastName=new AppElement(MobileBankingWidgetId.getWidgetId("frmEnrollLastName_tbxLastName"));
  tbxLastName.type(text);
  }


}