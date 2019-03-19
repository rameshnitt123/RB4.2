package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardLessOverDraftQR {


  public frmCardLessOverDraftQR() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessOverDraftQR_frmCardLessOverDraftQR"));
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessOverDraftQR_btnContinue"));
  btnContinue.click();
  }
public void btnEditTransaction() throws Exception{ 
  AppElement btnEditTransaction=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessOverDraftQR_btnEditTransaction"));
  btnEditTransaction.click();
  }




public void segAccounts(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmCardLessOverDraftQR_segAccounts"),MobileBankingWidgetId.getWidgetId("frmCardLessOverDraftQR_flxAccountName"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}