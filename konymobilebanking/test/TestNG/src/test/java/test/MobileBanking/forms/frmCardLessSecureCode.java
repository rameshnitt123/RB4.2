package test.MobileBanking.forms;

import java.io.IOException;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardLessSecureCode {


  public frmCardLessSecureCode() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessSecureCode_frmCardLessSecureCode"));
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessSecureCode_btnContinue"));
  btnContinue.click();
  }

public void txtReenterCode(String text) throws Exception{
  AppElement txtReenterCode=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessSecureCode_txtReenterCode"));
  txtReenterCode.type(text);
  }
public void txtSecureCode(String text) throws Exception{
  AppElement txtSecureCode=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessSecureCode_txtSecureCode"));
  txtSecureCode.type(text);
  }

public boolean isCurrentFormVisible() throws IOException, Exception{
	if(AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmCardLessSecureCode_frmCardLessSecureCode"))){
		return true;
	}
	return false;
}

public frmCardLessHome btnRight() throws Exception{ 
	  AppElement btnRight=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessConfWithdraw_btnRight"));
	  btnRight.click();
	  return new frmCardLessHome();
	  }


}