package test.MobileBanking.forms;

import java.io.IOException;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.SgConfiguration;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmFullScreenAds {


  public frmFullScreenAds() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmFullScreenAds_frmFullScreenAds"));
  }
public void btnAdAction1Img1() throws Exception{ 
  AppElement btnAdAction1Img1=new AppElement(MobileBankingWidgetId.getWidgetId("frmFullScreenAds_btnAdAction1Img1"));
  btnAdAction1Img1.click();
  }
public void btnAdAction1Img2() throws Exception{ 
  AppElement btnAdAction1Img2=new AppElement(MobileBankingWidgetId.getWidgetId("frmFullScreenAds_btnAdAction1Img2"));
  btnAdAction1Img2.click();
  }
public void btnAdAction1Img3() throws Exception{ 
  AppElement btnAdAction1Img3=new AppElement(MobileBankingWidgetId.getWidgetId("frmFullScreenAds_btnAdAction1Img3"));
  btnAdAction1Img3.click();
  }
public void btnAdAction1Img4() throws Exception{ 
  AppElement btnAdAction1Img4=new AppElement(MobileBankingWidgetId.getWidgetId("frmFullScreenAds_btnAdAction1Img4"));
  btnAdAction1Img4.click();
  }
public void btnAdAction1Img5() throws Exception{ 
  AppElement btnAdAction1Img5=new AppElement(MobileBankingWidgetId.getWidgetId("frmFullScreenAds_btnAdAction1Img5"));
  btnAdAction1Img5.click();
  }
public void btnAdAction2Img1() throws Exception{ 
  AppElement btnAdAction2Img1=new AppElement(MobileBankingWidgetId.getWidgetId("frmFullScreenAds_btnAdAction2Img1"));
  btnAdAction2Img1.click();
  }
public void btnAdAction2Img2() throws Exception{ 
  AppElement btnAdAction2Img2=new AppElement(MobileBankingWidgetId.getWidgetId("frmFullScreenAds_btnAdAction2Img2"));
  btnAdAction2Img2.click();
  }
public void btnAdAction2Img3() throws Exception{ 
  AppElement btnAdAction2Img3=new AppElement(MobileBankingWidgetId.getWidgetId("frmFullScreenAds_btnAdAction2Img3"));
  btnAdAction2Img3.click();
  }
public void btnAdAction2Img4() throws Exception{ 
  AppElement btnAdAction2Img4=new AppElement(MobileBankingWidgetId.getWidgetId("frmFullScreenAds_btnAdAction2Img4"));
  btnAdAction2Img4.click();
  }
public void btnAdAction2Img5() throws Exception{ 
  AppElement btnAdAction2Img5=new AppElement(MobileBankingWidgetId.getWidgetId("frmFullScreenAds_btnAdAction2Img5"));
  btnAdAction2Img5.click();
  }


public void rtxLblAdAction1Img1(String text) throws Exception{
  AppElement rtxLblAdAction1Img1=new AppElement(MobileBankingWidgetId.getWidgetId("frmFullScreenAds_rtxLblAdAction1Img1"));
  rtxLblAdAction1Img1.type(text);
  }
public void rtxLblAdAction1Img2(String text) throws Exception{
  AppElement rtxLblAdAction1Img2=new AppElement(MobileBankingWidgetId.getWidgetId("frmFullScreenAds_rtxLblAdAction1Img2"));
  rtxLblAdAction1Img2.type(text);
  }
public void rtxLblAdAction1Img3(String text) throws Exception{
  AppElement rtxLblAdAction1Img3=new AppElement(MobileBankingWidgetId.getWidgetId("frmFullScreenAds_rtxLblAdAction1Img3"));
  rtxLblAdAction1Img3.type(text);
  }
public void rtxLblAdAction1Img4(String text) throws Exception{
  AppElement rtxLblAdAction1Img4=new AppElement(MobileBankingWidgetId.getWidgetId("frmFullScreenAds_rtxLblAdAction1Img4"));
  rtxLblAdAction1Img4.type(text);
  }
public void rtxLblAdAction1Img5(String text) throws Exception{
  AppElement rtxLblAdAction1Img5=new AppElement(MobileBankingWidgetId.getWidgetId("frmFullScreenAds_rtxLblAdAction1Img5"));
  rtxLblAdAction1Img5.type(text);
  }
public void rtxLblAdAction2Img1(String text) throws Exception{
  AppElement rtxLblAdAction2Img1=new AppElement(MobileBankingWidgetId.getWidgetId("frmFullScreenAds_rtxLblAdAction2Img1"));
  rtxLblAdAction2Img1.type(text);
  }
public void rtxLblAdAction2Img2(String text) throws Exception{
  AppElement rtxLblAdAction2Img2=new AppElement(MobileBankingWidgetId.getWidgetId("frmFullScreenAds_rtxLblAdAction2Img2"));
  rtxLblAdAction2Img2.type(text);
  }
public void rtxLblAdAction2Img3(String text) throws Exception{
  AppElement rtxLblAdAction2Img3=new AppElement(MobileBankingWidgetId.getWidgetId("frmFullScreenAds_rtxLblAdAction2Img3"));
  rtxLblAdAction2Img3.type(text);
  }
public void rtxLblAdAction2Img4(String text) throws Exception{
  AppElement rtxLblAdAction2Img4=new AppElement(MobileBankingWidgetId.getWidgetId("frmFullScreenAds_rtxLblAdAction2Img4"));
  rtxLblAdAction2Img4.type(text);
  }
public void rtxLblAdAction2Img5(String text) throws Exception{
  AppElement rtxLblAdAction2Img5=new AppElement(MobileBankingWidgetId.getWidgetId("frmFullScreenAds_rtxLblAdAction2Img5"));
  rtxLblAdAction2Img5.type(text);
  }

public frmDashboardAggregated clickCloseimg() throws IOException, Exception
{
	 AppSpecificFunctions.clickAppElement("frmFullScreenAds_imgCancel");
	 return new frmDashboardAggregated();
}

public String getCurrentAdImgId() throws IOException, Exception {
    String adImgId =null;
    if (SgConfiguration.getInstance().isAndroid()){
    for(int i=1;i<=5;i++)
    {
      for(int j=1;j<=2;j++)
      {
      adImgId = "frmFullScreenAds_btnAdAction"+j+"Img"+i;
      if(AppElement.isElementVisible("id", MobileBankingWidgetId.getWidgetId(adImgId)))
      {
        return adImgId;
      }
      }
    }
    }
    else if (SgConfiguration.getInstance().isIOS())
    {
    	
          for(int j=1;j<=5;j++)
          {
          adImgId = "frmFullScreenAds_imgAd"+j;
          if(AppElement.isElementVisible("id", MobileBankingWidgetId.getWidgetId(adImgId)))
          {
            return adImgId;
          }
        }
    }
    System.out.println("Not on PostLogin Ad's Form");
    return null;
}

public void swipePreviousAd() throws IOException, Exception
{
   AppElement adSwipeFlex = new AppElement(MobileBankingWidgetId.getWidgetId("frmFullScreenAds_flxScrollContainerAds"));
   adSwipeFlex.swipeRight();
}

public void swipeNextAd() throws IOException, Exception
{
   AppElement adSwipeFlex = new AppElement(MobileBankingWidgetId.getWidgetId("frmFullScreenAds_flxScrollContainerAds"));
   adSwipeFlex.swipeLeft();
}
}