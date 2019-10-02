/*
 * All Routing Logic is written here
 * 
 * */
module.exports = function(server, restify) {

    server.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", req.header("Access-Control-Request-Method"));
        res.header("Access-Control-Allow-Headers", req.header("Access-Control-Request-Headers"));
        next();
    });


    server.opts("*", function(req, res, next) {
        res.send(200);
        return next();
    });

    server.get('/', (req, res, next) => {
        res.sendRaw(server.config.welcome);
        return next();
    });

    server.get('*', (req, res, next) => {
        res.send("Not Found");
        return next();
    });

    server.get('/ping', (req, res, next) => {
        res.header('content-type', 'json');
        //res.header('timestamp', );
        res.send({
            "SERVER": server.config.name,
            "VERSION": server.config.version,
            "TIMESTAMP": new Date()
        });
        return next();
    });

    server.get('/test', (req, res, next) => {
        res.send({
            "BODY": req.body,
            "QUERY": req.query,
            "PARAMS": req.params,
            "HEADERS": req.headers,
            //"GUID":req.get("GUID"),
            //"DEVID":req.body.devid,
        });
        return next();
    });

    server.get('/routes', (req, res, next) => {
        routeList = [];
        _.each(server.router._registry._routes, function(a, b) {
            if (a.method == "OPTIONS" || a.path == "*") return;
            routeList.push({
                "path": a.path,
                "method": a.method,
            });
        });
        res.send(routeList);
        next();
    });
}