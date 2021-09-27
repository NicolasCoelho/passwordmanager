const fs = require("fs")
const path = require("path")

module.exports = {
  read: () => {
    return fs.readFileSync(path.resolve(__dirname, 'db.json'), {encoding: "utf-8"})
  },
  write: async (data) => {
    return await new Promise((resolve, reject) => {
      fs.writeFile(path.resolve(__dirname, 'db.json'), data, {encoding: "utf-8"}, (error)=> {
        if (error) reject()
        resolve()
      })
    })
  }
}
