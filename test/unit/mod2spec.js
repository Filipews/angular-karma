(function() {
    'use strict';

	describe('app.mod2:module...', function() {

		beforeEach(module('app.core'));
		beforeEach(module('app.mod2'));

		describe('Mod2:controller...', function(){

			it('should be defined...', inject(function($controller) {
				//spec body
				var mod2Ctrl = $controller('Mod2');
				expect(mod2Ctrl).toBeDefined();
			}));

		});
	});
})();