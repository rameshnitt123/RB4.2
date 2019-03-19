package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmAlertsAccountDetail {


  public frmAlertsAccountDetail() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmAlertsAccountDetail_frmAlertsAccountDetail"));
  }




public void segAlert(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmAlertsAccountDetail_segAlert"),MobileBankingWidgetId.getWidgetId("frmAlertsAccountDetail_flxSettings"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void SegAlertSettingList(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmAlertsAccountDetail_SegAlertSettingList"),MobileBankingWidgetId.getWidgetId("frmAlertsAccountDetail_btnActive"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}