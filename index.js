var electron = require('electron')
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

app.on('ready', () => {
    var mainWindow = new BrowserWindow({
        width: 1366,
        height: 768
            /*	transparent: false,
		frame:false,
		kiosk: true
       */
    });
    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
    //mainWindow.loadURL('http://mrfkiosk.com/index.php');

});