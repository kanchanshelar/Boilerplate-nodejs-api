/*
 * All Routing Logic is written here
 * 
 * */
module.exports = function(server,restify) {

//     server.get('/', (req, res, next) => {
//         res.sendRaw("Welcome to SmartinfoLogiks API Server");
//         next();
//     });
  
    server.get('*', (req, res, next) => {
        res.header('content-type', 'json');
        //res.header('timestamp', );
        res.send({
          "SERVER":server.config.name,
          "VERSION":server.config.version,
          "TIMESTAMP":new Date()
        });
        next();
    });

    server.get('/test', (req, res, next) => {
        res.send({
            "BODY":req.body,
            "QUERY":req.query,
            "PARAMS":req.params,
            "HEADERS":req.headers,
            //"GUID":req.get("GUID"),
            //"DEVID":req.body.devid,
        });
        next();
    });
}