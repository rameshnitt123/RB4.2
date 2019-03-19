package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.SgConfiguration;
import test.common.ListBox;

import java.io.IOException;

import test.MobileBanking.MobileBankingWidgetId;

public class frmAlertsAccountList {


  public frmAlertsAccountList() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmAlertsAccountList_frmAlertsAccountList"));
  }




public void segAlert(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmAlertsAccountList_segAlert"),MobileBankingWidgetId.getWidgetId("frmAlertsAccountList_CopyflxSettings0c389a41e15234d"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
			e.printStackTrace();
		}
	}

public void clickEnableAccountAlerts() throws IOException, Exception {
	if(AppSpecificFunctions.isPhone())
	{
		AppSpecificFunctions.clickAppElement("frmAlertsAccountList_imgSwitch");
		AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmAlertsAccountList_frmAlertsAccountList"));
	}
}
public void clickDeEnableAccountAlerts() throws IOException, Exception {
	if(AppSpecificFunctions.isPhone())
	{
		AppSpecificFunctions.clickAppElement("frmAlertsAccountList_imgSwitch");
	}
}

public void clickBack() throws IOException, Exception {
	if (SgConfiguration.getInstance().isAndroid())
		AppSpecificFunctions.clickAppElement("frmSettings_imgBack");
	else
		AppSpecificFunctions.clickAppElement("Settings");
//	Thread.sleep(2000);
//	return new frmSettings();
} 

}