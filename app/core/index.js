const electron = require('electron');
const path=require('path');
const url=require('url');
const {app,BrowserWindow} = electron;


app.on('ready', () => {
    let win = new BrowserWindow({width: 800, height: 600});
    win.loadURL(url.format({
        pathname:path.join(__dirname,'/../../index.html'),
        protocol:'file:',
        slashes:true
    }))
    win.maximize();
});