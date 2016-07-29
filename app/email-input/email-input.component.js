'use strict';

angular
	.module('emailInput')
		.component('emailInput', {
			templateUrl : 'email-input/email-input.template.html',
			controller : function emailInputController () {

				//Messages
				var messages = {
					'startingMessage' : 'Your email goes here.',
					'nameOverflowMessage' : 'I am afraid that email is too long.',
					'invalidNameMessage' : 'There is a problem with that email.',
					'validNameMessage' : 'Nice email.'
				}

				//User Object
				this.user = {
					'email' : 'jazz@smooth.jams',
					'emailStatus' : function () {
						//check email is defined
						if(this.email === undefined) {
							return 'undefined';
						}
						//Check length
						if(this.email.length > 50) {
							return 'overflow';
						} 
						else {
							return 'valid';
						}
					},
					'message' : function () {
						if (this.emailStatus() === 'valid') {
							return messages.validNameMessage;
						}
						if (this.emailStatus() === 'overflow') {
							return messages.nameOverflowMessage;
						}
						if (this.emailStatus() === 'undefined') {
							return messages.invalidNameMessage;
						}
						return 'Huh? We don\'t have a message for this'
					}
				}
			}			
		})