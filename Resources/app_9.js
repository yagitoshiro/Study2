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

var view = Ti.UI.createView({
  top:0,
  width:Ti.UI.FILL,
  height:Ti.UI.FILL,
  backgroundColor:'Black',
  opacity:0.8
});
var ind = Ti.UI.createActivityIndicator({
  color:'White',
  message:'ちょっと待ってね',
  width:Ti.UI.SIZE,
});
if(Ti.Platform.osname == 'android'){
  win1.add(ind);
}else{
  ind.style =  Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN;
  view.add(ind);
  win1.add(view);
}
win1.addEventListener('open', function(e){
  ind.show();
  return;
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
