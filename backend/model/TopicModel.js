import mongoose from 'mongoose';


//model for collection store_info
var Topic = new mongoose.Schema({


        topicName: {
            type: String,
            required: true,
        },
        topicDescription: {
            type: String,
            required: true,
        }

    }, { versionKey: false })
    //the _id is false so that mongo doesn't create an auto id
    //_v is ommitted using versionKey


const Topics = mongoose.model("topics", Topic);
export default Topics;