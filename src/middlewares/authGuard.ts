import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { User } from '../moduls/users/model';
import createError from 'http-errors';

export const authGuard = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    const token = authorization?.split(' ')[1];
    if (!token) return next(createError.Unauthorized("Access denied"));
    try {
        const decoded = jwt.verify(token as string, process.env.JWT_SECRET as string) as any;
        const { email, userId } = decoded;
        const user = await User.findOne({ email, _id: new mongoose.Types.ObjectId(userId) });
        if (!user) {
            return next("Authentication failure!");
        }
        next();
    }
    catch (err) {
        // console.log(err);
        next(
            createError.Unauthorized(`Access denied, invalid token`)
        );
    }
};