import mongoose from 'mongoose';


//model for collection store_info
var TopicLink = new mongoose.Schema({

    phone:{
        type: String,
        required: true,
    },
    topicName: {
        type: String,
        required: true,
    },
        talkAbout: {
            type: Boolean,
            default: false,
            required: true,

        },
        knowAbout: {
            type: Boolean,
            default: false,
            required: true,
        }

    }, { versionKey: false })
    //the _id is false so that mongo doesn't create an auto id
    //_v is ommitted using versionKey


const TopicLinks = mongoose.model("topic_links", TopicLink);
export default TopicLinks;