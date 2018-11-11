/*
 * All Security Logic is written here
 * 
 * */
module.exports = function(server) {

    server.use(function(req, res, next) {
        // return next(
        //     new errors.ForbiddenError("Public Key Invalid"),
        // );
    
        //GUID Detector : Extract GUID from MBEEKEY
        mbeeKey = req.header("mbee-key");
    
        req.set("GUID","TEST");
    
        //API Validator : FIND API Authentication Protocol for the GUID
        //Could be Bearer, OAuth2, 2FA, etc.
        mbeeAuth = req.header("authorization");

        //console.log("Security Authorization");
    
        return next();
    });
}