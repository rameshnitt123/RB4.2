define(function() {
	var selectedItem = null; 
  
	var toggleRadioButton  =  function(index, rowInfo) {
		var segment = this.view.segContacts;
		var checkedRadio = {
			lblContactData: rowInfo.lblContactData,
			ImgRadio: "radiobtn.png"
	  	};

	  	segment.setDataAt(checkedRadio, index);    
	  	segment.data.forEach(function(element, pos) {     
			if (pos !== index && element.ImgRadio === "radiobtn.png") {
				var uncheckedRadio = {
			  		lblContactData: element.lblContactData,
			 		ImgRadio: "radiobuttoninactive.png"
				};     
				segment.setDataAt(uncheckedRadio, pos);      
			}
		});	  	
	};

	var handleRowClick = function() {
    	var segment = this.view.segContacts;
	  	var index = segment.selectedIndex[1];
	  	var rowInfo = segment.data[index];
    	selectedItem = segment.data[index].lblContactData;
	  	 
	  	if (rowInfo.ImgRadio === "radiobuttoninactive.png") {
			toggleRadioButton.call(this, index, rowInfo);
	  	}
      
  	};

  	var isAPIAvailable =  function(API) {
    	return API && (typeof API === "function");
  	};

  	return {
    	constructor: function(baseConfig, layoutConfig, pspConfig) {
        	this.componentProperties = {
        		mainFlxSkin: "",
        		firstRowSkin: "",
        		secondRowSkin: "",
        		buttonCancelSkin: "",
        		buttonContinueSkin: ""
        	};
    	},

    	initGettersSetters: function() {
      		defineSetter(this, "mainFlx", function(value) {
        		this.componentProperties.mainFlxSkin = value;
      		});

      		defineSetter(this, "firstRowSkin", function(value) {
        		this.componentProperties.firstRowSkin = value;
      		});

      		defineSetter(this, "secondRowSkin", function(value) {
        		this.componentProperties.secondRowSkin = value;
      		});

      		defineSetter(this, "buttonContinue", function(value) {
        		this.componentProperties.buttonContinueSkin = value;
      		});

      		defineSetter(this, "buttonCancel", function(value) {
        		this.componentProperties.buttonCancelSkin = value;
      		});
    	},

		preShow: function() {
      		var self = this;
      		this.view.flxMain.skin = this.componentProperties.mainFlxSkin;
      		this.view.lblPickContact.skin = this.componentProperties.firstRowSkin;
      		this.view.lblSelectId.skin = this.componentProperties.secondRowSkin;
      		this.view.btnCancel.skin = this.componentProperties.buttonCancelSkin;
      		this.view.btnContinue.skin = this.componentProperties.buttonContinueSkin;

      		this.view.btnContinue.onClick = function() {
        		if (isAPIAvailable(self.onClickContinue)) {
          			self.onClickContinue(selectedItem);
        		}
      		};

      		this.view.btnCancel.onClick = function() {
        		if (isAPIAvailable(self.onClickCancel)) {
          			self.onClickCancel();
        		}
      		};

      		this.view.segContacts.onRowClick = handleRowClick.bind(this);
		},

		setData: function(data) {	 
      	  selectedItem = data[0];
          var segmentData = data.map(function(item, index) {
        		return {
          			lblContactData: item,
          			ImgRadio: index === 0 ? "radiobtn.png" : "radiobuttoninactive.png"
        		};
      		});
      		var segment = this.view.segContacts;
      		segment.setData(segmentData);
		},
      
      	getSelectedItem: function() {
        	return selectedItem;
        }
	};
});