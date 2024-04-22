import User from '../models/user-model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler} from '../utils/error.js';
import jwt from 'jsonwebtoken';


const login = async(req, res, next)=> {
    const {email, password} =req.body;

    if(!email || !password || email=== '' || password=== '')
    {
        next(errorHandler(400, 'All fields are required'));
    }

    try {
        const validUser = await User.findOne({username});
        if(!validUser) {
            return next(errorHandler(404, 'User not found'));
        }

        const validPassword = bycryptjs.compareSync(password, validUser.password);
        if(!validPassword) {
            return 
            next(errorHandler(400, 'Invalid password'));
        }
        //for cookies 
        const token = jwt.sign(
            { id : validUser._id}, process.env.JWT_SECRET  );

            const {password: pass, ...rest} = validUser._doc;

            res.status(200).cookie('access_token',token, {
                httpOnly:true }).json(validUser)
    }
    catch(error)
    {
        next(error);
    }
}

export default login;