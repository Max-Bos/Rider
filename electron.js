const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        fullscreen: true,
        webPreferences: {
            //preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
        }
    });

    //win.loadURL('http://localhost:3000'); Development
    win.loadFile(path.join(__dirname, 'build', 'index.html'));
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});
