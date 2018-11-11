const packageConfig = require('../package.json');

module.exports = {
	name: packageConfig.title,
	version: packageConfig.version,
	packageid: packageConfig.name,
	env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 9999,
	base_url: process.env.BASE_URL || 'http://localhost:9999',
	dbmongo: {
		uri: 'mongodb://127.0.0.1:27017/silkapi'
	},
	dbmysql: {
		host: '127.0.0.1',
		port: 3306,
		user: 'test',
		password: 'test',
		database: 'testdb',
		insecureAuth : true
  },
	cache : {
		host: '127.0.0.1',   // Redis host
		port: 6379,          // Redis port
		family: 4,           // 4 (IPv4) or 6 (IPv6)
		//password: 'auth',
		db: 0
	}
};