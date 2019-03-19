package test.MobileBanking.forms;

import java.io.IOException;

import test.MobileBanking.MobileBankingNames;
import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppElement;
import test.common.Segment;

public class frmSettings {

	String statusOn;
	String statusOff;
	String accountPreview;
	Segment settingsSeg;
	String deviceRegistration;
	Segment alertSettingsSeg;
	String accountAlerts;

	public frmSettings() throws Exception {
		AppElement lblHeader = new AppElement(MobileBankingWidgetId.getWidgetId("frmSettings_frmSettings"));		
	}

	public void segSettingsAlerts(String label) throws Exception {
		try {
			AppElement.scrollUntilVisible(label);
			Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmSettings_segSettingsAlerts"),
					MobileBankingWidgetId.getWidgetId("frmSettings_flxRightWrapper"));
			lblStatusKA.clickSegRowElementbyLabel(label);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void segSettingsDefaultAccount(String label) throws Exception {
		try {
			AppElement.scrollUntilVisible(label);
			Segment lblStatusKA = new Segment(
					MobileBankingWidgetId.getWidgetId("frmSettings_segSettingsDefaultAccount"),
					MobileBankingWidgetId.getWidgetId("frmSettings_flxRightWrapper"));
			lblStatusKA.clickSegRowElementbyLabel(label);
		} catch (Exception e) {

			// Handle Exception Code Here
		}
	}

	public void segSettingsLogin(String label) throws Exception {
		try {
			AppElement.scrollUntilVisible(label);
			Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmSettings_segSettingsLogin"),
					MobileBankingWidgetId.getWidgetId("frmSettings_flxRightWrapper"));
			lblStatusKA.clickSegRowElementbyLabel(label);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void segSettingsProfile(String label) throws Exception {
		try {
			AppElement.scrollUntilVisible(label);
			Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmSettings_segSettingsProfile"),
					MobileBankingWidgetId.getWidgetId("frmSettings_flxRightWrapper"));
			lblStatusKA.clickSegRowElementbyLabel(label);
		} catch (Exception e) {

			// Handle Exception Code Here
		}
	}

	public String getStatus(String label) throws IOException, Exception {

		Segment statusSeg = new Segment(MobileBankingWidgetId.getWidgetId("frmSettings_segSettingsLogin"),
				MobileBankingWidgetId.getWidgetId("segSettings_lblValue"));
		settingsSeg = new Segment(MobileBankingWidgetId.getWidgetId("frmSettings_segSettingsLogin"),
				MobileBankingWidgetId.getWidgetId("segSettings_lblTitle"));
		int index = settingsSeg.getSegRowIndexWithLabel(label);
		return statusSeg.getElementWithIndex(index).getText();
	}
	public String getAlertsStatus(String label) throws IOException, Exception {

		Segment statusSeg = new Segment(MobileBankingWidgetId.getWidgetId("frmSettings_segSettingsAlerts"),
				MobileBankingWidgetId.getWidgetId("segSettings_lblValue"));
		
		alertSettingsSeg = new Segment(MobileBankingWidgetId.getWidgetId("frmSettings_segSettingsAlerts"),
				MobileBankingWidgetId.getWidgetId("segSettings_lblTitle"));
		int index = alertSettingsSeg.getSegRowIndexWithLabel(label);
		return statusSeg.getElementWithIndex(index).getText();
	}
	public frmPreferencesAccountPreview clickAccountPreview() throws Exception {
		accountPreview = MobileBankingNames.getWidgetName("frmSettings_AccountPreview");
		settingsSeg = new Segment(MobileBankingWidgetId.getWidgetId("frmSettings_segSettingsLogin"),
				MobileBankingWidgetId.getWidgetId("segSettings_lblTitle"));
		settingsSeg.clickSegRowElementbyLabel(accountPreview);
		return new frmPreferencesAccountPreview();
	}
	public frmAlertsAccountList clickAccountAlerts() throws Exception {	
		AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmSettings_segSettingsAlerts"));
		accountAlerts = MobileBankingNames.getWidgetName("frmSettings_Alerts");
		alertSettingsSeg = new Segment(MobileBankingWidgetId.getWidgetId("frmSettings_segSettingsAlerts"),
				MobileBankingWidgetId.getWidgetId("segSettings_lblTitle"));
		alertSettingsSeg.clickSegRowElementbyLabel(accountAlerts);
		return new frmAlertsAccountList();
	}

	public frmLogin signOut() throws IOException, Exception {
//		AppSpecificFunctions.clickHamburgerButton();
//		Thread.sleep(2000);
		return AppSpecificFunctions.signOut();
	}

	public frmPreferencesDeviceRegistration clickDeviceRegistrationToON() throws Exception {
		// Enables the device registration
		String statusOn = MobileBankingNames.getWidgetName("frmSettings_statusOn");
		deviceRegistration = MobileBankingNames.getWidgetName("frmSettings_DeviceRegistration");
		if (!(getStatus(deviceRegistration) == statusOn)) {
			settingsSeg = new Segment(MobileBankingWidgetId.getWidgetId("frmSettings_segSettingsLogin"),
					MobileBankingWidgetId.getWidgetId("segSettings_lblTitle"));
			settingsSeg.clickSegRowElementbyLabel(deviceRegistration);
			return new frmPreferencesDeviceRegistration();
		} else {
			System.out.println("####Device Registration is ON already");
			return null;
		}
	}

	public frmPreferencesDeviceRegSecCode clickDeviceRegistration() throws Exception {
		if(AppElement.waitForEnable("frmPreferencesDeviceRegistration_btnRegisterDevice")){
			frmPreferencesDeviceRegistration.btnRegisterDevice();
			return new frmPreferencesDeviceRegSecCode();
		}
		return null;
	}

	public void clickDeviceRegistrationtoOff() throws Exception {
		settingsSeg = new Segment(MobileBankingWidgetId.getWidgetId("frmSettings_segSettingsLogin"),
				MobileBankingWidgetId.getWidgetId("segSettings_lblTitle"));
		deviceRegistration = MobileBankingNames.getWidgetName("frmSettings_DeviceRegistration");
		settingsSeg.clickSegRowElementbyLabel(deviceRegistration);		
	}

	

}