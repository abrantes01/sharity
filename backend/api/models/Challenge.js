/**
* Challenge.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  		name: {
  			type: 'string'
  		},

  		description: {
  			type: 'text'
  		},

  		start: {
  			type: 'date'
  		},

  		end: {
  			type: 'date'
  		},

  		image: {
  			type: 'string'
  		},

  		amount: {
  			type: 'float'
  		},

  		company: {
  			model: 'company'
  		},

  		users: {
  			collection: 'user',
  			via: 'challenges'
  		},

  		donation: {
  			model: 'donation'
  		},

  		mission: {
  			model: 'mission'
  		}

  }
};

