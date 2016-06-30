(function () {
	'use strict';

	angular
		.module('app.mod2')
		.controller('Mod2', Mod2);

	Mod2.$inject = ['dataservice', 'logger'];

	function Mod2(dataservice, logger) {
		/* jshint validthis: true */
		var vm = this;

		vm.activate = activate;
		vm.title = 'Mod2';

		activate();

		////////////////

		function activate() {
			logger.info('Activated Mod2');
		}
	}
})();