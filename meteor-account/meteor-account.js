if (Meteor.isClient) {

    Accounts.ui.config({
        passwordSignupFields: "USERNAME_ONLY"
    });
    Template.add.events({
        "submit .new-language": function (event) {
            event.preventDefault();
            console.log("test");
            console.log(Meteor.user().username);
            var text = event.target.text.value;
            Languages.insert({
                text: text,
                createdAt: new Date(),
                owner: Meteor.userId(),
                username: Meteor.user().username
            });


        }
    });
    Template.detail.helpers({
        languages: Languages.find({owner: Meteor.userId()})
    });


}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
