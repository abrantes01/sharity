/**
* Company.js
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

  		website: {
  			type: 'string'
  		},

  		facebook: {
  			type: 'string'
  		},

  		turnOver: {
  			type: 'float'
  		},

  		challenges: {
  			collection: 'challenge',
  			via: 'company'
  		},

  		donations: {
  			collection: 'donation',
  			via: 'company'
  		}
  }
};

