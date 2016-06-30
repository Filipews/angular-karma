(function() {
    'use strict';

	describe('app.mod1 - Module ....', function() {

		beforeEach(module('app.core'));
		beforeEach(module('app.mod1'));

		describe('Mod1 - Controller ....', function(){

			it('should be defined ....', inject(function($controller) {
				//spec body
				var mod1Ctrl = $controller('Mod1');
				expect(mod1Ctrl).toBeDefined();
			}));

		});
	});
})();