const jwt = require('jsonwebtoken')

const authentication = async function (req, res, next) {
    try {         
        const token = req.header('x-auth-token');

        if (!token) {
            return res.status(403).send({ status: false, message: 'Token must be present'});
        }

        const decodedToken = jwt.verify(token, 'Project3');
        if (!decodedToken) {
            return res.status(403).send({ status: false, message: 'Invalid authentication token in request' });
        }
       
        if (Date.now() > (decodedToken.exp) * 1000) {
            return res.status(403).send({ status: false, message: "Session expired! Please login again." });
        }
     
        req.userId = decodedToken.userId;
        next()
    
    } catch (error) {
        
        return res.status(500).send({ status: false, message: error.message })}    
}

module.exports = {authentication}
