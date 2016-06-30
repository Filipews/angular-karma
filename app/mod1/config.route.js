(function() {
	'use strict';

	angular
		.module('app.mod1')
		.run(appRun);

	appRun.$inject = ['routehelper'];
	function appRun(routehelper) {
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes() {
		return [
			{
				url: '/',
				config: {
					templateUrl: 'app/mod1/mod1.html',
					controller: 'Mod1',
					controllerAs: 'vm',
					title: 'module1',
					settings: {
						nav: 1,
						// <i class="fa fa-dashboard"></i>
						content: 'Mod1'
					}
				}
			}
		];
	}
})();