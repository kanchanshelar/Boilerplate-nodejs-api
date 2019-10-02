//Profile module

module.exports = function(server, restify) {

    //Fetch My Profile Post Login
    server.get('/profile', (req, res, next) => {
        res.send({});
        next();
    });

    //Update My Profile
    server.get('/profile/update', (req, res, next) => {
        res.send("No ProfileID Found");
        next();
    });
}