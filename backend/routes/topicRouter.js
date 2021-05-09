import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { generateToken, isAdmin, isAuth } from "../utils.js";
import TopicLinks from "../model/TopicLinkModel.js";
import Topics from "../model/TopicModel.js";

const topicRouter = express.Router();

topicRouter.post(
  "/load",
  expressAsyncHandler(async (req, res) => {
    const data = req.body.data;
    for (const element of data) {
      const topic = await Topics.findOne({ topicName: element.topicName });
      console.log(topic);
      if (topic === null) {
        console.log("Hello");
        const topicData = new Topics({
          topicName: element.topicName,
          topicDescription: element.topicDescription,
        });
        const createdTopic = await topicData.save();

        const topicLink = new TopicLinks({
          phone: element.phone,
          topicName: element.topicName,
          talkAbout: element.talkAbout,
          knowAbout: element.knowAbout,
        });

        const createdTopicLink = await topicLink.save();
      } else {
        const topicSearch = await TopicLinks.findOne({
          topicName: element.topicName,
          talkAbout: element.talkAbout,
          knowAbout: element.knowAbout,
          phone: element.phone,
        });

        if(topicSearch===null){
            const topicLink = new TopicLinks({
                phone: element.phone,
                topicName: element.topicName,
                talkAbout: element.talkAbout,
                knowAbout: element.knowAbout,
              });
      
              const createdTopicLink = await topicLink.save();
        }
        else{
            continue
        }
        
      }
    }
    res.send({
      message: "Topic Added successfully",
    });
  })
);

export default topicRouter;
