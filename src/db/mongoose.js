const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://degall:Jensoles88!@degallcluster-koink.mongodb.net/momento',{
    useNewUrlParser:true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
}).then(() =>{
    console.log('mongoDB connected...')
}).catch((e) =>{
    console.log(e)
})