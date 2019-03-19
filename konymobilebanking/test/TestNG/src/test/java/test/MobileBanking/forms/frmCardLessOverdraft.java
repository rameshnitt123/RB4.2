package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardLessOverdraft {


  public frmCardLessOverdraft() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessOverdraft_frmCardLessOverdraft"));
  }
public frmCardLessCWCode btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessOverdraft_btnContinue"));
  btnContinue.click();
return new frmCardLessCWCode();
  }
public void btnEditTransaction() throws Exception{ 
  AppElement btnEditTransaction=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessOverdraft_btnEditTransaction"));
  btnEditTransaction.click();
  }




public void segAccounts(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmCardLessOverdraft_segAccounts"),MobileBankingWidgetId.getWidgetId("frmCardLessOverdraft_flxAccountName"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}