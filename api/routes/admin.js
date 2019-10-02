//Admin module

module.exports = function(server, restify) {

    //Fetch My Profile Post Login
    server.get('/admin', (req, res, next) => {
        res.send({});
        next();
    });
}