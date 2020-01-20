
const Thing = require('../models/thing');

exports.createThing =  (req,res ) =>{
    delete req.body._id;
    const thing = new Thing({
        ...req.body
    });
    thing.save()
        .then( () => res.status(201).json({message: 'Oggetto salvato con successo!'}))
        .catch((error) => res.status(400).json({error}));

};

exports.findById =  (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(400).json(error));
};

exports.findAll= (req, res, next) => {
    Thing.find()
        .then(things => res.status(200).json(things ))
        .catch(error => res.status(400).json(error));
};

exports.updateById = (req, res) => {
    console.log("sono nella put");
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then( () => res.status(200).json({message: "oggetto modificato con successo!"}))
        .catch(error => res.status(400).json(error));
};

exports.removeById= (req, res ) => {
    Thing.deleteOne({ _id: req.params.id })
        .then( () => res.status(200).json({message: "oggetto modificato con successo!"}))
        .catch(error => res.status(400).json(error));
};