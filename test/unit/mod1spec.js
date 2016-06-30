(function() {
    'use strict';

	describe('app.mod1 module', function() {

		beforeEach(module('app.core'));
		beforeEach(module('app.mod1'));

		describe('mod1 controller', function(){

			it('should ....', inject(function($controller) {
				//spec body
				var mod1Ctrl = $controller('Mod1');
				expect(mod1Ctrl).toBeDefined();
			}));

		});
	});
})();