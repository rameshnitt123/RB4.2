package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.SgConfiguration;
import test.common.ListBox;

import java.io.IOException;
import java.util.List;

import test.MobileBanking.MobileBankingNames;
import test.MobileBanking.MobileBankingWidgetId;

public class frmSupportInfo {


  public frmSupportInfo() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmSupportInfo_frmSupportInfo"));
  }


public void rtxInfo(String text) throws Exception{
  AppElement rtxInfo=new AppElement(MobileBankingWidgetId.getWidgetId("frmSupportInfo_rtxInfo"));
  rtxInfo.type(text);
  }


public void segFaq(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmSupportInfo_segFaq"),MobileBankingWidgetId.getWidgetId("frmSupportInfo_flxFaq"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	}


public boolean isLabelVisible(String headerlbl) throws IOException, Exception {
	boolean visible = AppElement.waitForName(MobileBankingNames.getWidgetName(headerlbl));
	return visible;
}


public frmSupport clickimgBack() throws IOException, Exception {
	if (SgConfiguration.getInstance().isAndroid()){
	AppSpecificFunctions.clickAppElement("frmSupportInfo_imgBack");
	return new frmSupport();
	}
	else
	{
		AppSpecificFunctions.clickAppElement("frmSupportInfo_Support");
		return new frmSupport();
	}
	
	
}

}