if (Meteor.isClient) {
  Template.meteor_study.helpers({
    templateName:'Meteor Study',
    languages:[{name:'Node'},{name:'Meteor'},{name:'html'},{name:'css'}]

  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
