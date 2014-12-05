/**
* Charity.js
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
        type: 'text'
      },
      
      image: {
        type: 'text'
      },

  		missions: {
  			collection: 'mission',
  			via: 'charity'
  		}


  }
};

