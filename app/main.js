const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;

let win = null;

app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', createWindow);

function createWindow() {
  win = new BrowserWindow({
    name: 'ea-todo',
    width: 400,
    height: 600,
    toolbar: false
  });

  win.loadURL(`file://${__dirname}/index.html`);

  // Open the DevTools.
  win.webContents.openDevTools({detach: true});

  win.on('closed', () => {
    win = null;
  });
}



