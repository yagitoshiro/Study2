// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var switch1 = Ti.UI.createSwitch({
  value:true,
  top:30
});
win1.add(switch1);

var slider = Ti.UI.createSlider({
  min:0,
  max:100,
  value:0,
  width:200,
  height:Ti.UI.SIZE,
  top:100
});
win1.add(slider);

var progress = Ti.UI.createProgressBar({
  width:200,
  min:0,
  max:100,
  value:0,
  height:Ti.UI.SIZE,
  color:'#888',
  message:'in progress...',
  font:{fontSize:14},
  style:Titanium.UI.iPhone.ProgressBarStyle.PLAIN,
  top:150
});
progress.show();
win1.add(progress);

slider.addEventListener('change', function(e){
  if(switch1.value){
    progress.value = e.source.value;
  }
});

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
