const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.signup = (req , res , next ) => {
    bcrypt.hash(req.body.password , 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({message: "Utente creato con successo!"}))
                .catch(error => res.status(500).json(error));
        })
        .catch(error => res.status(500).json(error))
};


exports.login = (req, res , next ) => {

    // recupero l'email

    User.findOne({email: req.body.email})
        .then( user  =>{
            if(!user)
                return res.status(401).json({error: "user not found"})
            bcrypt.compare(req.body.password , user.password)
            .then(valid => {
                if(!valid)
                    return res.status(401).json({error: "wrong password or email"})
                console.log("pwd valio ");
                console.log(user);
                return res.status(200).json({
                    userId : user._id,
                    token: jwt.sign(
                    {userId: user._id},
                    'RAMDOM_TMP_KEY',
                        { expiresIn : '24h'}
                    )
                })

            })
            .catch(error => res.status(500).json(error));
        })
        .catch(error => res.status(500).json(error));
};



exports.allUser = (req, res, next ) => {

    User.find()
            .then(users => res.status(200).json(users))
            .catch(error => res.status(500).json(error));
};