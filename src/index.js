const environment = require('./common/environment')
const app = require('./server')
const mongoose = require('mongoose')

// balance.readFile()

try {
  mongoose
    .connect(environment.db.url, {
      useNewUrlParser: true,
      useCreateIndex: true
    })
    .then(
      app.listen(environment.server.port, () => {
        console.log(`Server running on port ${environment.server.port}`)
      })
    )
} catch (e) {
  process.exit(1)
}
