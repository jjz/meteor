if (Meteor.isClient) {

  Template.meteor_collection.helpers({
    languages:Languages.find()
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if(Languages.find().count()<2){
        Languages.insert({name:"css",created_time:new Date()});

    }
  });
}
