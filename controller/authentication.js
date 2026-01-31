const jwt = require('jsonwebtoken');
exports.login = (req,res) => {  
    const {username,password} = req.body;
    if(username !== 'admin' && password !== 'admin123'){
        return res.status(401).json({message: 'Invalid credentials'});
    }  
    const token = jwt.sign({username}, process.env.JWT_SECRET_KEY, {expiresIn: '1h'});
    res.json({message: 'Login successful', token: token});
};
    