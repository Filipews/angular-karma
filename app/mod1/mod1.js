(function () {
	'use strict';

	angular
		.module('app.mod1')
		.controller('Mod1', Mod1);

	Mod1.$inject = ['dataservice', 'logger'];

	function Mod1(dataservice, logger) {
		/* jshint validthis: true */
		var vm = this;

		vm.activate = activate;
		vm.title = 'Mod1';

		activate();

		////////////////

		function activate() {
			logger.info('Activated Mod1');
		}
	}
})();