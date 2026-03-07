const { app, BrowserWindow } = require('electron')
// Auto-launch on Windows startup
if (process.platform === 'win32') {
  app.setLoginItemSettings({
    openAtLogin: true,
    openAsHidden: false,
    name: 'NidhiCACommandCenter'
  });
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1500,
    height: 950,
    minWidth: 1280,
    minHeight: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: false
    },
    backgroundColor: '#07070f',
    title: 'Nidhi CA Command Center v3'
  })
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
