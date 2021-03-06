Package.describe({
	name: 'rocketchat:setup-wizard',
	version: '0.0.1',
	summary: '',
	git: '',
});

Package.onUse(function(api) {
	api.use([
		'ecmascript',
		'templating',
		'rocketchat:utils',
		'rocketchat:theme',
		'rocketchat:settings',
		'rocketchat:callbacks',
		'rocketchat:models',
		'rocketchat:authorization',
	]);
	api.mainModule('client/index.js', 'client');
	api.mainModule('server/index.js', 'server');
});
