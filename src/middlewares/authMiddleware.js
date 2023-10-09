const jwt = require('../lib/jwt');
const { SECRET } = require("../constants");


exports.auth = (req, res) => {

    const token = req.cookies['auth'];
    next();
};