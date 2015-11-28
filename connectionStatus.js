Template.connectionStatus.status = function() {
  if( ! Meteor.status().connected )
    return Meteor.status().status;
};

Template.connectionStatus.connected = function() { return Meteor.status().connected; };
