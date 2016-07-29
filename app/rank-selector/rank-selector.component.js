'use strict';

angular
	.module('rankSelector')
		.component('rankSelector', {
			templateUrl : 'rank-selector/rank-selector.template.html',
			controller : function () {
				//rank is initially unknown
				this.selectedRank = undefined;

				//update rank when known
				this.click = function (buttonRank) {
					this.selectedRank = buttonRank;
				};
			}
		});