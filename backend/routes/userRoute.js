import express from 'express';
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { generateToken, isAdmin, isAuth } from "../utils.js";
import User from "../model/UserModel.js";



const userRouter = express.Router();



userRouter.post(
    "/signup",
    expressAsyncHandler(async(req, res) => {
        const userAuthData = new User({
            userName: req.body.userName,
            phone: req.body.phone,
            collegeName: req.body.collegeName,
            graduatingYear: req.body.graduatingYear,
            pass: bcrypt.hashSync(req.body.pass, 8),
            isAdmin: req.body.isAdmin
        });

        const user = await User.findOne({ userName: req.body.userName });

        if (user) {
            res.status(409).send({ message: "User already exists!" });
        } else {
            const createdUser = await userAuthData.save();

            res.status(200).send({
                userName: createdUser.userName,
                phone: createdUser.phone,
                collegeName: createdUser.collegeName,
                graduatingYear: createdUser.graduatingYear,
                isAdmin: createdUser.isAdmin,
                token: generateToken(createdUser),
            })
        }
    })
);


userRouter.post("/signin", expressAsyncHandler(async(req, res) => {
    const user = await User.findOne({ userName: req.body.userName });
    if (user) {
        if (bcrypt.compareSync(req.body.pass, user.pass)) {
            res.send({
                _id: user._id,
                userName: user.userName,
                isAdmin: user.isAdmin,
                token: generateToken(user),
            });
            return;
        }
    }
    res.status(401).send(new Error({ message: "Invalid User name or Password" }));
}))

export default userRouter;


