package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmEStmtEnableEStatements {


  public frmEStmtEnableEStatements() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmEStmtEnableEStatements_frmEStmtEnableEStatements"));
  }
public void btnEnable() throws Exception{ 
  AppElement btnEnable=new AppElement(MobileBankingWidgetId.getWidgetId("frmEStmtEnableEStatements_btnEnable"));
  btnEnable.click();
  }
public void btnTAndC() throws Exception{ 
  AppElement btnTAndC=new AppElement(MobileBankingWidgetId.getWidgetId("frmEStmtEnableEStatements_btnTAndC"));
  btnTAndC.click();
  }




public void segSelectEmailId(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmEStmtEnableEStatements_segSelectEmailId"),MobileBankingWidgetId.getWidgetId("frmEStmtEnableEStatements_flxEStmtEmail"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}