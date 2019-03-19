package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmForgot {


  public frmForgot() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgot_frmForgot"));
  }
public void btnEight() throws Exception{ 
  AppElement btnEight=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgot_btnEight"));
  btnEight.click();
  }
public void btnFive() throws Exception{ 
  AppElement btnFive=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgot_btnFive"));
  btnFive.click();
  }
public void btnFour() throws Exception{ 
  AppElement btnFour=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgot_btnFour"));
  btnFour.click();
  }
public void btnNine() throws Exception{ 
  AppElement btnNine=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgot_btnNine"));
  btnNine.click();
  }
public void btnOne() throws Exception{ 
  AppElement btnOne=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgot_btnOne"));
  btnOne.click();
  }
public void btnReSend() throws Exception{ 
  AppElement btnReSend=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgot_btnReSend"));
  btnReSend.click();
  }
public void btnSeven() throws Exception{ 
  AppElement btnSeven=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgot_btnSeven"));
  btnSeven.click();
  }
public void btnSix() throws Exception{ 
  AppElement btnSix=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgot_btnSix"));
  btnSix.click();
  }
public void btnThree() throws Exception{ 
  AppElement btnThree=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgot_btnThree"));
  btnThree.click();
  }
public void btnTwo() throws Exception{ 
  AppElement btnTwo=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgot_btnTwo"));
  btnTwo.click();
  }
public void btnUpdatePassword() throws Exception{ 
  AppElement btnUpdatePassword=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgot_btnUpdatePassword"));
  btnUpdatePassword.click();
  }
public void btnVerify() throws Exception{ 
  AppElement btnVerify=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgot_btnVerify"));
  btnVerify.click();
  }
public void btnZero() throws Exception{ 
  AppElement btnZero=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgot_btnZero"));
  btnZero.click();
  }

public void txtNewPassword(String text) throws Exception{
  AppElement txtNewPassword=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgot_txtNewPassword"));
  txtNewPassword.type(text);
  }
public void txtReEnterPassword(String text) throws Exception{
  AppElement txtReEnterPassword=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgot_txtReEnterPassword"));
  txtReEnterPassword.type(text);
  }

public void rtxForgotInfo(String text) throws Exception{
  AppElement rtxForgotInfo=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgot_rtxForgotInfo"));
  rtxForgotInfo.type(text);
  }
public void rtxSelectCVV(String text) throws Exception{
  AppElement rtxSelectCVV=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgot_rtxSelectCVV"));
  rtxSelectCVV.type(text);
  }
public void rtxSelectSecurityCode(String text) throws Exception{
  AppElement rtxSelectSecurityCode=new AppElement(MobileBankingWidgetId.getWidgetId("frmForgot_rtxSelectSecurityCode"));
  rtxSelectSecurityCode.type(text);
  }



}