package test.MobileBanking.forms;

import java.io.IOException;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppElement;
import test.common.Segment;

public class frmEnrollCVV {


  public frmEnrollCVV() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmEnrollCVV_frmEnrollCVV"));
  }
public void btnVerify() throws Exception{ 
  AppElement btnVerify=new AppElement(MobileBankingWidgetId.getWidgetId("frmEnrollCVV_btnVerify"));
  btnVerify.click();
  }


public void segCards(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmEnrollCVV_segCards"),MobileBankingWidgetId.getWidgetId("frmEnrollCVV_flxAccountName"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	}
public void clickDropdown() throws IOException, Exception {
	AppElement flxDropDown = new AppElement(MobileBankingWidgetId.getWidgetId("frmEnrollCVV_imgDropdown"));
	flxDropDown.click();
}
public void selectACard() throws IOException, Exception {
	Segment SegCards = new Segment(MobileBankingWidgetId.getWidgetId("frmEnrollCVV_segCards"),MobileBankingWidgetId.getWidgetId("frmEnrollCVV_lblCard"));
//	AppElement RandomCardSelection = lblStatusKA.getElementWithIndex(AppSpecificFunctions.getRandomNumberinRange(lblStatusKA.getRowCount()));
//	SegCards.getSegmentSizeVisibleOnScreen();
	AppElement RandomCardSelection = SegCards.getElementWithIndex(AppSpecificFunctions.getRandomNumberinRange(SegCards.getRowCount()));
	RandomCardSelection.click();
	
}
public frmEnrollSignUp clickbtnVerify() throws IOException, Exception {
	btnVerify();
	return new frmEnrollSignUp();
} 

}