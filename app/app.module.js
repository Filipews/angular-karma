(function() {
    'use strict';

	angular.module('app', [
		/*
		 * Everybody has access to these.
		 * We could place these under every feature area,
		 * but this is easier to maintain.
		 */
		'app.core',
		/*
		 * Feature areas
		 */
		'app.mod1',
		'app.mod2',
		'app.layout'
	]);
})();