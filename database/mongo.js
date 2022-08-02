const config = require('../config/config.json');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(config.mongoURI,{
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("conneted to database")
})
.catch(err=>{
    console.log(err);
    console.log("failed to connect to database");
    process.exit(0);
});

// mongoose.set("useCreateIndex",true);
// mongoose.set("useFindAndModify",false);