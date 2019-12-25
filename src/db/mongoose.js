const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/travels-dev',{
    useNewUrlParser:true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
}).then(() =>{
    console.log('mongoDB connected...')
}).catch((e) =>{
    console.log(e)
})