const con = require('./models/database');

exports.login = (req, res) => {
    res.send('NOT IMPLEMENTED: login' + req.params.id);
};

exports.signup = (req, res) => {
    res.send('NOT IMPLEMENTED: signup' + req.body);
};

check_account = (req, res) => {
    res.send('NOT IMPLEMENTED: check_account_post' + req.params.id);
};

access_level = (req, res) => {
    res.send('NOT IMPLEMENTED: access_level');
};

send_email = (req, res) => {
    res.send('NOT IMPLEMENTED: send_email');
};

exports.check_otp = (req, res) => {
    res.send('NOT IMPLEMENTED: check_otp');
};

exports.test = (req, res) =>{
res.send('NOT NOT IMPLEMENTED: TEST');
};
