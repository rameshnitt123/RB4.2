package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmOBSecurityQuestions {


  public frmOBSecurityQuestions() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSecurityQuestions_frmOBSecurityQuestions"));
  }
public void btnCompleteCancel() throws Exception{ 
  AppElement btnCompleteCancel=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSecurityQuestions_btnCompleteCancel"));
  btnCompleteCancel.click();
  }
public void btnCompleteContinue() throws Exception{ 
  AppElement btnCompleteContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSecurityQuestions_btnCompleteContinue"));
  btnCompleteContinue.click();
  }
public void btnContinueSecurityQuestions() throws Exception{ 
  AppElement btnContinueSecurityQuestions=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSecurityQuestions_btnContinueSecurityQuestions"));
  btnContinueSecurityQuestions.click();
  }

public void txtQuestionOne(String text) throws Exception{
  AppElement txtQuestionOne=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSecurityQuestions_txtQuestionOne"));
  txtQuestionOne.type(text);
  }
public void txtQuestionThree(String text) throws Exception{
  AppElement txtQuestionThree=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSecurityQuestions_txtQuestionThree"));
  txtQuestionThree.type(text);
  }
public void txtQuestionTwo(String text) throws Exception{
  AppElement txtQuestionTwo=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSecurityQuestions_txtQuestionTwo"));
  txtQuestionTwo.type(text);
  }

public void rtxCompleteMessage(String text) throws Exception{
  AppElement rtxCompleteMessage=new AppElement(MobileBankingWidgetId.getWidgetId("frmOBSecurityQuestions_rtxCompleteMessage"));
  rtxCompleteMessage.type(text);
  }



}