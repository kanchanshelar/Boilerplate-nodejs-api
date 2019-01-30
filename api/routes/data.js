//Datalist module
module.exports = function(server, restify) {
  server.get('/data', (req, res, next) => {
        res.send("No GroupID Defined");
        next();
    });
  
  server.get('/data/:groupid', (req, res, next) => {
        if(req.params.groupid==null || req.params.groupid.length<=0) {
          res.send("No GroupID Found");
          next();
        } else {
          fields = req.params.fields;
          if(fields==null || fields.length<=0 || fields=="*") fields = "title,value,class";
          server.mysql.query(
              'SELECT '+fields+' FROM `data_lists` WHERE `groupid` = ?',
              [req.params.groupid],
              function(err, results, fields) {
                res.send(results);
                next();
              }
            );
        }
    });
}