Meteor.methods({
    addLanguage: function (text) {
        //   auth
        //if (!Meteor.userId()) {
        //    throw new Meteor.Error("need login");
        //}

        Languages.insert({
            name: text,
            createdAt: new Date()
        });


    },
    updateLanguage: function (_id) {
        Languages.update(_id, {
            $set: {updateAt: new Date()}
        })

    },
    removeLanguage: function (_id) {
        Languages.remove(_id);
    }
});
if (Meteor.isClient) {

    Template.meteor_collection.helpers({
        languages: Languages.find({}, {sort: {createdAt: -1}})
    });

    Template.body.events({
        'submit .new-language': function (event) {
            event.preventDefault();
            var text = event.target.text.value;
            Meteor.call("addLanguage", text);
            event.target.text.value = "";

        }
    });
    Template.other_event.helpers({
        others: Languages.find()

    });
    Template.other_event.events({
        'click .delete': function () {

            Meteor.call("removeLanguage", this._id);

        },
        'click .update': function () {
            Meteor.call("removeLanguage", this._id);
        }

    });


}


if (Meteor.isServer) {
    Meteor.startup(function () {
        // Languages.removeAllRanges()

    });
}