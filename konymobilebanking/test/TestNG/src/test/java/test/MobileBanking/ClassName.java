package test.MobileBanking;

import test.common.SgConfiguration;

public class ClassName {

	public static String getTextview() throws Exception{
		  if(SgConfiguration.getInstance().isAndroid()){
		   return "android.widget.TextView";
		  }else{
		   return "XCUIElementTypeStaticText";
		  }
	}

	public static String getEditText() throws Exception{
		  if(SgConfiguration.getInstance().isAndroid()){
		   return "android.widget.EditText";
		  }else{
		   return "XCUIElementTypeTextField";
		  }
	}

	public static String getRadioGroup() throws Exception{
		  if(SgConfiguration.getInstance().isAndroid()){
		   return "android.widget.RadioGroup";
		  }else{
		   return "XCUIElementTypeSegmentedControl";
		  }
	}
	public static String getRadioButton() throws Exception{
		  if(SgConfiguration.getInstance().isAndroid()){
		   return "android.widget.RadioButton";
		  }else{
		   return "XCUIElementTypeButton";
		  }
	}


	public static String getCheckedTextView() throws Exception{
		  if(SgConfiguration.getInstance().isAndroid()){
		   return "android.widget.CheckedTextView";
		  }else{
		   return "XCUIElementTypeStaticText";
		  }
	}

	public static String getView() throws Exception{
		  if(SgConfiguration.getInstance().isAndroid()){
		   return "android.view.ViewGroup";
		  }else{
		   return "XCUIElementTypeOther";
		  }
	}
	public static String getLinearLayout() throws Exception{
		  if(SgConfiguration.getInstance().isAndroid()){
		   return "android.widget.LinearLayout";
		  }else{
		   return "XCUIElementTypeOther";
	      }
	}

	public static String getImage() throws Exception {
		if(SgConfiguration.getInstance().isAndroid()){
			return "android.widget.ImageView";
		}else{
			return "XCUIElementTypeImage";
	    }
	}
}
