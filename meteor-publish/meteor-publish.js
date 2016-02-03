if (Meteor.isClient) {
    Meteor.subscribe("languages");

    Template.meteor_collection.helpers({
        languages: Languages.find({}, {sort: {createdAt: -1}})
    });

    Template.body.events({
        'submit .new-language': function (event) {
            event.preventDefault();
            var text = event.target.text.value;
            Meteor.call("addLanguage", text);
            event.target.text.value = ""
        }
    });
    Template.other_event.helpers({
        others: Languages.find({}, {limit: 3})

    });
    Template.other_event.events({
        'click .delete': function () {
            Meteor.call("removeLanguage", this._id);

        },
        'click .update': function () {
            Meteor.call("updateLanguage", this._id);
        },
        'click .private': function () {
            Meteor.call("setPrivate", this._id);

        }

    });


}
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
    },
    setPrivate: function (_id) {
        Languages.update(_id, {
            $set: {private: true}
        })
    }
});

if (Meteor.isServer) {
    Meteor.startup(function () {
        // Languages.removeAllRanges()

    });
    //Meteor.publish("languages", function () {
    //    return Languages.find();
    //});
    Meteor.publish("languages", function () {
        return Languages.find({
            $or: [
                {private: true}
                //auth user
                //,{owner:this.userId()}
            ]
        });

    });
}