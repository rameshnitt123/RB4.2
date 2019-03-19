package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmEStmtChangeEmail {


  public frmEStmtChangeEmail() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmEStmtChangeEmail_frmEStmtChangeEmail"));
  }
public void btnSave() throws Exception{ 
  AppElement btnSave=new AppElement(MobileBankingWidgetId.getWidgetId("frmEStmtChangeEmail_btnSave"));
  btnSave.click();
  }
public void btnTAndC() throws Exception{ 
  AppElement btnTAndC=new AppElement(MobileBankingWidgetId.getWidgetId("frmEStmtChangeEmail_btnTAndC"));
  btnTAndC.click();
  }




public void segSelectEmailId(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmEStmtChangeEmail_segSelectEmailId"),MobileBankingWidgetId.getWidgetId("frmEStmtChangeEmail_flxEStmtEmail"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}