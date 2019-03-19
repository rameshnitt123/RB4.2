package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmNAOReviewProduct {


  public frmNAOReviewProduct() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmNAOReviewProduct_frmNAOReviewProduct"));
  }
public void btnEdit() throws Exception{ 
  AppElement btnEdit=new AppElement(MobileBankingWidgetId.getWidgetId("frmNAOReviewProduct_btnEdit"));
  btnEdit.click();
  }
public void btnPersonalInfoEdit() throws Exception{ 
  AppElement btnPersonalInfoEdit=new AppElement(MobileBankingWidgetId.getWidgetId("frmNAOReviewProduct_btnPersonalInfoEdit"));
  btnPersonalInfoEdit.click();
  }
public void btnSSNEdit() throws Exception{ 
  AppElement btnSSNEdit=new AppElement(MobileBankingWidgetId.getWidgetId("frmNAOReviewProduct_btnSSNEdit"));
  btnSSNEdit.click();
  }
public void btnSubmit() throws Exception{ 
  AppElement btnSubmit=new AppElement(MobileBankingWidgetId.getWidgetId("frmNAOReviewProduct_btnSubmit"));
  btnSubmit.click();
  }


public void rtxDescription(String text) throws Exception{
  AppElement rtxDescription=new AppElement(MobileBankingWidgetId.getWidgetId("frmNAOReviewProduct_rtxDescription"));
  rtxDescription.type(text);
  }


public void segPersonalInfo(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmNAOReviewProduct_segPersonalInfo"),MobileBankingWidgetId.getWidgetId("frmNAOReviewProduct_flxMain"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segReviewProduct(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmNAOReviewProduct_segReviewProduct"),MobileBankingWidgetId.getWidgetId("frmNAOReviewProduct_btnViewDetails"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segSSN(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmNAOReviewProduct_segSSN"),MobileBankingWidgetId.getWidgetId("frmNAOReviewProduct_flxMain"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}