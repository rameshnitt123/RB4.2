package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmNAOSelectProduct {


  public frmNAOSelectProduct() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmNAOSelectProduct_frmNAOSelectProduct"));
  }
public void btnAllow() throws Exception{ 
  AppElement btnAllow=new AppElement(MobileBankingWidgetId.getWidgetId("frmNAOSelectProduct_btnAllow"));
  btnAllow.click();
  }
public void btnCharges() throws Exception{ 
  AppElement btnCharges=new AppElement(MobileBankingWidgetId.getWidgetId("frmNAOSelectProduct_btnCharges"));
  btnCharges.click();
  }
public void btnContinueSelectProducts() throws Exception{ 
  AppElement btnContinueSelectProducts=new AppElement(MobileBankingWidgetId.getWidgetId("frmNAOSelectProduct_btnContinueSelectProducts"));
  btnContinueSelectProducts.click();
  }
public void btnDontAllow() throws Exception{ 
  AppElement btnDontAllow=new AppElement(MobileBankingWidgetId.getWidgetId("frmNAOSelectProduct_btnDontAllow"));
  btnDontAllow.click();
  }
public void btnFeatures() throws Exception{ 
  AppElement btnFeatures=new AppElement(MobileBankingWidgetId.getWidgetId("frmNAOSelectProduct_btnFeatures"));
  btnFeatures.click();
  }
public void btnInfo() throws Exception{ 
  AppElement btnInfo=new AppElement(MobileBankingWidgetId.getWidgetId("frmNAOSelectProduct_btnInfo"));
  btnInfo.click();
  }

public void tbxSearch(String text) throws Exception{
  AppElement tbxSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmNAOSelectProduct_tbxSearch"));
  tbxSearch.type(text);
  }

public void rtxCompleteMessage(String text) throws Exception{
  AppElement rtxCompleteMessage=new AppElement(MobileBankingWidgetId.getWidgetId("frmNAOSelectProduct_rtxCompleteMessage"));
  rtxCompleteMessage.type(text);
  }


public void segProductDetails(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmNAOSelectProduct_segProductDetails"),MobileBankingWidgetId.getWidgetId("frmNAOSelectProduct_FlexContainer0je14ed46783344"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segSelectProducts(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmNAOSelectProduct_segSelectProducts"),MobileBankingWidgetId.getWidgetId("frmNAOSelectProduct_btnViewDetails"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}