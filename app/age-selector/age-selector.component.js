'use strict';

angular
	.module('ageSelector')
		.component('ageSelector', {
			templateUrl : 'age-selector/age-selector.template.html',
			controller : function () {
				
				//age is initially unknown
				this.selectedAge = undefined;

				//set button when clicked
				this.click = function (buttonAge) {
					this.selectedAge = buttonAge;
				};
			}
		});