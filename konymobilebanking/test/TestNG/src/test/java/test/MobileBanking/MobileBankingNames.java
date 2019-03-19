package test.MobileBanking;


import test.common.AppResouceBundle;
import test.common.SgConfiguration;

public class MobileBankingNames {
	
	static AppResouceBundle widgetNames;
	
	
	
	public static String getWidgetName(String key) throws Exception{
		if(widgetNames==null)
			if(SgConfiguration.getInstance().getKeyValue("Device").equalsIgnoreCase("Tablet"))
			widgetNames = new AppResouceBundle("tabletWidgetName.properties");
			else
			widgetNames = new AppResouceBundle("mobileWidgetName.properties");
		return widgetNames.getProperty(key);
	}
}
