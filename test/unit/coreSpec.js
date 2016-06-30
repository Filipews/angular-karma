(function() {
    'use strict';

	describe('app.core - Module ....', function() {

		beforeEach(module('app.core'));

		describe('dataservice - Factory ....', function(){

			it('should be defined ....', inject(function(dataservice) {
				//spec body
				expect(dataservice).toBeDefined();
			}));

		});
	});
})();