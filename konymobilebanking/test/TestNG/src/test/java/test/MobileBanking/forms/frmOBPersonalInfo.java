package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBPersonalInfo {


  public frmOBPersonalInfo() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBPersonalInfo_frmOBPersonalInfo"));
  }
public void btnCancelSearchAddress() throws Exception{ 
  AppElement btnCancelSearchAddress=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBPersonalInfo_btnCancelSearchAddress"));
  btnCancelSearchAddress.click();
  }
public void btnChangeIDPersonalInfo() throws Exception{ 
  AppElement btnChangeIDPersonalInfo=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBPersonalInfo_btnChangeIDPersonalInfo"));
  btnChangeIDPersonalInfo.click();
  }
public void btnContinuePersonalInfo() throws Exception{ 
  AppElement btnContinuePersonalInfo=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBPersonalInfo_btnContinuePersonalInfo"));
  btnContinuePersonalInfo.click();
  }
public void btnEditPersonalInfo() throws Exception{ 
  AppElement btnEditPersonalInfo=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBPersonalInfo_btnEditPersonalInfo"));
  btnEditPersonalInfo.click();
  }

public void txtSearchAddress(String text) throws Exception{
  AppElement txtSearchAddress=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBPersonalInfo_txtSearchAddress"));
  txtSearchAddress.type(text);
  }



public void segAddresses(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmOBPersonalInfo_segAddresses"),MobileBankingWidgetId.getWidgetId("frmOBPersonalInfo_flxSearchAddress"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}