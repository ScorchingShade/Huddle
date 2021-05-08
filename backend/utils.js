import jwt from 'jsonwebtoken'

const JWTSECRET= process.env.JWT_SECRET

export const generateToken = (user) => {
    return jwt.sign({

            userName: user.userName,
            pass: user.pass,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET || JWT_SECRET, { expiresIn: "30d" }
    );
};


export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
        const token = authorization.slice(7, authorization.length); //Bearer XXXXXX
        jwt.verify(
            token,
            process.env.JWT_SECRET || JWT_SECRET,
            (err, decode) => {
                if (err) {
                    res.status(401).send({ message: "Invalid Token" });
                } else {
                    req.user = decode;
                    next();
                }
            }
        );
    } else {
        res.status(401).send({ message: "Invalid Token" });
    }
};

export const isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401).send({ message: "Invalid Admin Token" });
    }
};