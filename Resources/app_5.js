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

var data = ['John', 'Paul', 'George', 'Ringo'];
var row_data = [];
for(var  i = 0; i < data.length; i++){
  row_data.push(Ti.UI.createTableViewRow({title: data[i], color:'#454545'}));
}
var table = Ti.UI.createTableView({
  data:row_data
});
win1.add(table);

table.addEventListener('click', function(e){
  var name = e.row.title.toLowerCase();
  var postfix = " Crawfish";
  if(name == 'paul'){
    postfix = ' McCrawfish';
  }else if(name == 'ringo'){
    postfix = ' Starfish';
  }
  var new_win = Ti.UI.createWindow({
    backgroundColor:'White',
    title:e.row.title + postfix
  });
  var new_image = Ti.UI.createImageView({
    image:'/images/' + name + '.png',
  });
  new_win.add(new_image);
  tab1.open(new_win);
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
