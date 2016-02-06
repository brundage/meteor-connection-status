Template.connectionStatus.helpers = {

  connected: function() { return Meteor.status().connected; },

  status: function() {
    if( ! Meteor.status().connected )
      return Meteor.status().status;
    }

};
