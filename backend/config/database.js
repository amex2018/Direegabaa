const mongoose = require('mongoose');

const ConnectDB = () => {
    mongoose.Promise = global.Promise;
   mongoose.connect(process.env.DB_URL , {
       useNewUrlParser: true,
       useUnifiedTopology: true,
       useCreateIndex: true
   }).then(con => {
       console.log(`mongodb database connecting with Host: ${con.connection.host}`)
   })
}

module.exports = ConnectDB;