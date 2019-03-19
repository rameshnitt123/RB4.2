package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBDependents {


  public frmOBDependents() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBDependents_frmOBDependents"));
  }
public void btnChangeIDPersonalInfo() throws Exception{ 
  AppElement btnChangeIDPersonalInfo=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBDependents_btnChangeIDPersonalInfo"));
  btnChangeIDPersonalInfo.click();
  }
public void btnContinuePersonalInfo() throws Exception{ 
  AppElement btnContinuePersonalInfo=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBDependents_btnContinuePersonalInfo"));
  btnContinuePersonalInfo.click();
  }




public void segDependents(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmOBDependents_segDependents"),MobileBankingWidgetId.getWidgetId("frmOBDependents_btnOption"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}