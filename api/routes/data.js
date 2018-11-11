module.exports = function(server, restify) {
  server.get('/data', (req, res, next) => {
        res.send("DATA");
        next();
    });
  
  server.get('/data/*', (req, res, next) => {
        res.send("DATA");
        next();
    });
}