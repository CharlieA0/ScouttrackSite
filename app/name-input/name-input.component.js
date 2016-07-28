'use strict';

angular
	.module('nameInput')
		.component('nameInput', {
			templateUrl : 'name-input/name-input.template.html',
			controller : function NameInputController () {

				//Messages
				var messages = {
					'startingMessage' : 'You can enter your name here.',
					'nameOverflowMessage' : 'Oops, looks like that name is too long.',
					'invalidNameMessage' : 'I don\'t think that name will work',
					'validNameMessage' : 'This name looks good.'
				}

				//User Object
				this.user = {
					'name' : 'Harry Jazz',
					'nameStatus' : 	function () {
						//check name is defined
						if(this.name === undefined) {
							return 'undefined';
						}
						//Check length
						if(this.name.length > 50) {
							return 'overflow';
						} 
						else {
							return 'valid';
						}
					},
					'message' : function () {
						if (this.nameStatus() === 'valid') {
							return messages.validNameMessage;
						}
						if (this.nameStatus() === 'overflow') {
							return messages.nameOverflowMessage;
						}
						if (this.nameStatus() === 'undefined') {
							return messages.invalidNameMessage;
						}
						return 'Huh? We don\'t have a message for this'
					}
				}
			}
		});