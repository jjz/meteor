if (Meteor.isClient) {

    Template.meteor_collection.helpers({
        languages: Languages.find({}, {sort: {createdAt: -1}})
    });

    Template.body.events({
        'submit .new-language': function (event) {
            event.preventDefault();
            var text = event.target.text.value;
            console.log(event);
            Languages.insert({
                name: text,
                createdAt: new Date()
            });
            event.target.text.value = ""
        }
    });
    Template.other_event.helpers({
        others: Languages.find({}, {limit: 3})

    });
    Template.other_event.events({
        'click .delete': function () {
            Languages.remove(this._id);

        },
        'click .update': function () {
            Languages.update(this._id, {
                $set: {updateAt: new Date()}
            })
        }

    });


}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // Languages.removeAllRanges()

    });
}