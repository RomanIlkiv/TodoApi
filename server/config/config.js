var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
	var config = require('./config.json');
	var envConfig = config[env];

	for(var key in envConfig) {
		process.env[key] = envConfig[key];
	}
}

/*if (env === 'development') {
    process.env.PORT = 3007;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test') {
    process.env.PORT = 3007;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}*/