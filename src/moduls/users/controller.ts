import bcrypt from 'bcrypt';
import express, { RequestHandler } from 'express';
import createHttpError from 'http-errors';
import { User } from './model';
const router = express.Router();

// signup
const signup: RequestHandler = async (req, res, next) => {
    const { email, password } = req.body;
    console.log("🚀 ~ password=", password)
    const isUserExist = await User.findOne({ email });
    console.log("🚀isUserExist:", isUserExist)
    if (isUserExist) {
        return next(createHttpError(400, 'User already exist'));
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const cerateNewUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });
        await cerateNewUser.save();
        res.status(201).json({ message: 'User created successfully' });
    }
    catch (err) {
        console.log(err);
    }

};
export { signup };

