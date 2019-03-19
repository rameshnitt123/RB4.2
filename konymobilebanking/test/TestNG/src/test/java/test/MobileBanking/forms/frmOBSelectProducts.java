package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBSelectProducts {


  public frmOBSelectProducts() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSelectProducts_frmOBSelectProducts"));
  }
public void btnAllow() throws Exception{ 
  AppElement btnAllow=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSelectProducts_btnAllow"));
  btnAllow.click();
  }
public void btnCharges() throws Exception{ 
  AppElement btnCharges=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSelectProducts_btnCharges"));
  btnCharges.click();
  }
public void btnContinueSelectProducts() throws Exception{ 
  AppElement btnContinueSelectProducts=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSelectProducts_btnContinueSelectProducts"));
  btnContinueSelectProducts.click();
  }
public void btnDontAllow() throws Exception{ 
  AppElement btnDontAllow=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSelectProducts_btnDontAllow"));
  btnDontAllow.click();
  }
public void btnFeatures() throws Exception{ 
  AppElement btnFeatures=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSelectProducts_btnFeatures"));
  btnFeatures.click();
  }
public void btnInfo() throws Exception{ 
  AppElement btnInfo=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSelectProducts_btnInfo"));
  btnInfo.click();
  }

public void tbxSearch(String text) throws Exception{
  AppElement tbxSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSelectProducts_tbxSearch"));
  tbxSearch.type(text);
  }

public void rtxCompleteMessage(String text) throws Exception{
  AppElement rtxCompleteMessage=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSelectProducts_rtxCompleteMessage"));
  rtxCompleteMessage.type(text);
  }


public void segProductDetails(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmOBSelectProducts_segProductDetails"),MobileBankingWidgetId.getWidgetId("frmOBSelectProducts_FlexContainer0je14ed46783344"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segSelectProducts(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmOBSelectProducts_segSelectProducts"),MobileBankingWidgetId.getWidgetId("frmOBSelectProducts_btnViewDetails"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}