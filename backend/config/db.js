const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://Kiran:Aman19@cluster0.bavzbfu.mongodb.net/study_zone?retryWrites=true&w=majority")
    .then(connect => {
        console.log("DB Connected")
    })

    .catch(err => {
        console.log("Error in DB Connected", err)
    })