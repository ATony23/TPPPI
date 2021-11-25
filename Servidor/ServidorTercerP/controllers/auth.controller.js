const JWT = require('jsonwebtoken');
const privateKey = "Holahola";

async function getJwtToken(req, res) {

    const payload = {
        userId: "A001",
        exp: Date.now() + (1000 * 60)
    };

    try {
        const newToken = await JWT.sign(payload, privateKey, { algorithm: 'HS256' });
        return res.status(200).json({ jwt: newToken });

    } catch (err) {
        console.log(err);
        console.log("JWT ERROR");
    }
}

async function verifyToken(req, res, next) {
    const authHeader = req;
    console.log('authHeader: ', authHeader)
    const options = '';
    const authToken = authHeader.replace('Bearer ', '');


    if (authHeader) {

        try {
            await JWT.verify(authToken, privateKey, options);
            next();
        } catch (err) {
            console.log(err);
            return res.status(401).json({ "Message": "Bad auth" });
        }

    } else {
        return res.status(401).json({ "Message": "Bad auth" });
    }
}




module.exports = {
    getJwtToken,
    verifyToken
}