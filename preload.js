const { contextBridge, ipcRenderer } = require('electron')

const data = require("./data/index")

contextBridge.exposeInMainWorld('electron', {
  data
})
