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

var label = Ti.UI.createLabel({
  text: 'ダイアログがいっぱい',
  top:10,
  width:Ti.UI.SIZE,
  height:Ti.UI.SIZE
});
win1.add(label);

var button1 = Titanium.UI.createButton({
  top:100,
	color:'#999',
	title:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:Ti.UI.SIZE,
  height:Ti.UI.SIZE
});
var button2 = Titanium.UI.createButton({
  top:200,
	color:'#999',
	title:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:Ti.UI.SIZE,
  height:Ti.UI.SIZE
});
var button3 = Titanium.UI.createButton({
  top:300,
	color:'#999',
	title:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:Ti.UI.SIZE,
  height:Ti.UI.SIZE
});

win1.add(button1);
win1.add(button2);
win1.add(button3);

button1.addEventListener('click', function(e){
  alert("普通のアラート");
});
button2.addEventListener('click', function(e){
  Ti.UI.createAlertDialog({
    title:'ダイアログのタイトル',
    message:'これはアラートダイアログです。',
    cancel:1,
    buttonNames:['OK', 'キャンセル'],
  }).show();
});

button3.addEventListener('click', function(){
  var options = Ti.UI.createOptionDialog({
    title:'オプションのタイトル',
    cancel:2,
    destructive:1,
    options:['はい', 'いいえ', 'キャンセル']
  });
  options.show();
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

var button2 = Titanium.UI.createButton({
	color:'#999',
	title:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:Ti.UI.SIZE,
  height:Ti.UI.SIZE
});

win2.add(button2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
