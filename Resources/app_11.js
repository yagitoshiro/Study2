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

var text_field1 = Ti.UI.createTextArea({
  color:'#336699',
  width:Ti.UI.FILL,
  height:Ti.UI.FILL,
  hintText:'デフォルトの文字',
  keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
  returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
//  returnKeyType:Titanium.UI.RETURNKEY_GO,
//  returnKeyType:Titanium.UI.RETURNKEY_JOIN,
//  returnKeyType:Titanium.UI.RETURNKEY_NEXT,
//  returnKeyType:Titanium.UI.RETURNKEY_SEARCH,
//  returnKeyType:Titanium.UI.RETURNKEY_SEND,
//  returnKeyType:Titanium.UI.RETURNKEY_DONE,
//  returnKeyType:Titanium.UI.RETURNKEY_ROUTE,
//  returnKeyType:Titanium.UI.RETURNKEY_YAHOO,
//  returnKeyType:Titanium.UI.RETURNKEY_GOOGLE,
  borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
//  borderStyle:Titanium.UI.INPUT_BORDERSTYLE_LINE
//  borderStyle:Titanium.UI.INPUT_BORDERSTYLE_BEZEL
//  borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE
});
text_field1.addEventListener('return', function(e){
  e.source.blur();
});
win1.add(text_field1);
win1.addEventListener('open', function(){
  text_field1.focus();
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
