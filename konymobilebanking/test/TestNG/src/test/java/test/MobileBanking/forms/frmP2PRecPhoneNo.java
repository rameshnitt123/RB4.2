package test.MobileBanking.forms;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;

public class frmP2PRecPhoneNo {


	public frmP2PRecPhoneNo() throws Exception {
		AppElement lblHeader = new AppElement(
				MobileBankingWidgetId
						.getWidgetId("frmP2PRecPhoneNo_frmP2PRecPhoneNo"));
	}

	public frmP2PRecipientName btnContinue() throws Exception {
		AppElement btnContinue = new AppElement(
				MobileBankingWidgetId
						.getWidgetId("frmP2PRecPhoneNo_btnContinue"));
		btnContinue.click();
		return new frmP2PRecipientName();
	}



	public void btnPickFromContacts() throws Exception {
		AppElement btnPickFromContacts = new AppElement(
				MobileBankingWidgetId
						.getWidgetId("frmP2PRecPhoneNo_btnPickFromContacts"));
		btnPickFromContacts.click();
	}

	public void btnPhoneNumber() throws Exception {
		AppElement btnAddRecipient = new AppElement(
				MobileBankingWidgetId
						.getWidgetId("frmRegP2PContactType_btnPhoneNumber"));
		btnAddRecipient.click();
	}

}