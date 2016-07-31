'use strict';

angular
	.module('ageSelector')
		.component('ageSelector', {
			templateUrl : 'age-selector/age-selector.template.html',
			controller : function () {
				//list of ages
				this.ages = [10, 11, 12, 13, 14, 15, 16, 17];
				
				//age is initially unknown
				this.selectedAge = undefined;

				//set button when clicked
				this.click = function (buttonAge) {
					this.selectedAge = buttonAge;
				};
			}
		});