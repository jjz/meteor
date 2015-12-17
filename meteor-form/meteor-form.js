if (Meteor.isClient) {

    Template.meteor_collection.helpers({
        languages: Languages.find({}, {sort: {createdAt: -1}})
    });

    Template.body.events({
        'submit .new-language': function (event) {
            event.preventDefault()
            var text = event.target.text.value
            console.log(event)
            Languages.insert({
                name: text,
                createdAt: new Date()
            })
            event.target.text.value = ""
        }
    });

}

if (Meteor.isServer) {
    Meteor.startup(function () {
       // Languages.removeAllRanges()

    });
}