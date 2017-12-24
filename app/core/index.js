/*
 * Electron Start Up File
 * Contains Logic to start web to destop app
 * 
*/

const electron = require('electron');
const path=require('path');
const url=require('url');
const {app,BrowserWindow} = electron;


app.on('ready', () => {
    let win = new BrowserWindow({width: 800, height: 700});
    win.setMenu(null);
    win.setFullScreen(true);
    win.loadURL(url.format({
        pathname:path.join(__dirname,'/../../index.html'),
        protocol:'file:',
        slashes:true
    }))
    win.maximize();
});