package test.MobileBanking.forms;

import java.io.IOException;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.SgConfiguration;
import test.common.ListBox;

public class frmTransferConfirmation {


  public frmTransferConfirmation() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmTransferConfirmation_btnContinue"));
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmTransferConfirmation_btnContinue"));
  btnContinue.click();
  }

public frmTransfers btnCancel() throws Exception{ 
	  AppElement btnCancel=new AppElement(MobileBankingWidgetId.getWidgetId("frmTransferConfirmation_btnCancel"));
	  btnCancel.click();
	return new frmTransfers();
}

public void txtDescription(String text) throws Exception{
  AppElement txtDescription=new AppElement(MobileBankingWidgetId.getWidgetId("frmTransferConfirmation_txtDescription"));
  txtDescription.type(text);
  }



public void segDetails(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmTransferConfirmation_segDetails"),MobileBankingWidgetId.getWidgetId("frmTransferConfirmation_flxSeparator"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public boolean isTransfersuccessAlertVisible() throws Exception {
	//returns true if InvalidCredential label is visible
//	AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmLogin_lblPopup"));
	boolean visible = AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmLogin_lblPopup"));
	if(visible)
	  return true;
	else 
      return false;
}
public frmTransfers clickCancel() throws Exception {
	if(SgConfiguration.getInstance().isAndroid())
		btnCancel();
	else
		imgCancel();
	return new frmTransfers();
}
	
private frmTransfers imgCancel() throws IOException, Exception {
	AppElement btnCancel=new AppElement(MobileBankingWidgetId.getWidgetId("frmTransferConfirmation_Cancel"));
	  btnCancel.click();
	return new frmTransfers();
	
}
}