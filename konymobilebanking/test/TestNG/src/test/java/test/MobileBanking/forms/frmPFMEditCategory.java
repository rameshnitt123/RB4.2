package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmPFMEditCategory {


  public frmPFMEditCategory() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmPFMEditCategory_frmPFMEditCategory"));
  }
public void btnSave() throws Exception{ 
  AppElement btnSave=new AppElement(MobileBankingWidgetId.getWidgetId("frmPFMEditCategory_btnSave"));
  btnSave.click();
  }




public void segCategories(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmPFMEditCategory_segCategories"),MobileBankingWidgetId.getWidgetId("frmPFMEditCategory_flxArrow"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}