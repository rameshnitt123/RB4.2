package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmProfileAddAddress {


  public frmProfileAddAddress() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileAddAddress_frmProfileAddAddress"));
  }
public void btnContinueResidentialAddress() throws Exception{ 
  AppElement btnContinueResidentialAddress=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileAddAddress_btnContinueResidentialAddress"));
  btnContinueResidentialAddress.click();
  }

public void tbxSearch(String text) throws Exception{
  AppElement tbxSearch=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileAddAddress_tbxSearch"));
  tbxSearch.type(text);
  }
public void txtCountry(String text) throws Exception{
  AppElement txtCountry=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileAddAddress_txtCountry"));
  txtCountry.type(text);
  }
public void txtResidentialAddressCity(String text) throws Exception{
  AppElement txtResidentialAddressCity=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileAddAddress_txtResidentialAddressCity"));
  txtResidentialAddressCity.type(text);
  }
public void txtResidentialAddressLineOne(String text) throws Exception{
  AppElement txtResidentialAddressLineOne=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileAddAddress_txtResidentialAddressLineOne"));
  txtResidentialAddressLineOne.type(text);
  }
public void txtResidentialAddressLineTwo(String text) throws Exception{
  AppElement txtResidentialAddressLineTwo=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileAddAddress_txtResidentialAddressLineTwo"));
  txtResidentialAddressLineTwo.type(text);
  }
public void txtResidentialAddressState(String text) throws Exception{
  AppElement txtResidentialAddressState=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileAddAddress_txtResidentialAddressState"));
  txtResidentialAddressState.type(text);
  }
public void txtResidentialAddressZipCode(String text) throws Exception{
  AppElement txtResidentialAddressZipCode=new AppElement(MobileBankingWidgetId.getWidgetId("frmProfileAddAddress_txtResidentialAddressZipCode"));
  txtResidentialAddressZipCode.type(text);
  }



public void segAddresses(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmProfileAddAddress_segAddresses"),MobileBankingWidgetId.getWidgetId("frmProfileAddAddress_flxSearchAddress"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

}