const jwt = require("jsonwebtoken");

function generateToken(params = {}) {
    return jwt.sign(params, process.env.JWT_SECRET, {
      expiresIn: 0
    });
  };

  module.exports = { 
     async authenticate(req, res) {
        try {
          const { email } = req.headers;

          if (!email){
            return res.status(400).send({ error: "Invalid Token" });   
          }
    
          if (email !== process.env.APPLICATION_EMAIL) {
            return res.status(400).send({ error: "Invalid application" });
          }
    
          return res.status(200).send({
            token: generateToken({ application: email })
          });
        } catch (error) {
          return res.status(400).json(error);
        }
      }
  };