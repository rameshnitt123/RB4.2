package test.MobileBanking.forms;

import java.io.IOException;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppElement;
import test.common.SgConfiguration;

public class frmPreferencesAccountPreview {


  public frmPreferencesAccountPreview() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmPreferencesAccountPreview_frmPreferencesAccountPreview"));
  }

  public void clickEnableAccountPreview() throws IOException, Exception {
		//implemented only for phone
		if(AppSpecificFunctions.isPhone())
		{
			AppSpecificFunctions.clickAppElement("frmPreferencesAccountPreview_imgSwitch");
		}
	}

	public frmSettings clickBack() throws Exception {
//		AppSpecificFunctions.clickAppElement("frmSettings_imgBack");
		if (SgConfiguration.getInstance().isAndroid())
			AppSpecificFunctions.clickAppElement("frmSettings_imgBack");
		else
			AppSpecificFunctions.clickAppElement("Settings");
		return new frmSettings();
	}


}