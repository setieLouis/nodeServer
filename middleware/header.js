const bodyParser = require('body-parser');

exports.generiqueHeaderContent = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content, Accept, Content-type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH, OPTIONS');
    next();
};

exports.jsonBodyParser = bodyParser.json();