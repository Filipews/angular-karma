(function() {
	'use strict';

	angular
		.module('app.mod2')
		.run(appRun);

	appRun.$inject = ['routehelper'];
	function appRun(routehelper) {
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes() {
		return [
			{
				url: '/mod2',
				config: {
					templateUrl: 'app/mod2/mod2.html',
					controller: 'Mod2',
					controllerAs: 'vm',
					title: 'module2',
					settings: {
						nav: 2,
						// <i class="fa fa-dashboard"></i>
						content: ' Mod2'
					}
				}
			}
		];
	}
})();