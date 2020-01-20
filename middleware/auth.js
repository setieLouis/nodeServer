const jwt = require('jsonwebtoken');

const auth = (req , res , next) => {
    try{
        if(req.headers.authorization === undefined)  throw 'request need user token';
        const token = req.headers.authorization.split(' ')[1];
        const tokenDecode = jwt.verify(token,'RAMDOM_TMP_KEY');
        const userId = tokenDecode.userId;
        if(req.query.userId && req.query.userId !== userId)
            throw 'User ID is unvalable ';
        next();
    }catch (error) {
        res.status(401).json({error: error || "Invalid request"});
    }
};

module.exports = auth;


