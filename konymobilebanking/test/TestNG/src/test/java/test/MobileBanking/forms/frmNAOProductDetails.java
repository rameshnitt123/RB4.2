package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmNAOProductDetails {


  public frmNAOProductDetails() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmNAOProductDetails_frmNAOProductDetails"));
  }
public void btnCharges() throws Exception{ 
  AppElement btnCharges=new AppElement(MobileBankingWidgetId.getWidgetId("frmNAOProductDetails_btnCharges"));
  btnCharges.click();
  }
public void btnFeatures() throws Exception{ 
  AppElement btnFeatures=new AppElement(MobileBankingWidgetId.getWidgetId("frmNAOProductDetails_btnFeatures"));
  btnFeatures.click();
  }
public void btnInfo() throws Exception{ 
  AppElement btnInfo=new AppElement(MobileBankingWidgetId.getWidgetId("frmNAOProductDetails_btnInfo"));
  btnInfo.click();
  }


public void rtxData(String text) throws Exception{
  AppElement rtxData=new AppElement(MobileBankingWidgetId.getWidgetId("frmNAOProductDetails_rtxData"));
  rtxData.type(text);
  }


public void segProductDetails(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmNAOProductDetails_segProductDetails"),MobileBankingWidgetId.getWidgetId("frmNAOProductDetails_FlexContainer0je14ed46783344"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}