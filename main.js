const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  // Cria a janela do navegador.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Permite a integração de Node.js
      preload: path.join(__dirname, 'preload.js') // Arquivo de preload (opcional)
    }
  });

  // Carrega o index.html do React.
  mainWindow.loadURL('http://localhost:3000'); // ou use `loadFile` para um arquivo estático
  // Em produção, você vai querer carregar o arquivo gerado pelo React build
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
