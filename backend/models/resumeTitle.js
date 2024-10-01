const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const titleSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    job_title:{
        type: String,
        required: true
    },
    contact_no:{
        type: String,
        required: true
    },
    email_id:{
        type: String,
        required: true
    },
    github:{
        type: String,
        required: false
    },
    website:{
        type: String,
        required: false
    },
    created_by:{
        type: Number,
        required: true
    },
    is_active:{
        type: Boolean,
        required: true
    }
}, {
    timestamps : true
});


module.exports = mongoose.model('title_data', titleSchema)